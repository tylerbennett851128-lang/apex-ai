<script lang="ts">
  import { tick } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  export let value = '#5E7ABC';
  import { clickOutside } from 'svelte-use-click-outside';

  let trigger = 'Escape';
  let window_height;
  let top;
  let show_picker = false;
  let height = 158;
  let input_height;
  let dispatch = createEventDispatcher();

  const values = [
    ['#ffffff', '#6D4C41', '#A1887F', '#D32F2F', '#ff1744', '#F06292', ' #ea80fc'],
    ['#d500f9', '#ab47bc', '#7b1fa2', '#5e35b1', '#3949ab', '#1e88e5', '#039be5'],
    ['#00acc1', '#00897b', '#2e7d32', '#43a047', '#7cb342', '#aeea00', '#c0ca33'],
    ['#fdd835', '#ffb300', '#fb8c00', '#f4511e', '#757575', '#546e7a', '#263238']
  ];

  function handle_key_down(e) {
    if (e.key == trigger) {
      show_picker = false;
    }
  }

  async function toggle_dropdown(e) {
    if (e.clientY + input_height < height || window_height - height - input_height - e.clientY > 0) {
      top = false;
    } else {
      top = true;
    }
    show_picker = !show_picker;
    await tick();
  }

  function change_value(item) {
    value = item;
    dispatch('changeColor', { value });
    show_picker = false;
  }
</script>

<svelte:window bind:innerHeight={window_height} on:keydown={handle_key_down} />
<div class="color-picker relative">
  <button style="background: {value}; {value == '#ffffff' ? 'border: 0.5px solid rgba(0, 0, 0, 0.25);' : ''}" on:click|preventDefault|stopPropagation={toggle_dropdown} class="h-6  w-6 border-r-2 border-none" />

  {#if show_picker}
    <div
      class:top
      bind:clientHeight={height}
      class="values-dropdown selector-box-shadow"
      use:clickOutside={() => {
        show_picker = false;
      }}
    >
      <div class="values-dropdown-grid">
        {#each values as val}
          {#each val as item}
            <button
              class:active={item == value}
              style="background: {item}; {item == '#ffffff' ? 'border: 0.5px solid rgba(0, 0, 0, 0.25);' : ''} "
              class="m-0 h-full w-full border-2 border-r-2 border-solid border-gray-50 p-0"
              on:click|stopPropagation|preventDefault={() => {
                change_value(item);
              }}
            />
          {/each}
        {/each}
      </div>
    </div>
  {/if}
</div>
