<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { PositionQueryService } from '$mc';
  import type { ColumnService } from '$lib/services/column.service';
  import { usersDetailConfig } from '$mc/config/UserTable.config';

  const user_id = $page.params.user_id;

  const queryService = new PositionQueryService(user_id);
  queryService.columnService.setDefaultConfig(usersDetailConfig);
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
