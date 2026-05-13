<script lang="ts">
  import type { ICustomCellParams } from '$components/LBDataTable/Cells/LBColumn';
  import { ATTRIBUTE_ARRAY_SCHEMA_TYPES, LBCellAlign } from '$lib/types';
  import { getRGBAColor } from '$lib/utils';
  export let params: ICustomCellParams;

  let list: any[] = [];
  let readOnly = true;
  let align = LBCellAlign.LEFT;
  let text = '';

  if (params && params.cell && params.value) {
    const schemaType = params.cell.schemaType;
    if (ATTRIBUTE_ARRAY_SCHEMA_TYPES.includes(schemaType) && Array.isArray(params.value)) {
      list = params.value as any[];
    } else {
      readOnly = params.cell.readOnly as boolean;
      align = params.cell.align;
      text = params.cell.getData(params.data);
    }
  }
</script>

{#if list && list.length > 0}
  <div class="attibute-cell">
    {#each list as item}
      {#if item && typeof item === 'object'}
        <div
          class="m-0.5 flex h-fit w-fit rounded border border-gray-400 bg-gray-200 px-1 py-0.5"
          style={item.format_data && item.format_data.color_code
            ? `border-color: ${getRGBAColor(item.format_data.color_code, 1.0)}; background-color: ${getRGBAColor(item.format_data.color_code, 0.1)}; color: ${getRGBAColor(item.format_data.color_code, 1)};`
            : 'border-color: rgb(156 163 175); background-color: rgb(229 231 235);'}
        >
          <span class="text-normal p-0 text-sm">{item.display ? item.display : item.node_path ? item.node_path : ''}</span>
        </div>
      {:else}
        <div class="m-0.5 flex h-fit w-fit rounded border border-gray-400 bg-gray-200 px-1 py-0.5">
          <span class="text-normal p-0 text-sm">{item || ''}</span>
        </div>
      {/if}
    {/each}
  </div>
{:else}
  <div class="flex h-full w-full flex-row {align} items-center overflow-hidden text-ellipsis">
    <span class={readOnly ? 'text-normal' : 'text-readOnly'}>{text || ''}</span>
  </div>
{/if}
