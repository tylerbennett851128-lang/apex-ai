<script lang="ts">
  import { clickOutside } from 'svelte-use-click-outside';
  import LBLayoutPage from '$components/LBLayout/LayoutPage.svelte';
  import { browser } from '$app/environment';
  import LBProgressBar from '$components/LBProgressBar.svelte';
  import LBSearchSelector from '$components/LBSearchSelector.svelte';
  import Close24 from 'carbon-icons-svelte/lib/Close16';
  import { createEventDispatcher, onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { TabListService, type TabItemType } from '$lib/services/tab-list.service';
  import { TableService } from '$mc/global-schema/table-query.service';

  const dispatch = createEventDispatcher();
  export let dataSource: string;

  const mapTables: Record<string, TableService> = {};

  const createTabListService = () => {
    if (browser) {
      const initial = new TabListService(dataSource);
      const { subscribe, update, set } = writable(initial);

      return {
        subscribe,
        update,
        set
      };
    }
  };

  const tabService = createTabListService();

  let newTabClicked = false;
  let loading = false;

  const handleTabSelected = async (item: TabItemType) => {
    if ($tabService.activeTab !== item) {
      $tabService.activeTab = item;
      dispatch('tabSelected', { tab: item });
    }
  };

  const onAddTab = async ({ detail: { item } }) => {
    newTabClicked = false;
    tabService.update((value) => {
      value.addTab(item);

      if (!mapTables[item.label]) {
        mapTables[item.label] = new TableService(item.label);
      }
      return value;
    });
    dispatch('addTabItem', { item });
  };

  const onRemoveTab = async (tab: TabItemType) => {
    tabService.update((value) => {
      const label = value.removeTab(tab);
      if (label !== '' && mapTables[label]) {
        delete mapTables[label];
      }
      return value;
    });

    dispatch('removeTabItem', { id: tab.id });
  };

  const handleTabAdd = () => {
    newTabClicked = true;
    dispatch('readyToAdd');
  };

  onMount(async () => {
    loading = true;
    const data = await $tabService.loadData();
    tabService.update((value) => {
      value.initWithData(data);

      for (let i = 0; i < value.tabItems.length; i++) {
        const tab = value.tabItems[i];
        mapTables[tab.label] = new TableService(tab.label);
      }

      return value;
    });
    loading = false;
  });
</script>

<div class="relative top-0 flex h-fit w-full flex-col">
  {#if $tabService && Array.isArray($tabService.tabItems)}
    <ul class="flex w-[80%] flex-wrap items-end">
      {#each $tabService.tabItems as item}
        <li class="flex min-w-[100px] items-center justify-between rounded-t pl-3 {$tabService.activeTab.id === item.id ? 'h-9 bg-[#455a64]' : 'h-8 border-t border-r border-l border-gray-300 bg-gray-200 hover:bg-slate-100'}">
          <div class="flex justify-center" on:click|stopPropagation={() => handleTabSelected(item)}>
            <span class="cursor-pointer px-4 py-2 text-sm font-medium {$tabService.activeTab.id === item.id ? 'text-[#ffffff]' : 'text-[#455a64]'}">
              {item.label}
            </span>
          </div>

          <div class="mr-1 flex h-full cursor-pointer items-center" on:click|stopPropagation={() => onRemoveTab(item)}>
            <Close24 slot="icon" class="item overflow-visible {$tabService.activeTab.id == item.id ? 'text-white' : 'text-bg'}" />
          </div>
        </li>
      {/each}

      {#if !newTabClicked && $tabService.listItems.length > 0}
        <li class="flex h-8 min-w-[100px] items-center justify-center rounded-t bg-white hover:bg-slate-100 {$tabService.tabItems.length > 0 ? 'border-t border-r border-l' : 'border'}">
          <span class="cursor-pointer px-4 py-2 text-sm font-medium text-[#37474F]" on:click|stopPropagation={handleTabAdd}> New Tab </span>
        </li>
      {:else}
        <div
          class="relative -top-9"
          use:clickOutside={() => {
            newTabClicked = false;
          }}
        >
          <LBSearchSelector bind:items={$tabService.listItems} bind:is_oepn={newTabClicked} on:itemSelected={onAddTab} />
        </div>
      {/if}
    </ul>
  {/if}
</div>
{#if loading}
  <LBProgressBar loading />
{/if}

<div id="page" class="relative top-0 flex h-full w-full flex-col border border-gray-300">
  {#if $tabService && Array.isArray($tabService.tabItems)}
    {#each $tabService.tabItems as item}
      {#if item.id === $tabService.activeTab.id}
        {#if mapTables[item.label] && mapTables[item.label].dataService}
          <LBLayoutPage bind:tableService={mapTables[item.label]} />
        {/if}
      {/if}
    {/each}
  {/if}
</div>
