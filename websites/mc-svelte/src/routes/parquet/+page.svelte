<script lang="ts">
  import { page } from '$app/stores';
  // parquet files page.
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import { getContext, onMount } from 'svelte';
  import { AtomicSection, type ParquetSectionType } from './+layout.svelte';
  import { goto } from '$app/navigation';
  import { ParquetFileQueryService } from '$mc/parquet/parquet-file-query.service';
  const { setMap, baseUrl } = getContext(AtomicSection) as any;
  const queryService = new ParquetFileQueryService();

  const onCellClicked = async (params) => {
    const row = params.data;
    if (row) {
      if (row.atomic_key && row.atomic_type && row.version_key) {
        const version_key = row.version_key;

        const sectionData: ParquetSectionType = {
          title: `File Details`,
          url: `${baseUrl}/detail/${version_key}`,
          lastUrl: $page.url.pathname,
          sectionType: 'Detail',
          atomic_key: row.atomic_key,
          atomic_type: row.atomic_type,
          version_key: row.version_key,
          file_name: row.file_name,
          content_index_id: row.content_index_id,
          level_path: `File/Detail`,
          node_path: `/${version_key}`
        };

        setMap(sectionData);
        await goto(sectionData.url);
      }
    }
  };

  queryService.columnService.cellClickHandler = onCellClicked;
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
