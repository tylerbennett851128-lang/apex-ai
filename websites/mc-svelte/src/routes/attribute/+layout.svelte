<script lang="ts">
  import { goto } from '$app/navigation';
  import LBTabBar from '$components/LBTabBar.svelte';
  import type { TabItemType } from '$lib/services/tab-list.service';
  import { onMount } from 'svelte';

  const baseUrl = '/attribute';

  const tabItems: TabItemType[] = [
    { id: 'enum', label: 'Enum Attribute' },
    { id: 'tree', label: 'Tree Attribute' },
    { id: 'meta', label: 'Metadata' },
    { id: 'log', label: 'Logs' }
  ];

  let activeTabId = 'enum';

  const handleTabClick = async ({ detail: { id } }) => {
    await goto(`${baseUrl}/${id}`);
  };

  onMount(async () => {
    await goto(`${baseUrl}/${activeTabId}`);
  });
</script>

<LBTabBar bind:activeTabId {tabItems} on:click={handleTabClick} containerKey={baseUrl} />
<div class="flex h-full w-full flex-col border border-gray-300 bg-white">
  <slot />
</div>
