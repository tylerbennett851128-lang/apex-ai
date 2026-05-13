<script lang="ts">
  import LBModal from '$components/LBModal/LBModal.svelte';
  import LBSearchBar from '$components/LBFilter/LBSearchBar.svelte';
  import LBProgressBar from '$components/LBProgressBar.svelte';
  import LBIconButton from '$components/LBIconButton.svelte';
  import InlineEditingButton from '$components/LBDataTable/InlineEditButton.svelte';
  import { ActionBarEvent, ACTION_BAR_EVENT, type QueryService } from '$lib/services/query.service';
  import plusIcon from '$assets/svg/plus-icon.svg';
  import deleteIcon from '$assets/svg/delete-icon.svg';
  import cloneIcon from '$assets/svg/clone.svg';
  import { onDestroy } from 'svelte';
  import { sidebarService } from '$mc';
  import { FORM_TYPE } from '$lib/services/sidebar.service';
  import { get } from 'svelte/store';

  export let queryService: QueryService;
  export let refreshPage: () => void;

  let loading = false;
  let selectedRows: any[] = [];
  let openDeleteModal = false;

  const onToggleModal = ({ detail }) => {
    if (detail === 'Submit') {
      openDeleteModal = false;
      queryService.actionBarEvent.update((value) => {
        const rows = get(queryService.selectedRows);
        if (value) {
          value.event = ACTION_BAR_EVENT.CONFIRM_DELETE;
          value.params = rows;
        } else {
          value = new ActionBarEvent(ACTION_BAR_EVENT.CONFIRM_DELETE, rows);
        }
        return value;
      });
    } else if (detail === 'Cancel') {
      openDeleteModal = false;
    }
  };

  const onAddInfo = () => {
    sidebarService.update((value) => {
      value.open = true;
      value.queryService = queryService;
      value.row = {};
      value.formType = FORM_TYPE.ADD;
      return value;
    });
  };

  const unsubscribeActionBarEvent = queryService.actionBarEvent.subscribe((value) => {
    if (value && value.event === ACTION_BAR_EVENT.SHOW_MODAL) {
      openDeleteModal = true;
    }
  });

  const deleteItems = () => {
    openDeleteModal = true;
  };

  const cloneRow = () => {
    const rowToClone = selectedRows[0];

    sidebarService.update((value) => {
      value.open = true;
      value.queryService = queryService;
      value.row = rowToClone;
      value.formType = FORM_TYPE.CLONE;
      return value;
    });
  };

  const unsubscribeSelectedRows = queryService.selectedRows.subscribe((value) => {
    selectedRows = value;
  });

  const unsubscribeQueryList = queryService.queryList.subscribe((value) => {
    if (value.length > 0) {
      loading = true;
    } else {
      loading = false;
    }
  });

  onDestroy(() => {
    unsubscribeSelectedRows();
    unsubscribeQueryList();
    unsubscribeActionBarEvent();
  });
</script>

<LBProgressBar bind:loading />

<div class="h-hit flex w-full items-center justify-between bg-white">
  <div class="flex w-[70%] items-center justify-end">
    <LBSearchBar bind:filterService={queryService.filterService} on:handleFilter={refreshPage} />
  </div>

  <div class="flex w-[30%] flex-row items-center justify-end">
    {#if queryService.isInlineEditable && queryService.isEditable}
      <InlineEditingButton bind:inlineEditing={queryService.inlineEditing} />
    {/if}
    {#if queryService.isAddable}
      <LBIconButton icon={plusIcon} classes="mx-2 w-8 h-8" on:click={onAddInfo} />
    {/if}
  </div>
</div>

{#if selectedRows && selectedRows.length > 0 && (queryService.selectionDeletable || queryService.isMultiSelectable)}
  <div class="my-1 flex h-fit w-full items-center justify-start px-2">
    <span class="mr-4 text-sm">Selected: {selectedRows.length}</span>
    <LBIconButton icon={deleteIcon} classes="mx-1 w-8 h-8" imgClass="w-5 h-5" on:click={deleteItems} />

    {#if queryService.isAbleToClone}
      {#if selectedRows.length === 1}
        <LBIconButton icon={cloneIcon} classes="mx-1 w-8 h-8" imgClass="w-5 h-5" on:click={cloneRow} />
      {/if}
    {/if}
  </div>
{/if}

<LBModal showModal={openDeleteModal} title={'Delete Selected Items'} captionForSubmit={'DELETE'} on:modalAction={onToggleModal} cssModal={'max-w-md rounded-lg'}>
  <div class="flex h-full w-full items-center justify-center p-4">
    <span class="text-md text-gray-800">Selected items will be permanently removed from the database.</span>
  </div>
</LBModal>
