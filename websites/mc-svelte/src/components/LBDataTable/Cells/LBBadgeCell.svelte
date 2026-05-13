<!-- TODO: CodeReview As a general rule I'd like a basic header at the start of each resuable component - as an example

	Author/Owner: <developer Name>
	Current Version (if applicable) : V1.0.0
	License: Commercial, All rights reserved Everglade Solutions Inc. Operating As Liquid Analytics

	Description
	<Purpose of the component - basic example usage - either as a sample or linked page.>

	Exposed Events
	Exposed Properties

-->
<script lang="ts">
  import type { ICustomCellParams } from './LBColumn';
  import chevronRight from '$assets/svg/chevron-right.svg';
  export let params: ICustomCellParams;
</script>

{#if params && params.value}
  <div class={`flex h-full w-full items-center justify-center`}>
    <div class="h-5 cursor-pointer rounded-md bg-[#455a64] px-3  py-0.5 text-xs  font-bold  text-white">
      <span class="font-bold text-white">{params.value}</span>
    </div>

    <img src={chevronRight} class="h-5 w-5" alt="" />
  </div>
{/if}
