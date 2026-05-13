<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import { getContext, onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { IntentQueryService } from '$mc';
  import type { ColumnService } from '$lib/services/column.service';
  import { IntentsSection } from './+layout.svelte';
  const { setMap, baseUrl } = getContext(IntentsSection) as any;

  let loading = false;

  const onDrillDownClicked = async ($event) => {
    const row = $event.data;
    if (row && row.lb_intent_id) {
      const targetUrl = `${baseUrl}/${row.lb_intent_id}`;
      setMap(targetUrl, row.intent);
      await goto(targetUrl);
    }
  };

  const queryService = new IntentQueryService();
  queryService.columnService.addDrillColumn(onDrillDownClicked);
  const columnService: Writable<ColumnService> = writable(queryService.columnService);

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

<LBDataTable {queryService} bind:columnService={$columnService} />
