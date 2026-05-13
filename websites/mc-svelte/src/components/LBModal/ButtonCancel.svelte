<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const onClick = () => {
    dispatch('click');
  };
</script>

<div
  on:click|preventDefault|stopPropagation={onClick}
  class="inline-flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-7 py-2 font-medium  text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
>
  CANCEL
</div>
