<script lang="ts">
  import { LBCellAlign } from '$lib/types';
  import type { ICustomCellParams } from './LBColumn';
  export let params: ICustomCellParams;
  let text = '';
  let align = LBCellAlign.LEFT;

  let readOnly = true;

  if (params && params.data) {
    readOnly = params.cell.readOnly as boolean;
    text = params.cell.getData(params.data);
    align = params.cell.align;
  }
</script>

<div class="flex h-full w-full {align} items-center">
  <span class="overflow-hidden text-ellipsis {readOnly ? 'text-normal' : 'text-readOnly'}">{text || ''}</span>
</div>
