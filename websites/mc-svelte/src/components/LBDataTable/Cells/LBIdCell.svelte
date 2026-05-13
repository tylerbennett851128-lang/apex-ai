<script lang="ts">
  import type { ICustomCellParams } from '$components/LBDataTable/Cells/LBColumn';
  import { LBCellAlign } from '$lib/types';
  import type { LBIdColumn } from './LBIdColumn';
  export let params: ICustomCellParams;

  let readOnly = true;
  let align = LBCellAlign.LEFT;
  let text = '';

  if (params && params.cell && params.value) {
    readOnly = params.cell.readOnly;
    align = params.cell.align;
    const idCell = params.cell as unknown as LBIdColumn;
    text = params.cell.getData(params.data);
    if (idCell.mapIdToItem) {
      const item = idCell.mapIdToItem[params.value];
      if (item) {
        text = item.display;
      }
    }
  }
</script>

<div class="flex h-full w-full flex-row {align} items-center overflow-hidden text-ellipsis">
  <span class={readOnly ? 'text-normal' : 'text-readOnly'}>{text || ''}</span>
</div>
