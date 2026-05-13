<script lang="ts">
  import { goto } from '$app/navigation';
  import LBTabBar from '$components/LBTabBar.svelte';
  import type { TabItemType } from '$lib/services/tab-list.service';
  import { onMount } from 'svelte';
  const baseUrl = '/console/access-control';

  let wasMounted = false;

  const tabItems: TabItemType[] = [
    { id: 'users', label: 'Users' },
    { id: 'roles', label: 'Roles' },
    { id: 'intents', label: 'Intents' }
  ];

  let activeTabId = 'users';
  const handleTabClick = async ({ detail: { id } }) => {
    await goto(`${baseUrl}/${id}`);
  };

  onMount(async () => {
    wasMounted = true;
    await goto(`${baseUrl}/${activeTabId}`);
  });
</script>

<LBTabBar bind:activeTabId {tabItems} on:click={handleTabClick} containerKey={baseUrl} />
{#if wasMounted}
  <div class="relative top-0 flex h-full w-full flex-col">
    <slot />
  </div>
{/if}
