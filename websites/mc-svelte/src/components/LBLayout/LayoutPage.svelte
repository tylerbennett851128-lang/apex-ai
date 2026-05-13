<script lang="ts">
  import LBTabBar from '$components/LBTabBar.svelte';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import SchemaPage from './SchemaPage.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { load_storage, save_storage } from '$lib/utils';
  import type { ColumnService } from '$lib/services/column.service';
  import { ACTION_BAR_EVENT } from '$lib/services/query.service';
  import { sidebarService } from '$mc';
  import { FORM_TYPE, SUBMIT_STATE } from '$lib/services/sidebar.service';
  import type { TabItemType } from '$lib/services/tab-list.service';
  import type { TableService } from '$mc/global-schema/table-query.service';

  export let tableService: TableService;
  const queryService = tableService.dataService;
  const columnService: Writable<ColumnService> = writable(tableService.columnService);

  let loading = false;
  let wasMounted = false;

  const tabItems: TabItemType[] = [
    {
      id: 'data',
      label: 'Data'
    },
    {
      id: 'schema',
      label: 'Schema'
    }
  ];

  let activeTabId: string = 'data';

  $: {
    tableService;
    if (tableService && tableService.columnService) {
      columnService.set(tableService.columnService);

      if (wasMounted) {
        const key = `LayoutPage/${tableService.tableName}`;
        const activeId = load_storage(key);
        if (activeId) {
          activeTabId = activeId;
        }
      }

      refresh();
    }
  }

  const refresh = async () => {
    if ($columnService) {
      if (!loading) {
        loading = true;
        const initial = $columnService;
        await initial.init();
        columnService.set(initial);
        loading = false;
      }
    }
  };

  const refreshSchema = async () => {
    if ($columnService) {
      await refresh();
    }
  };

  const onClickTab = ({ detail: { id } }) => {
    const key = `LayoutPage/${tableService.tableName}`;
    save_storage(key, id);
  };

  const unsubscribeActionBarEvent = queryService.actionBarEvent.subscribe(async (value) => {
    if (value) {
      if (value.event === ACTION_BAR_EVENT.CONFIRM_DELETE) {
        const rows = value.params;
        if (rows) {
          await tableService.dataService.submit(rows[0], FORM_TYPE.DELETE);
          sidebarService.update((value) => {
            value.open = false;
            value.queryService = queryService;
            value.status = SUBMIT_STATE.UPDATED;
            return value;
          });
        }
      }
    }
  });

  onMount(async () => {
    wasMounted = true;
    await refresh();
  });

  onDestroy(() => {
    unsubscribeActionBarEvent();
  });
</script>

{#if tableService}
  <LBTabBar {tabItems} bind:activeTabId rtl={true} classes="w-full bg-white px-1 pt-1 border border-b-none" on:click={onClickTab} />
  {#if activeTabId === 'data'}
    <LBDataTable bind:columnService={$columnService} {queryService} />
  {:else if activeTabId === 'schema'}
    <SchemaPage bind:queryService={tableService.schemaService} {refreshSchema} />
  {/if}
{/if}
