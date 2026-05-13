<script lang="ts">
  //table page
  import { page } from '$app/stores';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import { getContext, onMount } from 'svelte';
  import { AtomicSection, type DuckDBSectionType } from '../+layout.svelte';
  import { goto } from '$app/navigation';
  import { DuckDbTableQueryService } from '$mc/duckdb/duckdb-table-query.service';
  import { writable, type Writable } from 'svelte/store';

  const { setMap, baseUrl, getSectionData } = getContext(AtomicSection) as any;
  const version_key = $page.params.version_key;
  const lastSection = getSectionData($page.url.pathname) as DuckDBSectionType;

  let loading = false;

  const onDrillDownClicked = async ($event) => {
    const row = $event.data;

    if (lastSection) {
      const sectionData: DuckDBSectionType = {
        title: `${lastSection.file_name} > ${row.table_name}`,
        url: `${baseUrl}/${version_key}/tables/${row.table_name}`,
        lastUrl: $page.url.pathname,
        sectionType: 'Child',
        version_key: version_key,
        atomic_type: lastSection.atomic_type,
        atomic_key: lastSection.atomic_key,
        file_name: lastSection.file_name,
        content_index_id: lastSection.content_index_id,
        level_path: 'File/Table/Data',
        node_path: `/${version_key}/${row.table_name}`
      };

      setMap(sectionData);
      await goto(sectionData.url);
    }
  };

  let queryService: DuckDbTableQueryService;
  let columnService: Writable<ColumnService>;

  const onCellClicked = async (params) => {
    const row = params.data;

    if (lastSection) {
      const sectionData: DuckDBSectionType = {
        title: `Table Details`,
        url: `${baseUrl}/${version_key}/detail/${row.table_name}`,
        lastUrl: $page.url.pathname,
        sectionType: 'Detail',
        version_key: version_key,
        atomic_type: lastSection.atomic_type,
        atomic_key: lastSection.atomic_key,
        file_name: lastSection.file_name,
        content_index_id: lastSection.content_index_id,
        level_path: 'File/Table',
        node_path: `/${version_key}/${row.table_name}`
      };

      setMap(sectionData);
      await goto(sectionData.url);
    }
  };

  if (lastSection) {
    queryService = new DuckDbTableQueryService(lastSection.atomic_type, lastSection.atomic_key, version_key, lastSection.content_index_id);
    queryService.columnService.cellClickHandler = onCellClicked;
    queryService.columnService.addDrillColumn(onDrillDownClicked);
    columnService = writable(queryService.columnService);
  }

  onMount(async () => {
    if (!lastSection) {
      await goto(baseUrl);
    } else {
      if ($columnService) {
        if (loading === false) {
          loading = true;
          const initial = $columnService;
          await initial.init();
          columnService.set(initial);
          loading = false;
        }
      }
    }
  });
</script>

{#if queryService && $columnService}
  <LBDataTable {queryService} bind:columnService={$columnService} />
{/if}
