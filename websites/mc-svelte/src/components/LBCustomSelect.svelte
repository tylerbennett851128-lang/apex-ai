<script lang="ts" context="module">
  export type ListItemType = { value_display: string; value: string };
</script>

<script lang="ts">
  import upDownArrow from '$assets/svg/up-down-arrow.svg';
  import { clickOutside } from 'svelte-use-click-outside';
  let hidden = true;
  const onSelect = () => {
    hidden = !hidden;
  };

  const onItemClick = (item: any) => {
    if (onClick) onClick(item);
    selectedValue = item;
    hidden = !hidden;
  };

  export let disabled = false;
  export let containerStyle = '';
  export let options: ListItemType[] = [];
  export let selectedValue: ListItemType = undefined;
  export let onClick: (item: ListItemType) => void = undefined;
</script>

<div
  class={`relative m-1 ${containerStyle}`}
  use:clickOutside={() => {
    hidden = true;
  }}
>
  <div
    on:click|preventDefault|stopPropagation={onSelect}
    class="relative flex h-9 w-full min-w-[250px] cursor-default flex-row items-center rounded border border-gray-400 bg-white py-2 pl-3 pr-10 text-left text-xs shadow-sm hover:cursor-pointer focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
  >
    <span class="text-center">
      {selectedValue ? selectedValue.value_display : 'Select'}
    </span>

    <div class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
      <img src={upDownArrow} class="h-5 w-5" alt="" />
    </div>
  </div>
  <ul class={`${hidden || disabled ? 'hidden' : 'visible'} absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded border border-gray-300 bg-white  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`} tabindex="-1">
    {#each options as item}
      <li
        class="relative  cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900  hover:bg-gray-200"
        on:click|preventDefault={() => {
          onItemClick(item);
        }}
      >
        <div class="flex items-center">
          <span class="block truncate text-xs font-normal sm:text-sm">
            {item.value_display}
          </span>
        </div>
      </li>
    {/each}
  </ul>
</div>
