<script lang="ts">
  import { page } from '$app/stores';
  // duckdb files page.
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import { getContext } from 'svelte';
  import { AtomicSection, type DuckDBSectionType } from './+layout.svelte';
  import { goto } from '$app/navigation';
  import { DuckDbFileQueryService } from '$mc/duckdb/duckdb-file-query.service';
  import type { CellClickedEvent } from 'ag-grid-community';
  const { setMap, baseUrl } = getContext(AtomicSection) as any;
  const queryService = new DuckDbFileQueryService();

  const onDrillDownClicked = async ($event: CellClickedEvent) => {
    const row = $event.data;

    // when user click the chevron, it should be directed to Filt/Table page with atomic_key and atomic_type.
    if (row.atomic_key && row.atomic_type && row.version_key) {
      const sectionData: DuckDBSectionType = {
        title: row.file_name,
        url: `${baseUrl}/${row.version_key}`,
        lastUrl: $page.url.pathname,
        sectionType: 'Child',
        atomic_key: row.atomic_key,
        atomic_type: row.atomic_type,
        version_key: row.version_key,
        file_name: row.file_name,
        content_index_id: row.content_index_id,
        level_path: `File/Table`,
        node_path: `/${row.atomic_key}`
      };

      setMap(sectionData);
      await goto(sectionData.url);
    }
  };

  const onCellClicked = async (params: CellClickedEvent) => {
    const row = params.data;
    if (row) {
      if (row.atomic_key && row.atomic_type && row.version_key) {
        if (params.column.getColId() === 'trackers') {
          const version_key = row.version_key;
          const sectionData: DuckDBSectionType = {
            title: `Site ${row.atomic_key} Trackers`,
            url: `${baseUrl}/tracker/${row.content_index_id}`,
            lastUrl: $page.url.pathname,
            sectionType: 'Tracker',
            atomic_key: row.atomic_key,
            atomic_type: row.atomic_type,
            version_key: row.version_key,
            file_name: row.file_name,
            content_index_id: row.content_index_id,
            level_path: `File/Tracker`,
            node_path: `/${version_key}`
          };

          setMap(sectionData);
          await goto(sectionData.url);
        } else if (params.column.getColId() === 'completion_ratio') {
          params.api.forEachNode(function (node) {
            node.setExpanded(!node.expanded && params.rowIndex === node.rowIndex);
          });
        } else {
          let nodeExpanded = false;
          params.api.forEachNode((node) => {
            if (params.rowIndex === node.rowIndex) {
              nodeExpanded = node.expanded;
              node.setExpanded(!node.expanded);
            }
          });

          if (!nodeExpanded) {
            // when user tap on the progress bar, it expand the master detail, after that user can close the view by tapping the opened row.
            // This makes easy to collapse the opened row. and when user continue to tapping on the row, it will be navigated to file detail page.
            const version_key = row.version_key;
            const sectionData: DuckDBSectionType = {
              title: `File Details`,
              url: `${baseUrl}/detail/${row.content_index_id}`,
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
      }
    }
  };

  queryService.columnService.addDrillColumn(onDrillDownClicked);
  queryService.columnService.cellClickHandler = onCellClicked;
  const columnService: Writable<ColumnService> = writable(queryService.columnService);
</script>

<LBDataTable {queryService} bind:columnService={$columnService} />
