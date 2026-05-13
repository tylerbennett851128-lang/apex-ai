<script lang="ts">
  import type { ATTRIBUTE_ITEM_TYPE } from '$components/LBDataTable/Cells/LBColumn';
  import Close24 from 'carbon-icons-svelte/lib/Close24';
  import chevronLeft from '$assets/svg/chevron-left.svg';
  import LbIconButton from '$components/LBIconButton.svelte';
  import type { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';

  export let cell: LBAttrColumn;
  export let inlineMode: boolean = false;
  export let onClickClose: () => void;
  export let parentItem: ATTRIBUTE_ITEM_TYPE;
  export let onClickPrev: (item: ATTRIBUTE_ITEM_TYPE) => void;
  export let idField = 'node_path';
</script>

{#if inlineMode}
  <div class="flex h-10 items-center justify-center px-1 pt-2 pb-1">
    <div class="flex w-full items-center justify-start">
      {#if parentItem}
        {#if parentItem.root === false}
          <div class="flex h-6 w-6 items-center justify-center">
            <LbIconButton classes={'h-6 w-6'} imgClass={'h-6 w-5'} icon={chevronLeft} on:click={() => onClickPrev(parentItem)} />
          </div>
        {/if}

        <div class="flex h-full w-full flex-col">
          <div class="ml-2 text-xs font-semibold text-[#455A64]">{parentItem.level_path ? parentItem.level_path : cell.name}</div>
          {#if parentItem[idField]}
            <span class="ml-2 text-xs text-[#455A64]">{parentItem[idField]}</span>
          {/if}
        </div>
      {:else}
        <div class="ml-2 text-sm font-semibold text-[#455A64]">{cell.name ? cell.name : 'SELECT'}</div>
      {/if}
    </div>
  </div>
{:else}
  <div class="sticky top-0 z-30 flex h-10 items-center justify-center bg-gray-600 p-1">
    <div class="flex w-full items-center justify-between">
      <div class="flex w-[90%] items-center justify-start">
        {#if parentItem}
          {#if parentItem.root === false}
            <div class="flex h-6 w-6 items-center justify-center">
              <LbIconButton classes={'h-6 w-6 bg-gray-300'} imgClass={'h-6 w-5'} icon={chevronLeft} on:click={() => onClickPrev(parentItem)} />
            </div>
          {/if}

          <div class="flex h-full w-full flex-col overflow-hidden truncate break-keep">
            <span class="ml-2 text-xs font-semibold text-white">{parentItem.level_path ? parentItem.level_path : cell.name}</span>
            {#if parentItem[idField]}
              <span class="ml-2 text-xs text-white">{parentItem[idField]}</span>
            {/if}
          </div>
        {:else}
          <span class="ml-2 text-sm font-semibold text-white">{cell.name ? cell.name : 'SELECT'}</span>
        {/if}
      </div>

      <div class="flex w-[10%] items-center justify-center" on:click|stopPropagation|preventDefault={onClickClose}>
        <Close24 slot="icon" class="item overflow-visible text-white" />
      </div>
    </div>
  </div>
{/if}
