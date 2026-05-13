<script lang="ts">
  import { clickOutside } from 'svelte-use-click-outside';
  import LBModal from '$components/LBModal/LBModal.svelte';
  import { isEqual } from '$lib/utils';
  import { sidebarService } from '$mc';
  import { fly } from 'svelte/transition';
  import { onDestroy, tick } from 'svelte';
  import { FORM_TYPE, SUBMIT_STATE } from '$lib/services/sidebar.service';

  let openDeleteModal = false;
  let openUnsaveModal = false;
  let inInitData = false;
  let rowData: any;
  let updatedCols = {};

  const onClose = async ({ detail: { status } }) => {
    await tick();
    sidebarService.update((value) => {
      value.open = false;
      return value;
    });

    if (status === SUBMIT_STATE.UPDATED) {
      sidebarService.update((value) => {
        value.status = SUBMIT_STATE.UPDATED;
        return value;
      });
    }

    await tick();
  };

  const onClickOutside = () => {
    // When user click outside of sidebar, if there are some updated fields, then display the confirmation modal, and if not, close the sidebar
    if (Object.keys(updatedCols).length > 0) {
      openUnsaveModal = true;
    } else {
      onClose({ detail: { status: SUBMIT_STATE.CLOSED } });
    }
  };

  const onToggleUnsaveModal = ({ detail }) => {
    openUnsaveModal = false;
    if (detail === 'Submit') {
      onClose({ detail: { status: SUBMIT_STATE.CLOSED } });
    }
  };

  const onToggleModal = async ({ detail }) => {
    openDeleteModal = !openDeleteModal;
    if (detail === 'Submit') {
      const result = await $sidebarService.queryService.submit(rowData, FORM_TYPE.DELETE);
      if (result) {
        await onClose({ detail: { status: SUBMIT_STATE.UPDATED } });
      }
    }
  };

  const handleDelete = () => {
    openDeleteModal = true;
  };

  const unsubscribe = sidebarService.subscribe((value) => {
    if (value.open) {
      if (!rowData) {
        rowData = {};
      }

      if (!isEqual(rowData, value.row)) {
        inInitData = false;
        rowData = JSON.parse(JSON.stringify(value.row));
      }
    }
  });

  onDestroy(unsubscribe);
</script>

<nav class="fixed top-16 right-0 z-[100] h-full overflow-hidden border-t border-l border-gray-200 bg-gray-100 drop-shadow-xl" transition:fly={{ duration: 250, x: 1000, opacity: 1 }}>
  {#if $sidebarService && $sidebarService.queryService}
    <div class="relative w-[500px]" use:clickOutside={onClickOutside}>
      <div class="sticky top-0 z-[150] flex h-16 w-full items-center justify-between border-b bg-gray-100 p-4 text-center text-black">
        <span class="text-md mx-2 text-[#37474F]">
          {$sidebarService.formType.toUpperCase()}
        </span>
        <span class="text-md ml-2 mr-4 text-left text-[#37474F]">
          {$sidebarService.title}
        </span>
      </div>

      <svelte:component
        this={$sidebarService.component}
        formType={$sidebarService.formType}
        queryService={$sidebarService.queryService}
        cellsForForm={$sidebarService.queryService.columnService.getCellsForForm($sidebarService.formType, rowData)}
        bind:row_data={rowData}
        bind:inInitData
        bind:updatedCols
        on:close={onClose}
        on:delete={handleDelete}
      />
    </div>
  {/if}
</nav>

<LBModal showModal={openDeleteModal} title={'Delete Selected Items'} captionForSubmit={'DELETE'} on:modalAction={onToggleModal} cssModal={'max-w-md rounded-lg'}>
  <div class="flex h-full w-full items-center justify-center p-4">
    <span class="text-md text-gray-800">Selected items will be permanently removed from the database.</span>
  </div>
</LBModal>

// This is the modal to confirm the contiune editing or not
<LBModal showModal={openUnsaveModal} title={'Unsaved Changes'} captionForSubmit={'CONTINUE'} on:modalAction={onToggleUnsaveModal} cssModal={'max-w-md rounded-lg'}>
  <div class="flex h-full w-full items-center justify-center p-4">
    <span class="text-md text-gray-800">You have unsaved changes. Are you sure you want continue?.</span>
  </div>
</LBModal>
