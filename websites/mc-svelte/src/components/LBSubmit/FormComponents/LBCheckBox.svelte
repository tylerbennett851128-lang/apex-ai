<script lang="ts">
  import checkMark from '$assets/svg/check.svg';
  export let value: boolean = false;
  export let readOnly: boolean = false;
  export let onChange: (value) => void;

  const onClick = () => {
    if (!readOnly) {
      value = !value;
      onChange(value);
    }
  };
</script>

<div class="cursor-pointer" on:click|stopPropagation|preventDefault={onClick}>
  {#if value}
    <div class="flex h-5 w-5 items-center justify-center rounded-sm {readOnly ? 'bg-blue-300' : 'bg-blue-500'} ">
      <img src={checkMark} class="h-4 w-4" alt="" />
    </div>
  {:else}
    <div class="h-5 w-5 rounded-sm border-2 border-gray-600 bg-white" />
  {/if}
</div>
