<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import { getContext, onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { RolesQueryService } from '$mc';
  import type { ColumnService } from '$lib/services/column.service';
  import { RolesSection } from './+layout.svelte';
  const { setMap, baseUrl } = getContext(RolesSection) as any;

  let loading = false;

  const onDrillDownClicked = async ($event) => {
    const row = $event.data;
    if (row && row.lb_role_id) {
      const targetUrl = `${baseUrl}/${row.lb_role_id}`;
      setMap(targetUrl, row.lb_role_name);
      await goto(targetUrl);
    }
  };

  const queryService = new RolesQueryService();
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
