<script lang="ts">
  import { get, writable, type Writable } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { createEventDispatcher, onDestroy } from 'svelte';
  import { AssignIntentsQueryService } from '$mc';
  import type { ColumnService } from '$lib/services/column.service';
  import ButtonCancel from '$components/LBModal/ButtonCancel.svelte';
  import ButtonSubmit from '$components/LBModal/ButtonSubmit.svelte';
  import { FORM_TYPE } from '$lib/services/sidebar.service';
  import { assignIntentsConfig } from '$mc/config/roleTable.config';
  const dispatch = createEventDispatcher();

  export let role_id;
  export let role_name;

  let queryService = new AssignIntentsQueryService(role_id, role_name);
  queryService.rowClicking = false;
  queryService.inlineEditing = true;

  queryService.columnService.setDefaultConfig(assignIntentsConfig);
  const columnService: Writable<ColumnService> = writable(queryService.columnService);

  let disableSubmit: boolean = false;

  const modalAction = (value) => {
    dispatch('modalAction', value);
  };

  const onSubmit = async () => {
    await queryService.submit(get(queryService.selectedRows), FORM_TYPE.ADD);
    modalAction('Submit');
  };

  const unsubscribeSelectedRows = queryService.selectedRows.subscribe((rows) => {
    disableSubmit = rows.length > 0 ? false : true;
  });

  onDestroy(unsubscribeSelectedRows);
</script>

<div class="flex h-full w-full flex-col">
  <div class="flex h-[80%] w-full">
    <LBDataTable bind:queryService bind:columnService={$columnService} defaultClass="flex h-full w-full flex-col border border-gray-300 bg-white" />
  </div>

  <div class="flex h-[20%] w-full">
    <div class="flex h-16 w-full flex-row justify-end py-3">
      <ButtonCancel on:click={() => modalAction('Cancel')} />
      <ButtonSubmit on:click={() => onSubmit()} bind:disabled={disableSubmit} />
    </div>
  </div>
</div>
