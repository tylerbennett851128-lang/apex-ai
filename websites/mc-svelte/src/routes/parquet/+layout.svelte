<script lang="ts" context="module">
  // content index layer.
  import LBBreadcrum from '$components/LBBreadcrum.svelte';
  import { save_storage } from '$lib/utils';
  export const AtomicSection = {};
  export type ParquetSectionType = {
    title: string;
    url: string;
    lastUrl: string;
    sectionType: 'Detail' | 'Child';
    atomic_type: string;
    atomic_key: string;
    version_key: string;
    file_name: string;
    content_index_id: string;
    level_path: string;
    node_path: string;
  };
</script>

<script lang="ts">
  import { onDestroy, setContext } from 'svelte';
  import { page } from '$app/stores';
  import LBPathBreadcrum from '$components/LBPathBreadcrum.svelte';
  import { load_storage } from '$lib/utils';
  import { goto } from '$app/navigation';

  let curSectionData: ParquetSectionType;
  let mapUrlToSection: Record<string, ParquetSectionType> = {};
  const baseUrl = '/parquet';
  const storageKey = 'ParquetSection';

  const savedMap = load_storage(storageKey);
  if (savedMap) {
    mapUrlToSection = savedMap;
  }

  setContext(AtomicSection, {
    // This context is shared between all pages under parquet folder.
    setMap: (data: ParquetSectionType) => {
      mapUrlToSection[data.url] = data;
      save_storage(storageKey, mapUrlToSection);
    },

    getSectionData: (url: string): ParquetSectionType => {
      return mapUrlToSection[url];
    },
    baseUrl
  });

  const unsubscribePage = page.subscribe(async (value) => {
    if (mapUrlToSection) {
      curSectionData = mapUrlToSection[value.url.pathname];
    }
  });

  const onClickPrev = async ({ detail: { node_path, nodeIdx } }) => {
    if (nodeIdx < 2) {
      // we have three level nodes in atomic duck page. first one is content_index, second is file, third one is tables. user should be able to click content_index and file on the breadcrum
      const targetUrl = `${baseUrl}${node_path}`;
      await goto(targetUrl);
    }
  };

  const onClickPrevFromDetail = async () => {
    if (curSectionData) {
      const lastUrl = curSectionData.lastUrl;
      if (lastUrl && lastUrl !== '') {
        await goto(lastUrl);
      }
    }
  };

  onDestroy(unsubscribePage);
</script>

<div class="flex h-full w-full flex-col border border-gray-300 bg-white">
  <div class="flex w-full flex-row">
    <div class="flex w-[80%] items-center justify-start py-1">
      {#if $page.url.pathname === baseUrl}
        <LBBreadcrum title={'Parquet Files'} />
      {:else if curSectionData}
        {#if curSectionData.sectionType === 'Child'}
          <LBPathBreadcrum bind:level_path={curSectionData.level_path} bind:node_path={curSectionData.node_path} splitSymbol={'/'} bind:title={curSectionData.title} on:select={onClickPrev} />
        {:else if curSectionData.sectionType === 'Detail'}
          <LBBreadcrum title={curSectionData.title} root={false} on:clickPrev={onClickPrevFromDetail} />
        {/if}
      {/if}
    </div>
  </div>
  <slot />
</div>
