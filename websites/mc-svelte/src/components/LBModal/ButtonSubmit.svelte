<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let disabled: boolean = false;
  export let caption = 'SUBMIT';

  const dispatch = createEventDispatcher();
  const onClick = () => {
    if (!disabled) {
      dispatch('click');
    }
  };
</script>

<div
  on:click|preventDefault|stopPropagation={onClick}
  class="inline-flex w-full items-center justify-center rounded-md  border border-gray-300 px-7 py-2 font-medium text-white shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm {disabled ? 'bg-gray-300' : 'cursor-pointer bg-gray-700 hover:bg-gray-500'}"
>
  {caption}
</div>
