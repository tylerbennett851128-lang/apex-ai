<script lang="ts" context="module">
  export const TemplateSection = {};
</script>

<script lang="ts">
  import { setContext, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import LBBreadcrum from '$components/LBBreadcrum.svelte';
  import { remove_storage, load_storage, save_storage } from '$lib/utils';

  let breadCrumbProps: Record<string, any> = {};
  const breadCrumbKey = 'ProgramHeader';
  let title = 'Program Templates';
  const baseUrl = '/console/template';
  let root = true;

  const valueMapSaved = load_storage(breadCrumbKey);
  if (valueMapSaved) {
    breadCrumbProps = valueMapSaved;
  }

  setContext(TemplateSection, {
    // This context is shared between all pages under template folder.
    setMap: (data: { url: string; title: string }) => {
      breadCrumbProps[data.url] = data.title;
      save_storage(breadCrumbKey, breadCrumbProps);
    },
    baseUrl // This baseUrl is shared variable between +layout and +page.
  });

  const unsubscribePage = page.subscribe(async (value) => {
    root = value.url.pathname === baseUrl;
    title = root ? 'Program Templates' : breadCrumbProps[value.url.pathname];
  });

  const onClickPrev = async () => {
    const keys: string[] = Object.keys(breadCrumbProps);
    if (keys.some((word) => word.includes('fields'))) {
      //remove last object always.
      delete breadCrumbProps[keys.pop()];
      await goto(keys.pop());
    } else {
      remove_storage(breadCrumbKey);
      await goto(baseUrl);
    }
  };

  onDestroy(unsubscribePage);
</script>

<div class="flex h-full w-full flex-col border border-gray-300 bg-white pt-2">
  <LBBreadcrum bind:root bind:title on:clickPrev={onClickPrev} />
  <slot />
</div>
