<script lang="ts">
  import upDownArrow from '$assets/svg/up-down-arrow.svg';
  import closeIcon from '$assets/svg/close.svg';
  export let readOnly: boolean = false;
  export let name: string;
  export let id: string;
  export let onRemoveItem: (item: any) => void;
  export let onToggleOpen: () => void;
  export let selected: any | any[];
  export let listItems: any[] = [];
  export let loading: boolean = false;

  const getSelectedItemName = (selected: any) => {
    const selectedItem = listItems.find((element) => selected && element[id] === selected);
    return selectedItem ? selectedItem[name] : '';
  };

  let title = '';
  $: {
    if (listItems && listItems.length > 0) {
      const name = getSelectedItemName(selected);
      title = name ? name : 'Select';
    } else {
      if (loading) {
        title = selected;
      } else {
        title = 'Select';
      }
    }
  }
</script>

<div class="flex min-h-[40px] w-full flex-wrap items-center rounded border border-gray-400 py-1 pl-3 pr-10 text-left text-sm shadow-sm {readOnly ? 'bg-[#f2f2f2]' : 'bg-white hover:cursor-pointer'}" on:click|stopPropagation={onToggleOpen}>
  {#if selected}
    {#if Array.isArray(selected) && selected.length > 0}
      {#each selected as idItem}
        <div class="my-0.5 mr-2 flex h-full items-center rounded-md border border-gray-300 bg-gray-200 px-2 py-0.5">
          <span class="text-xs">{getSelectedItemName(idItem)}</span>
          <img src={closeIcon} class="ml-2 h-3 w-3" on:click|stopPropagation|preventDefault={() => onRemoveItem(idItem)} alt="" />
        </div>
      {/each}
    {:else}
      <span class="mr-2">{title}</span>
    {/if}
  {:else}
    <span>Select</span>
  {/if}

  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
    <img src={upDownArrow} class="h-5 w-5" alt="" />
  </div>
</div>
