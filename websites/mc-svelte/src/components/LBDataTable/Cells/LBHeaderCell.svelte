<script lang="ts" context="module">
  import type { IHeaderParams } from 'ag-grid-community';
  import { get } from 'svelte/store';

  export interface ICustomHeaderParams extends IHeaderParams {
    cell: LBColumn;
    columnService: ColumnService;
  }
</script>

<script lang="ts">
  import svgSortDsc from '$assets/svg//sort-dsc.svg';
  import menuFilter from '$assets/svg/menu-filter.svg';
  import clearAllIcon from '$assets/svg/clear-all-filter.svg';
  import LBIconButton from '$components/LBIconButton.svelte';
  import { LBCellAlign, LBColumnSortDirection } from '$lib/types';
  import { onDestroy } from 'svelte';
  import type { ColumnService } from '$lib/services/column.service';
  import type { MapFilterType } from '$lib/services/filter.service';
  import type { LBColumn } from './LBColumn';

  export let params: ICustomHeaderParams;
  const getDisplayName = (params): string => {
    if (params && params.displayName && params.displayName !== '') {
      const items = params.displayName.split('_');
      items.filter((value) => {
        value === '_';
      });
      return items.join(' ').toUpperCase();
    }

    return '';
  };

  const align = params && params.cell ? params.cell.align : LBCellAlign.LEFT;
  const allow_sorting = params && params.cell ? params.cell.allow_sorting : true;

  const displayName = getDisplayName(params);
  const getRotationClass = (sortDir: LBColumnSortDirection): string => {
    return sortDir === LBColumnSortDirection.DSC ? 'transition ease-in duration-200 rotate-0' : sortDir === LBColumnSortDirection.ASC ? 'transition ease-in duration-200 -rotate-180' : 'invisible';
  };

  const getSortDirIdx = (): number => {
    if (params && params.columnService) {
      const sort = get(params.columnService.sortInfo);
      if (sort.columnId === params.column.getColId()) {
        return sort.sortDir === LBColumnSortDirection.ASC ? 1 : 0;
      }
    }
    return 0;
  };

  const getSortDirection = (idx: number): LBColumnSortDirection => {
    return idx === 0 ? LBColumnSortDirection.DSC : LBColumnSortDirection.ASC;
  };

  let sortColumnId = '';
  let sortDirection: LBColumnSortDirection;
  let directionIdx = getSortDirIdx();

  let mapFilters: MapFilterType = {};

  let unsubscribeSortInfo;
  let unsubscribeFilter;

  if (params && params.columnService) {
    unsubscribeSortInfo = params.columnService.sortInfo.subscribe((value) => {
      const newSortDir = params.column.getColId() === value.columnId ? value.sortDir : 0;

      let isUpdated = (sortColumnId && value.columnId !== sortColumnId) || (sortDirection && sortDirection !== newSortDir);

      sortColumnId = value.columnId;
      sortDirection = newSortDir;
      directionIdx = getSortDirIdx();

      if (isUpdated) {
        const queryService = params.columnService.queryService;
        if (queryService) {
          queryService.pagination.reset();
        }
      }
    });

    if (params.columnService.filterService) {
      unsubscribeFilter = params.columnService.filterService.mapFilters.subscribe((value) => {
        mapFilters = value;
      });
    }
  }

  const onClick = () => {
    if (params && params.columnService && allow_sorting) {
      directionIdx++;
      directionIdx %= 2;
      params.columnService.setSort(params.column.getColId(), getSortDirection(directionIdx));
      params.api.onSortChanged();
    }
  };

  const onMenuClicked = () => {
    const element = document.getElementById(`menu-${params.column.getColId()}`);
    params.showColumnMenu(element);
  };

  const onClearFilter = () => {
    if (params.columnService.filterService) {
      params.columnService.filterService.removeFilter(params.column.getColId(), -1); // it's to remove the filter column from mapFilter
    }
  };

  onDestroy(() => {
    unsubscribeSortInfo();
    unsubscribeFilter();
  });
</script>

{#if params && params.columnService}
  <div class="flex w-full flex-row items-center justify-between">
    {#if mapFilters[params.column.getColId()]}
      <div class="item-center mr-2 flex w-8 w-8 justify-start">
        <LBIconButton icon={clearAllIcon} classes="flex w-7 h-7 justify-start item-center" imgClass="w-5 h-5" on:click={onClearFilter} />
      </div>
    {/if}

    <div class="ag-header-cell-text flex items-center {align} h-full w-full py-2" on:click|stopPropagation|preventDefault={onClick}>
      {#if allow_sorting && sortColumnId === params.column.getColId() && align === LBCellAlign.RIGHT}
        <div class={`m-2 w-4 ${getRotationClass(sortDirection)}`}>
          <img src={svgSortDsc} class="font-bold" alt="" />
        </div>
      {/if}

      <span class="text-normal text-center">{displayName}</span>
      {#if allow_sorting && sortColumnId === params.column.getColId() && align !== LBCellAlign.RIGHT}
        <div class={`m-2 w-4 ${getRotationClass(sortDirection)}`}>
          <img src={svgSortDsc} class="font-bold" alt="" />
        </div>
      {/if}
    </div>

    <div id={`menu-${params.column.getColId()}`} class="ml-1 mr-0 flex w-8 w-8 justify-end">
      <LBIconButton icon={menuFilter} classes="flex w-7 h-7 justify-end item-center" imgClass="w-4 h-4" on:click={onMenuClicked} />
    </div>
  </div>
{/if}
