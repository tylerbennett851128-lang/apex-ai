<script lang="ts" context="module">
  export const UserSection = {};
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import { onDestroy, onMount, setContext } from 'svelte';
  import { goto } from '$app/navigation';
  import LBBreadcrum from '$components/LBBreadcrum.svelte';
  import { load_storage, save_storage } from '$lib/utils';

  let root = true;
  let title = 'Users';
  const baseUrl = '/console/access-control/users';
  const storageKeyForUsers = 'AccessControl/Users';

  let breadCrumbProps: Record<string, any> = {};

  const mapDataSaved = load_storage(storageKeyForUsers);

  if (mapDataSaved) {
    breadCrumbProps = mapDataSaved.mapUrl;
  }

  const saveMap = (url: string, title: string) => {
    breadCrumbProps[url] = title;
    const mapDataToSave = {
      mapUrl: breadCrumbProps,
      lastUrl: url
    };
    save_storage(storageKeyForUsers, mapDataToSave);
  };

  setContext(UserSection, {
    // This context is shared between all pages under template folder.
    setMap: (url: string, title: string) => {
      saveMap(url, title);
    },
    getUserName: (url: string) => {
      return breadCrumbProps[url];
    },
    baseUrl // This baseUrl is shared variable between +layout and +page.
  });

  const unsubscribePage = page.subscribe((value) => {
    root = value.url.pathname === baseUrl;
    title = root ? 'Users' : breadCrumbProps[value.url.pathname];
  });

  const onClickPrev = async () => {
    saveMap(baseUrl, 'Users');
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
