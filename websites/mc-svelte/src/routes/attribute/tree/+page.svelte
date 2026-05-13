<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { TreeAttributeQueryService } from '$mc';
  import LBPathBreadcrum from '$mc/attribute/LBPathBreadcrum.svelte';
  import { onMount } from 'svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import type { Notification } from '$lib/services/socket.service';
  import { MESSAGE_TYPE, notificationService } from '$lib/services/socket.service';

  let loading = false;
  const onDrillDownClicked = async ($event) => {
    const row = $event.data;
    if (row) {
      if (row.leaf === false) {
        await refreshTable(row.level_path, row.node_path);
      }
    }
  };

  const dataService: Writable<TreeAttributeQueryService> = writable(new TreeAttributeQueryService());
  $dataService.uiViewName = 'AttributeTreeDataTable';
  $dataService.columnService.addDrillColumn(onDrillDownClicked);
  const columnService: Writable<ColumnService> = writable($dataService.columnService);

  const refresh = async () => {
    if ($columnService) {
      if (loading === false) {
        loading = true;
        const initial = $columnService;
        await initial.init();
        columnService.set(initial);
        loading = false;
      }
    }
  };

  const refreshTable = async (level_path: string, node_path: string) => {
    dataService.update((value) => {
      value.setPath(level_path, node_path);
      value.filterService.removeAll();
      return value;
    });

    const notification: Notification = {
      // when user click chevron on a row, it send the notification to LBDataTable, so the table call the reloadData and refresh with new data.
      message_type: MESSAGE_TYPE.DataChangeNotification, // This is the best way to refresh table and this approach can be used for many parts.
      lb_tables: [{ lb_table: $dataService.lb_table, lb_id_column: '' }],
      data: {},
      subscription_id: ''
    };

    notificationService.update((value) => {
      value = notification;
      return value;
    });
  };

  const onSelectPath = async ({ detail: { level_path, node_path } }) => {
    await refreshTable(level_path, node_path);
  };

  onMount(async () => {
    await refresh();
  });
</script>

<div class="flex h-full w-full flex-col border bg-white pt-2">
  <LBPathBreadcrum level_path={$dataService.getLevelPath()} node_path={$dataService.getNodePath()} on:select={onSelectPath} />
  <div class="flex h-full w-full flex-col">
    <LBDataTable bind:queryService={$dataService} bind:columnService={$columnService} />
  </div>
</div>
