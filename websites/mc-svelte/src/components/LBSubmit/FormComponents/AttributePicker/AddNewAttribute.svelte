<script lang="ts">
  import ColorPicker from '$components/LBColorPicker.svelte';
  import LBTextInput from '../LBTextInput.svelte';
  import LBTextArea from '../LBTextArea.svelte';
  import { createEventDispatcher } from 'svelte';
  import { EnumAttributeQueryService } from '$src/mc';
  import { FORM_TYPE } from '$src/lib/services/sidebar.service';
  const dispatch = createEventDispatcher();

  export let loading = false;
  export let selected: any;

  let color;

  let row_data = {
    attribute_value_to_add: '',
    current_level_path: selected ? selected.level_path : '',
    parent_node_path: selected ? selected.node_path : '',
    display: '',
    attribute_description: '',
    lb_sequence: 0,
    format_data: {
      color_code: '#546E7A',
      chip_type: 'Path'
    }
  };

  $: {
    selected;
    if (selected) {
      row_data.current_level_path = selected.level_path;
      row_data.parent_node_path = selected.node_path;
    }
  }

  $: {
    row_data;
    if (row_data) {
      const format_data = row_data['format_data'] ? row_data['format_data'] : { color_code: '#546E7A', chip_type: 'Path' };
      if (!row_data['format_data']) {
        row_data['format_data'] = format_data;
      }
      color = format_data['color_code'] ? format_data['color_code'] : '#546E7A';
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

  const onChangeColor = ({ detail: { value } }) => {
    if (row_data) {
      const format_data = row_data['format_data'] ? row_data['format_data'] : { color_code: '#546E7A', chip_type: 'Path' };
      format_data.color_code = value;
      const new_row_data = row_data;
      new_row_data['format_data'] = format_data;
      row_data = new_row_data;
    }
  };
</script>

<div class="flex h-full w-full flex-col p-2">
  <span class="text-sm">Attribute Value</span>

  <div class="flex w-full flex-row items-center justify-between">
    <div class="w-[5%]">
      <ColorPicker bind:value={color} on:changeColor={onChangeColor} />
    </div>

    <div class="w-[85%]">
      <LBTextInput placeholder={'Enter Attribute Value'} bind:value={row_data.attribute_value_to_add} onChange={(value) => {}} />
    </div>
  </div>

  <span class="mt-4 text-sm">Display</span>
  <LBTextInput placeholder={'Enter Display'} bind:value={row_data.display} onChange={(value) => {}} />

  <span class="mt-4 text-sm">Description</span>
  <LBTextArea placeholder={'Enter Description'} bind:value={row_data.attribute_description} onChange={(value) => {}} />

  <div class="flex w-full flex-row items-center justify-end pt-2">
    <button class="mr-2 inline-flex justify-center rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100" on:click={onCancel}> CLOSE </button>
    <button class="inline-flex justify-center rounded-md border border-gray-300 bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-500" on:click={onSubmit}> SUBMIT </button>
  </div>
</div>
