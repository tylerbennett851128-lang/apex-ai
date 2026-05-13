<script lang="ts">
  import LBSchemaIdSelector from '$components/LBSubmit/FormComponents/IdSelector/LbSchemaIdSelector.svelte';
  import Label from '$components/LBSubmit/FormElements/Label.svelte';
  import type { LBSchemaIdColumn } from '$components/LBDataTable/Cells/LBSchemaIdColumn';
  import ErrorMessage from './ErrorMessage.svelte';

  export let cell: LBSchemaIdColumn;
  export let row_data: any;
</script>

<Label label={cell.name} required={cell.required} />
<LBSchemaIdSelector {cell} open={false} bind:selected={row_data[cell.id]} onClose={() => {}} />
<ErrorMessage bind:message={cell.errorMessageInForm} />
