<script lang="ts">
  import searchIcon from '$assets/svg/search.svg';
  import Search24 from 'carbon-icons-svelte/lib/Search24';
  import Close24 from 'carbon-icons-svelte/lib/Close24';
  import LBRoundButton from './LBRoundButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import { clickOutside } from 'svelte-use-click-outside';
  import type { TabItemType } from '$lib/services/tab-list.service';

  export let is_oepn = false;
  export let items: TabItemType[] = [];
  let is_search_opened = false;
  let search_val = '';

  let listItems: TabItemType[] = [];

  $: {
    items;
    listItems = items;
  }

  $: {
    search_val;
    if (search_val !== '') {
      listItems = items.filter((item) => item.label.includes(search_val));
    } else {
      listItems = items;
    }
  }

  const dispatch = createEventDispatcher();

  const onCloseSearch = () => {
    is_search_opened = false;
  };

  const onItemSelected = (item: any) => {
    is_search_opened = false;
    is_oepn = false;
    dispatch('itemSelected', { item });
  };
</script>

<div
  class={`relative ${is_oepn ? 'visible' : 'invisible'}`}
  use:clickOutside={() => {
    is_oepn = false;
  }}
>
  <div class="absolute z-50 mb-1 w-[280px] overflow-hidden rounded-md border border-gray-400 bg-zinc-100 shadow-lg">
    <div class="sticky top-0 flex h-12 items-center justify-center bg-gray-600 p-2">
      {#if is_search_opened}
        <div class="flex h-full w-full items-center justify-between rounded bg-white">
          <img src={searchIcon} class="absolute ml-1 flex h-5 w-5" alt="" />
          <input placeholder="Type to search or add..." class="w-full border-0 border-none bg-white pl-7 text-xs focus:outline-none" bind:value={search_val} />
          <div on:click|preventDefault={onCloseSearch}>
            <Close24 slot="icon" class="item text-bg overflow-visible" />
          </div>
        </div>
      {:else}
        <div class="flex w-full items-center justify-between">
          <div class="ml-2 text-sm font-semibold text-white">SELECT</div>
          <div class="flex justify-end">
            <LBRoundButton size="md" onClick={() => (is_search_opened = true)}>
              <Search24 slot="icon" class="justify-self-end overflow-visible text-white" />
            </LBRoundButton>
          </div>
        </div>
      {/if}
    </div>

    <ul class={`h-[300px] w-full overflow-auto bg-white`}>
      {#each listItems as item}
        <li class="items-between m-0 flex h-10 items-center justify-between border border-zinc-100 p-0 px-4 hover:border-zinc-200 hover:bg-zinc-200" on:click={() => onItemSelected(item)}>
          <span class="block w-full truncate text-xs font-normal sm:text-sm">
            {item.label}
          </span>
        </li>
      {/each}
    </ul>
  </div>
</div>
