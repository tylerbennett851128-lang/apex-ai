import { LBColumn, type ATTRIBUTE_ITEM_TYPE } from '$components/LBDataTable/Cells/LBColumn';
import { treeTableConfig } from '$mc/config';
import { QueryService, type QueryResult } from '$lib/services/query.service';
import { PaginationAction, type ColumnType } from '$lib/types';
import { load_storage, save_storage } from '$lib/utils';
import type { ColDef } from 'ag-grid-community';
import LevelPathAttributeElement from './LevelPathAttributeElement.svelte';
import NodePathAttributeElement from './NodePathAttributeElement.svelte';
import TextElement from '$components/LBSubmit/FormElements/TextElement.svelte';
import LBLeafDrillDown from './LBLeafDrillDown.svelte';
import { ColumnService } from '$lib/services/column.service';
import { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
import { Comparator, type MatchType } from '$lib/services/filter.service';
import { FORM_TYPE } from '$lib/services/sidebar.service';
import { isEmpty } from 'lodash-es';

export class LBTreePathColumn extends LBAttrColumn {
  public getElementForForm() {
    return LevelPathAttributeElement;
  }

  protected getQueryForAttribute(selected?: ATTRIBUTE_ITEM_TYPE): any {
    const table = {
      sort_column: 'level_path'
    };

    const filters = [
      {
        match_type: 'AND',
        lb_column: 'root',
        comparator: Comparator.EQ,
        value: true
      },
      {
        match_type: 'AND',
        lb_column: 'leaf',
        comparator: Comparator.EQ,
        value: false
      }
    ];

    const query = {
      ...table,
      asc: true,
      limit: 1000,
      include_total: true,
      tree: false,
      filters,
      verbose: false,
      level_path: selected ? selected.level_path : null,
      unique_levels_only: true,
      header: false
    };

    return query;
  }

  protected getResultWithFormat(rawData: any[]): ATTRIBUTE_ITEM_TYPE[] {
    const rows: ATTRIBUTE_ITEM_TYPE[] = [];
    rawData.forEach((item) => {
      const row = item;
      if (row.leaf !== true) {
        row.display = item.level_path;
        row.value = item.level_path;
        rows.push(row);
      }
    });
    return rows;
  }
}

export class LBTreeDetailPathColumn extends LBColumn {
  public getElementForForm() {
    const qureryService = this.queryService as TreeAttributeQueryService;
    if (qureryService) {
      if (qureryService.getLevelPath() !== '') {
        return NodePathAttributeElement;
      }
    }

    return TextElement;
  }
}

export class TreeColumnService extends ColumnService {
  public addDrillColumn(onCellClicked: any) {
    const colDef: ColDef = {
      colId: 'drilldown',
      headerName: '',
      field: 'leaf',
      cellRenderer: LBLeafDrillDown,
      cellRendererParams: { getData: (data) => data },
      minWidth: 60,
      width: 60,
      pinned: 'right',
      pivot: false,
      enablePivot: false,
      resizable: false,
      lockPosition: true,
      lockPinned: true,
      onCellClicked: onCellClicked
    };

    this.columnDefsExtra.push(colDef);
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {
    this.mapIdToCell = {};

    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      let cell;
      if (column.id === 'level_path') {
        cell = new LBTreePathColumn(column, this.queryService);
      } else if (column.id === 'node_path') {
        cell = new LBTreeDetailPathColumn(column, this.queryService);
      } else {
        cell = this.getLBColumnFromType(column);
      }
      this.mapIdToCell[cell.id] = cell;
    }
  }

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);
    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];

      const queryService = this.queryService as TreeAttributeQueryService;
      let root = true;
      if (queryService) {
        root = queryService.getLevelPath() === '';
      }

      if (cell.id === 'level_path') {
        if (root) {
          cell.hide_from_form = false;
          if (formType === FORM_TYPE.ADD) {
            cell.readOnly = false;
          } else {
            cell.readOnly = true;
          }
        } else {
          cell.hide_from_form = true;
        }
      }

      let isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);
      if (cell.id === 'format_data') {
        isAbleToAdd = false;
      }

      if (isAbleToAdd) {
        cells.push(cell);
      }
    });

    return cells;
  }
}

export class TreeAttributeQueryService extends QueryService {
  public get subject(): string {
    return 'TreeAttributeQueryService';
  }

  protected level_path: string = null;
  protected node_path: string = null;

  public headerValue: { display: string; level_path: string; parent_node_path: string };

  public get titleForForm() {
    let name = '';
    if (this.level_path === null) {
      name = 'Create Root Level Path';
    } else {
      name = `Level Path: ${this.headerValue ? this.headerValue.level_path : ''}`;
    }

    return name;
  }

  constructor() {
    super('lb_attribute_query', 'lb_attribute', 'lb_attribute_id', 'level_path');
    this.columnService = new TreeColumnService(this);
    this.isMultiSelectable = false;
    this.intent_add = 'lb_attribute_add';
    this.intent_update = 'lb_attribute_update';
    this.intent_delete = 'lb_attribute_delete';
    this._isDeletable = true;
    //this.baseUrlToRead = varEnv.readerBaseUrl;

    const key = `${this.getKeyForStorage()}/path`;
    const saved = load_storage(key);
    if (saved) {
      this.level_path = saved.level_path;
      this.node_path = saved.node_path;
    }

    this.filters = [
      {
        match_type: 'AND',
        lb_column: 'root',
        comparator: Comparator.EQ,
        value: true
      },
      {
        match_type: 'AND',
        lb_column: 'leaf',
        comparator: Comparator.EQ,
        value: false
      }
    ];

    this.setDefaultConfig(treeTableConfig);
  }

  public setPath(level_path: string, node_path: string) {
    this.level_path = level_path;
    this.node_path = node_path;

    const save = {
      level_path,
      node_path
    };

    const key = `${this.getKeyForStorage()}/path`;
    save_storage(key, save);
  }

  public getLevelPath(): string {
    if (this.level_path) {
      return this.level_path;
    }
    return '';
  }

  public getNodePath(): string {
    if (this.node_path) {
      return this.node_path;
    }
    return '';
  }

  protected getFilterQuery(): MatchType[] {
    const matchTypes = this.filterService.getFiltersForQurey();
    let filters: MatchType[] = [];
    if (matchTypes && matchTypes.length > 0) {
      filters = [...matchTypes];
    }

    if (isEmpty(this.level_path)) {
      if (this.filters && this.filters.length > 0) {
        filters = [...this.filters, ...filters];
      }
    }

    return filters;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const paginationQuery = this.pagination.getQuery(action);

    const sort = this.columnService.getSort();

    let sortDirection = true;

    let sort_column = this.sort_column;

    if (sort) {
      sort_column = sort.sort_id !== '' ? sort.sort_id : this.sort_column !== '' ? this.sort_column : this.lb_column;
      sortDirection = sort.direction;
    }

    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column,
      sort_column: sort_column
    };

    const actionBack = paginationQuery.action === PaginationAction.LAST || paginationQuery.action === PaginationAction.PREV;

    const searchQuery = this.filterService.getSearchQurey();

    const query = {
      ...this.header,
      ...table,
      asc: actionBack ? !sortDirection : sortDirection,
      last_id_value: paginationQuery.last_id_value,
      last_sort_value: paginationQuery.last_sort_value,
      limit: paginationQuery.limit,
      level_path: this.level_path,
      node_path: this.node_path,
      include_total: true,
      header: this.level_path !== null,
      filters: this.getFilterQuery(),
      ...searchQuery
    };

    const response = await this.post_query_info(this.intent_query, query);

    if (response) {
      const { data } = response;

      if (data) {
        const rawRows = data.data as any[];
        this.headerValue = data.header as any;
        const rows = actionBack ? rawRows.reverse() : rawRows;
        return {
          total: data.total,
          rows: rows,
          id_column: this.lb_column,
          sort_column: query.sort_column,
          sort_direction: sort ? sort.direction : false
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
    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column
    };

    if (submitMode === FORM_TYPE.ADD) {
      if (this.headerValue) {
        payload['current_level_path'] = this.headerValue.level_path;
        payload['parent_node_path'] = this.headerValue.parent_node_path;

        if (payload['node_path']) {
          payload['attribute_value_to_add'] = JSON.parse(JSON.stringify(payload['node_path']));
        }

        delete payload['level_path'];
        delete payload['node_path'];
      }
    } else if (submitMode === FORM_TYPE.UPDATE) {
      delete payload['level_path'];
    }

    const data = submitMode === FORM_TYPE.ADD ? payload : submitMode === FORM_TYPE.UPDATE ? { data: payload } : { lb_attribute_id: payload['lb_attribute_id'] };

    const query = {
      ...table,
      tree: false,
      ...data
    };

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
