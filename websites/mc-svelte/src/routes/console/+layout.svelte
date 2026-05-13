<script lang="ts">
  import { userService } from '$lib/services/user.service';
</script>

{#if $userService.isAuthed}
  <slot />
{/if}
