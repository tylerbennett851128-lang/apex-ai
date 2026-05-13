<script lang="ts">
  export let value = '';
  export let readOnly = false;
  export let placeholder = 'text';
  export let classes = '';
  export let onChange: (value) => void;
</script>

<input
  data-testid="test_id_text_field"
  type="text"
  class="block w-full rounded-md border border-gray-300 bg-white p-2 placeholder-gray-300 shadow-sm sm:text-sm {classes}"
  disabled={readOnly}
  bind:value
  {placeholder}
  on:click|preventDefault|stopPropagation={() => {}}
  on:input={() => onChange(value)}
/>
