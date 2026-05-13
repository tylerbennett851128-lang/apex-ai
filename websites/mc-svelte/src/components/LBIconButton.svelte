<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let icon: string;
  export let classes = 'h-8 w-8';
  export let imgClass = 'h-6 w-6';
  export let disabled = false;

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    if (!disabled) {
      dispatch('click');
    }
  };
</script>

<div class="icon-button flex items-center justify-center rounded-full {disabled ? 'hover:bg-transparent' : 'hover:bg-gray-200'} {classes}" on:click|preventDefault|stopPropagation={handleClick}>
  <img src={icon} class="{disabled ? 'disabled' : ''} cursor-pointer {imgClass}" alt="" />
</div>
