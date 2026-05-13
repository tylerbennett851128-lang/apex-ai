<script lang="ts">
  import { load_storage, save_storage } from '$lib/utils';
  import type { TabItemType } from '$lib/services/tab-list.service';
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();

  export let tabItems: TabItemType[];
  export let activeTabId: string;
  export let rtl = false;
  export let classes = '';

  export let containerKey: string = '';

  const getKeyForStorage = () => {
    return `LBTabBar/${containerKey}`;
  };

  const handleTabSelected = async (item: TabItemType) => {
    if (activeTabId !== item.id) {
      activeTabId = item.id;

      if (containerKey !== '') {
        save_storage(getKeyForStorage(), activeTabId);
      }
      dispatch('click', { id: activeTabId });
    }
  };

  onMount(() => {
    if (containerKey !== '') {
      const key = getKeyForStorage();
      const activeId = load_storage(key);

      let bProceeds = false;
      if (activeId) {
        const find = tabItems.find((item) => item.id === activeId);
        if (find) {
          handleTabSelected(find);
          bProceeds = true;
        }
      }

      if (!bProceeds) {
        handleTabSelected(tabItems[0]);
      }
    }
  });
</script>

<div class="flex h-fit w-full flex-col">
  <ul class="{classes} flex flex-wrap items-end {rtl ? 'justify-end' : 'justify-start'}">
    {#each tabItems as item}
      <li class="flex min-w-[100px] items-center justify-center rounded-t {activeTabId == item.id ? 'h-9 bg-[#455a64]' : 'h-8 border-t border-r border-l border-gray-300 bg-transparent hover:bg-slate-100'}">
        <span
          class="cursor-pointer px-4 py-2 text-sm font-medium {activeTabId == item.id ? 'text-[#ffffff]' : 'text-[#455664]'}"
          on:click|stopPropagation={() => {
            handleTabSelected(item);
          }}
        >
          {item.label}
        </span>
      </li>
    {/each}
  </ul>
</div>
