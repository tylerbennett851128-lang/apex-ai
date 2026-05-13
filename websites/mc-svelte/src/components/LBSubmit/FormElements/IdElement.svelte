<script lang="ts">
  import LbIdSelector from '$components/LBSubmit/FormComponents/IdSelector/LbIdSelector.svelte';
  import LbSchemaIdSelector from '$components/LBSubmit/FormComponents/IdSelector/LbSchemaIdSelector.svelte';
  import type { LBIdColumn } from '$components/LBDataTable/Cells/LBIdColumn';
  import type { LBSchemaIdColumn } from '$components/LBDataTable/Cells/LBSchemaIdColumn';
  import Label from './Label.svelte';
  import ErrorMessage from './ErrorMessage.svelte';
  export let onChange: (colId: string, value: any) => void;
  export let cell: LBIdColumn;
  export let row_data: any;

  let schemaIdCell: LBSchemaIdColumn;

  $: {
    cell;
    if (cell.id === 'lb_schema_id') {
      schemaIdCell = cell as unknown as LBSchemaIdColumn;
    }
  }
</script>

<Label label={cell.name} required={cell.required} />
{#if cell.id === 'lb_schema_id' && schemaIdCell}
  <LbSchemaIdSelector bind:cell={schemaIdCell} open={false} bind:selected={row_data[cell.id]} onClose={(selected) => onChange(cell.id, selected)} />
{:else}
  <LbIdSelector {cell} open={false} bind:selected={row_data[cell.id]} onClose={(selected) => onChange(cell.id, selected)} />
{/if}
<ErrorMessage bind:message={cell.errorMessageInForm} />
