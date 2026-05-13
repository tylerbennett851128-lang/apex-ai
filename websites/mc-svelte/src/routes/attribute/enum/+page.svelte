<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { EnumAttributeQueryService } from '$mc';
  import { onMount } from 'svelte';
  import type { ColumnService } from '$lib/services/column.service';

  const queryService = new EnumAttributeQueryService();
  queryService.uiViewName = 'EnumDataTable';

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

<LBDataTable bind:columnService={$columnService} {queryService} />
