<script lang="ts">
  import searchIcon from '$assets/svg/search.svg';
  import Close24 from 'carbon-icons-svelte/lib/Close24';
  import { onMount } from 'svelte';
  export let search_val: string = '';

  let searchInput;

  const onCloseSearch = () => {
    search_val = '';
  };

  onMount(() => {
    if (searchInput) {
      searchInput.focus();
    }
  });
</script>

<div class="flex h-10 w-full items-center justify-between rounded border-b border-t border-zinc-200 bg-white p-1">
  <img src={searchIcon} class="absolute ml-1 flex h-5 w-5" alt="" />
  <input bind:this={searchInput} placeholder="Type to Search or Add New..." class="h-full w-full border-none bg-white pl-7 text-sm focus:outline-none" bind:value={search_val} />

  {#if search_val && search_val !== ''}
    <div on:click|stopPropagation|preventDefault={onCloseSearch}>
      <Close24 slot="icon" class="item text-bg overflow-visible" />
    </div>
  {/if}
</div>
