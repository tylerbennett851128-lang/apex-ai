<script lang="ts">
  import type { ICellRendererParams } from 'ag-grid-community';
  import chevronRight from '$assets/svg/chevron-right.svg';
  export let params: ICellRendererParams;
</script>

<div class={`flex h-full w-full cursor-pointer items-center justify-center`}>
  <img src={chevronRight} class="icon-button h-6 w-6" alt={params ? params.column.getColId() : ''} />
</div>
