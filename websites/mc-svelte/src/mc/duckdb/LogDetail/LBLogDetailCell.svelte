<script lang="ts">
  import LBTabBar from '$components/LBTabBar.svelte';
  import type { TabItemType } from '$lib/services/tab-list.service';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import type { ICustomCellParams } from '$components/LBDataTable/Cells/LBColumn';
  import { DuckDbLogQueryService } from '../duckdb-log-query.service';
  import { writable, type Writable } from 'svelte/store';
  import type { ColumnService } from '$src/lib/services/column.service';
  import type { Notification } from '$lib/services/socket.service';
  import { MESSAGE_TYPE, notificationService } from '$src/lib/services/socket.service';
  export let params: ICustomCellParams;

  const queryService = new DuckDbLogQueryService(params.data);
  const columnService: Writable<ColumnService> = writable(queryService.columnService);

  const tabItems: TabItemType[] = [
    { id: 'next', label: 'Next' },
    { id: 'current', label: 'Current' },
    { id: 'prev', label: 'Prev' }
  ];

  let activeTabId = 'next';

  const handleTabClick = async ({ detail: { id } }) => {
    queryService.setMode(id);

    const notification: Notification = {
      // when user click chevron on a row, it send the notification to LBDataTable, so the table call the reloadData and refresh with new data.
      message_type: MESSAGE_TYPE.DataChangeNotification, // This is the best way to refresh table and this approach can be used for many parts.
      lb_tables: [
        {
          lb_table: queryService.lb_table,
          lb_id_column: queryService.lb_column
        }
      ],
      data: {},
      subscription_id: ''
    };

    notificationService.update((value) => {
      value = notification;
      return value;
    });
  };
</script>

<div class="flex h-full w-full flex-col border border-gray-300 bg-zinc-100 p-4">
  <LBTabBar bind:activeTabId {tabItems} on:click={handleTabClick} />
  <LBDataTable {queryService} bind:columnService={$columnService} defaultClass="flex h-full w-full flex-col border border-gray-300 bg-white" />
</div>
