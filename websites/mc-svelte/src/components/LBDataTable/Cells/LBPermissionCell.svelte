<script lang="ts">
  import { userService } from '$lib/services/user.service';
  import { onDestroy } from 'svelte';
  import type { ICustomCellParams } from './LBColumn';
  export let params: ICustomCellParams;

  let items: any[];
  let role_type;

  const unsubscribe = userService.subscribe((value) => {
    role_type = value.lb_role ? value.lb_role.lb_role_type : '';
  });

  if (params && params.data) {
    items = params.cell.getData(params.data);
  }

  onDestroy(unsubscribe);
</script>

<div class="flex h-full w-full flex-col items-start justify-center">
  {#if items && Array.isArray(items)}
    {#each items as item}
      <div class="flex h-4 w-full items-center justify-start">
        <span class="text-normal {item?.lb_role_type === role_type ? 'text-sm font-semibold' : 'text-xs'}">{item?.lb_role_name || ''}</span>
      </div>
    {/each}
  {/if}
</div>
