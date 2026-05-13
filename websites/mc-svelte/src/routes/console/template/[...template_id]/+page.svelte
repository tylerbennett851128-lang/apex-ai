<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { getContext, onMount } from 'svelte';
  import { page } from '$app/stores';
  import { GoalTemplateService } from '$mc';
  import type { ColumnService } from '$lib/services/column.service';
  import { goto } from '$app/navigation';
  import { TemplateSection } from '../+layout.svelte';
  const { setMap, baseUrl } = getContext(TemplateSection) as any;

  const onDrillDownClicked = async ($event) => {
    const row = $event.data;
    if (row.lb_schema_id) {
      //if dislay is null it will show lb_column
      setMap({
        url: `${baseUrl}/fields/${row.lb_schema_id}`,
        title: row.display || row.lb_column
      });
      await goto(`${baseUrl}/fields/${row.lb_schema_id}`);
    }
  };

  const queryService = new GoalTemplateService('goal_template_field_template_name_field_name', $page.params.template_id);
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
