<script lang="ts">
  import LBJsonEditor from '$components/LBSubmit/FormComponents/LBJsonEditor.svelte';
  export let content: any;
  export let readOnly = false;
  export let onChange: (data: any) => void;

  const onCancel = () => {
    onChange(null);
  };

  const onSubmit = () => {
    onChange(content);
  };
</script>

<div class="inline-json-editor flex h-full w-full flex-col items-center">
  <LBJsonEditor bind:content bind:readOnly />

  <div class="flex h-full w-full items-center justify-end border-t py-2 px-4">
    <button type="cancel" id="applyCancelButton" class="ag-standard-button ag-filter-apply-panel-button" on:click|preventDefault|stopPropagation={onCancel}>Cancel</button>
    <button type="submit" id="applySubmitButton" class="ag-standard-button ag-filter-apply-panel-button" on:click|preventDefault|stopPropagation={onSubmit}>Submit</button>
  </div>
</div>
