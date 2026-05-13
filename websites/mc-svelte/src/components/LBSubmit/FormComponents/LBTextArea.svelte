<script lang="ts">
  export let value = '';
  export let classes = '';
  export let readOnly = false;
  export let placeholder = 'description';
  export let onChange: (value) => void;
</script>

<textarea class={`${classes} block w-full rounded-md border border-gray-300 p-2 placeholder-gray-300 shadow-sm sm:text-sm`} disabled={readOnly} bind:value rows={3} cols={40} {placeholder} on:input={() => onChange(value)} />
