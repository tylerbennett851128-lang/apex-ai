import { PaginationAction, type ColumnType } from '../types';
import { load_storage, save_storage, toPostalTableCase, callApiWithBaseUrl } from '$lib/utils';
import { QueryMode, type QueryType } from '$lib/services/loading';
import { FilterService, type MatchType } from './filter.service';
import { PaginationService } from './pagination.services';
import { FORM_TYPE } from './sidebar.service';
import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
import { ColumnService } from './column.service';
import { UserService, userService } from './user.service';
import { get, writable, type Writable } from 'svelte/store';
import LBActionBarAdapter from '$components/LBDataTable/LBActionBar/LBActionBarAdapter.svelte';
import { DetailCellRenderer } from '$components/LBDataTable/DetailCell/DetailCellRenderer';
import { varEnv } from '$src/env';

export type QueryResult = {
  total: number;
  rows: any[];
  id_column?: string;
  sort_column?: string;
  sort_direction?: boolean;
};

export enum ACTION_BAR_EVENT {
  ADD = 'add',
  DELETE = 'delete',
  SHOW_MODAL = 'showModal',
  CONFIRM_DELETE = 'confirmDelete',
  CANCEL_MODAL = 'cancelModal',
  COLUMNS_INITED = 'columnsInited'
}

export class ActionBarEvent {
  event: ACTION_BAR_EVENT;
  params: any;
  queryService: QueryService;
  constructor(event: ACTION_BAR_EVENT, params: any = null) {
    this.event = event;
    this.params = params;
  }
}

export class QueryService {
  public rows: any[] = [];
  public selectedRows: Writable<any[]> = writable([]);
  public actionBarEvent: Writable<ActionBarEvent> = writable(null);
  public wrapContent: boolean = false;

  private _ui_viewName: string;

  public get uiViewName() {
    if (this._ui_viewName) {
      return this._ui_viewName;
    }
    return this.lb_table;
  }

  public set uiViewName(value: string) {
    this._ui_viewName = value;
  }

  protected userService: UserService;

  public get subject(): string {
    return 'QueryService';
  }

  public pagination: PaginationService = null;
  public sendRequestAfterUpdate = false;

  protected _filterService: FilterService;
  public get filterService(): FilterService {
    return this._filterService;
  }
  public set filterService(value: FilterService) {
    if (value) {
      this._filterService = value;
    }
  }

  public get columnService(): ColumnService {
    return this._columnService;
  }

  public set columnService(value: ColumnService) {
    if (value) {
      this._columnService = value;
    }
  }

  public setSelectedRows(rows: any[]) {
    if (rows) {
      this.selectedRows.set(rows);
    }
  }

  protected _columnService: ColumnService;

  public defaultSortDirection: boolean = true;

  public get isInited(): boolean {
    return this._columnService.isInited && this.rows ? true : false;
  }

  public get isMultiSelectable(): boolean {
    return this.columnService ? this.columnService.multiSelect : false;
  }

  public set isMultiSelectable(value: boolean) {
    if (this.columnService) {
      this.columnService.multiSelect = value;
    }
  }

  protected _isEditable: boolean = true;

  public set isEditable(value: boolean) {
    this._isEditable = value;
  }

  public get isEditable(): boolean {
    if (this._isEditable !== null) {
      return this._isEditable;
    }
    const service = get(userService);
    if (service) {
      return service.isEditable(this.intent_update);
    }
    return true;
  }

  protected _isDeletable: boolean = null;
  public set isDeletable(value: boolean) {
    this._isDeletable = value;
  }

  public get isDeletable(): boolean {
    if (this._isDeletable !== null) {
      return this._isDeletable;
    }
    const service = get(userService);
    if (service) {
      return service.isDeletable(this.intent_delete);
    }
    return true;
  }

  protected _isAddable: boolean = null;

  public set isAddable(value: boolean) {
    this._isAddable = value;
  }

  public get isAddable(): boolean {
    if (this._isAddable !== null) {
      return this._isAddable;
    }

    const service = this.userService;
    if (service) {
      return service.isAddable(this.intent_add);
    }
    return true;
  }

  public get inlineEditing(): boolean {
    const key = `${this.getKeyForStorage()}/inline_editing`;
    const value = load_storage(key);
    return value ? true : false;
  }

  public set inlineEditing(value: boolean) {
    const key = `${this.getKeyForStorage()}/inline_editing`;
    save_storage(key, value);
  }

  public isInlineEditable = true;
  public selectionDeletable = false;
  public isDoPagination = true;
  public isAbleToClone = false;

  public get detailRowHeight() {
    return 400;
  }

  public set rowClicking(value: boolean) {
    this.columnService.rowClicking = value;
  }

  public get rowClicking(): boolean {
    return this.columnService.rowClicking;
  }

  protected header = {
    verbose: true,
    tree: false,
    level_path: null,
    header: false,
    node_path: null
  };

  protected loadParams = {};

  public get tableName(): string {
    return this.lb_table;
  }

  public lb_table: string;
  public lb_column: string;
  public sort_column: string;

  protected filters: MatchType[] = [];
  protected intent_query: string = 'lb_query';
  protected intent_add: string = 'lb_add';
  protected intent_update: string = 'lb_update';
  protected intent_delete: string = 'lb_delete';

  protected baseUrlToRead: string = varEnv.baseUrl;
  protected baseUrlToUpdate: string = varEnv.baseUrl;
  protected baseUrlToAdd: string = varEnv.baseUrl;
  protected baseUrlToDelete: string = varEnv.baseUrl;

  public queryList: Writable<QueryType[]> = writable([]);

  public getIdColumn() {
    return this.lb_column;
  }

  public getRowId(row: any) {
    return this.lb_column ? row[this.lb_column] : '';
  }

  protected getIntentToSubmit(submitMode) {
    const intent = submitMode === FORM_TYPE.ADD || submitMode === FORM_TYPE.CLONE ? this.intent_add : submitMode === FORM_TYPE.UPDATE ? this.intent_update : this.intent_delete;
    return intent;
  }

  constructor(intent_query: string, lb_table: string, lb_column: string, sort_column = '', sortDir = true) {
    this.intent_query = intent_query;
    this.lb_table = lb_table;
    this.lb_column = lb_column;
    this.sort_column = sort_column && sort_column !== '' ? sort_column : lb_column;
    this.defaultSortDirection = sortDir;

    this.pagination = new PaginationService(this);
    this._columnService = new ColumnService(this);
    this._filterService = new FilterService(this);
  }

  public getColumnsForFilter(): LBColumn[] {
    return this.columnService.getColumnsForFilter();
  }

  public getKeyForStorage() {
    return `${this.subject}/${this.intent_query}/${this.lb_table}`;
  }

  public get titleForForm() {
    return toPostalTableCase(this.lb_table);
  }

  public getActionBarAdapter() {
    return LBActionBarAdapter;
  }

  public getDetailCellRenderer() {
    return DetailCellRenderer;
  }

  public async getDetailInfo(row: any) {
    return null;
  }

  protected getFilterQuery(): MatchType[] {
    const matchTypes = this.filterService.getFiltersForQurey();
    let filters: MatchType[] = [];
    if (matchTypes && matchTypes.length > 0) {
      filters = [...matchTypes];
    }

    if (this.filters && this.filters.length > 0) {
      filters = [...this.filters, ...filters];
    }
    return filters;
  }

  protected getSortParam() {
    const sort = this.columnService.getSort();
    let sortDirection = this.defaultSortDirection;
    let sortColumn = this.sort_column;

    if (sort) {
      sortColumn = sort.sort_id !== '' ? sort.sort_id : this.sort_column !== '' ? this.sort_column : this.lb_column;
      sortDirection = sort.sort_id !== '' ? sort.direction : this.defaultSortDirection;
    }

    return {
      sortColumn,
      sortDirection
    };
  }

  public async post_query_info(endpoint: string, query: any, mode = QueryMode.Show) {
    if (mode === QueryMode.Show) {
      this.queryList.update((value) => {
        value.push({ mode, endpoint: endpoint });
        return value;
      });
    }

    const baseUrl = endpoint === this.intent_query ? this.baseUrlToRead : endpoint === this.intent_delete ? this.baseUrlToDelete : endpoint === this.intent_add ? this.baseUrlToAdd : this.baseUrlToUpdate;
    const response = await callApiWithBaseUrl(baseUrl, endpoint, query);

    this.queryList.update((value) => {
      return value.filter((e) => e.endpoint !== endpoint);
    });

    if (response) {
      return response.data;
    }

    return null;
  }

  public getDataAndTotalRows(response: any) {
    // This function is used to extract the data and total number when we send queries.
    // because each api has diffferent structure in response, we can use it to get the data and total number from different APIs.
    // by overriding this api, we can avoid the re-defining loadInfo and we can reduce the code amount.
    if (response) {
      const { data } = response;
      if (data) {
        const rows = data.data as any[];
        return {
          rows: rows,
          total: data.total
        };
      }
    }

    return null;
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

    const result = this.getDataAndTotalRows(response);

    if (result) {
      const { rows, total } = result;

      return {
        total: total,
        rows: actionBack ? rows.reverse() : rows,
        id_column: this.lb_column,
        sort_column: query.sort_column,
        sort_direction: sortParam.sortDirection
      };
    }

    return {
      total: 0,
      id_column: this.lb_column,
      rows: []
    };
  }

  public setDefaultConfig(columns: ColumnType[]) {
    this.columnService.setDefaultConfig(columns);
  }

  public updateWithInfo(info: QueryResult) {
    this.rows = info.rows;
    if (info.rows && info.rows.length > 0) {
      this.pagination.updateItemsTotal(info.total, info.rows[0], info.rows[info.rows.length - 1], info.rows.length, info.id_column, info.sort_column, info.sort_direction);
    }
  }

  public updateRow(row: any) {
    let updated = false;
    if (row) {
      for (let i = 0; i < this.rows.length; i++) {
        const rowitem = this.rows[i];
        if (rowitem[this.lb_column] && rowitem[this.lb_column] === row[this.lb_column]) {
          this.rows[i] = row;
          updated = true;
        }
      }
    }
    return updated;
  }

  protected getPayloadToUpdate(payload: any): any {
    return { data: [payload] };
  }

  protected getPayloadToAdd(payload: any): any {
    return { data: [payload] };
  }

  protected getPayloadToClone(payload: any): any {
    const rowToClone = payload;
    delete rowToClone['created_at'];
    delete rowToClone['created_by'];
    delete rowToClone['updated_at'];
    delete rowToClone['updated_by'];
    const id_column = this.getIdColumn();
    if (id_column) {
      delete rowToClone[id_column];
    }

    return { data: [rowToClone] };
  }

  protected getPayloadToDelete(payload: any): any {
    const primaryKey = `${this.lb_table}_id`;
    return { lb_id_value: payload[primaryKey] };
  }

  protected getPayloadForSubmit(submitMode: FORM_TYPE, payload: any): any {
    switch (submitMode) {
      case FORM_TYPE.ADD:
        return this.getPayloadToAdd(payload);
      case FORM_TYPE.UPDATE:
        return this.getPayloadToUpdate(payload);
      case FORM_TYPE.CLONE:
        return this.getPayloadToClone(payload);
      case FORM_TYPE.DELETE:
        return this.getPayloadToDelete(payload);
    }
  }

  protected getQueryToSave(submitMode: FORM_TYPE, payload: any): any {
    const data = this.getPayloadForSubmit(submitMode, payload);
    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column
    };

    const query = {
      ...table,
      ...data
    };
    return query;
  }

  protected async saveInfo(payload: any, submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const intent = this.getIntentToSubmit(submitMode);
    const query = this.getQueryToSave(submitMode, payload);
    const response = await this.post_query_info(intent, query);
    if (response) {
      const { data } = response;
      if (data !== null) {
        return true;
      }
    }
    return false;
  }

  public async submit(mapData: any, submitMode: FORM_TYPE) {
    if (mapData && Object.keys(mapData).length > 0) {
      return await this.saveInfo(mapData, submitMode);
    }
    return false;
  }
}
