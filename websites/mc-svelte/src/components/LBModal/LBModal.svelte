<script lang="ts">
  import ButtonSubmit from './ButtonSubmit.svelte';
  import ButtonCancel from './ButtonCancel.svelte';
  import { createEventDispatcher } from 'svelte';

  export let showModal = false;
  export let disableSubmit = false;

  export let hideActionButtons = false;
  export let hideSubmitButton = false;
  export let cssModal = 'sm:max-w-lg';
  export let title: string = '';
  export let captionForSubmit = 'SUBMIT';

  const dispatch = createEventDispatcher();

  const modalAction = (value) => {
    dispatch('modalAction', value);
  };

  const onSubmit = () => {
    if (!disableSubmit) {
      modalAction('Submit');
    }
  };
</script>

{#if showModal}
  <div class="modal fixed top-0 left-0 z-[500] flex h-full w-full items-center justify-center p-8 lg:p-0">
    <div class="modal-overlay fixed h-full w-full bg-gray-900 opacity-50" />
    <div class="z-[501] mx-auto w-full overflow-visible shadow-xl {cssModal}">
      <div class="flex items-center justify-between rounded-t-md border-b bg-gray-100 py-3 px-6 text-lg font-semibold text-[#455a64]">
        {title}
      </div>
      <div class="content h-full bg-white px-4 py-4">
        <slot />
      </div>

      {#if !hideActionButtons}
        <div class="flex flex-row justify-end gap-1 rounded-b-md border-t bg-gray-100 px-6 py-4">
          <ButtonCancel on:click={() => modalAction('Cancel')} />
          {#if !hideSubmitButton}
            <ButtonSubmit bind:caption={captionForSubmit} bind:disabled={disableSubmit} on:click={() => onSubmit()} />
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}
