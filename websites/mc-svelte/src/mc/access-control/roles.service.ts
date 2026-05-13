import { FORM_TYPE } from '$lib/services/sidebar.service';
import { QueryService, type QueryResult } from '$lib/services/query.service';
import { ColumnService } from '$lib/services/column.service';
import { PaginationAction, SchemaDataAnnotation, type ColumnType } from '$lib/types';
import LBAssignBarAdapter from './LBAssignBarAdapter.svelte';
import LBRoleTabBarAdapter from './LBRoleTabBarAdapter.svelte';
import { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
import type { ATTRIBUTE_ITEM_TYPE } from '$components/LBDataTable/Cells/LBColumn';
import { userRoleDetailConfig } from '$mc/config/roleTable.config';
import { assignUsersConfig } from '$mc/config/UserTable.config';
import { varEnv } from '$src/env';

export class RolesQueryService extends QueryService {
  public get subject(): string {
    return 'RolesQueryService';
  }
  constructor() {
    super('lb_query', 'lb_role', 'lb_role_id', 'lb_role_name');
    this.columnService.multiSelect = false;
    this._isDeletable = true;
    this.intent_add = 'add_role';
    this.intent_delete = 'delete_role';
    this.baseUrlToDelete = varEnv.writerBaseUrl;
  }

  protected async saveInfo(payload: any, submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column
    };

    if (submitMode === FORM_TYPE.ADD) payload.lb_role_status = 'Active';

    const intent = this.getIntentToSubmit(submitMode);
    const primaryKey = `${this.lb_table}_id`;
    const data = submitMode === FORM_TYPE.ADD || submitMode === FORM_TYPE.UPDATE ? { data: [payload] } : { lb_role_id: payload[primaryKey] };

    const query = {
      ...table,
      ...data
    };

    const response = await this.post_query_info(intent, query);
    if (response) {
      const { data } = response;
      if (data !== null) {
        return true;
      }
    }

    return false;
  }
}

export class PathOrgColumn extends LBAttrColumn {
  constructor(def: ColumnType, queryService: QueryService) {
    super(def, queryService);
    this.defaultAttributeValue = {
      value: 'Org.National',
      display: 'National'
    };
  }

  protected getQueryForAttribute(selected: ATTRIBUTE_ITEM_TYPE = null) {
    let table = {};

    if (this.id === 'level_path' || this.schemaType === SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH) {
      table = {
        sort_column: 'level_path'
      };
    } else if (this.id === 'node_path') {
      table = {
        sort_column: 'node_path'
      };
    } else {
      table = {
        lb_table: 'lb_attribute',
        lb_id_column: 'lb_attribute_id',
        sort_column: 'lb_sequence'
      };
    }

    const node_path = this.id === 'node_path' ? 'node_path' : selected ? selected.node_path : this.node_path;

    const query = {
      ...table,
      asc: true,
      limit: 1000,
      include_total: true,
      tree: false,
      verbose: false,
      unique_levels_only: this.id === 'level_path' || this.id === 'node_path',
      level_path: selected ? selected.level_path : this.level_path,
      node_path: node_path,
      header: node_path === null || node_path === undefined ? false : true
    };
    return query;
  }

  protected getResultWithFormat(rawData: any[]): ATTRIBUTE_ITEM_TYPE[] {
    const rows: ATTRIBUTE_ITEM_TYPE[] = [];

    if (this.id === 'level_path' || this.schemaType === SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH) {
      this.attributeIdField = 'level_path';
    }

    rawData.forEach((item) => {
      if (this.id === 'level_path' || this.schemaType === SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH) {
        const row = item;
        row.display = item.level_path;
        row.value = item.level_path;
        rows.push(row);
      } else {
        const row = item;
        row.display = item.display ? item.display : item.node_path;
        row.value = item.node_path;
        rows.push(row);
      }
    });

    rows.sort(function (a, b) {
      if (a.display && b.display) {
        if (a.display.toLowerCase() < b.display.toLowerCase()) return -1;
        if (a.display.toLowerCase() > b.display.toLowerCase()) return 1;
      }
      return 0;
    });

    return rows;
  }
}

export class AssignRolesColumnService extends ColumnService {
  public get subject(): string {
    return 'AssignRolesColumnService';
  }

  public async setDefaultConfig(columnTypes: ColumnType[]) {
    this.mapIdToDefaultCell = {};
    this.mapIdToCell = {};

    const path_org = columnTypes.find((item) => item.id === 'path_org');
    if (path_org) {
      const path_cell = new PathOrgColumn(path_org, this.queryService);
      await path_cell.loadAttributes();

      if (path_cell) {
        for (let idx = 0; idx < columnTypes.length; idx++) {
          const column = columnTypes[idx];
          if (column.id !== 'path_org') {
            const cell = this.getLBColumnFromType(column);
            cell.defaultSortIndex = idx;
            this.mapIdToCell[cell.id] = cell;
            this.mapIdToDefaultCell[cell.id] = cell;
          } else {
            path_cell.defaultSortIndex = idx;
            this.mapIdToCell[column.id] = path_cell;
            this.mapIdToDefaultCell[column.id] = path_cell;
          }
        }
      }
    }
  }

  protected initWithColumnType = async (columnTypes: ColumnType[]) => {};
}

export class AssignRolesQueryService extends QueryService {
  protected role_id: string;
  protected role_name: string;

  public get subject(): string {
    return 'AssignRolesQueryService';
  }

  constructor(role_id: string, role_name: string) {
    super('lb_query', 'lb_user', 'lb_user_id', 'created_at');

    this.columnService = new AssignRolesColumnService(this);
    this.columnService.setDefaultConfig(assignUsersConfig);

    this.role_id = role_id;
    this.role_name = role_name;

    this.isAddable = false;
    this.selectionDeletable = false;
    this.loadParams = { lb_role_id: this.role_id };

    this.intent_add = 'assign_users_to_role';
    this.intent_delete = 'remove_role_from_users';
  }

  public getActionBarAdapter() {
    return LBAssignBarAdapter;
  }

  protected async saveInfo(selectedRows: any[], submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column
    };

    const intent = this.getIntentToSubmit(submitMode);

    if (submitMode === FORM_TYPE.ADD) {
      const positions: any[] = [];
      const cell = this.columnService.getCell('path_org') as PathOrgColumn;
      if (cell) {
        const mapIdToAttributeItems = cell.mapIdToItem;
        selectedRows.forEach((row) => {
          const path_orgId = row['path_org'];
          const path_org = mapIdToAttributeItems[path_orgId];

          const newRow = row;
          newRow['path_org'] = path_org;

          const lb_domains = [];
          if (row['national'] === true) {
            lb_domains.push('National');
          }

          if (row['site'] === true) {
            lb_domains.push('Site');
          }

          delete newRow['national'];
          delete newRow['site'];

          newRow['lb_domains'] = lb_domains;

          positions.push(newRow);
        });
      }

      const data = {
        positions: positions, // row data, not row ids ?
        lb_role_id: this.role_id,
        lb_role_name: this.role_name
      };

      const query = {
        ...table,
        ...data
      };

      const response = await this.post_query_info(intent, query);
      if (response) {
        const { data } = response;
        if (data !== null) {
          return true;
        }
      }
    }

    return false;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const result = await super.loadInfo(action);
    if (result && result.rows && result.rows.length > 0) {
      result.rows.forEach((row) => {
        if (!row['path_org']) {
          row['path_org'] = 'Org.National';
        }
      });
    }
    return result;
  }
}

export class AssignIntentsColumnService extends ColumnService {
  public get subject(): string {
    return 'AssignIntentsColumnService';
  }

  public setDefaultConfig(columnTypes: ColumnType[]) {
    this.mapIdToDefaultCell = {};
    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      const cell = this.getLBColumnFromType(column);
      cell.defaultSortIndex = idx;
      this.mapIdToCell[cell.id] = cell;
      this.mapIdToDefaultCell[cell.id] = cell;
    }
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {}
}

export class AssignIntentsQueryService extends QueryService {
  protected role_id: string;
  protected role_name: string;

  public get subject(): string {
    return 'AssignIntentsQueryService';
  }

  constructor(role_id: string, role_name: string) {
    super('query_unassigned_intents_for_role', 'lb_intent', 'lb_intent_id', 'created_at');

    this.columnService = new AssignIntentsColumnService(this);
    this.role_id = role_id;
    this.role_name = role_name;
    this.isAddable = false;
    this.selectionDeletable = false;
    this.loadParams = { lb_role_id: this.role_id };
    this.intent_add = 'assign_intents_to_role';
    this.intent_delete = 'remove_role_from_intents';
  }

  public getActionBarAdapter() {
    return LBAssignBarAdapter;
  }

  protected async saveInfo(selectedRows: any[], submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column
    };

    const intent = this.getIntentToSubmit(submitMode);

    if (submitMode === FORM_TYPE.ADD && selectedRows) {
      const intents_to_assign = selectedRows.map((intent) => {
        const cell = this.columnService.getCell('ui_view') as LBAttrColumn;
        const ui_views: any[] = [];
        if (intent.ui_view && Array.isArray(intent.ui_view)) {
          intent.ui_view.forEach((viewName) => {
            const view = cell.mapIdToItem[viewName];
            ui_views.push(view);
          });
        }

        const value = {
          lb_intent_id: intent.lb_intent_id,
          intent_menu: intent.intent_menu ? intent.intent_menu : false,
          ui_view: ui_views
        };
        return value;
      });

      const data = {
        lb_role_intents: intents_to_assign, // row data, not row ids ?
        lb_role_id: this.role_id,
        lb_role_name: this.role_name
      };

      const query = {
        ...table,
        ...data
      };

      const response = await this.post_query_info(intent, query);
      if (response) {
        const { data } = response;
        if (data !== null) {
          return true;
        }
      }
    }

    return false;
  }
}

export class UserRolesDetailColumnService extends ColumnService {
  public setDefaultConfig(columnTypes: ColumnType[]) {
    this.mapIdToDefaultCell = {};
    this.mapIdToCell = {};
    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      const cell = this.getLBColumnFromType(column);
      cell.defaultSortIndex = idx;
      this.mapIdToCell[cell.id] = cell;
      this.mapIdToDefaultCell[cell.id] = cell;
    }
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {}
}

export class RoleDetailQueryService extends QueryService {
  protected role_id: string;
  public roleName: string;
  public primaryColumn: string;
  public postfix: string = '';
}

export class UserRoleDetailService extends RoleDetailQueryService {
  public get subject(): string {
    return 'UserRoleDetailService';
  }

  constructor(role_id: string, roleName: string) {
    super('query_user_positions_for_role', 'lb_user', 'position_id', 'created_at');
    this.columnService = new UserRolesDetailColumnService(this);
    this.setDefaultConfig(userRoleDetailConfig);
    this.role_id = role_id;
    this.roleName = roleName;
    this.primaryColumn = 'user_name';
    this.postfix = 'user';
    this.loadParams = { role_id: this.role_id };
    this.isMultiSelectable = true;
    this.sendRequestAfterUpdate = true;
    this._isDeletable = true;
    this.intent_delete = 'remove_role_from_users';
    this.intent_update = 'update_position';
    this.baseUrlToRead = varEnv.readerBaseUrl;
  }

  public getKeyForStorage(): string {
    return `${super.getKeyForStorage()}/${this.role_id}`;
  }

  public getActionBarAdapter() {
    return LBRoleTabBarAdapter;
  }

  protected async saveInfo(payload: any, submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column
    };

    const intent = this.getIntentToSubmit(submitMode);

    if (submitMode === FORM_TYPE.UPDATE) {
      const find = this.rows.find((item) => item['lb_user_id'] === payload['lb_user_id']);
      if (!payload['path_org']) {
        if (find) {
          payload['path_org'] = find['path_org'];
        }
      }

      const lb_domains = find && find['lb_domains'] ? find['lb_domains'] : [];
      const mapDomains = {};
      lb_domains.forEach((domain) => {
        mapDomains[domain] = domain;
      });

      if (payload['site'] === true) {
        mapDomains['Site'] = 'Site';
      } else if (payload['site'] === false) {
        delete mapDomains['Site'];
      }

      delete payload['site'];

      if (payload['national'] === true) {
        mapDomains['National'] = 'National';
      } else if (payload['national'] === false) {
        delete mapDomains['National'];
      }

      delete payload['national'];
      payload['lb_domains'] = Object.keys(mapDomains);
    } else if (submitMode === FORM_TYPE.DELETE) {
      const idToDelete: string[] = [];
      const selectedRows = Array.isArray(payload) ? payload : [payload];
      selectedRows.forEach((row) => idToDelete.push(row['lb_user_id']));

      payload = {
        lb_user_ids: idToDelete,
        lb_role_id: this.role_id
      };
    }

    const data = submitMode === FORM_TYPE.ADD || submitMode === FORM_TYPE.UPDATE ? { data: [payload] } : payload;

    const query = {
      ...data
    };

    const response = await this.post_query_info(intent, query);
    if (response) {
      const { data } = response;
      if (data !== null) {
        return true;
      }
    }

    return false;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const paginationQuery = this.pagination.getQuery(action);
    const sortParam = this.getSortParam();
    const actionBack = paginationQuery.action === PaginationAction.LAST || paginationQuery.action === PaginationAction.PREV;
    const searchQuery = this.filterService.getSearchQurey();

    const query = {
      asc: actionBack ? !sortParam.sortDirection : sortParam.sortDirection,
      last_id_value: paginationQuery.last_id_value,
      last_sort_value: paginationQuery.last_sort_value,
      limit: paginationQuery.limit,
      include_total: true,
      filters: this.getFilterQuery(),
      ...searchQuery,
      ...this.loadParams
    };

    const response = await this.post_query_info(this.intent_query, query);

    if (response) {
      const { data, total } = response;

      if (data) {
        const rawRows = data as any[];

        rawRows.forEach((item) => {
          const tuple = item.user_id;
          if (tuple) {
            const user_id = tuple.user_id;
            const user_name = tuple.user_name;
            const user_key = tuple.user_key;
            item['lb_user_id'] = String(user_id);
            item['user_name'] = user_name;
            item['user_key'] = user_key;
            delete item['user_id'];
          }

          if (item.lb_domains) {
            const list = item.lb_domains as string[];
            item['site'] = list.find((strItem) => strItem === 'Site') ? true : false;
            item['national'] = list.find((strItem) => strItem === 'National') ? true : false;
          }
        });

        const rows = actionBack ? rawRows.reverse() : rawRows;
        return {
          total,
          rows: rows,
          id_column: this.lb_column,
          sort_column: sortParam.sortColumn,
          sort_direction: sortParam.sortDirection
        };
      }
    }

    return {
      total: 0,
      id_column: this.lb_column,
      rows: []
    };
  }
}

export class UserIntentDetailService extends RoleDetailQueryService {
  public get subject(): string {
    return 'UserIntentDetailService';
  }

  constructor(role_id: string, roleName: string) {
    super('query_lb_intent_for_role', 'lb_intent', 'lb_intent_id', 'created_at');
    this.role_id = role_id;
    this.roleName = roleName;
    this.primaryColumn = 'intent';
    this.postfix = 'intent';
    this.sendRequestAfterUpdate = true;
    this.loadParams = { role_id: this.role_id };
    this.columnService.useOnlyDefaultConfig = true;
    this.intent_update = 'update_role_to_intent';
    this.intent_delete = 'remove_role_from_intents';
    this.baseUrlToRead = varEnv.readerBaseUrl;
  }

  public getActionBarAdapter() {
    return LBRoleTabBarAdapter;
  }

  public getKeyForStorage(): string {
    return `${super.getKeyForStorage()}/${this.role_id}`;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const paginationQuery = this.pagination.getQuery(action);

    const sortParam = this.getSortParam();

    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column,
      sort_column: sortParam.sortColumn
    };

    const actionBack = paginationQuery.action === PaginationAction.LAST || paginationQuery.action === PaginationAction.PREV;

    const searchQuery = this.filterService.getSearchQurey();

    const query = {
      ...this.header,
      ...table,
      asc: actionBack ? !sortParam.sortDirection : sortParam.sortDirection,
      last_id_value: paginationQuery.last_id_value,
      last_sort_value: paginationQuery.last_sort_value,
      limit: paginationQuery.limit,
      include_total: true,
      filters: this.getFilterQuery(),
      ...searchQuery,
      ...this.loadParams
    };

    const response = await this.post_query_info(this.intent_query, query);

    if (response) {
      const { data, total } = response;

      if (data) {
        const rawRows = data as any[];
        const rows = actionBack ? rawRows.reverse() : rawRows;
        return {
          total,
          rows: rows,
          id_column: this.lb_column,
          sort_column: query.sort_column,
          sort_direction: sortParam.sortDirection
        };
      }
    }

    return {
      total: 0,
      id_column: this.lb_column,
      rows: []
    };
  }

  protected async saveInfo(payload: any, submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const intent = this.getIntentToSubmit(submitMode);
    const data = submitMode === FORM_TYPE.ADD || submitMode === FORM_TYPE.UPDATE ? { data: [payload] } : payload;

    const query = {
      ...data
    };

    const response = await this.post_query_info(intent, query);
    if (response) {
      const { data } = response;
      if (data !== null) {
        return true;
      }
    }

    return false;
  }
}
