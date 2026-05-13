import type { User } from 'firebase/auth';
import { get, writable, type Writable } from 'svelte/store';
import { load_storage, save_storage, post, remove_storage, post_query_info, clear_storage } from '$lib/utils';
import { varEnv } from '$src/env';
import { v4 as uuidv4 } from 'uuid';

export type LB_INTENT_INFO = {
  user_id: string;
  position_id: string;
  user_key: string;
};

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

export type LB_USER = {
  lb_user_id: string;
  user_type: string;
  user_status: string;
  first_name: string;
  last_name: string;
  user_key: string;
  phone: string;
  created_at: number;
  created_by: number;
  updated_at: number;
  updated_by: number;
  active_connections: number;
};

export enum ROLE_NAME {
  PerformAdmin = 'Perform Admin',
  SuperAdmin = 'Super Admin'
}

export type LB_POSITION = {
  position_id: string;
  user_id: string;
  created_at: number;
  created_by: number;
  updated_at: number;
  updated_by: number;
  position_name: string;
  position_status: string;
  path_org: string;
  path_org_permissions: string[];
  query_path_ph: string;
  set_path_ph: string;
  lb_domain: string;
  sort_order: number;
  lb_domains: string[];
};

export type LB_ROLE = {
  lb_role_id: string;
  lb_role_name: string;
  lb_role_status: string;
  lb_role_type: string;
  lb_role_description: string;
  updated_at: number;
  updated_by: number;
  created_at: number;
  created_by: number;
};

export type LB_INTENT_TYPE = {
  lb_intent_id: string;
  display: string;
  ui_view: string[];
  lb_intent_menu: boolean;
  intent: string;
  intent_type: string;
};

export class PositionService {
  protected lb_positions: LB_POSITION[];
  constructor() {
    this.lb_positions = load_storage('lb_positions');
  }

  public clear() {
    remove_storage('lb_positions');
    this.lb_positions = null;
  }

  public isValid(): boolean {
    return this.lb_positions ? true : false;
  }

  public initWithParams(lb_positions: LB_POSITION[]) {
    this.lb_positions = lb_positions;
    save_storage('lb_positions', this.lb_positions);
    const saved = this.getSelectedPositionId();
    this.setSelectedPositionId(saved);
  }

  public getSelectedPosition(): string {
    const data = load_storage('position');
    if (data) {
      const { user_id, position_id } = data;
      if (this.lb_positions) {
        const find = this.lb_positions.find((position) => position.user_id == user_id && position.position_id === position_id);
        if (find) {
          return find.position_name;
        }
      }
    }

    return this.lb_positions && this.lb_positions.length > 0 ? this.lb_positions[0].position_name : ROLE_NAME.PerformAdmin;
  }

  public getSelectedRoleName(): ROLE_NAME {
    return ROLE_NAME.PerformAdmin;
  }

  public getLBPositions(): LB_POSITION[] {
    return this.lb_positions;
  }

  public getSelectedPositionId(): string {
    const data = load_storage('position');
    if (data) {
      const { user_id, position_id } = data;
      if (this.lb_positions) {
        const find = this.lb_positions.find((position) => position.user_id == user_id && position.position_id === position_id);
        if (find) {
          return find.position_id;
        }
      }
    }

    return this.lb_positions && this.lb_positions.length > 0 ? this.lb_positions[0].position_id : '';
  }

  public setSelectedPositionId(position_id: string) {
    if (this.lb_positions) {
      const position = this.lb_positions.find((element) => element.position_id === position_id);
      if (position) {
        save_storage('position', { user_id: position.user_id, position_id: position.position_id });
      }
    }
  }

  public getPositionList(): { value: string; label: string }[] {
    const list: { value: string; label: string }[] = [];

    if (this.lb_positions) {
      this.lb_positions.forEach((element) => {
        const item = {
          value: element.position_id,
          label: element.position_name
        };

        list.push(item);
      });
    }

    return list;
  }
}

export class IntentService {
  protected userService: UserService;
  protected mapIntents: Record<string, LB_INTENT_TYPE> = {};
  protected listIntents: LB_INTENT_TYPE[] = [];

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public isEditable(intent_update: string) {
    return this.mapIntents[intent_update] ? true : false;
  }

  public isAddable(intent_add: string) {
    return this.mapIntents[intent_add] ? true : false;
  }

  public isDeletable(intent_delete: string) {
    return this.mapIntents[intent_delete] ? true : false;
  }

  public async init(positionId: string) {
    const userId = this.userService.getLBUser().lb_user_id;
    const payload = {
      position_id: positionId,
      headers: {
        user_key: userId
      }
    };

    const response = await post_query_info('lb_authorize_table', payload);
    const data = response.data;

    if (data) {
      const intents = data as LB_INTENT_TYPE[];
      if (intents && intents.length > 0) {
        this.mapIntents = {};
        this.listIntents = [];

        intents.forEach((item) => {
          this.listIntents.push(item);
          if (!this.mapIntents[item.intent]) {
            this.mapIntents[item.intent] = item;
          }
        });
      }
      return true;
    }

    return false;
  }
}

export class UserService {
  protected user: User;
  protected lb_user: LB_USER;
  public lb_role: LB_ROLE;
  public positionInfo: Writable<PositionService> = writable(new PositionService());

  protected intentService: IntentService;

  public get isAuthed() {
    return (this.user ? true : false) && (this.lb_user ? true : false);
  }

  public get isInited() {
    return this.isAuthed && (this.lb_role ? true : false);
  }

  public get currentPositionId() {
    const info = get(this.positionInfo);
    return info.getSelectedPositionId();
  }

  public get currentPosition() {
    const info = get(this.positionInfo);
    return info.getSelectedPosition();
  }

  constructor() {
    this.intentService = new IntentService(this);
  }

  public async login(user: User) {
    const data = await get_user_info(user.email);
    if (data && data.user) {
      this.initWithParams(user, data.user);
      const lb_positions: LB_POSITION[] = data.positions;
      this.positionInfo.update((value) => {
        value.initWithParams(lb_positions);
        return value;
      });
      return true;
    }

    return false;
  }

  public async init() {
    if (this.isAuthed) {
      await this.initRole(this.currentPositionId);
      return await this.intentService.init(this.currentPositionId);
    }

    return false;
  }

  public clear() {
    remove_storage('user');
    remove_storage('lb_user');

    this.positionInfo.update((value) => {
      value.clear();
      return value;
    });
    this.user = null;
    this.lb_user = null;
    clear_storage();
  }

  protected async initRole(positionId: string) {
    const payload = {
      lb_table: 'position_role',
      lb_id_column: 'position_id',
      lb_id_value: positionId
    };

    const response = await post_query_info('lb_fetch', payload);
    const data = response.data;

    if (data) {
      const payload = {
        lb_table: 'lb_role',
        lb_id_column: 'lb_role_id',
        lb_id_value: data['role_id']
      };

      const res = await post_query_info('lb_fetch', payload);
      const role = res.data;
      if (role) {
        this.lb_role = role;
        return true;
      }
    }

    return false;
  }

  public async getRoleName(positionId: string): Promise<ROLE_NAME> {
    const payload = {
      lb_table: 'position_role',
      lb_id_column: 'position_id',
      lb_id_value: positionId
    };

    const response = await post_query_info('lb_fetch', payload);
    const data = response.data;

    if (data) {
      const payload = {
        lb_table: 'lb_role',
        lb_id_column: 'lb_role_id',
        lb_id_value: data['role_id']
      };

      const res = await post_query_info('lb_fetch', payload);
      const role = res.data;
      if (role) {
        return role['lb_role_name'];
      }
    }

    return ROLE_NAME.PerformAdmin;
  }

  public isValid(): boolean {
    return (this.user ? true : false) && (this.lb_user ? true : false);
  }

  public isEditable(intent_update: string) {
    return this.intentService.isEditable(intent_update);
  }

  public isAddable(intent_add: string) {
    return this.intentService.isAddable(intent_add);
  }

  public isDeletable(intent_delete: string) {
    return this.intentService.isDeletable(intent_delete);
  }

  protected initWithParams(user: User, lb_user: LB_USER) {
    this.user = user;
    this.lb_user = lb_user;
    save_storage('user_key', user.email);
    save_storage('user', user);
    save_storage('lb_user', lb_user);
  }

  public getUser() {
    return this.user;
  }

  public getLBUser() {
    return this.lb_user;
  }
}

export const userService: Writable<UserService> = writable(new UserService());

function initLoginFlag() {
  const loading = false;
  const { subscribe, update, set } = writable(loading);
  return {
    subscribe,
    update,
    set
  };
}

export const lb_login = initLoginFlag();
