<script lang="ts" context="module">
  export const SettingsSection = {};
</script>

<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onDestroy, setContext } from 'svelte';
  import LBBreadcrum from '$components/LBBreadcrum.svelte';
  import { load_storage, save_storage } from '$src/lib/utils';
  let title: string = 'Perform Settings';
  const baseUrl = '/perform-settings';

  let root = true;
  const storageKeyForSettings = 'PerformSettings';
  let mapPathOrg = {};

  const unsubscribePage = page.subscribe((value) => {
    root = value.url.pathname === baseUrl;

    if (value.url.pathname !== baseUrl) {
      if (value.params) {
        title = value.params.node_path;
      }
    } else {
      title = 'Perform Settings';
    }
  });

  const mapDataSaved = load_storage(storageKeyForSettings);

  if (mapDataSaved) {
    mapPathOrg = mapDataSaved;
  }

  const saveMap = (node_path: string, pathOrg: any) => {
    mapPathOrg[node_path] = pathOrg;
    save_storage(storageKeyForSettings, mapPathOrg);
  };

  setContext(SettingsSection, {
    // This context is shared between all pages under template folder.
    setMap: (node_path: string, path_org: any) => {
      saveMap(node_path, path_org);
    },

    getPathOrg: (node_path: string) => {
      return mapPathOrg[node_path];
    },
    baseUrl // This baseUrl is shared variable between +layout and +page.
  });

  const onClickPrev = async () => {
    await goto(baseUrl);
  };

  onDestroy(unsubscribePage);
</script>

<div class="flex h-full w-full flex-col border border-gray-300 bg-white pt-2">
  <LBBreadcrum bind:root bind:title on:clickPrev={onClickPrev} />
  <slot />
</div>
