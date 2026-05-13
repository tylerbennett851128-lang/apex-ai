<script lang="ts">
  import { userService } from '$lib/services/user.service';
  import { sidebarService, dashboardState } from '$mc';
  import { fade } from 'svelte/transition';
  import logo from '$assets/svg/logo-white-text.svg';
  import logoSingle from '$assets/svg/logo-white.svg';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  const fadeIn = {
    delay: 100,
    duration: 400
  };

  const fadeOut = {
    delay: 0,
    duration: 200
  };

  const handleMenuClick = async (link: string) => {
    const selectedPage = $dashboardState.getSelectedPage();
    if (selectedPage && selectedPage.link === link) {
      if ($dashboardState.sidebarOpen) {
        dashboardState.update((value) => {
          value.sidebarOpen = false;
          return value;
        });
      }
    } else {
      if ($dashboardState.targetUrl !== link) {
        if ($sidebarService.open) {
          sidebarService.update((value) => {
            value.open = false;
            return value;
          });
        }

        if ($dashboardState.sidebarOpen) {
          dashboardState.update((value) => {
            value.sidebarOpen = false;
            value.targetUrl = link;
            return value;
          });
        } else {
          await goto(link);
        }
      }
    }
  };

  const onAnimationEnd = async () => {
    if (!$dashboardState.sidebarOpen) {
      if ($dashboardState.targetUrl) {
        await goto($dashboardState.targetUrl);
        $dashboardState.targetUrl = null;
      }
    }
  };
</script>

<div class="invisible fixed top-0 z-50 bg-[#263238] md:visible {$userService.isAuthed ? 'left-0 duration-100 ease-out' : '-left-20 duration-100 ease-in'}">
  <div class="h-screen flex-col ">
    <div class="flex h-16 items-center justify-center divide-y divide-gray-500 border-b border-gray-500">
      {#if $dashboardState.sidebarOpen}
        <img src={logo} alt="Liquid Analytics Logo" class="mx-4 h-10" />
      {:else}
        <img src={logoSingle} alt="Liquid Analytics Logo" class="mx-4 h-10" />
      {/if}
    </div>

    {#if $userService.isAuthed}
      {#each $dashboardState.pages as p}
        {#if typeof p.showInAppbar === 'boolean' && p.showInAppbar}
          <div class="h-16 {$dashboardState.sidebarOpen ? 'w-72 duration-500 ease-out' : 'w-20 duration-300 ease-in'}" on:transitionend={() => onAnimationEnd()}>
            <div
              on:click|preventDefault|stopPropagation={() => handleMenuClick(p.link)}
              data-tooltip={p.name}
              class="menu-link text-bg visited:text-bg relative box-border flex h-full w-full cursor-pointer items-center justify-start text-center hover:bg-teal-600"
            >
              <div class="ml-3 inline-flex flex-shrink-0 items-center justify-center" style="color: #455a64; min-width: 40px;">
                {#if $page.url.pathname.includes(p.link)}
                  <div class={`absolute left-0 mr-6 h-full w-2 ${p.color} rounded-none p-1 text-white`} />
                {/if}

                <div class="{p.color} rounded-md p-1">
                  <img src={p.icon} width="24px" height="24px" alt="" />
                </div>

                {#if $dashboardState.sidebarOpen}
                  <div class="pl-3 text-sm text-gray-300" in:fade={fadeIn} out:fade={fadeOut}>
                    {p.name}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/if}
      {/each}
    {/if}

    <div />
  </div>
</div>
