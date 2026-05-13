<script lang="ts">
  import { Progressbar } from 'flowbite-svelte';
  import type { ICustomCellParams } from './LBColumn';
  export let params: ICustomCellParams;
</script>

{#if params}
  <div class="flex h-full w-full flex-row items-center justify-center">
    <div class="flex w-[10%] justify-center">
      <span class="mx-2">{params.value || 0} %</span>
    </div>
    <Progressbar progress={params.value || 0} size="h-3" />
  </div>
{/if}
