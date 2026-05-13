<script lang="ts">
  import type { ICustomCellParams } from '$components/LBDataTable/Cells/LBColumn';
  import { titleCase } from '$lib/utils';
  import { FORMAT_VALUE_BY_SCHEMA_TYPE, SchemaDataAnnotation } from '$lib/types';
  import { onMount } from 'svelte';
  export let params: ICustomCellParams;

  type KeyType = {
    id: string;
    schema?: SchemaDataAnnotation;
  };

  let loading = false;
  let data: any;
  const keys1: KeyType[] = [
    {
      id: 'file_location'
    },
    {
      id: 'file_location_type'
    },
    {
      id: 'file_lock'
    },
    {
      id: 'partition_key'
    },
    {
      id: 'file_type'
    },
    {
      id: 'workstate'
    }
  ];

  const keys2: KeyType[] = [{ id: 'table_type' }, { id: 'version_action' }, { id: 'message' }, { id: 'log_type' }, { id: 'file_state' }, { id: 'file_type_version' }];
  const keys3: KeyType[] = [
    { id: 'reference_count' },
    { id: 'created_by' },
    { id: 'created_at', schema: SchemaDataAnnotation.DATE },
    { id: 'updated_by' },
    { id: 'updated_at', schema: SchemaDataAnnotation.DATE },
    { id: 'registration_time', schema: SchemaDataAnnotation.DATE }
  ];

  onMount(async () => {
    const columns = params.columnApi.getColumns();
    if (columns && columns.length > 0) {
      const colDef = columns[0].getColDef();
      if (colDef && colDef.cellEditorParams && colDef.cellEditorParams.cell) {
        const queryService = colDef.cellEditorParams.cell.queryService;
        if (queryService && loading === false) {
          loading = true;
          data = await queryService.getDetailInfo(params.data);
          if (data) {
            keys3.forEach((key) => {
              if (key.schema && data[key.id]) {
                data[key.id] = FORMAT_VALUE_BY_SCHEMA_TYPE(data[key.id], key.schema);
              }
            });
          }
          loading = false;
        }
      }
    }
  });
</script>

<div class="flex h-full w-full flex-col bg-zinc-100 p-0">
  {#if !loading}
    {#if data}
      <div class="flex h-10 w-full items-center bg-zinc-50 px-4 py-4">
        <span class="text-normal font-semibold">File Name : {data.file_name}</span>
      </div>

      <div class="flex h-full w-full items-start p-4">
        <div class="h-full w-1/3">
          {#each keys1 as key}
            <div class="flex flex-wrap px-2 py-1">
              <span class="text-normal mx-2 font-semibold">{titleCase(key.id)}: </span>
              <span class="text-readOnly">{data[key.id]}</span>
            </div>
          {/each}
        </div>
        <div class="h-full w-1/3">
          {#each keys2 as key}
            <div class="flex flex-wrap px-2 py-1">
              <span class="text-normal mx-2 font-semibold">{titleCase(key.id)}: </span>
              <span class="text-readOnly">{data[key.id]}</span>
            </div>
          {/each}
        </div>
        <div class="h-full w-1/3">
          {#each keys3 as key}
            <div class="flex flex-wrap px-2 py-1">
              <span class="text-normal mx-2 font-semibold">{titleCase(key.id)}: </span>
              <span class="text-readOnly">{data[key.id]}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {:else}
    <div class="flex h-full w-full items-center justify-center">
      <div class="detail-loading">
        <div class="logo">
          <svg class="spinner" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10" />
          </svg>
        </div>
      </div>
    </div>
  {/if}
</div>
