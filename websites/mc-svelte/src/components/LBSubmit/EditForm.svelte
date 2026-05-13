<script lang="ts">
  import { isEmpty } from 'lodash-es';
  import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
  import { getUpdated, isEqual, isValid } from '$lib/utils';
  import { createEventDispatcher } from 'svelte';
  import type { QueryService } from '$lib/services/query.service';
  import { SchemaDataAnnotation } from '$lib/types';
  import { FORM_TYPE, SUBMIT_STATE } from '$lib/services/sidebar.service';
  const dispatch = createEventDispatcher();

  export let formType: FORM_TYPE;
  export let queryService: QueryService;
  export let cellsForForm: LBColumn[] = [];
  export let row_data: any;
  export let inInitData: boolean = false;
  export let updatedCols = {}; // This is used to detect updated columns

  let row_initial: any;
  let error_message;

  $: {
    inInitData;
    if (!inInitData) {
      row_initial = JSON.parse(JSON.stringify(row_data));

      if (cellsForForm && cellsForForm.length > 0) {
        cellsForForm.forEach((cell) => {
          cell.errorMessageInForm = null;
        });
      }

      inInitData = true;
    }
  }

  const onCancel = () => {
    dispatch('close', { status: SUBMIT_STATE.CLOSED });
  };

  const onDelete = () => {
    dispatch('delete');
  };

  const onChange = (colId: string, value: any) => {
    const isUpdated = !isEqual(row_initial[colId], value);
    // If some fields updated from original value, then it's registered at updatedCols which is used to display confirmation modal.
    if (isUpdated) {
      updatedCols[colId] = value;
    } else {
      delete updatedCols[colId];
    }
  };

  const isThereMissingFields = (row_data: any): boolean => {
    let isMissed = false;

    for (let i = 0; i < cellsForForm.length; i++) {
      const cell = cellsForForm[i];

      if (cell.schemaType !== SchemaDataAnnotation.CHECKBOX) {
        if (cell.required) {
          if (!isValid(row_data[cell.id])) {
            if (!isMissed) {
              error_message = `${cell.name} can't be empty`;
              isMissed = true;
            }
            cell.errorMessageInForm = `${cell.name} can't be empty`;
          } else {
            cell.errorMessageInForm = null;
          }
          cellsForForm[i] = cell;
        }
      }
    }

    return isMissed;
  };

  const getDataToAdd = (data: any) => {
    const keys = Object.keys(data);
    const newData = {};

    keys.forEach((key) => {
      if (isValid(data[key])) {
        newData[key] = data[key];
      }
    });

    return newData;
  };

  const onKeyPressEnter = async ($event) => {
    if ($event && $event.key === 'Enter') {
      if ((queryService.isEditable && formType === FORM_TYPE.UPDATE) || (queryService.isAddable && formType === FORM_TYPE.ADD) || (queryService.isAbleToClone && formType === FORM_TYPE.CLONE)) {
        await onSubmit();
      }
    }
  };

  const onSubmit = async () => {
    let data = row_data;
    const missed = isThereMissingFields(data);

    if (!missed) {
      let result;

      if (formType === FORM_TYPE.UPDATE) {
        data = getUpdated(row_initial, row_data);
        result = await queryService.submit(data, formType);
      } else if (formType === FORM_TYPE.ADD || formType === FORM_TYPE.CLONE) {
        const newData = getDataToAdd(data);
        result = await queryService.submit(newData, formType);
      }

      if (result) {
        dispatch('close', { status: SUBMIT_STATE.UPDATED });
        return;
      }
    }
  };
</script>

<svelte:window on:keypress={onKeyPressEnter} />

{#if queryService}
  {#if row_data && cellsForForm && cellsForForm.length > 0}
    <div class="mx-auto max-h-[76vh] min-h-[64vh] w-full overflow-y-auto bg-white px-5 pt-4 pb-8">
      {#if queryService.columnService && !isEmpty(queryService.columnService.messageAtForm)}
        <div class="my-4 items-center justify-center  rounded border border-[#CFD8DC] bg-gray-100 p-2 text-center">
          <span class="text-sm text-[#37474F]">
            {queryService.columnService.messageAtForm}
          </span>
        </div>
      {/if}

      <div class="grid grid-cols-1 gap-0">
        {#each cellsForForm as cell}
          <div class="my-1.5 w-full">
            <svelte:component this={cell.getElementForForm()} bind:cell bind:row_data {onChange} />
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <div class="sticky bottom-16 z-[150] flex w-full flex-col items-center justify-start border-t border-gray-300 bg-gray-100 px-2 py-4">
    <div class="flex w-full flex-row">
      {#if formType === FORM_TYPE.UPDATE && queryService.isDeletable}
        <button on:click={onDelete} class="mx-2 inline-flex justify-center rounded-md border border-gray-300 bg-gray-50 px-7 py-2 font-medium text-red-700 shadow-sm hover:bg-gray-100 sm:w-auto sm:text-sm"> DELETE </button>
      {/if}

      <div class="flex h-full w-full flex-row items-center justify-end">
        <button on:click={onCancel} class="mx-2 inline-flex justify-center rounded-md border border-gray-300 bg-gray-50 px-7 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-100 sm:w-auto sm:text-sm"> CLOSE </button>

        {#if (queryService.isEditable && formType === FORM_TYPE.UPDATE) || (queryService.isAddable && formType === FORM_TYPE.ADD) || (queryService.isAbleToClone && formType === FORM_TYPE.CLONE)}
          <button on:click={onSubmit} class="x mx-2 inline-flex justify-center rounded-md border border-gray-300 bg-gray-700 px-7 py-2  font-medium text-white shadow-sm hover:bg-gray-500 sm:w-auto sm:text-sm"> SUBMIT </button>
        {/if}
      </div>
    </div>

    {#if error_message}
      <div class="mt-4 whitespace-normal rounded-md border-2 border-red-200 bg-red-100 p-2 text-sm text-red-500">
        <p>{error_message}</p>
      </div>
    {/if}
  </div>
{/if}
