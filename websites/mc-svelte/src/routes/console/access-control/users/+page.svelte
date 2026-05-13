<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import { getContext, onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { UsersQueryService } from '$mc';
  import type { ColumnService } from '$lib/services/column.service';
  import { UserSection } from './+layout.svelte';
  const { setMap, baseUrl } = getContext(UserSection) as any;

  const onDrillDownClicked = async ($event) => {
    const row = $event.data;
    if (row && row.lb_user_id) {
      const targetUrl = `${baseUrl}/${row.lb_user_id}`;
      setMap(targetUrl, row.user_key);
      await goto(targetUrl);
    }
  };

  const queryService = new UsersQueryService();
  queryService.columnService.addDrillColumn(onDrillDownClicked);
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

<LBDataTable {queryService} bind:columnService={$columnService} />
