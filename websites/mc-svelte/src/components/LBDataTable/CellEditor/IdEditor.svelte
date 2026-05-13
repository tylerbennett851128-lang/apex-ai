<script lang="ts">
  import IdSelector from '$components/LBSubmit/FormComponents/IdSelector/LbIdSelector.svelte';
  import type { LBIdColumn } from '$components/LBDataTable/Cells/LBIdColumn';
  export let cell: LBIdColumn;
  export let onClose: (selected: string) => any;
  export let selected: any;

  const onSelected = (item: string) => {
    selected = item;
  };

  const onCancel = () => {
    onClose(null);
  };

  const onSubmit = () => {
    onClose(selected);
  };
</script>

<div class="ag-filter-wrapper ag-focus-managed">
  <IdSelector {cell} bind:selected onClose={onSelected} inlineMode={true} />
  <div class="flex h-full w-full items-center justify-end border-t py-2 px-4">
    <button type="cancel" id="applyCancelButton" class="ag-standard-button ag-filter-apply-panel-button" on:click|preventDefault|stopPropagation={onCancel}>Cancel</button>
    <button type="submit" id="applySubmitButton" class="ag-standard-button ag-filter-apply-panel-button" on:click|preventDefault|stopPropagation={onSubmit}>Submit</button>
  </div>
</div>
