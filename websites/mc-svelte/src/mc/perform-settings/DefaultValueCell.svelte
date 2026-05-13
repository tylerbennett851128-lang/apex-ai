<script lang="ts">
  // This is the component to show the data with the compoennt that is correspond for schema id.
  import { ATTRIBUTE_ARRAY_SCHEMA_TYPES, ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES, ATTRIBUTE_SCHEMA_TYPES, BOOLEAN_SCHEMA_TYPES, DATE_SCHEMA_TYPES, GET_SCHEMA_TYPE, JSON_SCHEMA_TYPES, LBCellAlign, SchemaDataAnnotation } from '$lib/types';
  import type { ICustomCellParams } from '$components/LBDataTable/Cells/LBColumn';
  import LBCheckBoxCell from '$components/LBDataTable/Cells/LBCheckBoxCell.svelte';
  import LBDateCell from '$components/LBDataTable/Cells/LBDateCell.svelte';
  import LBTextCell from '$components/LBDataTable/Cells/LBTextCell.svelte';
  import LBJsonDataCell from '$components/LBDataTable/Cells/LBJsonDataCell.svelte';
  import LBAttrCell from '$components/LBDataTable/Cells/LBAttrCell.svelte';
  import type { LBSchemaIdColumn } from '$components/LBDataTable/Cells/LBSchemaIdColumn';
  export let params: ICustomCellParams;

  let schemaType: SchemaDataAnnotation = SchemaDataAnnotation.TEXT;

  if (params && params.data) {
    const schemaId = params.data['lb_schema_id'];
    const columnService = params.cell.queryService.columnService;
    const schemaCell = columnService.getCell('lb_schema_id') as unknown as LBSchemaIdColumn;
    if (schemaCell && schemaId) {
      const schemaItem = schemaCell.mapIdToItem[schemaId];
      if (schemaItem) {
        schemaType = GET_SCHEMA_TYPE(schemaItem.lb_data || SchemaDataAnnotation.TEXT);
        params.cell.schemaType = schemaType;
        params.cell.align = LBCellAlign.LEFT;
      }
    }
  }
</script>

{#if schemaType}
  {#if BOOLEAN_SCHEMA_TYPES.includes(schemaType)}
    <LBCheckBoxCell bind:params />
  {:else if DATE_SCHEMA_TYPES.includes(schemaType)}
    <LBDateCell bind:params />
  {:else if JSON_SCHEMA_TYPES.includes(schemaType)}
    <LBJsonDataCell bind:params />
  {:else if ATTRIBUTE_SCHEMA_TYPES.includes(schemaType)}
    <LBAttrCell bind:params />
  {:else if ATTRIBUTE_ARRAY_SCHEMA_TYPES.includes(schemaType)}
    <LBAttrCell bind:params />
  {:else if ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES.includes(schemaType)}
    <LBAttrCell bind:params />
  {:else}
    <LBTextCell bind:params />
  {/if}
{/if}
