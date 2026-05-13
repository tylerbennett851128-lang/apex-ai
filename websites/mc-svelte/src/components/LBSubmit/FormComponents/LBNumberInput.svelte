<script lang="ts">
  export let value;
  export let readOnly = false;
  // added placeholder prop
  export let placeholder: string;
  export let onChange: (value) => void;
</script>

<div class="flex w-full flex-col">
  <input type="number" class="block w-full rounded-md border border-gray-300 p-2 shadow-sm sm:text-sm" disabled={readOnly} bind:value {placeholder} on:input={() => onChange(value)} />
</div>
