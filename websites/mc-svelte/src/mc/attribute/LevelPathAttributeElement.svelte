<script lang="ts">
  import LBAttributePicker from '$components/LBSubmit/FormComponents/AttributePicker/LBAttributePicker.svelte';
  import Label from '$components/LBSubmit/FormElements/Label.svelte';
  import ColorPicker from '$components/LBColorPicker.svelte';
  import ErrorMessage from '$components/LBSubmit/FormElements/ErrorMessage.svelte';
  import type { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
  export let onChange: (colId: string, value: any) => void;
  export let cell: LBAttrColumn;
  export let row_data: any;

  let color;

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

<Label label={cell.name} required={cell.required} />

<div class="flex w-full flex-row items-center justify-between">
  <div class="w-[10%]">
    <ColorPicker bind:value={color} on:changeColor={onChangeColor} />
  </div>

  <div class="w-[90%]">
    <LBAttributePicker bind:cell open={false} bind:selected={row_data[cell.id]} onClose={(selected) => onChange(cell.id, selected)} />
  </div>
</div>

<ErrorMessage bind:message={cell.errorMessageInForm} />
