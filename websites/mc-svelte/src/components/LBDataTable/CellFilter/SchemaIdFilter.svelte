<script lang="ts">
  import LbSchemaIdSelector from '$components/LBSubmit/FormComponents/IdSelector/LbSchemaIdSelector.svelte';
  import type { LBSchemaIdColumn } from '$components/LBDataTable/Cells/LBSchemaIdColumn';
  export let cell: LBSchemaIdColumn;
  export let onClose: (selected: any) => any;
  export let forceLoad: boolean = false;

  let selected: any = '';
  const onSelected = (item: any) => {
    selected = item;
  };

  const onApply = () => {
    onClose(selected);
  };
</script>

<div class="ag-filter-wrapper ag-focus-managed">
  <LbSchemaIdSelector {cell} bind:forceLoad bind:selected onClose={onSelected} inlineMode={true} classes={'max-h-[250px]'} />
  <div class="ag-filter-apply-panel">
    <button type="submit" id="applyFilterButton" class="ag-standard-button ag-filter-apply-panel-button" on:click={onApply}>Apply</button>
  </div>
</div>
