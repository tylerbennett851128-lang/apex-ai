import { FORM_TYPE } from '$lib/services/sidebar.service';
import { QueryService, type QueryResult } from '$lib/services/query.service';
import { PaginationAction } from '$lib/types';
import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
import { PSDefaultColumnService } from './defaultValues';
import { varEnv } from '$src/env';

export class PSColumnService extends PSDefaultColumnService {
  protected getCellsToExport(formType: FORM_TYPE, rowData: any): LBColumn[] {
    const keys = Object.keys(this.mapIdToCell);
    const cells: LBColumn[] = [];
    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];
      const isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);
      if (isAbleToAdd) {
        if (cell.id === 'lb_domain') {
          if (formType === FORM_TYPE.UPDATE) {
            cell.readOnly = rowData && rowData['lb_domain'] ? true : false;
          } else {
            cell.readOnly = false;
          }
        } else if (cell.id === 'path_org') {
          if (formType === FORM_TYPE.ADD) {
            cell.name = 'Program Origin';
            cell.required = true;
            cell.readOnly = false;
          }
        }
        cells.push(cell);
      }
    });
    return cells;
  }
}

export class PerformSettingsService extends QueryService {
  public get subject(): string {
    return 'PerformSettingsService';
  }

  constructor() {
    super('query_default_value_attributes', 'perform_default_values', 'perform_default_values_id', 'path_org');
    this.columnService = new PSColumnService(this);
    this.intent_add = 'add_perform_default_values';
    this.intent_update = 'update_perform_default_values';
    this.intent_delete = 'lb_delete';
    this.rowClicking = false;
    this.isInlineEditable = false;
    this.baseUrlToRead = varEnv.readerBaseUrl;
    this.isMultiSelectable = false;
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
      include_total: false,
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

  protected async saveInfo(payload: any[], submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const intent = this.getIntentToSubmit(submitMode);

    const primaryKey = `${this.lb_table}_id`;

    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column,
      lb_id_value: payload[primaryKey]
    };

    const data = submitMode === FORM_TYPE.ADD ? payload : submitMode === FORM_TYPE.UPDATE ? payload : table;

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
