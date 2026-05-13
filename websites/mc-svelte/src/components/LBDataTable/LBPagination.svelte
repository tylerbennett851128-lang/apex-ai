<script lang="ts">
  import LBIconButton from '$components/LBIconButton.svelte';
  import LBSelect from '$components/LBSelect.svelte';
  import { PaginationAction, PaginationRows } from '$lib/types';
  import pageFirstIcon from '$assets/svg/page_first.svg';
  import pageLastIcon from '$assets/svg/page_last.svg';
  import pagePrevIcon from '$assets/svg/page_prev.svg';
  import pageNextIcon from '$assets/svg/page_next.svg';
  import IconButton from '@smui/icon-button';
  import { createEventDispatcher } from 'svelte';
  import type { PaginationService } from '$lib/services/pagination.services';
  import { numberWithCommas } from '$lib/utils';
  const dispatch = createEventDispatcher();

  export let pagination: PaginationService;
  let rowsPerPage = pagination.rowsPerPage;

  const onHandlePage = (action: PaginationAction) => {
    dispatch('handlePage', { action });
  };

  const onClickPrev = () => {
    const prevPage = pagination.currentPage - 1;
    if (prevPage === 0) {
      onClickFirst();
      return;
    }

    pagination.currentPage = prevPage;
    onHandlePage(PaginationAction.PREV);
  };

  const onClickNext = () => {
    const nextPage = pagination.currentPage + 1;
    if (nextPage === pagination.lastPage) {
      onClickLast();
      return;
    }

    pagination.currentPage = nextPage;
    onHandlePage(PaginationAction.NEXT);
  };

  const onClickLast = () => {
    pagination.currentPage = pagination.lastPage;
    onHandlePage(PaginationAction.LAST);
  };

  const onClickFirst = () => {
    pagination.currentPage = 0;
    onHandlePage(PaginationAction.FIRST);
  };

  const updateRowsPerPage = (value: PaginationRows) => {
    if (value != pagination.rowsPerPage) {
      pagination.updateRowsPerPage(value);
      onClickFirst();
    }
  };
</script>

{#if pagination}
  <div class="pagination-bar left-0 right-0 bottom-0 h-14 w-full w-full flex-wrap items-center justify-start bg-white px-2.5">
    <span class="flex-grow text-base font-normal text-[#455a64] md:text-sm">Total: {numberWithCommas(pagination.itemsTotal || 0)}</span>
    <div class="flex flex-grow {pagination.show ? 'visible' : 'invisible'}">
      <LBIconButton icon={pageFirstIcon} on:click={onClickFirst} disabled={pagination.currentPage === 0} />
      <LBIconButton icon={pagePrevIcon} on:click={onClickPrev} disabled={pagination.currentPage === 0} />
      <span class="self-center text-base font-normal text-[#455a64] md:text-sm">Page {pagination.currentPage + 1} of {pagination.lastPage + 1}</span>
      <LBIconButton icon={pageNextIcon} on:click={onClickNext} disabled={pagination.currentPage === pagination.lastPage} />
      <LBIconButton icon={pageLastIcon} on:click={onClickLast} disabled={pagination.currentPage === pagination.lastPage} />
    </div>
    <div class="rpg-container md:md-rpg-container {pagination.show ? 'visible' : 'invisible'}">
      {#if pagination.editable}
        <div class="border-r-bg inline-block cursor-pointer border-r px-2.5 text-sm">
          <IconButton class="material-icons mx-2 h-5 w-5 p-0 align-text-bottom" style="margin-top: 0px; margin-bottom: 0px;" action="check_circle" title="Save">check_circle</IconButton>
          Save
        </div>
      {/if}

      <div class="flex flex-row items-center">
        <span class="mx-2 my-2 flex-shrink-0 text-sm font-normal text-[#455a64]">Rows Per Page</span>
        <LBSelect
          classes="w-24 h-4"
          bind:value={rowsPerPage}
          handleChangeEvent={(value) => updateRowsPerPage(value)}
          options={[
            { value: PaginationRows.ROWS_50, label: '50' },
            { value: PaginationRows.ROWS_100, label: '100' },
            { value: PaginationRows.ROWS_250, label: '250' }
          ]}
        />
      </div>
    </div>
  </div>
{/if}
