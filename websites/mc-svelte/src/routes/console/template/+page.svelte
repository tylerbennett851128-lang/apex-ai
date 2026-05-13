<script lang="ts">
  import { getContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import { TemplateSection } from './+layout.svelte';
  import { GoalTemplateFormService } from '$mc';
  import { goto } from '$app/navigation';

  const { setMap, baseUrl } = getContext(TemplateSection) as any;
  const queryService = new GoalTemplateFormService();
  const columnService: Writable<ColumnService> = writable(queryService.columnService);
  let loading = false;

  const onDrillDownClicked = async ($event) => {
    const row = $event.data;

    if (row.goal_template_id) {
      //if dislay is null it will show header from goal_template_name
      setMap({ title: row.display || row.goal_template_name, url: `${baseUrl}/${row.goal_template_id}` });
      await goto(`${baseUrl}/${row.goal_template_id}`);
    }
  };

  queryService.columnService.addDrillColumn(onDrillDownClicked);

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
