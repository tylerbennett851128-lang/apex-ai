import { QueryService, type QueryResult } from '$lib/services/query.service';
import { ColumnService } from '$lib/services/column.service';
import { PaginationAction } from '$lib/types';
import LBAtmActionBarAdapter from '$mc/components/LBAtmActionBarAdapter.svelte';
import { TableDetailCellRenderer } from './TableDetail/TableDetailCellRenderer';
import { varEnv } from '$src/env';

export class DuckDbTableColumnService extends ColumnService {
  public get tableName(): string {
    return `duckdb_${this.queryService.tableName}`;
  }
}

export class DuckDbTableQueryService extends QueryService {
  public get subject(): string {
    return 'DuckDbFileTableQueryService';
  }

  protected atomicKey: string;
  protected atomicType: string;
  protected versionKey: string;
  protected content_index_id: string;

  constructor(atomicType: string, atomicKey: string, version_key: string, content_index_id: string) {
    super('list_duck_tables', 'list_tables', '', 'table_name');

    this.columnService = new DuckDbTableColumnService(this);
    this.atomicKey = atomicKey;
    this.atomicType = atomicType;
    this.versionKey = version_key;
    this.content_index_id = content_index_id;
    this.baseUrlToRead = varEnv.readerBaseUrl;

    this.isInlineEditable = false;
    this._isAddable = false;
    this._isEditable = false;
    this.isDeletable = false;
    this.columnService.multiSelect = false;
  }

  public getKeyForStorage() {
    const primaryKey = super.getKeyForStorage();
    return `${primaryKey}/${this.atomicType}/${this.atomicKey}/${this.versionKey}/${this.content_index_id}`;
  }

  public getDetailCellRenderer() {
    return TableDetailCellRenderer;
  }

  public getActionBarAdapter() {
    return LBAtmActionBarAdapter;
  }

  public async getDetailInfo(row: any) {
    // const content_index_id = row['content_index_id'];
    // return await this.getFileDetail(content_index_id);
    return null;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const paginationQuery = this.pagination.getQuery(action);

    const sortParam = this.getSortParam();

    const table = {
      atomic_key: this.atomicKey,
      atomic_type: this.atomicType,
      version_key: this.versionKey,
      content_index_id: this.content_index_id,
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
      filters: this.getFilterQuery(),
      ...searchQuery
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
