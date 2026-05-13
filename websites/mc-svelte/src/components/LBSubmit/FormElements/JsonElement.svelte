<script lang="ts">
  import LBJsonEditor from '$components/LBSubmit/FormComponents/LBJsonEditor.svelte';
  import Label from './Label.svelte';
  import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
  import ErrorMessage from './ErrorMessage.svelte';
  export let cell: LBColumn;
  export let row_data: any;
  export let onChange: (colId: string, value: any) => void;
</script>

<Label label={cell.name} required={cell.required} />
<div class="json-editor">
  <LBJsonEditor bind:content={row_data[cell.id]} bind:readOnly={cell.readOnly} onChange={(value) => onChange(cell.id, value)} />
</div>
<ErrorMessage bind:message={cell.errorMessageInForm} />
