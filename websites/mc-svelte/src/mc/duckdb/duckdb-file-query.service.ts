import { QueryService, type QueryResult } from '$lib/services/query.service';
import { callApiWithBaseUrl } from '$lib/utils';
import { PaginationAction, SchemaDataAnnotation, type ColumnType } from '$lib/types';
import { LogDetailCellRenderer } from './LogDetail/LogDetailCellRenderer';
import LBAtmActionBarAdapter from '$mc/components/LBAtmActionBarAdapter.svelte';
import { Comparator } from '$lib/services/filter.service';
import { varEnv } from '$src/env';
import { duckDbFileTableConfig } from '../config/duckdb.config';
import LBDuckDbFileDetailAdapter from '$mc/components/LBDuckDbFileDetailAdapter.svelte';
import { isEmpty } from 'lodash-es';

export class DuckDbFileQueryService extends QueryService {
  public get subject(): string {
    return 'DataQueryService';
  }

  constructor() {
    super('list_files', 'content_index', `content_index_id`, `file_name`);
    this._isAddable = false;
    this._isEditable = false;
    this._isDeletable = false;
    this.isInlineEditable = false;
    this.isMultiSelectable = false;
    this.baseUrlToRead = varEnv.readerBaseUrl;
    this.filters = [
      {
        match_type: 'AND',
        comparator: Comparator.ILIKE,
        lb_column: 'file_type',
        value: 'duckdb'
      },
      {
        match_type: 'AND',
        comparator: Comparator.ILIKE,
        lb_column: 'file_state',
        value: 'current'
      },
      {
        match_type: 'AND',
        comparator: Comparator.ILIKE,
        lb_column: 'atomic_type',
        value: 'site'
      }
    ];

    this.columnService.useOnlyDefaultConfig = true;
    this.columnService.setDefaultConfig(duckDbFileTableConfig);
  }

  public getDetailCellRenderer() {
    return LogDetailCellRenderer;
  }

  public getActionBarAdapter() {
    return LBAtmActionBarAdapter;
  }

  public async getDetailInfo(row: any) {
    const content_index_id = row['content_index_id'];
    return await this.getFileDetail(content_index_id);
  }

  public async getFileDetail(content_index_id: string) {
    const baseUrl = varEnv.readerBaseUrl;
    const query = {
      content_index_id
    };

    const response = await callApiWithBaseUrl(baseUrl, 'fetch_file_detail', query);

    if (response && response.data) {
      const { data } = response.data;
      const row = data.data as any[];
      return row[0];
    }

    return null;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const paginationQuery = this.pagination.getQuery(action);

    const sortParam = this.getSortParam();

    const table = {
      sort_column: sortParam.sortColumn
    };

    const actionBack = paginationQuery.action === PaginationAction.LAST || paginationQuery.action === PaginationAction.PREV;
    const searchQuery = this.filterService.getSearchQurey();

    const query = {
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
      const { data } = response;
      if (data) {
        const rawRows = data.data as any[];
        const rows = actionBack ? rawRows.reverse() : rawRows;

        rows.forEach((row) => {
          row['file_lock'] = isEmpty(row['file_lock']) || row['file_lock'] === '0' ? false : true;
          row['trackers'] = 10;
        });

        return {
          total: data.total,
          rows: rows,
          id_column: this.lb_column,
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

export type DetailRowType = {
  property: string;
  next: string;
  current: string;
  previous: string;
  previous2: string;
};

export class DuckDbFileDetailQueryService extends QueryService {
  protected content_index_id: string;
  protected atomic_key: string;
  protected atomic_type: string;

  constructor(content_index_id: string, atomic_key: string, atomic_type: string) {
    super('fetch_file_detail', '', '');
    this.content_index_id = content_index_id;
    this.atomic_key = atomic_key;
    this.atomic_type = atomic_type;

    this.baseUrlToRead = varEnv.readerBaseUrl;
    this.columnService.useOnlyDefaultConfig = true;
    this.columnService.suppressRowClickSelection = true;
    this._isEditable = false;
    this._isAddable = false;
    this._isDeletable = false;
    this.rowClicking = false;
    this.isDoPagination = false;
    this.isMultiSelectable = false;
  }

  public getActionBarAdapter() {
    return LBDuckDbFileDetailAdapter;
  }

  public async loadInfo() {
    const query = {
      atomic_key: this.atomic_key,
      atomic_type: this.atomic_type,
      file_type: 'Duckdb',
      limit: 10
    };

    const response = await this.post_query_info(this.intent_query, query);
    if (response) {
      const { data } = response;
      if (data) {
        const rawRows = data.data as any[];
        if (rawRows.length > 0) {
          const mapStateToRow = {};
          rawRows.forEach((row) => {
            const state = row['file_state'];
            if (!mapStateToRow[state]) {
              mapStateToRow[state] = row;
            }
          });

          const firstRow = rawRows[0];

          const keys = Object.keys(firstRow);
          const rows: any[] = [];

          const states = Object.keys(mapStateToRow);

          if (states.length > 0) {
            keys.forEach((property) => {
              let item = {
                property: property
              };

              for (const st of states) {
                const state = st.toLowerCase();
                const row = mapStateToRow[st];
                const data = row[property];
                const mapStateToProperty = {};
                mapStateToProperty[state] = typeof data === 'object' ? JSON.stringify(data) : data;

                item = {
                  ...item,
                  ...mapStateToProperty
                };
              }

              rows.push(item);
            });
          }

          return {
            total: rows.length,
            rows: rows
          };
        }
      }
    }

    return {
      total: 0,
      rows: []
    };
  }
}

export type LogRow = {
  filestate: string;
  version_key: string;
  intent: string;
  intent_key: string;
  workstate: string;
  log_type: string;
};

export const logDetailTableConfig: ColumnType[] = [
  {
    id: 'content_index',
    name: 'Content Index',
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.NUMBER
  },
  {
    id: 'filestate',
    name: 'File State',
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'intent',
    name: 'Intent',
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'intent_key',
    name: 'Intent Key',
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'completion_ratio',
    name: 'Completion Ratio',
    minWidth: 120,
    width: 120,
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'subject',
    name: 'Subject',
    minWidth: 120,
    width: 120,
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'log_type',
    name: 'Log Type',
    minWidth: 120,
    width: 120,
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'message',
    name: 'Message',
    minWidth: 120,
    width: 120,
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'created_at',
    name: 'Created At',
    minWidth: 100,
    width: 100,
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  }
];

export class LogDetailQueryService extends QueryService {
  public get subject(): string {
    return 'LogDetailQueryService';
  }

  private content_index_id: string;

  constructor(content_index_id: string) {
    super('query_lb_log', 'content_index_id', `lb_log_id`, `created_at`);

    this.content_index_id = content_index_id;
    this.columnService.useOnlyDefaultConfig = true;
    this.columnService.setDefaultConfig(logDetailTableConfig);
    this._isAddable = false;
    this._isEditable = false;
    this._isDeletable = false;
    this.isInlineEditable = false;
    this.isMultiSelectable = false;
    this.filters = [];

    this.baseUrlToRead = varEnv.readerBaseUrl;
  }

  public getActionBarAdapter() {
    return LBDuckDbFileDetailAdapter;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const paginationQuery = this.pagination.getQuery(action);

    const sortParam = this.getSortParam();
    const lb_id_column = this.lb_column;
    const table = {
      content_index_id: this.content_index_id,
      table: this.tableName,
      sort_column: isEmpty(sortParam.sortColumn) ? lb_id_column : sortParam.sortColumn,
      lb_id_column
    };

    const actionBack = paginationQuery.action === PaginationAction.LAST || paginationQuery.action === PaginationAction.PREV;
    const searchQuery = this.filterService.getSearchQurey();

    const query = {
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
      const { data } = response;

      if (data) {
        const rawRows = data as any[];
        const rows = actionBack ? rawRows.reverse() : rawRows;
        return {
          total: response.total,
          rows: rows,
          id_column: lb_id_column,
          sort_column: query.sort_column,
          sort_direction: sortParam.sortDirection
        };
      }
    }

    return {
      total: 0,
      rows: []
    };
  }
}
