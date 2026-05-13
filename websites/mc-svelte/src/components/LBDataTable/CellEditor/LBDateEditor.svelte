<script lang="ts">
  import LBDatePicker from '$components/LBSubmit/FormComponents/LBDatePicker.svelte';
  export let onClose: (timestamp: number) => void;
  export let timestamp;

  let open = true;

  const onCancel = () => {
    onClose(null);
  };

  const onSubmit = () => {
    onClose(timestamp);
  };

  const onSelected = (value: number) => {
    timestamp = value;
  };
</script>

<div class="ag-filter-wrapper ag-focus-managed">
  <LBDatePicker bind:timestamp onClose={onSelected} inlineMode={true} bind:open />
  <div class="flex h-full w-full items-center justify-end border-t py-1 px-4">
    <button type="cancel" id="applyCancelButton" class="ag-standard-button ag-filter-apply-panel-button" on:click|preventDefault|stopPropagation={onCancel}>Cancel</button>
    <button type="submit" id="applySubmitButton" class="ag-standard-button ag-filter-apply-panel-button" on:click|preventDefault|stopPropagation={onSubmit}>Submit</button>
  </div>
</div>
