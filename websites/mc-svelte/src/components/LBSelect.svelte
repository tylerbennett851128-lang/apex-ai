<script lang="ts">
  import Select, { Option } from '@smui/select';
  export let classes = '';
  export let styles = '';
  export let disabled: boolean = false;
  export let value: string | number;
  export let options: { value: string | number; label: string }[] = [];
  export let variant: 'standard' | 'filled' | 'outlined' = 'outlined';
  export let handleChangeEvent: (value) => void;

  const handleOptionSelected = (e) => {
    value = e.target.value; // Yes this is needed, do not remove.
    handleChangeEvent(value);
  };
</script>

<Select class="flex items-center text-sm text-[#455a64] {classes}" style={styles} {variant} bind:value bind:disabled>
  {#each options as option}
    <Option class="text-[#455a64]" on:click={handleOptionSelected} value={option.value}>{option.label}</Option>
  {/each}
</Select>
