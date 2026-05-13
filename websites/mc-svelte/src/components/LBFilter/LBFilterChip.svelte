<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Close24 from 'carbon-icons-svelte/lib/Close16';
  export let filter: { key: string; label: string; display: string; idx: number };
  const dispatch = createEventDispatcher();
</script>

<div class="my-1 mr-3 flex h-7 flex-row items-center  overflow-hidden rounded-full border border-[#2E7D32] drop-shadow hover:drop-shadow-md">
  <div class="flex h-full items-center justify-center bg-[#2E7D32] pl-4 pr-3 text-xs text-white ">
    <span>{filter.label}</span>
  </div>

  <div class="flex h-full flex-row items-center justify-center bg-white px-2 text-xs    ">
    <span>{filter.display}</span>
    <div
      class="ml-3 flex cursor-pointer items-start"
      on:click|stopPropagation={() => {
        dispatch('close', { key: filter.key, idx: filter.idx }); // for the array attribute filter chips, it should be able to remove one by one.
      }}
    >
      <Close24 slot="icon" class="item overflow-visible" />
    </div>
  </div>
</div>
