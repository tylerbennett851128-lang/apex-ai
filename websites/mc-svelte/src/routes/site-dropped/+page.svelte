<script lang="ts">
  import imgSiteDropped from '$assets/svg/site-dropped.svg';
  import logo from '$assets/svg/Liquid-Analytics-Logo-2018.png';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  const navigation = async () => {
    if ($page.data.health === true) {
      await goto('/');
    }
  };

  onMount(async () => {
    await navigation();
  });
</script>

<div class="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center">
  <div class="fixed top-0 flex h-16 w-full items-center justify-center border bg-gray-50">
    <img src={logo} alt="Liquid Analytics Logo" height="24px" width="120px" />
  </div>

  <div class="relative bottom-0 top-0 flex w-full flex-col items-center justify-center">
    <h2 class="text-2xl font-semibold">We are sorry, our site is temporarily unavailable.</h2>
    <img src={imgSiteDropped} alt="" />
  </div>

  <div class="fixed bottom-0 left-0 right-0 h-16 border-t border-zinc-300 bg-white p-4">
    <div class="flex h-full w-full flex-row items-center justify-end">
      <span class="mx-2">{new Date().getFullYear()}</span>
      <span>© Liquid Analytics.</span>
    </div>
  </div>
</div>
