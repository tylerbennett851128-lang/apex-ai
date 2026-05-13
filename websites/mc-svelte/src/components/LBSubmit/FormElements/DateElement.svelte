<script lang="ts">
  import LBDatePicker from '$components/LBSubmit/FormComponents/LBDatePicker.svelte';
  import Label from './Label.svelte';
  import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
  import ErrorMessage from './ErrorMessage.svelte';
  export let onChange: (colId: string, value: any) => void;
  export let cell: LBColumn;
  export let row_data: any;
</script>

<Label label={cell.name} required={cell.required} />
<LBDatePicker bind:readOnly={cell.readOnly} open={false} bind:timestamp={row_data[cell.id]} onClose={(value) => onChange(cell.id, value)} />
<ErrorMessage bind:message={cell.errorMessageInForm} />
