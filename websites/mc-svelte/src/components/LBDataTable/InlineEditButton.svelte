<script lang="ts">
  import svgGridOn from '$assets/svg/grid_on.svg';
  import svgGridOff from '$assets/svg/grid_off.svg';
  export let inlineEditing;
</script>

<div
  class="mx-4 flex h-8 w-[200px] items-center justify-end"
  on:click|stopPropagation|preventDefault={() => {
    inlineEditing = !inlineEditing;
  }}
>
  <div class="flex min-w-[150px] cursor-pointer flex-row items-center justify-center rounded-full border-2 border-gray-400 px-1 py-1 font-semibold {inlineEditing ? 'bg-[#73ad34] text-white hover:bg-[#88c744]' : 'bg-gray-200 text-[#37474F] hover:bg-gray-100'}">
    <img src={inlineEditing ? svgGridOn : svgGridOff} class="mr-2 h-4 w-4" alt="" />
    <span class="text-sm">Inline Editing</span>
  </div>
</div>
