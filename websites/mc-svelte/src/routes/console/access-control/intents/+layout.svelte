<script lang="ts" context="module">
  export const IntentsSection = {};
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import { onDestroy, onMount, setContext } from 'svelte';
  import { goto } from '$app/navigation';
  import LBBreadcrum from '$components/LBBreadcrum.svelte';
  import { load_storage, save_storage } from '$src/lib/utils';
  // This is to update the intents page with new tech
  let title = 'Intents';
  let root = true;

  const baseUrl = '/console/access-control/intents';
  const storageKeyForIntents = 'AccessControl/Intents';

  let breadCrumbProps: Record<string, any> = {};

  const mapDataSaved = load_storage(storageKeyForIntents);

  if (mapDataSaved) {
    breadCrumbProps = mapDataSaved.mapUrl;
  }

  const saveMap = (url: string, title: string) => {
    breadCrumbProps[url] = title;
    // save_storage(storageKeyForIntents, breadCrumbProps);

    const mapDataToSave = {
      mapUrl: breadCrumbProps,
      lastUrl: url
    };
    save_storage(storageKeyForIntents, mapDataToSave);
  };

  setContext(IntentsSection, {
    // This context is shared between all pages under template folder.
    setMap: (url: string, title: string) => {
      saveMap(url, title);
    },
    getRoleName: (url: string) => {
      return breadCrumbProps[url];
    },
    baseUrl // This baseUrl is shared variable between +layout and +page.
  });

  const unsubscribePage = page.subscribe((value) => {
    root = value.url.pathname === baseUrl;
    title = root ? 'Intents' : breadCrumbProps[value.url.pathname];
  });

  const onClickPrev = async () => {
    saveMap(baseUrl, 'Intents');
    await goto(baseUrl);
  };

  onMount(async () => {
    if (!mapDataSaved) {
      await goto(baseUrl);
    } else {
      const lastUrl = mapDataSaved.lastUrl;
      await goto(lastUrl);
    }
  });

  onDestroy(unsubscribePage);
</script>

<div class="flex h-full w-full flex-col border border-gray-300 bg-white pt-2">
  <LBBreadcrum bind:root bind:title on:clickPrev={onClickPrev} />
  <slot />
</div>
