import axios from 'axios';
import { toast } from '@zerodevx/svelte-toast';
import { browser } from '$app/environment';
import { getFirebaseAuth } from '$lib/auth/firebase';
import { varEnv } from '../env';
import { tick } from 'svelte';
import { isEmpty, isNil } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';

export type ApiResponse = {
  data?: any;
  status: number;
  statusText: string;
  dismissable?: boolean;
};

const hasLocalStorage = () => {
  return browser && navigator.cookieEnabled && window.localStorage;
};

export const load_storage = (key: string) => {
  if (hasLocalStorage()) {
    const stritem = localStorage.getItem(key);
    if (stritem && stritem !== '') {
      try {
        return JSON.parse(stritem);
      } catch (error) {
        console.log('json parse error :', stritem);
      }
    }
  }

  return null;
};

export function save_storage(key: string, value: any) {
  if (hasLocalStorage()) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function remove_storage(key: string) {
  if (hasLocalStorage()) {
    localStorage.removeItem(key);
  }
}

export function clear_storage() {
  if (hasLocalStorage()) {
    localStorage.clear();
  }
}

export const getToken = async () => {
  return new Promise(function (resolve) {
    const auth = getFirebaseAuth();
    if (!auth) {
      resolve(null);
      return;
    }
    auth.onIdTokenChanged(async (user) => {
      let token = null;
      if (user) {
        token = await user.getIdToken();
      }
      resolve(token);
    });
  });
};

export const saveToken = (token: string) => {
  return localStorage.setItem('authToken', token);
};

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

// API wrap function
const apiWrap = (f, method) => {
  return async (baseUrl: string, endpoint: string, body?: Record<string, any>, showToast = true) => {
    const response = await f(baseUrl, endpoint, body);

    if (showToast && !response.hideToast) {
      addToToast(response);
    }
    return response;
  };
};

const parseMessage = (rawMessage: string) => {
  if (rawMessage) {
    const keyFirst = 'String("';
    const idxFirst = rawMessage.indexOf(keyFirst);
    const idxLast = rawMessage.indexOf('")');

    if (idxFirst !== -1 && idxLast !== -1) {
      const text = rawMessage.substring(idxFirst + keyFirst.length, idxLast);
      try {
        const obj = JSON.parse(text);
        const msg = obj.message;
        return msg;
      } catch (err) {
        return text;
      }
    }

    return rawMessage;
  }

  return null;
};

export const post = apiWrap(async (baseUrl: string, endpoint: string, body: any) => {
  const url = `${baseUrl}/${endpoint}`;

  const response = {
    data: {},
    endpoint: endpoint,
    status: 0,
    statusText: ''
  };

  try {
    const token = await getToken();
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };

      const res = await axios.post(url, body, { headers });
      response.data = res.data;
      response.status = res.status;
      response.statusText = res.statusText;
    } else {
      const res = {
        ...response,
        hideToast: true
      };
      return res;
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        const message = parseMessage(err.response.data.message);
        if (message) {
          response.status = err.response.status;
          const data: any = err.response.data;
          console.log(`[API]: ${endpoint} failed `, response.status, data?.error);
          response.statusText = message !== '' ? message : data?.error_message || err.message;
        }
      }
    }
  }

  return response;
}, 'POST'); // This is to send the POST method to api wrap.

export const get = apiWrap(async (baseUrl: string, endpoint: string, params?: Record<string, string>): Promise<ApiResponse> => {
  const url = `${baseUrl}${endpoint}`;

  const response = {
    data: null,
    endpoint: endpoint,
    status: 0,
    statusText: '',
    hideToast: false
  };

  try {
    const token = await getToken();
    if (!token) throw new Error('token is not available');

    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    const res = await axios.get(url, { headers, params });

    response.data = res.data;
    response.status = res.status;
    response.statusText = res.statusText;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      response.status = err.response?.status || 0;
      const data: any = err.response?.data;

      if (data?.error) {
        response.statusText = data?.error;
        console.log(`[API]: ${endpoint} failed `, data?.error);
        response.hideToast = true; // hide toast for intended server errors
      } else {
        response.statusText = data?.error_message || err.message;
      }
    }
  }

  return response;
}, 'GET'); // This is to send the GET method to api wrap.

export const put = apiWrap(async (baseUrl: string, endpoint: string, body?: any): Promise<ApiResponse> => {
  const url = `${baseUrl}${endpoint}`;

  const response = {
    data: null,
    endpoint: endpoint,
    status: 0,
    statusText: ''
  };

  try {
    const token = await getToken();
    if (!token) throw new Error('token is not available');

    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    const res = await axios.put(url, body, { headers });
    response.data = res.data;
    response.status = res.status;
    response.statusText = res.statusText;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      response.status = err.response ? err.response.status : -1;
      const data: any = err.response?.data;
      response.statusText = data?.error_message || err.message;
    }
  }

  return response;
}, 'PUT');

export const get_user_info = async (user_key: string) => {
  const payload = {
    intent: 'lb_user_info',
    intent_key: uuidv4(),
    user_id: '0',
    position_id: '0',
    application_id: varEnv.appId,
    ts: Math.floor(new Date().getTime() / 1000),
    user_key: user_key,
    params: {}
  };

  const response = await post(varEnv.baseUrl, 'lb_user_info', payload);
  return response.data;
};

export type LB_INTENT_INFO = {
  user_id: string;
  position_id: string;
  user_key: string;
};

export const get_info_for_intent = (): LB_INTENT_INFO => {
  const user_key = load_storage('user_key');
  const position = load_storage('position');

  if (user_key && position) {
    const info: LB_INTENT_INFO = {
      user_key,
      ...position
    };
    return info;
  }
  return null;
};

export const callApiWithBaseUrl = async (baseUrl: string, intent: string, body: any) => {
  const info = get_info_for_intent();

  if (info) {
    let headers = {};

    if (body.header) {
      headers = {
        user_id: info.user_id,
        position_id: info.position_id
      };
    }

    const payload = {
      intent: intent,
      intent_key: uuidv4(),
      user_id: info.user_id,
      position_id: info.position_id,
      ts: new Date().getTime(),
      user_key: info.user_key.toLowerCase(),
      params: {
        ...body,
        ...headers
      }
    };

    return await post(baseUrl, intent, payload);
  }

  return null;
};

export const callApi = async (intent: string, body: any) => {
  const info = get_info_for_intent();

  if (info) {
    let headers = {};

    if (body.header) {
      headers = {
        user_id: info.user_id,
        position_id: info.position_id
      };
    }

    const payload = {
      intent: intent,
      intent_key: uuidv4(),
      user_id: info.user_id,
      position_id: info.position_id,
      ts: new Date().getTime(),
      user_key: info.user_key,
      params: {
        ...body,
        ...headers
      }
    };

    return await post(varEnv.baseUrl, intent, payload);
  }

  return null;
};

export const post_query_info = async (intent: string, query: any) => {
  const response = await callApi(intent, query);

  if (response) {
    return response.data;
  }

  return null;
};

export function clickOutside(element: HTMLElement, callbackFunction) {
  async function onClick(event) {
    await tick();
    event.preventDefault();
    event.stopPropagation();

    const target = event.target;
    const contains = element.contains(target);

    if (!contains) {
      callbackFunction(element, event);
    }

    await tick();
  }

  document.body.addEventListener('click', onClick);

  return {
    update(newCallbackFunction) {
      callbackFunction = newCallbackFunction;
    },
    destroy() {
      document.body.removeEventListener('click', onClick);
    }
  };
}

export function isValid(data: any): boolean {
  if (!isNil(data)) {
    if (Array.isArray(data)) {
      return !isEmpty(data);
    } else if (typeof data === 'object') {
      return !isEmpty(data);
    } else if (typeof data === 'string') {
      return data !== '';
    } else if (typeof data === 'boolean') {
      return true;
    } else if (typeof data === 'number') {
      return true;
    }
  }

  return false;
}

export function isEqual(oldData: any, newData: any): boolean {
  if (Array.isArray(newData) && isEmpty(newData)) {
    if (isNil(oldData)) {
      return true;
    }
  }

  if (typeof newData === 'object' && isEmpty(newData)) {
    if (isNil(oldData)) {
      return true;
    }
  }

  if (typeof newData === 'string' && isEmpty(newData)) {
    if (isNil(oldData)) {
      return true;
    }
  }

  return JSON.stringify(oldData) === JSON.stringify(newData);
}

export const getUpdated = (oldData: any, newData: any) => {
  const updated = {};
  const newKeys = Object.keys(newData);
  const keysOld = Object.keys(oldData);

  keysOld.forEach((key) => {
    if (key !== 'created_at' && key !== 'created_by' && key !== 'updated_at' && key !== 'updated_by') {
      if (key.includes('_id')) {
        updated[key] = oldData[key];
      }

      if (!isEqual(oldData[key], newData[key])) {
        updated[key] = newData[key];
      }
    }
  });

  newKeys.forEach((key) => {
    if (!isEqual(oldData[key], newData[key])) {
      updated[key] = newData[key];
    }
  });

  return updated;
};

export function getThemeForToastType(status: number) {
  if (status < 100 || status >= 400) {
    return {
      '--toastBackground': '#FF8F73',
      '--toastBarBackground': '#FF8F73',
      '--toastBorderRadius': '0.25rem',
      '--toastColor': '#BF2600',
      '--toastPadding': '0 0.5rem'
    };
  }

  if (status >= 300 && status < 400) {
    return {
      '--toastBackground': '#FFE380',
      '--toastBarBackground': '#FFE380',
      '--toastBorderRadius': '0.25rem',
      '--toastColor': '#976809',
      '--toastPadding': '0 0.5rem'
    };
  }

  if (status >= 100 && status < 200) {
    return {
      '--toastBackground': '#4C9AFF',
      '--toastBarBackground': '#4C9AFF',
      '--toastBorderRadius': '0.25rem',
      '--toastColor': '#0A1323',
      '--toastPadding': '0 0.5rem'
    };
  }

  return {
    '--toastBackground': '#79F2C0',
    '--toastBarBackground': '#79F2C0',
    '--toastBorderRadius': '0.25rem',
    '--toastColor': '#0E6A44',
    '--toastPadding': '0 0.5rem'
  };
}

export function addToToast(response: ApiResponse, target: string = null) {
  if (response.status != 200) {
    if (response.status === 0) {
      response.statusText = `Network error. Please check your internet connection and try again.`;
    } else if (response.status === 502) {
      response.statusText = `Hmmm, we’re having trouble reaching the server. Please wait a few seconds and then refresh the page. `;
    } else if (response.status === 504) {
      response.statusText = `Oops, the request timed out. Please wait a few seconds and then refresh the page.`;
    }

    const dismissable = response.dismissable !== undefined ? response.dismissable : true;
    toast.push(response.statusText, {
      id: response.status,
      initial: 0,
      next: dismissable ? 1 : 0,
      duration: 10000,
      dismissable: dismissable,
      theme: getThemeForToastType(response.status),
      target: target ? target : 'normal'
    });
  }
}

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

export function getRGBAColor(hex: string | undefined, alpha: number): string {
  if (hex) {
    return `rgba(${hexToRgb(hex)?.r}, ${hexToRgb(hex)?.g}, ${hexToRgb(hex)?.b}, ${alpha})`;
  }

  return '';
}

export const titleCase = (s) => s.replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ' ' + d.toUpperCase()));

export const toPostalTableCase = (lb_table_name: string) => {
  const tableName = lb_table_name.includes('lb_') ? lb_table_name.replace('lb_', '') : lb_table_name;
  return titleCase(tableName);
};

export const levenshteinDistance = (s, t) => {
  if (!s.length) return t.length;
  if (!t.length) return s.length;
  const arr = [];
  for (let i = 0; i <= t.length; i++) {
    arr[i] = [i];
    for (let j = 1; j <= s.length; j++) {
      arr[i][j] = i === 0 ? j : Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1));
    }
  }
  return arr[t.length][s.length];
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
