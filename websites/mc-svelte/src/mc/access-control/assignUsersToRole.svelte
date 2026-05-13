<script lang="ts">
  import { get } from 'svelte/store';
  import LBDataTable from '$components/LBDataTable/LBDataTable.svelte';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { AssignRolesQueryService } from '$mc';
  import { FORM_TYPE } from '$lib/services/sidebar.service';
  import ButtonCancel from '$components/LBModal/ButtonCancel.svelte';
  import ButtonSubmit from '$components/LBModal/ButtonSubmit.svelte';
  import { assignUsersConfig } from '../config/UserTable.config';
  const dispatch = createEventDispatcher();

  export let role_id;
  export let role_name;

  let queryService = new AssignRolesQueryService(role_id, role_name);
  queryService.rowClicking = false;
  queryService.inlineEditing = true;
  let disableSubmit = false;
  let wasMounted = false;

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

  onMount(async () => {
    await queryService.columnService.setDefaultConfig(assignUsersConfig);
    wasMounted = true;
  });

  onDestroy(unsubscribeSelectedRows);
</script>

<div class="absolulte left-0 top-0 h-full w-full">
  <div class="relative top-0 flex h-[80%] w-full">
    {#if wasMounted}
      <LBDataTable bind:queryService bind:columnService={queryService.columnService} defaultClass="flex h-full w-full flex-col border border-gray-300 bg-white" />
    {:else}
      <div class="flex h-full w-full items-center justify-center border">
        <span>Loading...</span>
      </div>
    {/if}
  </div>

  <div class="flex h-[20%] w-full">
    <div class="flex h-16 w-full flex-row justify-end py-3">
      <ButtonCancel on:click={() => modalAction('Cancel')} />
      <ButtonSubmit on:click={() => onSubmit()} bind:disabled={disableSubmit} />
    </div>
  </div>
</div>
