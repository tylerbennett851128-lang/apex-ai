<script lang="ts">
  import type { ICustomCellParams } from '$components/LBDataTable/Cells/LBColumn';
  export let params: ICustomCellParams;

  let groupList: string[] = [];

  if (params && params.value) {
    groupList = params.value as string[];
  }

  const getName = (strItem: string) => {
    const nodes = strItem.split('.');
    return nodes.pop();
  };
</script>

<div class="my-1 flex h-full w-full flex-wrap items-center">
  {#if groupList && groupList.length > 0}
    {#each groupList as item}
      <div class="m-0.5 flex h-fit w-fit rounded border border-gray-400 bg-gray-200 px-1 py-0.5">
        <span class="p-0 text-sm text-[#455a64]">{getName(item)}</span>
      </div>
    {/each}
  {/if}
</div>
