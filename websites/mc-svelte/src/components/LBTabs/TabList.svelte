<script lang="ts">
  export let rtl = false;
  export let classes = '';
</script>

<div class="flex flex-wrap items-end {classes} {rtl ? 'justify-end' : 'justify-start'}">
  <slot />
</div>
