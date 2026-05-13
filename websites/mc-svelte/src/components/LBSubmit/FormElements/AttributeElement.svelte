<script lang="ts">
  import LBAttributePicker from '$components/LBSubmit/FormComponents/AttributePicker/LBAttributePicker.svelte';
  import Label from './Label.svelte';
  import ErrorMessage from './ErrorMessage.svelte';
  import type { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
  export let cell: LBAttrColumn;
  export let row_data: any;
  export let onChange: (colId: string, value: any) => void;
</script>

<Label label={cell.name} required={cell.required} />
<LBAttributePicker {cell} open={false} bind:selected={row_data[cell.id]} onClose={(selected) => onChange(cell.id, selected)} placeholder="Select {cell.name}" />
<ErrorMessage bind:message={cell.errorMessageInForm} />
