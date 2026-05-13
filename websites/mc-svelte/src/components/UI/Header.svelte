<script lang="ts">
  import AccountIcon from '$assets/svg/account-icon.svg';
  import menuIcon from '$assets/svg/menu.svg';
  import { dashboardState } from '$mc';
  import { userService } from '$lib/services/user.service';
  import UserMenu from './UserMenu.svelte';
  import { onDestroy } from 'svelte';

  let isMenuOepn = false;
  let currentPostionName: string;

  const onExpand = () => {
    dashboardState.update((value) => {
      value.sidebarOpen = !value.sidebarOpen;
      return value;
    });
  };

  const unsubscribeUserService = $userService.positionInfo.subscribe((value) => {
    currentPostionName = value.getSelectedPosition();
  });

  onDestroy(unsubscribeUserService);
</script>

<div id="ib_app_header" class="x fixed left-0 right-0 z-10 {$userService.isAuthed ? ($dashboardState.sidebarOpen ? 'top-0 left-72 duration-500 ease-out' : 'top-0 left-20 duration-300 ease-in') : '-top-16 left-20 duration-100 ease-in'}">
  <div class="flex h-16 items-center justify-between bg-white px-4 {$userService.isAuthed ? 'shadow-md' : ''}">
    {#if $userService.isAuthed}
      <div class="flex h-14 items-center justify-start">
        <img class="cursor-pointer" src={menuIcon} height="16px" width="16px" alt="menu" on:click|preventDefault|stopPropagation={onExpand} />
        <pre class="text-bg ml-3 text-xl text-[#455A64]">{$dashboardState.getSelectedPage().name}</pre>
      </div>

      <div class="text-bg absolute right-3 flex items-center border-0">
        <div class="mx-2 flex flex-col items-end">
          <span class="text-sm font-normal leading-normal text-[#455A64]">
            {$userService.getUser().displayName}
          </span>
          <span class="text-xs font-normal leading-normal text-[#607D8B]">{currentPostionName}</span>
        </div>

        <div class="flex cursor-pointer items-center" on:click|preventDefault|stopPropagation={() => (isMenuOepn = !isMenuOepn)}>
          <img class="h-[40px] w-[40px] rounded-full border-2 border-slate-400" src={$userService.getUser().photoURL ? $userService.getUser().photoURL : AccountIcon} alt="" />
        </div>
        <UserMenu bind:isMenuOepn />
      </div>
    {/if}
  </div>
</div>
