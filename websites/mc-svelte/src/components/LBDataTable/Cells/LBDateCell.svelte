<script lang="ts">
  import { LBCellAlign } from '$lib/types';
  import type { ICustomCellParams } from './LBColumn';
  export let params: ICustomCellParams;
  let text = '';
  let align = LBCellAlign.LEFT;
  if (params && params.data) {
    text = params.cell.getData(params.data);
    align = params.cell.align;
  }
</script>

<div class="flex h-full w-full flex-row {align} items-center overflow-hidden text-ellipsis">
  <span class="text-readOnly">{text || ''}</span>
</div>
