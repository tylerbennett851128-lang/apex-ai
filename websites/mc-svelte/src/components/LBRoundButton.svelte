<script>
  export let onClick = () => void 0;
  export let size = 'md';
  export let classes = '';
  export let title_text = '';

  let sizeStr = 'h-8 w-8';
  if (size === 'sm') sizeStr = 'h-6 w-6';
  else if (size === 'lg') sizeStr = 'h-10 w-10';
  else if (size === 'xl') sizeStr = 'h-12 w-12';
</script>

<button on:click|stopPropagation={onClick} class={`flex items-center justify-center rounded-full border-none ${sizeStr} max-w-14 max-h-14 hover:bg-opacity-50 ${classes}`} title={title_text}>
  <slot name="icon" />
</button>
