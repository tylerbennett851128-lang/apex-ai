import { ColumnService } from '$lib/services/column.service';
import { FORM_TYPE } from '$lib/services/sidebar.service';
import { PaginationAction, type ColumnType } from '$lib/types';
import { QueryService, type QueryResult } from '$lib/services/query.service';
import { varEnv } from '$src/env';
import type { ATTRIBUTE_ITEM_TYPE, LBColumn } from '$src/components/LBDataTable/Cells/LBColumn';
import type { LBIdColumn } from '$src/components/LBDataTable/Cells/LBIdColumn';
import { LBAttrColumn } from '$src/components/LBDataTable/Cells/LBAttrColumn';
import { isEmpty } from 'lodash-es';

export class UsersColumnService extends ColumnService {
  // This is to show the role id column in sidebar in adding position to user
  protected async initWithColumnType(columnTypes: ColumnType[]) {
    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      const cell = this.getLBColumnFromType(column);
      this.mapIdToCell[cell.id] = cell;
      if (!this.mapIdToDefaultCell[cell.id]) {
        this.mapIdToDefaultCell[cell.id] = cell;
      }
    }

    const colIds = Object.keys(this.mapIdToDefaultCell);
    for (const colId of colIds) {
      if (!this.mapIdToCell[colId]) {
        const cell = this.mapIdToDefaultCell[colId];
        this.mapIdToCell[cell.id] = cell;
      }
    }
  }
}

export class UsersQueryService extends QueryService {
  public get subject(): string {
    return 'UsersQueryService';
  }

  constructor() {
    super('lb_query', 'lb_user', 'lb_user_id', 'first_name', false);
    this.intent_add = 'add_user';
    this._isDeletable = true;
    this.isMultiSelectable = false;
  }

  protected async saveInfo(data: any, submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column
    };

    const query: any = {
      ...this.header,
      ...table,
      header: true
    };

    if (data && data['user_key']) {
      data['user_key'] = String(data['user_key']).toLocaleLowerCase();
    }

    if (submitMode !== FORM_TYPE.DELETE) query.data = [data];
    else query.lb_id_value = data.lb_user_id;

    const intent = this.getIntentToSubmit(submitMode);
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

export type MapNodePathToOrg = Record<string, any>;

export class PathOrgColumn extends LBAttrColumn {
  protected cacheToMap(rows: ATTRIBUTE_ITEM_TYPE[]) {
    const columnService = this.queryService.columnService as PositionColumnService;
    if (rows.length > 0) {
      const firstItem = rows[0];
      if (!firstItem[this.attributeIdField]) {
        if (firstItem['value']) {
          this.attributeIdField = 'value';
        }
      }

      rows.forEach((row) => {
        const id = row[this.attributeIdField];
        this.mapIdToItem[id] = row;
        columnService.mapPathOrg[id] = row;
      });
    }
  }
}

export class PositionColumnService extends ColumnService {
  public mapPathOrg: MapNodePathToOrg = {};
  public getLBColumnFromType(column: ColumnType): any {
    if (column.id === 'path_org') {
      return new PathOrgColumn(column, this.queryService);
    }
    return super.getLBColumnFromType(column);
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {
    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      const cell = this.getLBColumnFromType(column);
      if (cell.id === 'path_org') {
        const attrCell = cell as PathOrgColumn;
        await attrCell.loadAttributes();
        this.mapIdToCell[cell.id] = attrCell;
      } else {
        this.mapIdToCell[cell.id] = cell;
      }
    }
  }

  public setPositionName(rowData: any) {
    const roleIdColumn = this.mapIdToCell['lb_role_id'] as LBIdColumn;
    if (roleIdColumn && rowData) {
      const role_id = rowData['lb_role_id'];
      const role = roleIdColumn.mapIdToItem[role_id];
      if (role) {
        const roleName = role['lb_role_name'];
        rowData['position_name'] = roleName;

        const node_path = rowData['path_org'];
        if (node_path) {
          const mapPathOrg = this.mapPathOrg;
          if (mapPathOrg && mapPathOrg[node_path]) {
            const orgName = mapPathOrg[node_path].display;

            if (!isEmpty(orgName)) {
              rowData['position_name'] = `${roleName} - ${orgName}`;
              if (!isEmpty(rowData['lb_domains'])) {
                const domains = rowData['lb_domains'] as string[];
                rowData['position_name'] = `${roleName} - ${orgName} (${domains.join(', ')})`;
              }
            }
          }
        }
      }
    }
  }

  // This function is called whenever user change some columns.
  // So, we can get the position name whenever user change some columns.
  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData?: any): LBColumn[] {
    this.setPositionName(rowData);
    if (!rowData['sort_order']) {
      rowData['sort_order'] = 0;
    }

    return super.getCellsForForm(formType, rowData);
  }
}
// I renamed it from UserDetailService to PositionQueryService
export class PositionQueryService extends QueryService {
  public get subject(): string {
    return 'UsersQueryService';
  }

  protected user_id: string;
  constructor(user_id: string) {
    super('query_positions_for_user', 'position', 'position_id', 'position_name');
    this.columnService = new PositionColumnService(this);
    this.user_id = user_id;
    this.columnService.useOnlyDefaultConfig = true;
    this.intent_add = 'add_position_to_user';
    this.intent_update = 'update_position';
    this.intent_delete = 'delete_position';
    this.isMultiSelectable = false;
    this.sendRequestAfterUpdate = true;
    this._isDeletable = true;
    this.baseUrlToAdd = varEnv.writerBaseUrl;
  }

  protected getPayloadToAdd(payload: any): any {
    const data = payload;
    data.lb_user_id = this.user_id;
    data.lb_domains = `{${data.lb_domains}}`;
    data.query_path_ph = 'Ph';
    data.set_path_ph = 'Ph';
    data.position_status = 'Active';
    data.role_id = data.lb_role_id;
    return { data: [data] };
  }

  protected getPayloadToUpdate(payload: any): any {
    const data = payload;
    delete data['user_id'];

    const row = this.rows.find((item) => item.position_id === payload.position_id);
    if (row) {
      if (!data['position_name']) {
        data['position_name'] = row['position_name'];
      }

      if (!data['path_org']) {
        data['path_org'] = row['path_org'];
      }

      if (!data['lb_domains']) {
        data['lb_domains'] = row['lb_domains'];
      }
    }

    return { data: [data] };
  }

  protected getPayloadToDelete(payload: any): any {
    return { lb_position_id: payload.position_id };
  }

  protected getQueryToSave(submitMode: FORM_TYPE, payload: any): any {
    const data = this.getPayloadForSubmit(submitMode, payload);
    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column
    };

    const query = {
      header: true,
      ...table,
      ...data
    };
    return query;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const paginationQuery = this.pagination.getQuery(action);

    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column,
      sort_column: this.sort_column
    };

    const sortParam = this.getSortParam();
    const actionBack = paginationQuery.action === PaginationAction.LAST || paginationQuery.action === PaginationAction.PREV;
    const searchQuery = this.filterService.getSearchQurey();

    const query = {
      ...table,
      asc: actionBack ? !sortParam.sortDirection : sortParam.sortDirection,
      last_id_value: paginationQuery.last_id_value,
      last_sort_value: paginationQuery.last_sort_value,
      limit: paginationQuery.limit,
      lb_user_id: this.user_id,
      include_total: true,
      filters: this.getFilterQuery(),
      ...searchQuery
    };

    const response = await this.post_query_info(this.intent_query, query);

    if (response) {
      const { data } = response;

      if (data) {
        const rawRows = data.data as any[];
        const rows = actionBack ? rawRows.reverse() : rawRows;
        rows.map((item) => {
          if (item['role']) {
            item['lb_role_id'] = item['role'].lb_role_id;
            item['lb_role_name'] = item['role'].lb_role_name;
          }
        });
        return {
          total: data.total,
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
}
