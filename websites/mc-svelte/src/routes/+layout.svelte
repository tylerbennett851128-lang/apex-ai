<script lang="ts">
  import { dashboardState, sidebarService } from '$mc';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import '$assets/css/app.scss';
  import '$assets/css/smui.css';
  import 'ag-grid-enterprise';
  import { LicenseManager } from 'ag-grid-enterprise';
  LicenseManager.setLicenseKey('For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-23_February_2023_[v2]_MTY3NzExMDQwMDAwMA==61661d3a8e9969a62c14a9a993913301');
  import Sidebar from '$components/UI/Sidebar.svelte';
  import Header from '$components/UI/Header.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import { onDestroy, onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { onAuthStateChanged } from 'firebase/auth';
  import { load_storage, save_storage } from '$lib/utils';
  import { getFirebaseAuth, logout } from '$lib/auth/firebase';
  import LBSubmitForm from '$components/LBSubmit/LBSubmitForm.svelte';
  import { lb_login, ROLE_NAME, userService } from '$lib/services/user.service';
  import { BrowserStoreKey } from '$lib/services/loading';
  import { varEnv } from '$src/env';
  import { g_socketService } from '$lib/services/socket.service';
  import { globalColumnService } from '$src/mc/global-schema/global-schema.service';

  let loading = false;

  const authSubscriber = () => {
    const auth = getFirebaseAuth();
    if (!auth) {
      return;
    }
    onAuthStateChanged(auth, async (userAuthData) => {
      const version_saved = load_storage(BrowserStoreKey.VERSION);
      const isEqualVersion = version_saved && version_saved === varEnv.version;

      if (userAuthData && userAuthData.email && isEqualVersion) {
        if (loading === false) {
          loading = true;

          if (!$userService.isAuthed) {
            console.log('Login ...');
            const initUser = $userService;
            const result = await initUser.login(userAuthData);
            if (result) {
              userService.update((value) => {
                value = initUser;
                return value;
              });
            } else {
              return await logout(); // if the login on liquid failed, it should be navigated to login screen.
            }
          }

          if (!$userService.isInited) {
            console.log('Loading info ...');
            const initUser = $userService;
            const result = await initUser.init();
            if (result) {
              userService.update((value) => {
                value = initUser;
                return value;
              });
            } else {
              return await logout(); // if getting some user roles failed, it should be navigated to login screen.
            }
          }

          if ($userService.isInited) {
            console.log('Initializing web sockets ...');
            await g_socketService.init();
            const initial = $globalColumnService;
            await initial.init();
            globalColumnService.set(initial);
          }

          dashboardState.update((value) => {
            if ($userService.lb_role) {
              value.setRoleName($userService.lb_role.lb_role_name as ROLE_NAME);
            }
            return value;
          });

          loading = false;

          save_storage(BrowserStoreKey.LOGIN_STATE, false);
          const last_url = load_storage(BrowserStoreKey.LAST_URL);

          if (last_url) {
            if (last_url !== '/login' && last_url !== '/') {
              await goto(last_url);
            } else {
              await goto($dashboardState.pages[0].link);
            }
          }

          lb_login.set(false);
        }
      } else {
        await logout();
      }
    });
  };

  const unsubscribePage = page.subscribe(async (value) => {
    if (browser) {
      const url = value.url.pathname !== '/login' && value.url.pathname !== '/' ? $dashboardState.getCorrectUrl(value.url.pathname) : value.url.pathname;

      if (url !== '/') {
        save_storage(BrowserStoreKey.LAST_URL, url);
      }

      if ($page.data.health === false) {
        return await goto('/site-dropped');
      }

      const login_state = load_storage(BrowserStoreKey.LOGIN_STATE);

      if (url !== '/login') {
        dashboardState.update((value) => {
          value.updateWithCurrentLink(url);
          return value;
        });

        if (!($userService && $userService.isAuthed && $userService.isInited)) {
          const version_saved = load_storage(BrowserStoreKey.VERSION);
          if (version_saved !== varEnv.version) {
            console.log('version updated : ', version_saved, varEnv.version);
            await logout();
          } else {
            if (!login_state) {
              if (url !== '/') {
                await goto('/');
              }
            } else {
              lb_login.set(true);
            }
          }
        }
      }
    }
  });

  onMount(async () => {
    authSubscriber();
  });

  onDestroy(() => {
    unsubscribePage();
  });
</script>

<div class="toast-wrap">
  <SvelteToast target="normal" options={{ reversed: true, intro: { y: 0 } }} />
</div>

<div class="notification-wrap">
  <SvelteToast target="notification" options={{ initial: 0, intro: { y: -80 } }} />
</div>

<div class="x fixed bottom-0 left-0 right-0 {$userService.isAuthed ? ($dashboardState.sidebarOpen ? 'top-16 duration-500 ease-out md:left-72' : 'top-16 duration-300 ease-in md:left-20') : 'top-0 duration-100 ease-in md:left-0'}">
  <Header />
  <Sidebar />

  <div id="main" class="relative flex h-full w-full flex-col bg-gray-100 px-4 pt-4">
    {#if !$lb_login}
      <slot />
    {/if}
  </div>

  {#if $sidebarService && $sidebarService.open}
    <LBSubmitForm />
  {/if}

  <!-- <Footer /> -->
</div>

{#if $lb_login}
  <div class="overlay">
    <div class="flex h-full w-full items-center justify-center">
      <div class="app-loading">
        <div class="logo">
          <svg class="spinner" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
          </svg>
        </div>
      </div>
    </div>
  </div>
{/if}
