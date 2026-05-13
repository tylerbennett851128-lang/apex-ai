<script lang="ts">
  import chevronLeft from '$assets/svg/chevron-left.svg';
  import LbIconButton from '$components/LBIconButton.svelte';
  export let title: string;
  export let root: boolean = true;

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const onClickPrev = () => {
    dispatch('clickPrev');
  };
</script>

<div class="flex h-11 flex-row items-center px-2">
  {#if !root}
    <LbIconButton icon={chevronLeft} on:click={onClickPrev} />
  {/if}
  <span class="px-2 py-0 text-lg text-[#455A64]">{title || ''}</span>
</div>
