import { QueryService, type QueryResult } from '$lib/services/query.service';
import { ColumnService } from '$lib/services/column.service';
import { PaginationAction } from '$lib/types';
import { varEnv } from '$src/env';
import { isEmpty } from 'lodash-es';

export class DuckDbDataColumnService extends ColumnService {
  public get tableName(): string {
    return `duckdb_${this.queryService.tableName}`;
  }
}

export class DuckDbDataQueryService extends QueryService {
  public get subject(): string {
    return 'DuckDbTableQueryService';
  }

  protected atomicKey: string;
  protected atomicType: string;
  constructor(tableName: string, atomicType: string, atomicKey: string) {
    super('query_duck_table', tableName, '');
    this.columnService = new DuckDbDataColumnService(this);
    this.columnService.multiSelect = false;
    this.atomicKey = atomicKey;
    this.atomicType = atomicType;
    this.isInlineEditable = false;
    this._isAddable = false;
    this._isEditable = false;
    this.rowClicking = false;
    this.isDeletable = false;
    this.baseUrlToRead = varEnv.readerBaseUrl;
  }

  public getRowId(row: any) {
    const primaryKey = this.columnService.getPrimaryColumnId();
    return row[primaryKey];
  }

  public getKeyForStorage() {
    const primaryKey = super.getKeyForStorage();
    return `${primaryKey}/${this.atomicType}/${this.atomicKey}/${this.tableName}`;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const paginationQuery = this.pagination.getQuery(action);

    const sortParam = this.getSortParam();
    const lb_id_column = this.columnService.getPrimaryColumnId();
    const table = {
      atomic_type: this.atomicType,
      atomic_key: this.atomicKey,
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
        const rawRows = data.data as any[];
        const rows = actionBack ? rawRows.reverse() : rawRows;

        return {
          total: data.total,
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
