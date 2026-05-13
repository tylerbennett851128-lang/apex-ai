<script lang="ts">
  import { clickOutside } from 'svelte-use-click-outside';
  import { DateInput, DatePicker } from 'date-picker-svelte';
  import calendarIcon from '$assets/svg/calendar-icon.svg';
  import { getUTCTime } from '$lib/time_utils';
  import moment from 'moment-timezone';
  import { tick } from 'svelte';

  export let open = false;
  export let classes = '';
  export let timestamp = 0;
  export let readOnly = false;
  export let inlineMode = false;
  export let onClose: (timestamp: number) => void;

  let date = getUTCTime(timestamp ? timestamp : new Date().getTime());
  let max = getUTCTime(new Date().getTime() + 10 * 365 * 24 * 3600000);
  let min = getUTCTime(new Date().getTime() - 10 * 365 * 24 * 3600000);

  let bConvert = true; // This is the flag to prevent the time zone changing to utc when user pick one date on the calendar.

  $: {
    timestamp;
    if (timestamp && timestamp > 0) {
      if (bConvert) {
        // only when user click new row in the table, the flag is true and the timezone updating should be done.
        date = getUTCTime(timestamp * 1000);
        max = getUTCTime(new Date().getTime() + 10 * 365 * 24 * 3600000);
        min = getUTCTime(new Date().getTime() - 10 * 365 * 24 * 3600000);
      }
    }
  }

  const onSelect = async () => {
    const strDate = moment(date.getTime()).format('YYYY-MM-DD');
    bConvert = false;
    await tick();
    timestamp = Math.floor(new Date(strDate).getTime() / 1000);
    if (!inlineMode) {
      open = false;
    }
    onClose(timestamp);
    await tick();
    bConvert = true;
  };
</script>

{#if inlineMode}
  <div class="inline-date-picker-container" use:clickOutside={onSelect}>
    <DatePicker bind:min bind:max bind:value={date} on:select={onSelect} />
  </div>
{:else}
  <div class="date-picker-container h-10 {classes}" use:clickOutside={onSelect}>
    <div class="header px-1 {readOnly ? 'disabled' : ''}">
      <DateInput bind:min bind:max bind:value={date} closeOnSelection={!inlineMode} bind:disabled={readOnly} bind:visible={open} format="MM-dd-yyyy" on:select={onSelect} />
      {#if !inlineMode}
        <img
          class="mr-1 h-[18px] w-[18px]"
          id="selected-area-score-title"
          src={calendarIcon}
          alt=""
          on:click|preventDefault|stopPropagation={() => {
            open = true;
          }}
        />
      {/if}
    </div>
  </div>
{/if}
