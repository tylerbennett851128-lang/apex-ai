<script lang="ts">
  import upDownArrow from '$assets/svg/up-down-arrow.svg';
  import AttributeFormItem from './AttributeFormItem.svelte';
  export let readOnly: boolean = false;
  export let onRemoveItem: (item: any) => void;
  export let onToggleOpen: () => void;
  export let selected: string | string[];
  export let mapItems: Record<string, any> = {};
  export let placeholder: string = 'Select';
</script>

<div
  class="flex min-h-[40px] w-full flex-wrap items-center {readOnly ? 'bg-[#f2f2f2]' : 'bg-white hover:cursor-pointer'} overflow-hidden rounded border border-gray-400 py-1 pl-3 pr-10 text-left text-sm shadow-sm"
  on:click|preventDefault|stopPropagation={onToggleOpen}
>
  {#if selected}
    {#if Array.isArray(selected)}
      {#if selected.length > 0}
        {#each selected as key}
          <AttributeFormItem bind:selected={key} bind:selectedItem={mapItems[key]} {onRemoveItem} />
        {/each}
      {:else}
        <span>{placeholder}</span>
      {/if}
    {:else}
      <span>{mapItems[selected] && mapItems[selected].display ? mapItems[selected].display : selected}</span>
    {/if}
  {:else}
    <span>{placeholder}</span>
  {/if}

  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
    <img src={upDownArrow} class="h-5 w-5" alt="" />
  </div>
</div>
