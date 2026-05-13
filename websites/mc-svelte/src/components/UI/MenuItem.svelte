<script lang="ts" context="module">
  export type MENU_ITEM = {
    id: string;
    name: string;
    value?: string;
    onClick?: (item: MENU_ITEM) => void;
    onHover?: (item: MENU_ITEM) => void;
    level?: number;
    width?: number;
    parent?: MENU_ITEM;
    icon?: string;
    children?: MENU_ITEM[];
    opened?: boolean;
  };
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let item: MENU_ITEM;
  import chevronRight from '$assets/svg/chevron-right.svg';
  const onMouseMove = (item: MENU_ITEM) => {
    dispatch('mouseMove', { item });
  };
</script>

<li
  class="flex h-14 w-full cursor-pointer items-center justify-between border-t border-zinc-100 p-4 hover:border-zinc-200 hover:bg-zinc-200"
  on:mousemove={() => onMouseMove(item)}
  on:click={() => {
    item.opened = false;
    if (item.onClick) {
      item.onClick(item);
    }
    if (item.parent) {
      item.parent.opened = false;
    }
  }}
>
  <div class="flex items-center justify-start">
    {#if item.icon}
      <img src={item.icon} class="mr-4" width={24} height="24" alt="" />
    {/if}

    <span class="text-md truncate font-normal text-[#37474F]">
      {item.name}
    </span>
  </div>

  {#if item.children}
    <img src={chevronRight} width={24} height="24" alt="" />
  {/if}
</li>
