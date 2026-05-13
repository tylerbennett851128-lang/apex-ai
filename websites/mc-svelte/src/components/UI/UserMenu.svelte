<script lang="ts">
  import { Modal } from 'flowbite-svelte';
  import { page } from '$app/stores';
  import { clickOutside } from 'svelte-use-click-outside';
  import { PositionService, userService } from '$lib/services/user.service';
  import UserPositionIcon from '$assets/svg/user-position.svg';
  import Avatar from '$assets/svg/user.svg';
  import Logout from '$assets/svg/logout.svg';
  import { logout } from '$lib/auth/firebase';
  import { onDestroy, onMount } from 'svelte';
  import { dashboardState, sidebarService } from '$mc';
  import { goto } from '$app/navigation';
  import { SUBMIT_STATE } from '$lib/services/sidebar.service';
  import { varEnv } from '$src/env';
  import MenuItem, { type MENU_ITEM } from './MenuItem.svelte';
  import moment from 'moment-timezone';
  import { writable } from 'svelte/store';

  let user = $userService.getUser();
  let lb_user = $userService.getLBUser();

  export let isMenuOepn = false;

  let positionInfo: PositionService;
  let loading = false;
  let lastHoverdItem: MENU_ITEM;
  let profileModal = false;

  const menu: MENU_ITEM[] = [
    {
      id: '0-0',
      name: 'Change Position',
      level: 0,
      icon: UserPositionIcon
    },
    {
      id: '0-1',
      level: 0,
      name: 'My Profile',
      onClick: () => {
        profileModal = true;
        isMenuOepn = false;
      },
      icon: Avatar
    },
    {
      id: '0-2',
      level: 0,
      name: 'Logout',
      onClick: async () => {
        userService.update((value) => {
          value.clear();
          return value;
        });
        await logout();
      },
      icon: Logout
    }
  ];

  const menuItems = writable(menu);

  const onMouseMove = ({ detail: { item } }) => {
    menuItems.update((items) => {
      if (lastHoverdItem && lastHoverdItem !== item) {
        const idxLast = items.findIndex((element) => element.id === lastHoverdItem.id);
        if (idxLast !== -1) {
          items[idxLast].opened = false;
        }
      }

      const idx = items.findIndex((element) => element.id === item.id);
      if (idx !== -1) {
        items[idx].opened = true;
      }

      lastHoverdItem = item;
      return items;
    });
  };

  const onChangePosition = async (item: MENU_ITEM) => {
    menuItems.update((items) => {
      const idx = items.findIndex((element) => element.id === item.id);
      if (idx !== -1) {
        items[idx].opened = true;
      }
      return items;
    });

    isMenuOepn = false;

    const currentPositionId = item.value;

    if (currentPositionId && loading === false) {
      loading = true;
      const roleName = await $userService.getRoleName(currentPositionId);
      loading = false;

      if (roleName) {
        $userService.positionInfo.update((value) => {
          value.setSelectedPositionId(currentPositionId);
          return value;
        });

        let updated = false;

        dashboardState.update((value) => {
          updated = value.setRoleName(roleName);
          return value;
        });

        if (updated) {
          const find = $dashboardState.findPage($page.url.pathname);
          if (!find) {
            const firstPage = $dashboardState.pages[0];
            await goto(firstPage.link);
          } else {
            sidebarService.update((value) => {
              value.open = false;
              value.status = SUBMIT_STATE.REFRESH;
              return value;
            });
          }
        }
      }
    }
  };

  const onMenuClose = () => {
    isMenuOepn = false;
    menuItems.update((items) => {
      items.forEach((item) => {
        item.opened = false;
      });
      return items;
    });
  };

  const unsubscribeUserService = $userService.positionInfo.subscribe((value) => {
    positionInfo = value;
  });

  onMount(() => {
    if (positionInfo && positionInfo.isValid()) {
      const positionList = positionInfo.getPositionList();

      menu[0].children = [];
      positionList.forEach((item, idx) => {
        const menuItem: MENU_ITEM = {
          id: `1-${idx}`,
          name: item.label,
          level: 1,
          value: item.value,
          parent: menu[0],
          onClick: (item) => onChangePosition(item)
        };
        menu[0].children.push(menuItem);
        menu[0].opened = false;
      });

      menuItems.set(menu);
    }
  });

  onDestroy(unsubscribeUserService);
</script>

{#if isMenuOepn}
  <div class="modal fixed left-0 top-0 z-[500] flex h-full w-full items-center justify-center p-8 lg:p-0">
    <div class="modal-overlay bg-translate fixed h-full w-full opacity-50" />

    <div class="absolute right-2 top-2 z-50 mb-1 w-[300px] rounded-md border border-gray-300 bg-white shadow-lg" use:clickOutside={onMenuClose}>
      {#if $userService.isAuthed}
        <div class=" my-4 flex h-16 w-full justify-center p-2">
          <img class="h-[64px] w-[64px] rounded-full border-2 border-slate-400" src={$userService.getUser().photoURL ? $userService.getUser().photoURL : Avatar} alt="" />
        </div>
      {/if}

      <div class="flex w-full justify-center text-[16px] font-normal leading-normal text-[#455A64]">
        {user.displayName}
      </div>

      <div class="flex w-full items-center justify-center text-center text-sm font-normal leading-normal text-[#455A64]">
        {user.email}
      </div>

      <ul class="relative mt-4 flex w-full flex-col">
        {#each $menuItems as item}
          <MenuItem bind:item on:mouseMove={onMouseMove} />
          {#if item.opened && item.children}
            <div class="absolute right-[295px] top-0 z-50 mb-1 min-w-[300px] overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg">
              <ul class="flex w-full flex-col">
                {#each item.children as child}
                  <MenuItem bind:item={child} />
                {/each}
              </ul>
            </div>
          {/if}
        {/each}

        <li class="flex h-14 w-full items-center justify-center border-t border-zinc-100 p-4 hover:border-zinc-200 hover:bg-zinc-200">
          <span class="text-md truncate text-sm font-normal text-[#37474F]">
            {varEnv.version}
            {varEnv.lbEnvironment}
          </span>
        </li>

        <li class="flex h-14 w-full items-center justify-center border-t border-zinc-100 p-4 hover:border-zinc-200 hover:bg-zinc-200">
          <span class="text-md truncate text-sm font-normal text-[#37474F]"> © Liquid Analytics 2023 </span>
        </li>
      </ul>
    </div>
  </div>
{/if}

<Modal bind:open={profileModal} size="xs" class="w-full" autoclose={true}>
  <div class="flex h-full w-full flex-col">
    {#if $userService.isAuthed}
      <div class="my-2 flex w-full flex-col items-center p-2">
        <img class="h-[128px] w-[128px] rounded-full border-2 border-slate-400" src={user.photoURL ? user.photoURL : Avatar} alt="" />

        <div class="flex w-full justify-center p-2 text-[16px] font-semibold leading-normal text-[#455A64]">
          {user.displayName}
        </div>

        <div class="flex w-full items-center justify-center p-2 text-center font-normal leading-normal text-[#455A64]">
          {user.email}
        </div>
      </div>
    {/if}

    {#if lb_user}
      <div class="flex w-full flex-col items-center justify-center px-4 font-normal text-[#455A64]">
        <div class="flex flex-row items-center justify-start py-1">
          <span class="w-32 text-left font-semibold"> Created At: </span>
          <span class="ml-2 w-36 text-left">
            {moment(lb_user.created_at * 1000).format('D MMM YYYY')}
          </span>
        </div>

        <div class="flex flex-row items-center justify-start py-1">
          <span class="w-32 text-left font-semibold"> User Type: </span>
          <span class="ml-2 w-36 text-left">
            {lb_user.user_type}
          </span>
        </div>

        <div class="flex flex-row items-center justify-start py-1">
          <span class="w-32 text-left font-semibold"> User Status: </span>
          <span class="ml-2 w-36 text-left">
            {lb_user.user_status}
          </span>
        </div>
      </div>
    {/if}
  </div>
</Modal>
