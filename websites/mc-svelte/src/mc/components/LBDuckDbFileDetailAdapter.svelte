<script lang="ts">
  import LBProgressBar from '$components/LBProgressBar.svelte';
  import { onDestroy } from 'svelte';
  import type { QueryService } from '$lib/services/query.service';

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

<LBProgressBar bind:loading />
