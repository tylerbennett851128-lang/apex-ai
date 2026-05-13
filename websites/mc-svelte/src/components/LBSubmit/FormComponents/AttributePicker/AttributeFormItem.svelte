<script lang="ts">
  import closeIcon from '$assets/svg/close.svg';
  import { getRGBAColor } from '$lib/utils';
  import type { ATTRIBUTE_ITEM_TYPE } from '$components/LBDataTable/Cells/LBColumn';
  export let selected: string;
  export let selectedItem: ATTRIBUTE_ITEM_TYPE;
  export let onRemoveItem: (selected: string) => void;
</script>

{#if selectedItem && typeof selectedItem === 'object'}
  <div
    class="my-0.5 mr-2 flex flex-row items-center justify-center rounded border px-2 py-0.5"
    style={selectedItem.format_data && selectedItem.format_data.color_code
      ? `border-color: ${getRGBAColor(selectedItem.format_data.color_code, 1.0)}; background-color: ${getRGBAColor(selectedItem.format_data.color_code, 0.1)}; color: ${getRGBAColor(selectedItem.format_data.color_code, 1)};`
      : 'border-color: rgb(156 163 175); background-color: rgb(229 231 235);'}
  >
    <span>{selectedItem.display ? selectedItem.display : selected}</span>
    <img src={closeIcon} class="ml-2 h-3 w-3" on:click|stopPropagation|preventDefault={() => onRemoveItem(selected)} alt="" />
  </div>
{:else}
  <div class="my-0.5 mr-2 flex flex-row items-center justify-center rounded border border-gray-400 bg-gray-200 px-2 py-0.5">
    <span>{selected}</span>
    <img src={closeIcon} class="ml-2 h-3 w-3" on:click|stopPropagation|preventDefault={() => onRemoveItem(selected)} alt="" />
  </div>
{/if}
