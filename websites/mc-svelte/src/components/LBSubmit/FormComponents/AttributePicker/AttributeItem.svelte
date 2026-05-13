<script lang="ts">
  import checkMark from '$assets/svg/check.svg';
  import chevronRight from '$assets/svg/chevron-right.svg';
  import type { ATTRIBUTE_ITEM_TYPE } from '$components/LBDataTable/Cells/LBColumn';
  export let item: ATTRIBUTE_ITEM_TYPE;
  export let handleClickChevron: (item: ATTRIBUTE_ITEM_TYPE) => void;
  export let onItemSelected: (item: string) => void;
  export let selected: string | string[];
  export let idField = 'node_path';
  let checked: boolean = false;

  const isAbleToCheckMark = (item: ATTRIBUTE_ITEM_TYPE) => {
    if (selected) {
      if (Array.isArray(selected)) {
        const find = selected.find((element) => {
          return item[idField] && element === item[idField];
        });
        return find ? true : false;
      }

      return item[idField] && selected == item[idField];
    }

    return false;
  };

  $: {
    selected;
    checked = isAbleToCheckMark(item);
  }
</script>

<div class="flex h-10 w-full cursor-pointer items-center justify-start overflow-hidden border border-zinc-100 py-2 pl-3 hover:border-zinc-300 hover:bg-zinc-200" on:click|preventDefault|stopPropagation={() => onItemSelected(item[idField])}>
  <div class="flex h-full w-[8%] items-center justify-start">
    <div class="flex h-4 w-4 items-center justify-center rounded-sm" style={`background-color: ${item.format_data && item.format_data.color_code ? item.format_data.color_code : '#455a64'};`}>
      {#if checked}
        <img src={checkMark} class="h-3 w-3" alt="" />
      {/if}
    </div>
  </div>

  <div class="flex h-full w-[92%] flex-col items-start justify-center px-2">
    <span class="flex w-full truncate text-sm">
      {item.display ? item.display : item[idField]}
    </span>
  </div>

  {#if item.leaf === false}
    <img src={chevronRight} class="h-6 w-6 cursor-pointer" alt="" on:click|stopPropagation|preventDefault={() => handleClickChevron(item)} />
  {/if}
</div>
