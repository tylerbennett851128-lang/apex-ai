<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let level_path: string;
  export let node_path: string;
  export let title: string = '';
  export let splitSymbol: string = '>';

  const dispatch = createEventDispatcher();
  const getNodes = (path: string) => {
    return path.split(splitSymbol);
  };

  let nodes: string[] = [];

  $: {
    level_path;
    nodes = getNodes(level_path);
  }

  const onClick = (idx: number) => {
    if (idx !== -1) {
      if (idx < nodes.length - 1) {
        const items = nodes.slice(0, idx + 1);
        const new_level_path = items.join(splitSymbol);
        const node_items = node_path.split(splitSymbol).slice(0, idx + 1);
        const new_node_path = node_items.join(splitSymbol);
        dispatch('select', { level_path: new_level_path, node_path: new_node_path, nodeIdx: idx });
      }
    } else {
      dispatch('select', { level_path: null, node_path: null, nodeIdx: -1 });
    }
  };
</script>

<div class="mx-4 flex h-12 w-full flex-col items-start">
  <div class="mt-1 flex w-full flex-row">
    {#each nodes as node, idx}
      <span class="px-0 py-0 font-medium text-[#455A64] {idx < nodes.length - 1 ? 'cursor-pointer hover:text-green-600' : 'cursor-normal'}" on:click={() => onClick(idx)}>{node}</span>
      {#if idx < nodes.length - 1}
        <span class="px-2 text-[#455A64]">></span>
      {/if}
    {/each}
  </div>

  <span class="mb-1 text-sm text-[#37474F]">{title}</span>
</div>
