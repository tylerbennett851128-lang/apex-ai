<script lang="ts">
  import LbIdSelector from '$components/LBSubmit/FormComponents/IdSelector/LbIdSelector.svelte';
  import type { LBIdColumn } from '$components/LBDataTable/Cells/LBIdColumn';
  export let cell: LBIdColumn;
  export let onClose: (selected: any) => any;
  export let forceLoad: boolean = false;

  let selected: any;
  const onSelected = (item: any) => {
    selected = item;
  };

  const onApply = () => {
    onClose(selected);
  };
</script>

<div class="ag-filter-wrapper ag-focus-managed">
  <LbIdSelector {cell} bind:forceLoad bind:selected onClose={onSelected} inlineMode={true} classes={'max-h-[250px]'} />
  <div class="ag-filter-apply-panel">
    <button type="submit" id="applyFilterButton" class="ag-standard-button ag-filter-apply-panel-button" on:click={onApply}>Apply</button>
  </div>
</div>
