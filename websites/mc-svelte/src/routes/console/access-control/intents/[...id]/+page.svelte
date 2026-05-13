<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { onDestroy, onMount } from 'svelte';
  import { page } from '$app/stores';
  import { IntentDetailService, sidebarService } from '$mc';
  import type { ColumnService } from '$lib/services/column.service';
  import { ACTION_BAR_EVENT } from '$lib/services/query.service';
  import { FORM_TYPE, SUBMIT_STATE } from '$lib/services/sidebar.service';

  const intent_id = $page.params.id;
  const queryService = new IntentDetailService(intent_id);
  const columnService: Writable<ColumnService> = writable(queryService.columnService);

  const unsubscribeActionBarEvent = queryService.actionBarEvent.subscribe(async (value) => {
    if (value) {
      if (value.event === ACTION_BAR_EVENT.CONFIRM_DELETE) {
        const rows = value.params;
        if (rows) {
          await queryService.submit(rows, FORM_TYPE.DELETE);
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

  onDestroy(unsubscribeActionBarEvent);
</script>

<LBDataTable {queryService} bind:columnService={$columnService} />
