<script lang="ts">
  export let showModal = false;
  export let title = 'Modal';
  export let cssModal = 'sm:max-w-lg';
</script>

{#if showModal}
  <div class="modal fixed top-0 left-0 z-[500] flex h-full w-full items-center justify-center p-8 lg:p-0">
    <div class="modal-overlay fixed h-full w-full bg-gray-900 opacity-50" />
    <div class="z-[501] mx-auto w-full overflow-hidden rounded-md bg-white shadow-xl {cssModal}">
      <div class="flex items-center justify-between bg-gray-100 py-3 px-6 text-lg font-semibold text-[#455a64]">
        {title}
      </div>
      <div class="content h-full px-4 py-2">
        <slot />
      </div>
    </div>
  </div>
{/if}
