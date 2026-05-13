<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { LogQueryService } from '$mc';
  import { logTableConfig } from '$mc/config';
  import { onMount } from 'svelte';
  import type { ColumnService } from '$lib/services/column.service';

  let queryService = new LogQueryService();
  queryService.setDefaultConfig(logTableConfig);

  const columnService: Writable<ColumnService> = writable(queryService.columnService);

  let loading = false;

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

  onMount(async () => {
    await refresh();
  });
</script>

<LBDataTable bind:columnService={$columnService} bind:queryService />
