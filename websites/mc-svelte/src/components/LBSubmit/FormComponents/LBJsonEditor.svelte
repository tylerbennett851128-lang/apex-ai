<script lang="ts">
  import { JSONEditor } from 'svelte-jsoneditor';
  export let content = null;
  export let readOnly = false;
  export let onChange: (value) => void;

  let edit_content;
  let bChange = false;

  $: {
    content;

    if (!bChange) {
      try {
        if (content) {
          edit_content = {
            text: JSON.stringify(content)
          };
        }
      } catch (err) {
        console.log('JSON stringify error : ');
      }
    }

    bChange = false;
  }

  const onUpdate = (e) => {
    try {
      if (e['text']) {
        bChange = true;
        content = JSON.parse(edit_content['text']);
        onChange(content);
      }
    } catch (error) {
      console.log('JSON Parse error : ');
    }
  };
</script>

<div class="h-full w-full">
  <JSONEditor navigationBar={false} bind:readOnly bind:content={edit_content} onChange={onUpdate} />
</div>
