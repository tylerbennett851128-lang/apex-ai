<script lang="ts">
  import { goto } from '$app/navigation';
  //table page
  import { page } from '$app/stores';
  import { getContext, onMount } from 'svelte';
  import { AtomicSection, type DuckDBSectionType } from '../../../+layout.svelte';

  const { getSectionData, baseUrl } = getContext(AtomicSection) as any;
  const tableName = $page.params.table;
  const lastSection = getSectionData($page.url.pathname) as DuckDBSectionType;

  onMount(async () => {
    if (!lastSection) {
      await goto(baseUrl);
    }
  });
</script>

{#if lastSection}
  <div class="flex h-full w-full flex-col border-t border-gray-200 bg-white p-4">
    <span class="text-normal text-xl">Table Name: {tableName}</span>
  </div>
{/if}
