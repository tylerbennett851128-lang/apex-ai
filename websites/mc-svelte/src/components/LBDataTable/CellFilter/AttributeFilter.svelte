<script lang="ts">
  import AttributePicker from '$components/LBSubmit/FormComponents/AttributePicker/LBAttributePicker.svelte';
  import type { LBAttrColumn } from '../Cells/LBAttrColumn';
  export let cell: LBAttrColumn;
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
  <AttributePicker {cell} bind:forceLoad bind:selected onClose={onSelected} inlineMode={true} classes={'max-h-[250px]'} />
  <div class="ag-filter-apply-panel">
    <button type="submit" id="applyFilterButton" class="ag-standard-button ag-filter-apply-panel-button" on:click={onApply}>Apply</button>
  </div>
</div>
