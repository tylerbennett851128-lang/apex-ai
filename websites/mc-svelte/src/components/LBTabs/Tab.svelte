<script lang="ts">
  import { createEventDispatcher, getContext, onMount } from 'svelte';
  import { TABS } from './Tabs.svelte';
  export let selected = false;

  const dispatch = createEventDispatcher();
  const tab = {};

  const context = getContext(TABS) as any;
  const { registerTab, selectTab, selectedTab } = context;
  registerTab(tab);

  const handleTabClicked = (tab) => {
    selectTab(tab);
    dispatch('selected');
  };

  onMount(() => {
    if (selected) {
      selectTab(tab);
    }
  });
</script>

<div
  class="flex min-w-[100px] cursor-pointer items-center justify-between rounded-t {$selectedTab === tab ? 'h-9 bg-[#455a64] text-white' : 'h-8 border-t border-r border-l border-gray-300 bg-gray-200 text-[#455A64] hover:bg-slate-100'}"
  on:click={() => handleTabClicked(tab)}
>
  <slot />
</div>
