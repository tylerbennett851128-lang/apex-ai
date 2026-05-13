<script lang="ts">
  import checkMark from '$assets/svg/check.svg';
  export let id: string;
  export let name: string;
  export let alias: string;
  export let item: any;
  export let selected: any | any[]; // comes from row_data;

  export let onItemSelected = (item: any) => {};
</script>

<div class="m-0 flex h-12 w-full cursor-pointer items-center justify-start border border-zinc-100 p-0 pl-3 pr-2 hover:border-zinc-300 hover:bg-zinc-200" on:click|preventDefault|stopPropagation={() => onItemSelected(item)}>
  <div class="flex h-full w-[10%] items-center justify-center">
    <div class="flex h-4 w-4 items-center justify-center rounded-sm bg-[#455a64]">
      {#if selected && selected === item[id]}
        <img src={checkMark} class="h-3 w-3" alt="" />
      {/if}
    </div>
  </div>

  <div class="flex w-[90%] flex-col items-start justify-center px-2">
    <span class="flex w-full truncate text-sm">
      {item[name]}
    </span>

    {#if item[alias] && name !== alias}
      <span class="flex w-full truncate text-xs">
        {`(${item[alias]})`}
      </span>
    {/if}
  </div>
</div>
