<script lang="ts">
  import LBTextArea from '$components/LBSubmit/FormComponents/LBTextArea.svelte';
  import Label from './Label.svelte';
  import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
  import ErrorMessage from './ErrorMessage.svelte';
  export let onChange: (colId: string, value: any) => void;
  export let cell: LBColumn;
  export let row_data: any;
</script>

<Label label={cell.name} required={cell.required} />
<LBTextArea readOnly={cell.readOnly} bind:value={row_data[cell.id]} placeholder="Enter {cell.name}" onChange={(value) => onChange(cell.id, value)} />
<ErrorMessage bind:message={cell.errorMessageInForm} />
