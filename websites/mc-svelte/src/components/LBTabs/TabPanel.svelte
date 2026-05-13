<script lang="ts">
  import { getContext } from 'svelte';
  import { TABS } from './Tabs.svelte';

  const panel = {};

  const { registerPanel, selectedPanel } = getContext(TABS) as any;
  registerPanel(panel);
</script>

{#if $selectedPanel === panel}
  <slot />
{/if}
