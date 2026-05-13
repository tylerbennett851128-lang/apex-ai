<script lang="ts">
  //table page
  import { page } from '$app/stores';
  import { getContext, onMount } from 'svelte';
  import { AtomicSection, type DuckDBSectionType } from '../../+layout.svelte';
  import { goto } from '$app/navigation';
  import { DuckDbTrackerQueryService } from '$mc/duckdb/duckdb-tracker-query.service';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import { writable, type Writable } from 'svelte/store';

  const { getSectionData, baseUrl } = getContext(AtomicSection) as any;
  const content_index_id = $page.params.content_index_id;
  const lastSection = getSectionData($page.url.pathname) as DuckDBSectionType;

  let trackerQueryService;
  let trackerColumnService: Writable<ColumnService>;

  if (lastSection) {
    trackerQueryService = new DuckDbTrackerQueryService(content_index_id, lastSection.atomic_key, lastSection.atomic_type);
    trackerColumnService = writable(trackerQueryService.columnService);
  }

  onMount(async () => {
    if (!lastSection) {
      await goto(baseUrl);
    }
  });
</script>

{#if lastSection && trackerQueryService && $trackerColumnService}
  <div class="flex h-full w-full flex-col border-t border-gray-200 bg-white pt-4">
    <div class="flex w-full flex-wrap px-4 py-2">
      <span class="text-normal text-md mr-4">File Name: {lastSection.file_name}</span>
      <span class="text-normal text-md mr-4">Atomic Key: {lastSection.atomic_key}</span>
      <span class="text-normal text-md mr-4">Atomic Type: {lastSection.atomic_type}</span>
    </div>

    <LBDataTable queryService={trackerQueryService} bind:columnService={$trackerColumnService} defaultClass={'flex h-full w-full flex-col'} />
  </div>
{/if}
