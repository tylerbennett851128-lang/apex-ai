<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let level_path: string;
  export let node_path: string;

  const dispatch = createEventDispatcher();
  const getNodes = (path: string) => {
    return path.split('.');
  };

  let nodes: string[] = [];

  $: {
    level_path;
    nodes = getNodes(level_path);
  }

  const onClick = (idx: number) => {
    if (idx !== -1) {
      const items = nodes.slice(0, idx + 1);
      const new_level_path = items.join('.');
      const new_node_path = node_path
        .split('.')
        .slice(0, idx + 1)
        .join('.');
      dispatch('select', { level_path: new_level_path, node_path: new_node_path });
    } else {
      dispatch('select', { level_path: null, node_path: null });
    }
  };
</script>

<div class="mx-4 flex h-12 w-full flex-col items-start">
  <div class="mt-1 flex w-full flex-row">
    {#if nodes && nodes.length > 0 && nodes[0] !== ''}
      <span class="mb-1 cursor-pointer px-0 text-sm font-medium text-[#455A64] hover:text-green-600" on:click={() => onClick(-1)}>Root</span>
      <span class="mb-1 px-2 text-sm text-[#455A64]">></span>
    {/if}

    {#each nodes as node, idx}
      <span class="mb-1 cursor-pointer px-0 text-sm font-medium text-[#455A64] hover:text-green-600" on:click={() => onClick(idx)}>{node}</span>
      {#if idx < nodes.length - 1}
        <span class="mb-1 px-2 text-sm text-[#455A64]">></span>
      {/if}
    {/each}
  </div>

  <span class="mb-1 text-xs text-[#37474F]">{node_path}</span>
</div>
