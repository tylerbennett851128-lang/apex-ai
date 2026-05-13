<script lang="ts">
  import checkMark from '$assets/svg/check.svg';
  import { schemaUpdateService } from '$mc/global-schema/table-query.service';
  import type { ICustomCellParams } from './LBColumn';
  import type { CellClickedEvent } from 'ag-grid-community';

  export let params: ICustomCellParams;

  let oldData = JSON.parse(JSON.stringify(params.data));
  const readOnly = params.cell ? params.cell.readOnly : false;

  const onClick = async ($event) => {
    if (!readOnly) {
      const queryService = params.cell.queryService;

      if (queryService) {
        if (queryService.inlineEditing) {
          params.value = !params.value;
          const coldId = params.column.getColId();
          params.data[coldId] = params.value;
          await params.cell.saveValue(oldData, params.data);
          oldData = JSON.parse(JSON.stringify(params.data));

          schemaUpdateService.update((value) => {
            value.tableName = queryService.tableName;
            return value;
          });
        } else {
          const columnService = queryService.columnService;
          if (columnService) {
            const evnt: CellClickedEvent = {
              api: params.api,
              colDef: params.colDef,
              column: params.column,
              columnApi: params.columnApi,
              context: params.context,
              data: params.data,
              event: $event,
              node: params.node,
              rowIndex: params.rowIndex,
              rowPinned: undefined,
              type: 'cellClicked',
              value: params.value
            };

            columnService.onCellClicked(evnt);
          }
        }
      }
    }
  };
</script>

<div class="flex h-full w-full cursor-pointer items-center justify-center" on:click|stopPropagation|preventDefault={onClick}>
  {#if params.value}
    <div class="flex h-5 w-5 items-center justify-center rounded-sm {readOnly ? 'bg-blue-300' : 'bg-blue-500'} ">
      <img src={checkMark} class="h-4 w-4" alt="" />
    </div>
  {:else}
    <div class="h-5 w-5 rounded-sm border-2 border-gray-600 bg-white" />
  {/if}
</div>
