<script lang="ts">
  import { sidebarService } from '$mc';
  import AgGridSvelte from '$lib/ag-grid/AgGridSvelte.svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import { onDestroy, onMount } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { PaginationAction } from '$lib/types';
  import { SetColumnFilterComponent } from './CellFilter';
  import type { CellEditingStoppedEvent, ColumnMovedEvent, ColumnPinnedEvent, ColumnPivotChangedEvent, ColumnResizedEvent, ColumnVisibleEvent, FilterChangedEvent, FirstDataRenderedEvent, GetRowIdParams, SortChangedEvent } from 'ag-grid-community';
  import type { ColumnApi, GridApi } from 'ag-grid-enterprise';
  import LBPagination from '$components/LBDataTable/LBPagination.svelte';
  import { save_storage } from '$lib/utils';
  import type { ICustomCellEditorParams } from './Cells/LBColumn';
  import type { QueryService } from '$lib/services/query.service';
  import { createEventDispatcher } from 'svelte';
  import { FORM_TYPE, SUBMIT_STATE } from '$lib/services/sidebar.service';
  import { g_socketService, notificationService, type Notification } from '$src/lib/services/socket.service';

  const dispatch = createEventDispatcher();

  export let defaultClass = 'flex h-full w-full flex-col border-t border-gray-200 bg-white';
  export let columnService: ColumnService;
  export let queryService: QueryService;

  let loading = false;

  const query: Writable<QueryService> = writable(queryService);
  const rows: Writable<any[]> = writable([]);

  const defaultColDef = {
    resizable: true,
    initialWidth: 200,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    sortable: false,
    wrapText: queryService.wrapContent,
    autoHeight: queryService.wrapContent
  };

  let api: GridApi<any>;
  let columnApi: ColumnApi;

  const rowSelection: 'single' | 'multiple' = columnService && columnService.multiSelect ? 'multiple' : 'single';
  const suppressRowClickSelection = columnService && columnService.suppressRowClickSelection ? true : false;
  const suppressRowDeselection = columnService && columnService.suppressRowDeselection ? true : false;
  const rowMultiSelectWithClick = columnService && columnService.rowMultiSelectWithClick ? true : false;

  const components: { [p: string]: any } = {
    agSetColumnFilter: SetColumnFilterComponent
  };

  const onCellClicked = ($event) => {
    const isAbleToOpen = !(queryService.inlineEditing && queryService.isEditable);
    if (isAbleToOpen) {
      const row = $event.data;
      sidebarService.update((value) => {
        value.open = true;
        value.formType = FORM_TYPE.UPDATE;
        value.queryService = queryService;
        value.row = JSON.parse(JSON.stringify(row));
        return value;
      });
    }
  };

  const onFilterChanged = (event: FilterChangedEvent) => {
    const columns = event.columns;
    columns.forEach((column) => {
      const colId = column.getColId();
      const columnName = column.getColDef().headerName;
      const instance = event.api.getFilterInstance(colId);
      const model = instance.getModel();
      $query.filterService.addAgFilterModel(colId, columnName, model);
      instance.setModel(null);
      refreshPage();
    });
  };

  const reloadData = async (action: PaginationAction = PaginationAction.FIRST) => {
    if ($query) {
      if (loading === false) {
        loading = true;
        const info = await queryService.loadInfo(action); // This queryService is binded with upper layer pages. so when user change some params of this service object at upper layer page, the updated params should be applied to load correspond data.

        if (info) {
          query.update((value) => {
            value.updateWithInfo(info);
            rows.update((rowsValue) => {
              rowsValue = value.rows;
              return rowsValue;
            });
            return value;
          });
          dispatch('update', { queryService: $query }); // when the data is refreshed, the event sent to parent with the queryService.
        }
        loading = false;
      }
    }
  };

  const onGridReady = async () => {
    if (columnService) {
      if (!columnService.cellClickHandler) {
        columnService.cellClickHandler = onCellClicked;
      }
    }

    if (api) {
      api.setFloatingFiltersHeight(40);
    }
    await refreshPage();
  };

  const initStore = () => {
    if (queryService) {
      query.set(queryService);
    }
  };

  const unsubscribeSidebar = sidebarService.subscribe(async (value) => {
    if (value) {
      if (value.open === false) {
        if (value.status === SUBMIT_STATE.UPDATED) {
          if (value.queryService && value.queryService.getKeyForStorage() === $query.getKeyForStorage()) {
            value.status = SUBMIT_STATE.CLOSED;
            if (value.queryService.sendRequestAfterUpdate) {
              await reloadData(PaginationAction.CURRENT);
            }
          }
        } else if (value.status === SUBMIT_STATE.REFRESH) {
          value.status = SUBMIT_STATE.CLOSED;
          await reloadData(PaginationAction.CURRENT);
        }
      }
    }
  });

  const unsubscribeNotification = notificationService.subscribe(async (value: Notification) => {
    if (value && queryService) {
      if (value.lb_tables && value.data) {
        const found = value.lb_tables.find((table) => table.lb_table === queryService.lb_table);
        if (found) {
          if (found.lb_table !== 'lb_log') {
            await reloadData(PaginationAction.CURRENT);
          }
        }
      }
    }
  });

  const unsubscribeSocketService = g_socketService.connected.subscribe((connected) => {
    if (connected) {
      g_socketService.sendSubscriptionRequest(queryService);
    }
  });

  const saveState = () => {
    if (columnApi) {
      const key = `${queryService.getKeyForStorage()}/column_state`;
      const state = columnApi.getColumnState();
      save_storage(key, state);
    }
  };

  function onColumnResized(e: ColumnResizedEvent) {
    if (e.column && e.finished) {
      saveState();
    }
  }

  function onColumnVisible(e: ColumnVisibleEvent) {
    saveState();
  }

  function onColumnPivotChanged(e: ColumnPivotChangedEvent) {
    saveState();
  }

  const onSortChanged = async (params: SortChangedEvent) => {
    saveState();
    await refreshPage();
  };

  function onColumnPinned(e: ColumnPinnedEvent) {
    saveState();
  }

  const onColumnMoved = (e: ColumnMovedEvent) => {
    saveState();
  };

  const onSelectionChanged = () => {
    const selectedRows = api.getSelectedRows();
    $query.setSelectedRows(selectedRows);
  };

  const onFirstDataRendered = (params: FirstDataRenderedEvent) => {
    params.api.forEachNode(function (node) {
      node.setExpanded(false);
    });
  };

  const onCellEditingStopped = async (e: CellEditingStoppedEvent) => {
    if (e.valueChanged) {
      if (e.colDef.cellEditor === 'agLargeTextCellEditor') {
        const editorParams = e.colDef.cellEditorParams as ICustomCellEditorParams;
        if (editorParams) {
          const oldData = JSON.parse(JSON.stringify(e.data));
          const newData = e.data;
          const colId = e.column.getColId();
          newData[colId] = e.newValue;
          delete oldData[colId];
          editorParams.cell.saveValue(oldData, newData);
        }
      }
    }
  };

  const getRowId = (params: GetRowIdParams) => {
    return queryService.getRowId(params.data);
  };

  const handlePagination = async ({ detail: { action } }) => {
    await reloadData(action);
  };

  const refreshPage = async () => {
    await reloadData(PaginationAction.FIRST);
  };

  $: {
    queryService;
    initStore();
  }

  $: {
    columnService;
    initStore();
  }

  onMount(async () => {
    queryService.selectedRows.set([]);
    sidebarService.update((value) => {
      value.open = false;
      return value;
    });

    initStore();
  });

  onDestroy(() => {
    unsubscribeSidebar();
    unsubscribeNotification();
    unsubscribeSocketService();
  });
</script>

<div id="table" class={defaultClass}>
  <svelte:component this={queryService.getActionBarAdapter()} bind:queryService={$query} {refreshPage} />

  {#if $query}
    <div class="flex h-full w-full flex-col">
      <div class="relative h-full w-full">
        <div class="data-table-container relative flex h-full w-full flex-col">
          <div class="ag-theme-alpine h-full w-full">
            {#if columnService && columnService.isInited}
              <AgGridSvelte
                bind:rowData={$rows}
                {defaultColDef}
                detailCellRenderer={queryService.getDetailCellRenderer()}
                masterDetail={true}
                detailRowHeight={queryService.detailRowHeight}
                {rowSelection}
                {suppressRowClickSelection}
                {suppressRowDeselection}
                {rowMultiSelectWithClick}
                {components}
                bind:singleClickEdit={$query.inlineEditing}
                columnDefs={columnService.getColumnDefs($query.inlineEditing)}
                {getRowId}
                {onFirstDataRendered}
                {onGridReady}
                {onFilterChanged}
                {onColumnResized}
                {onColumnMoved}
                {onColumnPivotChanged}
                {onCellEditingStopped}
                {onColumnVisible}
                {onColumnPinned}
                {onSortChanged}
                {onSelectionChanged}
                bind:api
                bind:columnApi
              />
            {:else}
              <div class="flex h-full w-full border-t border-b  border-gray-300 bg-white" />
            {/if}
          </div>
        </div>
      </div>

      {#if queryService.isDoPagination}
        <LBPagination bind:pagination={$query.pagination} on:handlePage={handlePagination} />
      {/if}
    </div>
  {/if}
</div>
