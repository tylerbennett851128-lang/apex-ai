import { SideBarService } from '$lib/services/sidebar.service';
import { writable } from 'svelte/store';

function createSideBarService() {
  const sidebar = new SideBarService();
  const { subscribe, update, set } = writable(sidebar);
  return {
    subscribe,
    update,
    set
  };
}

export const sidebarService = createSideBarService();
