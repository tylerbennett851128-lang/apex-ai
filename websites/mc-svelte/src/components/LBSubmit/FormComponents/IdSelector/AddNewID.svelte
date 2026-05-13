<script lang="ts">
  import LBTextInput from '../LBTextInput.svelte';
  import { createEventDispatcher } from 'svelte';
  import { EnumAttributeQueryService } from '$src/mc';
  import { FORM_TYPE } from '$src/lib/services/sidebar.service';
  const dispatch = createEventDispatcher();

  export let loading = false;
  export let selected: any;

  let row_data = {
    id_field : '',
    display : '',
    name : ''
  };

  let id_field_name = '';

  $: {
    selected;
    if (selected) {
      
    }
  }


  const onCancel = () => {
    dispatch('cancel');
  };

  const onSubmit = async () => {
    if (loading == false) {
      loading = true;
      const queryService = new EnumAttributeQueryService();
      const result = await queryService.submit(row_data, FORM_TYPE.ADD);
      console.log('result : ', result);
      loading = false;
      dispatch('cancel');
    }
  };  
</script>

<div class="flex h-full w-full flex-col p-2">
  <span class="text-sm">Name</span>

  <div class="flex w-full flex-row items-center justify-between">
      <LBTextInput placeholder={'Enter Name'} bind:value={row_data[id_field_name]} onChange={(value) => {}} />
  </div>

  <span class="mt-4 text-sm">Display</span>
  <LBTextInput placeholder={'Enter Display'} bind:value={row_data.display} onChange={(value) => {}} />

  <div class="flex w-full flex-row items-center justify-end pt-2">
    <button class="mr-2 inline-flex justify-center rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100" on:click={onCancel}> CLOSE </button>
    <button class="inline-flex justify-center rounded-md border border-gray-300 bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-500" on:click={onSubmit}> SUBMIT </button>
  </div>
</div>
