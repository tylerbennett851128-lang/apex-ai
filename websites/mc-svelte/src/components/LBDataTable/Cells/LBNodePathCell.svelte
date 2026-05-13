<script lang="ts">
  import type { ICustomCellParams } from './LBColumn';
  export let params: ICustomCellParams;
  const value = params.cell.getData(params.data);
</script>

{#if params && value}
  <div class="flex h-full flex-col justify-center leading-5">
    <span class="my-0 mr-2 py-0 text-[12px]">{value.level_path || ''}</span>
    <span class="my-0 py-0 text-[14px] font-semibold">{value.node_path || ''}</span>
  </div>
{/if}
