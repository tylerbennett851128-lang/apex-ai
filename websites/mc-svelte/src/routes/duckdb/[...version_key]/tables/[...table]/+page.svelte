<script lang="ts">
  //data table
  import { page } from '$app/stores';
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import { getContext, onMount } from 'svelte';
  import { AtomicSection, type DuckDBSectionType } from '../../../+layout.svelte';
  import { DuckDbDataQueryService } from '$mc/duckdb/duckdb-data-query.service';
  import { goto } from '$app/navigation';
  import { globalColumnService } from '$mc/global-schema/global-schema.service';
  const { getSectionData, baseUrl } = getContext(AtomicSection) as any;
  const tableName = $page.params.table;
  const lastSection = getSectionData($page.url.pathname) as DuckDBSectionType;

  let queryService: DuckDbDataQueryService;
  let columnService: Writable<ColumnService>;

  if (lastSection) {
    // the lastSection may be empty because it's getting the value from local_storage.
    queryService = new DuckDbDataQueryService(tableName, lastSection.atomic_type, lastSection.atomic_key);
    columnService = writable(queryService.columnService);
  }

  let loading = false;

  const refresh = async () => {
    if ($columnService) {
      if (loading === false) {
        loading = true;
        const initial = $columnService;
        await initial.init();
        if (initial.isValid) {
          columnService.set(initial);
        } else {
          const defaultConfig = await $globalColumnService.registerTableIntoSchema($columnService.tableName, queryService);
          initial.useOnlyDefaultConfig = true;
          initial.setDefaultConfig(defaultConfig);
          columnService.set(initial);
        }

        loading = false;
      }
    }
  };

  onMount(async () => {
    if (!lastSection) {
      await goto(baseUrl);
    } else {
      await refresh();
    }
  });
</script>

{#if queryService && $columnService}
  <LBDataTable {queryService} bind:columnService={$columnService} />
{/if}
