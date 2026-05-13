<script lang="ts">
  export let loading = false;
  export let classes = '';
</script>

<div class="progress-bar {classes}">
  {#if loading}
    <div class="progress-bar__progress" />
  {/if}
</div>
