import { varEnv } from '../../env';
import WebSocket from 'reconnecting-websocket';
import { writable, type Writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import { getToken, toPostalTableCase, get_info_for_intent } from '../utils';
import type { QueryService } from './query.service';
import type { MatchType } from './filter.service';

export enum MESSAGE_TYPE {
  WorkflowIntentNotification = 'WorkflowIntentNotification',
  DataChangeNotification = 'DataChangeNotification',
  DataAddNotification = 'DataAddNotification',
  DataDeleteNotification = 'DataDeleteNotification',
  AuthenticationSuccess = 'AuthenticationSuccess'
}

export type Notification = {
  message_type: MESSAGE_TYPE;
  lb_tables: { lb_table: string; lb_id_column: string }[];
  data: any;
  subscription_id: string;
};

function createNotificationService() {
  const { subscribe, update, set } = writable(null);
  return {
    subscribe,
    update,
    set
  };
}

export const notificationService = createNotificationService();

export enum REQUEST_TYPE {
  SubscribeRequest = 'SubscribeRequest'
}

export type MSG_TYPE = {
  message_type: REQUEST_TYPE;
  subscription_id: string;
  lb_tables: { lb_table: string; lb_id_column: string }[];
  filters?: MatchType[];
};

export type RECEIVED_MSG_TYPE = {
  message: string;
  message_type: MESSAGE_TYPE;
  lb_tables?: { lb_table: string; lb_id_column: string }[];
  data?: any;
  user_id: string;
  position_id: string;
  subscription_id: string;
};

export class SocketService {
  private client: any;

  protected subscription_id: string;
  protected token: string;

  protected _inited: boolean = false;
  protected _opened: boolean = false;

  public connected: Writable<boolean> = writable(false);

  public get isInited() {
    return this._inited && this._opened;
  }

  constructor() {}

  public async init() {
    if (!this._inited) {
      const baseUrl = varEnv.baseUrl;
      const socketUrl = `${baseUrl.replace('https://', 'wss://')}/lb_notification`;
      this.token = (await getToken()) as string;

      this.client = new WebSocket(socketUrl);
      this.client.onopen = this.onOpen;
      this.client.onmessage = this.onMessage;
      this.client.onclose = this.onClose;
      this.client.onerror = this.onError;

      this._inited = true;
    }
  }

  public onOpen = (event) => {
    if (this.client) {
      const info = get_info_for_intent();
      if (info) {
        this.subscription_id = uuidv4();
        const params = {
          session_id: this.subscription_id,
          token: this.token,
          user_id: info.user_id,
          position_id: info.position_id
        };

        this.client.send(JSON.stringify(params));
        this.connected.update((value) => {
          value = true;
          return value;
        });
      }
    }

    this._opened = true;
  };

  public onMessage = (event) => {
    const msg = JSON.parse(event.data) as RECEIVED_MSG_TYPE;

    if (msg) {
      if (msg.message_type == MESSAGE_TYPE.WorkflowIntentNotification) {
        //addToToast(message, 'notification');
      } else if (msg.message_type == MESSAGE_TYPE.DataChangeNotification || msg.message_type == MESSAGE_TYPE.DataAddNotification || msg.message_type == MESSAGE_TYPE.DataDeleteNotification) {
        if (this.subscription_id === msg.subscription_id) {
          let text = '';
          const tableName = msg.lb_tables && msg.lb_tables.length > 0 ? toPostalTableCase(msg.lb_tables[0].lb_table) : null;

          if (tableName) {
            if (msg.message_type === MESSAGE_TYPE.DataChangeNotification) {
              text = `Data updated at <b> ${tableName} </b> table.`;
            } else if (msg.message_type === MESSAGE_TYPE.DataAddNotification) {
              text = `Data added at <b> ${tableName} </b> table.`;
            } else if (msg.message_type === MESSAGE_TYPE.DataDeleteNotification) {
              text = `Data deleted at <b> ${tableName} </b> table.`;
            }

            const notification: Notification = {
              message_type: msg.message_type,
              lb_tables: msg.lb_tables,
              data: msg.data,
              subscription_id: msg.subscription_id
            };

            notificationService.update((value) => {
              value = notification;
              return value;
            });
          }
        }
      }
    }
  };

  public onClose = (event) => {
    console.log('LBNotificationManager [onclose] socket closed', event);
  };

  public onError = (error) => {
    console.log('LBNotificationManager [onerror] socket error', error);
  };

  public async sendSubscriptionRequest(queryService: QueryService) {
    const msg: MSG_TYPE = {
      message_type: REQUEST_TYPE.SubscribeRequest,
      lb_tables: [
        {
          lb_table: queryService.lb_table,
          lb_id_column: queryService.getIdColumn()
        }
      ],
      subscription_id: this.subscription_id
    };

    if (this.client) {
      this.client.send(JSON.stringify(msg));
    }
  }
}

export const g_socketService = new SocketService();
