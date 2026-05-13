import { writable } from 'svelte/store';

export enum QueryMode {
  Hide,
  Show
}

export type QueryType = {
  mode: QueryMode;
  endpoint: string;
};

function initPendingQuery() {
  const queryList: QueryType[] = [];

  const { subscribe, update, set } = writable(queryList);

  return {
    subscribe,
    update,
    set
  };
}

export const queryList = initPendingQuery();

export enum BrowserStoreKey {
  LOADING_FLAG = 'loading',
  LOGIN_STATE = 'login_state',
  LAST_URL = 'last_url:',
  VERSION = 'version'
}
