<script lang="ts">
  import type { ICustomCellParams } from '$components/LBDataTable/Cells/LBColumn';
  export let params: ICustomCellParams;
</script>

<div class="flex h-full w-full flex-col p-0">
  <div class="flex h-10 w-full items-center bg-zinc-100 px-4 py-1">
    <span>Header</span>
  </div>

  <div class="flex h-full w-full items-center bg-gray-50 px-4 py-1">
    <span>Form View {params.value}</span>
  </div>
</div>
