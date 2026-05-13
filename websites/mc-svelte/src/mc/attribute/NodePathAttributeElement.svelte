<script lang="ts">
  import LBTextField from '$components/LBSubmit/FormComponents/LBTextInput.svelte';
  import Label from '$components/LBSubmit/FormElements/Label.svelte';
  import ColorPicker from '$components/LBColorPicker.svelte';
  import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
  import ErrorMessage from '$components/LBSubmit/FormElements/ErrorMessage.svelte';
  export let onChange: (colId: string, value: any) => void;
  export let cell: LBColumn;
  export let row_data: any;

  let node_path;
  let color;

  const list = row_data[cell.id] ? row_data[cell.id].split('.') : [];
  node_path = list.length > 1 ? list.pop() : row_data[cell.id];

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

  $: {
    node_path;
    row_data[cell.id] = node_path;
  }

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

<Label label={cell.name} bind:required={cell.required} />

<div class="flex w-full flex-row items-center justify-between">
  <div class="w-[10%]">
    <ColorPicker bind:value={color} on:changeColor={onChangeColor} />
  </div>

  <div class="w-[90%]">
    <LBTextField bind:readOnly={cell.readOnly} bind:value={node_path} onChange={(value) => onChange(cell.id, value)} />
  </div>
</div>

<ErrorMessage bind:message={cell.errorMessageInForm} />
