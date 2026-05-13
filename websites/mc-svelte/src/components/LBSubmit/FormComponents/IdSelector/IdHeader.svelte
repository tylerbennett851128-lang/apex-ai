<script lang="ts">
  import Close24 from 'carbon-icons-svelte/lib/Close24';
  export let title: string;
  export let onClickClose: () => void;
</script>

<div class="sticky top-0 z-30 flex h-10 items-center justify-center bg-gray-600 p-1">
  <div class="flex w-full items-center justify-between">
    <div class="ml-2 text-sm font-semibold text-white">{title ? title : 'SELECT'}</div>
    <div on:click|stopPropagation|preventDefault={onClickClose}>
      <Close24 slot="icon" class="item overflow-visible text-white" />
    </div>
  </div>
</div>
