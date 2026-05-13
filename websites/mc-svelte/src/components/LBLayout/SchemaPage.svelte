<script lang="ts">
  import { globalColumnService } from '$mc/global-schema/global-schema.service';
  import { writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { onDestroy, onMount } from 'svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import { schemaUpdateService, type SchemaQueryService } from '$mc/global-schema/table-query.service';
  export let queryService: SchemaQueryService;
  export let refreshSchema: (rows: any) => any;

  const columnService: Writable<ColumnService> = writable(queryService.columnService);
  const unsubscribe = schemaUpdateService.subscribe((value) => {
    if (queryService) {
      if (value.tableName === queryService.tableName) {
        refreshSchema(queryService.rows);
      }
    }
  });

  let loading = false;

  const refresh = async () => {
    if ($columnService) {
      if ($globalColumnService && !$globalColumnService.isInited) {
        if (loading === false) {
          loading = true;
          const initial = $globalColumnService;
          await initial.init();
          globalColumnService.set(initial);
          loading = false;
        }
      }

      const rows = $globalColumnService.rows;
      columnService.update((value) => {
        value.initWithRaw(rows);
        return value;
      });
    }
  };

  onMount(async () => {
    await refresh();
  });

  onDestroy(unsubscribe);
</script>

{#if $columnService && $columnService.isInited}
  <LBDataTable bind:queryService bind:columnService={$columnService} />
{/if}
