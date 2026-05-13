<script lang="ts">
  import checkMark from '$assets/svg/check.svg';
  export let id: string;
  export let name: string;
  export let item: any;
  export let selected: any | any[]; // comes from row_data;

  export let onItemSelected: (item: any) => void;

  const isAbleToCheckMark = (item: any) => {
    try {
      if (selected) {
        if (Array.isArray(selected) && selected.length > 0) {
          return selected.find((element) => element === item[id] || element[id] === item[id]);
        } else if (selected[id]) {
          return selected[id] === item[id];
        } else {
          return selected === item[id];
        }
      }
    } catch (err) {
      console.log('selected : error ', selected);
    }

    return false;
  };
</script>

<div class="flex h-10 w-full cursor-pointer items-center justify-start overflow-hidden border border-zinc-100 p-0 px-2 hover:border-zinc-300 hover:bg-zinc-200" on:click|preventDefault|stopPropagation={() => onItemSelected(item)}>
  <div class="flex h-full w-[10%] items-center justify-start">
    <div class="flex h-4 w-4 items-center justify-center rounded-sm bg-[#455a64]">
      {#if selected && isAbleToCheckMark(item)}
        <img src={checkMark} class="h-3 w-3" alt="" />
      {/if}
    </div>
  </div>

  <div class="flex h-full w-[90%] flex-col items-start justify-center px-2">
    <span class="flex w-full truncate text-sm">
      {item[name]}
    </span>
  </div>
</div>
