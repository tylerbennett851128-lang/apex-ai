<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte';
  import LBFilterChip from './LBFilterChip.svelte';
  import clearAllIcon from '$assets/svg/clear-all-filter.svg';
  import { get } from 'svelte/store';
  import { getDisplayForConsition, type FilterService, type MapFilterType } from '$lib/services/filter.service';
  import { ACTION_BAR_EVENT } from '$src/lib/services/query.service';

  const dispatch = createEventDispatcher();
  export let filterService: FilterService;

  let filtersToDisplay: { key: string; label: string; display: string; idx: number }[] = [];
  let lastDisplay: { key: string; label: string; display: string }[] = [];

  const updateFiltersToDisplay = (searchText: string, mapFilters: MapFilterType) => {
    const colIds = Object.keys(mapFilters);
    filtersToDisplay = [];

    let bColumnNameUpdated = false;
    for (const colId of colIds) {
      const item = mapFilters[colId];
      const columnName = filterService.getColumnName(colId, item.columnName);
      bColumnNameUpdated = columnName !== item.columnName;
      // The column name saved into brower by filter chip should be compared with the name from lb_schema.

      if (bColumnNameUpdated) {
        mapFilters[colId].columnName = columnName;
      }

      item.conditions.forEach((condition, idx) => {
        const display = getDisplayForConsition(condition);
        filtersToDisplay.push({ key: colId, label: columnName, display, idx });
      });
    }

    if (bColumnNameUpdated) {
      // if the column name saved into browser is defferent from lb_schema, then it save it browser again.
      // if we do not this, then whenever user refresh UI, it's always re-display the different column name which is saved into broswer. so not good to see from UI perspective
      filterService.saveMapFilters(mapFilters);
    }

    if (searchText && searchText !== '') {
      filtersToDisplay.push({ key: 'All', label: 'All', display: searchText, idx: 0 });
    }

    if (JSON.stringify(filtersToDisplay) !== JSON.stringify(lastDisplay)) {
      lastDisplay = JSON.parse(JSON.stringify(filtersToDisplay));
      dispatch('handleFilter');
    }
  };

  const unsubscribeSearch = filterService.searchQueryText.subscribe((searchText) => {
    const mapFilters = get(filterService.mapFilters);
    updateFiltersToDisplay(searchText, mapFilters);
  });

  const unsubscribeFilter = filterService.mapFilters.subscribe((mapFilters) => {
    const searchText = get(filterService.searchQueryText);
    updateFiltersToDisplay(searchText, mapFilters);
  });

  // when column service is initialied, then the column service send the event COLUMNS_INITED.
  // This is used to get the column name which is from backend. so when user change the column name in lb_schema, it's applied to filter chip.
  const unsubscribeActionBarEvent = filterService.queryService.actionBarEvent.subscribe((value) => {
    if (value && value.event === ACTION_BAR_EVENT.COLUMNS_INITED) {
      const mapFilters = get(filterService.mapFilters);
      const searchText = get(filterService.searchQueryText);
      updateFiltersToDisplay(searchText, mapFilters);
    }
  });

  const closeFilter = ({ detail: { key, idx } }) => {
    filterService.removeFilter(key, idx);
  };

  const clearAllFilter = () => {
    filterService.removeAll();
  };

  onDestroy(() => {
    unsubscribeSearch();
    unsubscribeFilter();
    unsubscribeActionBarEvent();
  });
</script>

<div class="flex h-fit min-h-[48px] w-full flex-col items-start justify-end bg-white px-1 py-2 text-center">
  <div class="mb-1 flex w-full flex-wrap items-center justify-start px-2 {filtersToDisplay.length > 0 ? 'duration-5000 visible h-fit ease-out' : 'duration-5000 hidden h-0 ease-in'}">
    {#each filtersToDisplay as filter}
      <LBFilterChip bind:filter on:close={closeFilter} />
    {/each}

    {#if filtersToDisplay.length > 1}
      <div class="p-0.1 mx-4 flex w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 drop-shadow hover:border-gray-400 hover:drop-shadow-md" on:click={clearAllFilter}>
        <img class="h-6 w-6" src={clearAllIcon} alt="" />
      </div>
    {/if}
  </div>
</div>
