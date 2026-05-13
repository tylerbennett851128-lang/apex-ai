<script lang="ts">
  import type { ICellRendererParams } from 'ag-grid-community';
  import chevronRight from '$assets/svg/chevron-right.svg';
  export let params: ICellRendererParams;
  let display = false;
  if (params.data && params.data.file_type) {
    const fileType = params.data.file_type as string;
    display = fileType.toLowerCase() === 'duckdb';
  }
</script>

<div class={`flex h-full w-full cursor-pointer items-center justify-center`}>
  {#if display}
    <img src={chevronRight} class="icon-button h-6 w-6" alt={params ? params.column.getColId() : ''} />
  {/if}
</div>
