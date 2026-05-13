<script lang="ts">
  import LBProgressBar from '$components/LBProgressBar.svelte';
  import type { QueryService } from '$src/lib/services/query.service';
  import { onDestroy } from 'svelte';
  export let queryService: QueryService;
  export let refreshPage: () => void;

  let loading = false;

  const unsubscribeQueryList = queryService.queryList.subscribe((value) => {
    if (value.length > 0) {
      loading = true;
    } else {
      loading = false;
    }
  });

  onDestroy(() => {
    unsubscribeQueryList();
  });
</script>

{#if queryService}
  <LBProgressBar bind:loading />
{/if}
