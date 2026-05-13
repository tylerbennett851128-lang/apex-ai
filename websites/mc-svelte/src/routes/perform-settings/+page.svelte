<script lang="ts">
  import { goto } from '$app/navigation';
  import { getContext, onMount } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { PerformSettingsService } from '$mc';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { distinctTableConfig } from '$mc/config';
  import type { ColumnService } from '$lib/services/column.service';
  import { SettingsSection } from './+layout.svelte';
  const { setMap } = getContext(SettingsSection) as any;

  let title: string = 'Perform Settings';
  const baseUrl = '/perform-settings';

  const onCellClicked = async ($event) => {
    const row = $event.data;

    if (row && row.path_org) {
      const node_path = row.path_org?.node_path;
      title = node_path;
      // we need to filter default value table by domain
      setMap(node_path, row.path_org);
      const lb_domain: string = row.lb_domain?.node_path;
      await goto(`${baseUrl}/${lb_domain}/${node_path}`);
    }
  };

  const queryService = new PerformSettingsService();
  queryService.columnService.addDrillColumn(onCellClicked);
  const columnService: Writable<ColumnService> = writable(queryService.columnService);

  onMount(async () => {
    const initial = $columnService;
    await initial.setDefaultConfig(distinctTableConfig);
    columnService.set(initial);
  });
</script>

<LBDataTable {queryService} bind:columnService={$columnService} />
