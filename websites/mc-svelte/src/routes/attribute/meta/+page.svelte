<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { MetaAttributeQueryService, MetaLevelQueryService, sidebarService } from '$mc';
  import { metaAttributeTableConfig } from '$mc/config';
  import { onMount } from 'svelte';
  import { FORM_TYPE } from '$lib/services/sidebar.service';
  import type { ColumnService } from '$lib/services/column.service';

  const queryService = new MetaAttributeQueryService();
  queryService.uiViewName = 'AttributeMetaDataTable';
  queryService.setDefaultConfig(metaAttributeTableConfig);
  const columnService: Writable<ColumnService> = writable(queryService.columnService);

  let loading = false;

  const onPlusClicked = async ($event) => {
    const row = $event.data;
    const service = new MetaLevelQueryService();
    sidebarService.update((value) => {
      value.open = true;
      value.queryService = service;
      value.row = {
        root_level_path: row['level_path']
      };
      value.formType = FORM_TYPE.ADD;
      return value;
    });
  };

  const onCellClicked = async ($event) => {
    const row = $event.data;
    const service = new MetaLevelQueryService();
    sidebarService.update((value) => {
      value.open = true;
      value.queryService = service;
      value.row = {
        level_path: row['level_path'],
        display: row['display'],
        lb_attribute_metadata_id: row['lb_attribute_metadata_id']
      };
      value.formType = FORM_TYPE.UPDATE;
      return value;
    });
  };

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
    $columnService.addPlusColumn(onPlusClicked);
    $columnService.cellClickHandler = onCellClicked;
    await refresh();
  });
</script>

<LBDataTable bind:columnService={$columnService} {queryService} />
