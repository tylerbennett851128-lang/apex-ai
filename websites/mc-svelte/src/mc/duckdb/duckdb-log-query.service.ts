import { QueryService, type QueryResult } from '$lib/services/query.service';
import { PaginationAction, SchemaDataAnnotation, type ColumnType } from '$lib/types';
import { varEnv } from '$src/env';
import { isEmpty } from 'lodash-es';
import LBLogDetailActionBarAdapter from './LogDetail/LBLogDetailActionBarAdapter.svelte';

export const logTableConfig: ColumnType[] = [
  {
    id: 'filestate',
    name: 'File State',
    minWidth: 120,
    width: 120,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'lb_log_id',
    name: 'Log ID',
    minWidth: 120,
    width: 120,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'intent',
    name: 'Intent',
    minWidth: 120,
    width: 120,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'intent_key',
    name: 'Intent Key',
    minWidth: 120,
    width: 120,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'workstate',
    name: 'Work State',
    minWidth: 120,
    width: 120,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'log_type',
    name: 'Log Type',
    minWidth: 120,
    width: 120,
    schemaType: SchemaDataAnnotation.TEXT
  }
];

export class DuckDbLogQueryService extends QueryService {
  public get subject(): string {
    return 'DuckDbLogQueryService';
  }

  protected selectedRow: any;

  protected mode: 'current' | 'next' | 'prev' = 'next';

  constructor(file_row: any) {
    super('query_lb_log', 'content_index_id', `lb_log_id`, `created_at`);
    this.selectedRow = file_row;
    this.columnService.useOnlyDefaultConfig = true;
    this.columnService.setDefaultConfig(logTableConfig);
    this._isAddable = false;
    this._isEditable = false;
    this._isDeletable = false;
    this.isInlineEditable = false;
    this.columnService.multiSelect = false;
    this.filters = [];
    this.baseUrlToRead = varEnv.readerBaseUrl;
  }

  public setMode(mode: 'current' | 'next' | 'prev') {
    this.mode = mode;
  }

  public getActionBarAdapter() {
    return LBLogDetailActionBarAdapter;
  }

  protected getContentIndexId() {
    switch (this.mode) {
      case 'next':
        return this.selectedRow.next_content_index_id;
      case 'prev':
        return this.selectedRow.prev_content_index_id;
    }
    return this.selectedRow.content_index_id;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const content_index_id = this.getContentIndexId();

    if (content_index_id) {
      const paginationQuery = this.pagination.getQuery(action);
      const sortParam = this.getSortParam();
      const lb_id_column = this.lb_column;

      const table = {
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
        content_index_id,
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
    }

    return {
      total: 0,
      rows: []
    };
  }
}
