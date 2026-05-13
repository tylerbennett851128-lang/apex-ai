<script lang="ts">
  import { userService } from '$lib/services/user.service';
  import { dashboardState } from '$mc';
  import { varEnv } from '$src/env';
</script>

<div
  id="ib_app_footer"
  class="fixed left-0 right-0 h-16 border-t border-zinc-300 bg-white p-4 {$userService.isAuthed ? ($dashboardState.sidebarOpen ? 'duration-500 ease-out md:left-72' : 'duration-300 ease-in md:left-20') : '-bottom-16 duration-100 ease-in md:left-20'}"
>
  <div class="flex h-full w-full flex-row items-center justify-between">
    <span class="text-[#455a64]">© Liquid Analytics.</span>
    <span class="mx-2 text-[#455a64]">{new Date().getFullYear()} Version {varEnv.version}</span>
  </div>
</div>
