<script lang="ts">
  import { onMount } from 'svelte';
  import logo from '$assets/svg/Liquid-Analytics-Logo-2018.png';
  import performLogo from '$assets/svg/perform-logo.png';
  import googleIcon from '$assets/google-auth/google.svg';
  import { GoogleAuthProvider, OAuthProvider, getAuth, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
  import { getFirebaseAuth, logout } from '$lib/auth/firebase';
  import { load_storage, save_storage } from '$lib/utils';
  import { varEnv } from '$src/env';
  import { lb_login, userService } from '$lib/services/user.service';
  import { BrowserStoreKey } from '$lib/services/loading';

  let auth_error_message: string = '';

  const loginWithGoogle = async () => {
    try {
      save_storage(BrowserStoreKey.LOADING_FLAG, true);
      save_storage(BrowserStoreKey.VERSION, varEnv.version);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const auth = getAuth();
      provider.addScope('email');
      signInWithRedirect(auth, provider);
    } catch (error) {
      console.log('login google error : ', error);
    }
  };

  const loginWithMicrosoft = () => {
    try {
      save_storage(BrowserStoreKey.LOADING_FLAG, true);
      save_storage(BrowserStoreKey.VERSION, varEnv.version);
      // This is to save the app version into browser when user login with sgws ( or google ) account.
      // After login, the version of the browser cache is compared with the version of varEnv.version every time.
      // When we create the MR for deploying into stage or prod, developer should update the varEnv.version that is defined at src/env.ts.
      // The updated varEnv.version is compared with the version which is saved into user's browser cache, and if it's not equal, it's navigated to login page.
      // This is the strategy that user let logout automatically when we update the data saving format into browser.
      const msftProvider = new OAuthProvider('microsoft.com');
      msftProvider.setCustomParameters({
        prompt: 'select_account'
      });
      msftProvider.setCustomParameters({
        tenant: varEnv.tenantId
      });
      msftProvider.addScope('email');
      const msftAuth = getAuth();
      signInWithRedirect(msftAuth, msftProvider);
    } catch (error) {
      console.log('login msft error : ', error);
    }
  };

  const authSubscriber = () => {
    const auth = getFirebaseAuth();
    if (!auth) {
      return;
    }
    onAuthStateChanged(auth, async (userAuthData) => {
      save_storage(BrowserStoreKey.LOADING_FLAG, false);
      lb_login.set(false);

      if (userAuthData && userAuthData.email) {
        save_storage(BrowserStoreKey.LOGIN_STATE, true);
      } else {
        await logout();
      }
    });
  };

  onMount(async () => {
    const login_state = load_storage(BrowserStoreKey.LOGIN_STATE);
    if (!login_state) {
      const value = load_storage(BrowserStoreKey.LOADING_FLAG);
      if (value !== null) {
        lb_login.set(value);
      }
      authSubscriber();
    }
  });
</script>

<div class="fixed bottom-0 left-0 right-0 top-0 flex flex-row content-center justify-center">
  <div class="container flex w-full flex-col items-center justify-center">
    {#if !$userService.isAuthed}
      <div class="{!$lb_login ? 'sub-container' : 'h-full'} mx-auto block w-full">
        <img src={logo} alt="Liquid Analytics Logo" class="liquid-logo-text" />
        {#if !$lb_login}
          <div id="ssoContainer" class="sso-container">
            <div id="sso">
              <div class="sso-options flex items-center">
                <h2 class="mb-8 text-2xl font-semibold text-[#0a8cc7]">Welcome!</h2>
                <div class="text-xs text-red-700">{auth_error_message}</div>

                <div class="mb-6 flex flex-col items-start">
                  <span class="text-[14px] font-semibold text-gray-600">SGWS Users:</span>
                  <button class="m-0 h-10 w-[200px] border-red-400 bg-white p-0 hover:border-red-500 hover:bg-white hover:drop-shadow-md" on:click={loginWithMicrosoft}>
                    <img class="mx-auto h-7 cursor-pointer" src={performLogo} alt="Login with SGWS" />
                  </button>
                </div>

                <div class="flex flex-col items-start">
                  <span class="text-[14px] font-semibold text-gray-600">Liquid Users:</span>
                  <button class="m-0 flex h-10 w-[200px] flex-row items-center overflow-hidden border-gray-400 p-0 hover:border-gray-500 hover:drop-shadow-md" on:click={loginWithGoogle}>
                    <div class="flex h-10 w-12 items-center justify-center bg-white">
                      <img class="h-6 w-6 cursor-pointer" src={googleIcon} alt="Login with Google" />
                    </div>
                    <div class="flex h-full w-full items-center justify-center bg-[#3367d6]">
                      <span class="font-semibold text-white">Login with Google</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    {:else}
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
  </div>
</div>
