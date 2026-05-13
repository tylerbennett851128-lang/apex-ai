<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let isMenuOepn = false;
  export let menuItems: {
    id: string;
    name: string;
    onClick: () => void;
    icon: string;
  }[] = [];

  const onItemSelected = (item: any) => {
    isMenuOepn = false;
    dispatch('itemSelected', { item });
  };
</script>

<div class={`relative ${isMenuOepn ? 'visible' : 'invisible'}`}>
  <div class="absolute right-0 top-0 z-50 mb-1 max-h-[300px] w-[250px] w-[300px] overflow-hidden rounded-md border border-gray-300 bg-zinc-100 shadow-lg">
    <ul class={`h-fit w-full overflow-auto bg-white`}>
      {#each menuItems as item, idx}
        <li class="items-between m-0 flex h-12 items-center justify-between border border-zinc-100 p-0 hover:border-zinc-200 hover:bg-zinc-200" on:click={() => onItemSelected(item)}>
          <span class="block w-full truncate text-xs font-normal sm:text-sm">
            {item.name}
          </span>
        </li>
      {/each}
    </ul>
  </div>
</div>
