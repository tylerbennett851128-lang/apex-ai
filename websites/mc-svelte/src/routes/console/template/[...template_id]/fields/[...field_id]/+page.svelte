<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { GoalTemplateByFieldsIdService } from '$mc';
  import type { ColumnService } from '$lib/services/column.service';

  const query = new GoalTemplateByFieldsIdService('goal_template_field_template_name_field_name', $page.params.field_id);
  query.sendRequestAfterUpdate = true;
  const dataService = writable(query);
  const columnService: Writable<ColumnService> = writable($dataService.columnService);

  let loading = false;

  const refresh = async () => {
    if ($columnService) {
      if (loading === false) {
        loading = true;
        const initial = $columnService;
        initial.multiSelect = false;
        await initial.init();
        columnService.set(initial);

        const query = $dataService;
        if (query && !query.isInited) {
          if (query.rows && query.rows.length === 0) {
            const info = await query.loadInfo();
            if (info) {
              dataService.update((value) => {
                value.updateWithInfo(info);
                return value;
              });
            }
          }
        }

        loading = false;
      }
    }
  };

  onMount(async () => {
    await refresh();
  });
</script>

<LBDataTable bind:queryService={$dataService} bind:columnService={$columnService} />
