<script lang="ts">
  import plusIcon from '$assets/svg/plus-icon.svg';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const onClick = () => {
    dispatch('addNew');
  };
</script>

<div class="flex cursor-pointer items-center rounded border border-dashed border-gray-400 bg-gray-100 px-2 py-1 hover:bg-white" on:click={onClick}>
  <img src={plusIcon} class="mr-2" width="16" height="16" alt="" />
  <span class="mt-0.5 text-sm">Add</span>
</div>
