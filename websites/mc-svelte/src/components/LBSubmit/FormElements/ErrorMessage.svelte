<script lang="ts">
  export let message: string;
</script>

<div class="flex h-4 w-full items-center justify-start px-1 py-0.5">
  {#if message && message !== ''}
    <span class="text-xs text-red-500">{message}</span>
  {/if}
</div>
