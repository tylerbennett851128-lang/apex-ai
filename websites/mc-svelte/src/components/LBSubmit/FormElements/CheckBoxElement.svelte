<script lang="ts">
  import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
  import LBCheckBox from '$components/LBSubmit/FormComponents/LBCheckBox.svelte';
  export let onChange: (colId: string, value: any) => void;
  export let cell: LBColumn;
  export let row_data: any;
</script>

<div class="my-2 flex w-full items-end justify-between py-0.5 pr-1">
  <span class="py-1 pb-0 text-sm font-medium text-[#37474F]">{cell.name.toUpperCase()}</span>
  <LBCheckBox readOnly={cell.readOnly} bind:value={row_data[cell.id]} onChange={(value) => onChange(cell.id, value)} />
</div>
