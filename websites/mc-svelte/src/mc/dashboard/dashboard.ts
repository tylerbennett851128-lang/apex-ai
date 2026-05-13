import { writable } from 'svelte/store';
import AccountTree from '$assets/svg/account_tree.svg';
import ListAlt from '$assets/svg/list_alt.svg';
import Stars from '$assets/svg/stars.svg';
import Dataset from '$assets/svg/dataset.svg';
import Storage from '$assets/svg/storage.svg';
import Settings from '$assets/svg/settings_applications.svg';
import Accessibility from '$assets/svg/settings_accessibility.svg';
import DuckDB from '$assets/svg/duckdb.svg';
import Parquet from '$assets/svg/parquet.svg';
import { ROLE_NAME } from '$lib/services/user.service';
import { levenshteinDistance } from '$lib/utils';

export type PAGE = {
  name: string;
  link: string;
  icon?: string;
  color?: string;
  showInAppbar: boolean;
  showBadgeCount: boolean;
  pages: string[];
};

export class DashboardState {
  public sidebarOpen = false;
  public showSidebar = true;
  public pathHistory = ['/'];
  public targetUrl: string;

  public readonly pages_super_admin: PAGE[] = [
    {
      name: 'Attribute',
      link: '/attribute',
      icon: AccountTree,
      color: ' bg-[#00838F]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: ['enum', 'tree', 'meta']
    },
    {
      name: 'Program Templates',
      link: '/console/template',
      icon: ListAlt,
      color: ' bg-[#FF5722]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    },
    {
      name: 'Goal Data',
      link: '/console/goal-data',
      icon: Stars,
      color: ' bg-[#1976D2]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    },
    {
      name: 'Client Data',
      link: '/console/client-data',
      icon: Dataset,
      color: ' bg-[#EFB42D]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    },
    {
      name: 'Longbow Data',
      link: '/console/longbow-data',
      icon: Storage,
      color: ' bg-[#7E57C2]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    },
    {
      name: 'Perform Settings',
      link: '/perform-settings',
      icon: Settings,
      color: ' bg-[#78909C]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    },
    {
      name: 'Access Control',
      link: '/console/access-control',
      icon: Accessibility,
      color: ' bg-[#C62828]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: ['users', 'roles', 'intents']
    },
    {
      name: 'Site DuckDB Tables',
      link: '/duckdb',
      icon: DuckDB,
      color: ' bg-[#F8EA00]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    },
    {
      name: 'Parquet Tables',
      link: '/parquet',
      icon: Parquet,
      color: ' bg-[#4CAF50]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    }
  ];

  public readonly pages_admin: PAGE[] = [
    {
      name: 'Attribute',
      link: '/attribute',
      icon: AccountTree,
      color: ' bg-[#00838F]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: ['enum', 'tree', 'meta']
    },
    {
      name: 'Program Templates',
      link: '/console/template',
      icon: ListAlt,
      color: ' bg-[#FF5722]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    },
    {
      name: 'Perform Settings',
      link: '/perform-settings',
      icon: Settings,
      color: ' bg-[#78909C]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    },
    {
      name: 'Access Control',
      link: '/console/access-control',
      icon: Accessibility,
      color: ' bg-[#C62828]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: ['users', 'roles', 'intents']
    },
    {
      name: 'Site DuckDB Tables',
      link: '/duckdb',
      icon: DuckDB,
      color: ' bg-[#F8EA00]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    },
    {
      name: 'Parquet Tables',
      link: '/parquet',
      icon: Parquet,
      color: ' bg-[#4CAF50]',
      showInAppbar: true,
      showBadgeCount: false,
      pages: []
    }
  ];

  protected role_name: ROLE_NAME = ROLE_NAME.PerformAdmin;

  public setRoleName(role_name: ROLE_NAME): boolean {
    if (this.role_name != role_name) {
      this.role_name = role_name;
      return true;
    }
    return false;
  }

  public get pages(): PAGE[] {
    if (this.role_name === ROLE_NAME.SuperAdmin) {
      return this.pages_super_admin;
    }
    return this.pages_admin;
  }

  protected selectedPage: PAGE = this.pages_admin[0];

  public findPage(url: string) {
    const find = this.pages.find((page) => url.includes(page.link));
    return find;
  }

  public getCorrectUrl(url: string): string {
    let idxMin = -1;
    let distMin = 1000;

    const listUrl: string[] = [];
    this.pages.forEach((item) => {
      if (item.pages.length > 0) {
        item.pages.forEach((child) => {
          const childLink = `${item.link}/${child}`;
          listUrl.push(childLink);
        });
      } else {
        listUrl.push(item.link);
      }
    });

    for (let idx = 0; idx < listUrl.length; idx++) {
      const link = listUrl[idx];
      const dist = url.includes(link) ? 0 : levenshteinDistance(url, link);

      if (dist === 0) {
        return url;
      }

      if (dist < distMin) {
        distMin = dist;
        idxMin = idx;
      }
    }

    return listUrl[idxMin];
  }

  public updateWithCurrentLink(link: string) {
    const find = this.pages.find((page) => link.includes(page.link));

    if (find) {
      this.selectedPage = find;
    } else {
      this.selectedPage = this.pages[0];
    }
  }

  public getSelectedPage(): PAGE {
    return this.selectedPage;
  }
}

function createDashboardState() {
  const state = new DashboardState();

  const { subscribe, update, set } = writable(state);

  return {
    subscribe,
    update,
    set
  };
}

export const dashboardState = createDashboardState();
