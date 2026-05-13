<script lang="ts">
  import type { ICustomCellParams } from './LBColumn';
  export let params: ICustomCellParams;
  let obj = {};
  let keys: string[] = [];

  if (params) {
    obj = params.value;
    keys = obj ? Object.keys(obj) : [];
  }
</script>

<div class="flex h-full w-full flex-row">
  {#if keys && keys.length > 0}
    {#each keys as key}
      <div class="mx-1">
        <span class="text-readOnly font-bold">{key}:</span>
        <span class="text-normal">{obj[key] || ''}</span>
      </div>
    {/each}
  {/if}
</div>
