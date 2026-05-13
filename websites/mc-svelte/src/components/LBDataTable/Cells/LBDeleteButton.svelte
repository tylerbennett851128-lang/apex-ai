<script lang="ts">
  import type { ICellRendererParams } from 'ag-grid-community';
  import deleteIcon from '$assets/svg/delete-icon.svg';
  export let params: ICellRendererParams;
</script>

<div class="icon-button flex h-full w-full items-center justify-center">
  <img src={deleteIcon} class="icon-button h-6 w-5" alt={params ? params.column.getColId() : ''} />
</div>
