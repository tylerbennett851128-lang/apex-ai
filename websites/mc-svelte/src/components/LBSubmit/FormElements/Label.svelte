<script lang="ts">
  export let required: boolean = false;
  export let label: string = '';
</script>

<div class="my-0.5 mr-4 flex h-3 w-full items-center py-0 {required ? 'after:ml-0.5 after:text-red-500 after:content-["*"]' : ''}">
  <span class="py-0 text-[12px] font-medium text-[#37474F]">{label.toUpperCase()}</span>
</div>
