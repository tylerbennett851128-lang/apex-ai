<script lang="ts">
  import LBSearchBar from '$components/LBFilter/LBSearchBar.svelte';
  import LBProgressBar from '$components/LBProgressBar.svelte';
  import type { QueryService } from '$lib/services/query.service';
  import { onDestroy } from 'svelte';

  export let queryService: QueryService;
  export let refreshPage: () => void;

  let loading = false;

  let selectedRows: any[] = [];

  const unsubscribeQueryList = queryService.queryList.subscribe((value) => {
    if (value.length > 0) {
      loading = true;
    } else {
      loading = false;
    }
  });

  const unsubscribeSelectedRows = queryService.selectedRows.subscribe((value) => {
    selectedRows = value;
  });

  onDestroy(() => {
    unsubscribeQueryList();
    unsubscribeSelectedRows();
  });
</script>

<LBProgressBar bind:loading />

<div class="h-hit flex w-full items-center justify-between bg-white">
  <div class="flex w-[70%] items-center justify-start">
    <LBSearchBar bind:filterService={queryService.filterService} on:handleFilter={refreshPage} />
  </div>

  <div class="flex w-[30%] items-end justify-end">
    {#if selectedRows && selectedRows.length > 0}
      <div class="my-1 flex h-8 w-full items-end justify-end px-2">
        <span class="mr-4 text-sm">Selected: {selectedRows.length}</span>
      </div>
    {/if}
  </div>
</div>
