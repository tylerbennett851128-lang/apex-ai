import { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
import { LBColumn, type ATTRIBUTE_ITEM_TYPE } from '$components/LBDataTable/Cells/LBColumn';
import { LBSchemaIdColumn } from '$components/LBDataTable/Cells/LBSchemaIdColumn';
import { FORM_TYPE } from '$lib/services/sidebar.service';
import { ColumnService } from '$lib/services/column.service';
import { QueryService, type QueryResult } from '$lib/services/query.service';
import { GET_SCHEMA_TYPE, PaginationAction, SchemaDataAnnotation, type ColumnType } from '$lib/types';
import { Comparator, type MatchType } from '$lib/services/filter.service';
import DefaultValueCell from './DefaultValueCell.svelte';

export class DefaultNodePathColumn extends LBAttrColumn {
  protected getQueryForAttribute(selected?: ATTRIBUTE_ITEM_TYPE): any {
    let table = {};

    if (this.id === 'level_path' || this.schemaType === SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH) {
      table = {
        sort_column: 'level_path'
      };

      this.attributeIdField = 'level_path';
    } else if (this.id === 'node_path') {
      table = {
        sort_column: 'node_path'
      };

      this.attributeIdField = 'node_path';
    } else {
      table = {
        lb_table: 'lb_attribute',
        lb_id_column: 'lb_attribute_id',
        sort_column: 'lb_sequence'
      };
    }

    const query = {
      ...table,
      asc: true,
      limit: 1000,
      include_total: true,
      tree: false,
      verbose: false,
      level_path: selected ? selected.level_path : this.level_path,
      node_path: selected ? selected.node_path : this.node_path,
      header: false
    };

    return query;
  }

  protected getResultWithFormat(rawData: any[]): ATTRIBUTE_ITEM_TYPE[] {
    const rows: ATTRIBUTE_ITEM_TYPE[] = [];

    rawData.forEach((item) => {
      const row = item;
      row.display = item.node_path;
      row.value = item.node_path;
      rows.push(row);
    });

    return rows;
  }
}

export class DefaultValueColumn extends LBColumn {
  public getCellRenderer() {
    if (this.component) {
      return this.component;
    }
    return DefaultValueCell;
  }
}

export class PSDefaultColumnService extends ColumnService {
  protected lastSchemaType: any;
  protected lastDefaultNodePath: any;

  private initialized = false;

  public async setDefaultConfig(columnTypes: ColumnType[]) {
    this.mapIdToDefaultCell = {};
    this.mapIdToCell = {};

    const idColumn = columnTypes.find((column) => column.id === 'lb_schema_id');

    if (idColumn) {
      const idCell = new LBSchemaIdColumn(idColumn, this.queryService);
      // The schema column should be loaded first, so we can show the data with the component that is correspond the schema id
      await idCell.loadIds();

      for (let idx = 0; idx < columnTypes.length; idx++) {
        let cell;
        const column = columnTypes[idx];
        if (column.id === 'default_node_path') {
          cell = new DefaultNodePathColumn(column, this.queryService);
        } else if (column.id === 'default_values') {
          cell = new DefaultValueColumn(column, this.queryService);
        } else if (column.id === 'lb_schema_id') {
          cell = idCell;
        } else {
          cell = this.getLBColumnFromType(column);
          if (cell.id === 'edit_permission') {
            cell.defaultIdValue = {
              display: 'Perform Admin'
            };
          }
        }

        this.mapIdToCell[cell.id] = cell;
        this.mapIdToDefaultCell[cell.id] = cell;
      }
    }
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {}

  public initializeForForm() {
    this.initialized = false;
  }

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData?: any): LBColumn[] {
    let schemaType;
    let schemaItem;
    if (this.mapIdToCell['lb_schema_id']) {
      const schemaCell = this.mapIdToCell['lb_schema_id'] as unknown as LBSchemaIdColumn;
      const schemaId = rowData[schemaCell.id];

      if (schemaCell.mapIdToItem && schemaCell.mapIdToItem[schemaId]) {
        schemaItem = JSON.parse(JSON.stringify(schemaCell.mapIdToItem[schemaId]));
      }

      if (schemaId && schemaItem) {
        const lb_data = schemaItem.lb_data;
        schemaType = GET_SCHEMA_TYPE(lb_data || SchemaDataAnnotation.TEXT);
      }

      if (schemaType && this.lastSchemaType !== schemaType) {
        if (rowData && this.initialized) {
          rowData['default_node_path'] = null;
          rowData['default_values'] = null;
        }
      }

      if (this.mapIdToCell['default_node_path']) {
        // for the default_node_path, if selected schema is attribute_array_leaf or attribute_leaf, then it's enabled for edit and required.
        const required = schemaType === SchemaDataAnnotation.ATTRIBUTE_LEAF || schemaType === SchemaDataAnnotation.ATTRIBUTE_ARRAY_LEAF ? true : false;
        this.mapIdToCell['default_node_path'].required = required;
        this.mapIdToCell['default_node_path'].readOnly = !required;
        this.mapIdToCell['default_node_path'].multiSelectEnabled = false;
        this.mapIdToCell['default_node_path'].level_path = schemaItem ? schemaItem['level_path'] : undefined;

        if (schemaType && this.lastSchemaType !== schemaType) {
          if (this.initialized) {
            this.mapIdToCell['default_node_path'].node_path = null;
          }
        }
      }

      if (this.mapIdToCell['default_values']) {
        const required = schemaType === SchemaDataAnnotation.ATTRIBUTE_LEAF || schemaType === SchemaDataAnnotation.ATTRIBUTE_ARRAY_LEAF ? false : true;

        const column: ColumnType = {
          id: 'default_values',
          name: 'Default Values',
          schemaType,
          level_path: schemaItem ? schemaItem['level_path'] : undefined,
          required: required,
          readOnly: !required
        };

        this.mapIdToCell['default_values'] = this.getLBColumnFromType(column);

        if (schemaType === SchemaDataAnnotation.ATTRIBUTE_LEAF || schemaType === SchemaDataAnnotation.ATTRIBUTE_ARRAY_LEAF) {
          if (rowData && rowData['default_node_path']) {
            this.mapIdToCell['default_values'].readOnly = false;
            this.mapIdToCell['default_values'].node_path = rowData['default_node_path'];
            this.mapIdToCell['default_values'].readOnly = rowData['default_node_path'] ? false : true;

            if ((schemaType && this.lastSchemaType !== schemaType) || this.lastDefaultNodePath !== rowData['default_node_path']) {
              if (this.initialized) {
                rowData['default_values'] = null;
              }
            }
          }
        }
      }
    }

    const cells: LBColumn[] = this.getCellsToExport(formType, rowData);
    this.lastSchemaType = schemaType;

    if (rowData) {
      this.lastDefaultNodePath = rowData['default_node_path'];
    }

    this.initialized = true;
    return cells;
  }

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
            const qureryService = this.queryService as PerformDefaultValueService;
            rowData[cell.id] = qureryService.lb_domain;
            cell.readOnly = true;
          }
        } else if (cell.id === 'path_org') {
          if (formType === FORM_TYPE.ADD) {
            const qureryService = this.queryService as PerformDefaultValueService;
            rowData[cell.id] = qureryService.path_org;
          }
        }
        cells.push(cell);
      }
    });
    return cells;
  }
}

export class PerformDefaultValueService extends QueryService {
  public get subject(): string {
    return 'PerformDefaultValueService';
  }

  public path_org: string;
  public lb_domain: string;

  constructor(path_org: string, lb_domain: string) {
    super('query_perform_default_values_by_org', 'perform_default_values', 'perform_default_values_id', 'created_at');

    this.intent_add = 'add_perform_default_values';
    this.intent_update = 'update_perform_default_values';
    this.intent_delete = 'lb_delete';

    this.path_org = path_org;
    this.lb_domain = lb_domain;
    this._isDeletable = true;
    this.isInlineEditable = false;
    this.columnService = new PSDefaultColumnService(this);
  }

  public getFilterQuery(): MatchType[] {
    const matchTypes = this.filterService.getFiltersForQurey();
    let filters: MatchType[] = [
      {
        match_type: 'AND',
        comparator: Comparator.LTREE,
        lb_column: 'lb_domain',
        value: this.lb_domain
      }
    ];
    if (matchTypes && matchTypes.length > 0) {
      filters = [...matchTypes];
    }

    if (this.filters && this.filters.length > 0) {
      filters = [...this.filters, ...filters];
    }
    return filters;
  }

  public async loadInfo(action: PaginationAction = PaginationAction.FIRST): Promise<QueryResult> {
    const paginationQuery = this.pagination.getQuery(action);

    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column,
      sort_column: this.sort_column
    };

    const sort = this.columnService.getSort();

    let sortDirection = true;

    if (sort) {
      table.sort_column = sort.sort_id !== '' ? sort.sort_id : this.lb_column;
      sortDirection = sort.direction;
    }

    const actionBack = paginationQuery.action === PaginationAction.LAST || paginationQuery.action === PaginationAction.PREV;

    const searchQuery = this.filterService.getSearchQurey();

    const query = {
      ...this.header,
      ...table,
      asc: actionBack ? !sortDirection : sortDirection,
      last_id_value: paginationQuery.last_id_value,
      last_sort_value: paginationQuery.last_sort_value,
      limit: paginationQuery.limit,
      path_org: this.path_org,
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
    const intent = this.getIntentToSubmit(submitMode);

    const primaryKey = `${this.lb_table}_id`;

    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column,
      lb_id_value: payload[primaryKey]
    };

    if (!payload['path_org']) {
      payload['path_org'] = this.path_org;
    }

    const data = submitMode === FORM_TYPE.ADD ? payload : submitMode === FORM_TYPE.UPDATE ? payload : table;

    if (data['default_values']) {
      if (typeof data['default_values'] === 'number') {
        data['default_values'] = String(data['default_values']);
      }
    }

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
