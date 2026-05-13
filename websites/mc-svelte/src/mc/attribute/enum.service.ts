import { enumTableConfig } from '$mc/config';
import { QueryService } from '$lib/services/query.service';
import LevelPathAttributeElement from './LevelPathAttributeElement.svelte';
import { ColumnService } from '$lib/services/column.service';
import { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
import type { ATTRIBUTE_ITEM_TYPE, LBColumn } from '$components/LBDataTable/Cells/LBColumn';
import { Comparator } from '$lib/services/filter.service';
import { FORM_TYPE } from '$lib/services/sidebar.service';
import { varEnv } from '$src/env';
import type { ColumnType } from '$src/lib/types';

export class LBLevelPathColumn extends LBAttrColumn {
  public getElementForForm() {
    return LevelPathAttributeElement;
  }

  constructor(def: ColumnType, queryService: QueryService) {
    super(def, queryService);
    this.attributeIdField = 'level_path';
  }

  protected getQueryForAttribute(selected: ATTRIBUTE_ITEM_TYPE = null) {
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
        value: true
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
      if (row.leaf === true) {
        row.display = item.level_path;
        row.value = item.level_path;
        rows.push(row);
      }
    });

    return rows;
  }
}

export class EnumColumnService extends ColumnService {
  protected async initWithColumnType(columnTypes: ColumnType[]) {
    this.mapIdToCell = {};
    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      let cell;
      if (column.id === 'level_path') {
        cell = new LBLevelPathColumn(column, this.queryService);
      } else {
        cell = this.getLBColumnFromType(column);
      }
      this.mapIdToCell[cell.id] = cell;
    }
  }

  public getCellsForForm(formType: FORM_TYPE): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);
    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];

      let isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);
      if (cell.id === 'format_data') {
        isAbleToAdd = false;
      }

      if (isAbleToAdd) {
        if (cell.id === 'level_path') {
          if (formType === FORM_TYPE.ADD) {
            cell.readOnly = false;
          } else {
            cell.readOnly = true;
          }
        }

        cells.push(cell);
      }
    });
    return cells;
  }
}

export class EnumAttributeQueryService extends QueryService {
  public get subject(): string {
    return 'EnumAttributeQueryService';
  }

  constructor() {
    super('query_attribute', 'lb_attribute', 'lb_attribute_id', 'level_path');
    this.intent_add = 'lb_attribute_add';
    this.intent_update = 'lb_attribute_update';
    this.intent_delete = 'lb_attribute_delete';
    this._isDeletable = true;
    this.columnService = new EnumColumnService(this);

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
        value: true
      }
    ];

    this.baseUrlToRead = varEnv.readerBaseUrl;
    this.setDefaultConfig(enumTableConfig);
  }

  public getDataAndTotalRows(response: any) {
    if (response) {
      const { data, total } = response;
      if (data) {
        const rawRows = data as any[];
        rawRows.forEach((row) => {
          delete row['sites'];
          delete row['site_ids'];
        });

        return {
          rows: rawRows,
          total: total
        };
      }
    }

    return null;
  }

  protected getQueryToSave(submitMode: FORM_TYPE, payload: any): any {
    return this.getPayloadForSubmit(submitMode, payload);
  }

  // by overriding this method, we can avoid the entire updating for saveInfo method.
  // The saveInfo method was divided by three methods, that is getPayloadToAdd, getPayloadToUpdate, getPayloadToDelete
  // in future, we can reduce the code amount by overriding these three methods instead of saveInfo.
  // because most of cases, the saveInfo has similar structure in adding, updating, deleting, so we can only override the method of these three when we need.
  protected getPayloadToAdd(payload: any): any {
    if (payload['level_path']) {
      payload['attribute_value_to_add'] = JSON.parse(JSON.stringify(payload['level_path']));
    }

    if (payload['node_path']) {
      payload['enum_value_to_add'] = JSON.parse(JSON.stringify(payload['node_path']));
    }

    delete payload['level_path'];
    delete payload['node_path'];
    return payload;
  }

  protected getPayloadToUpdate(payload: any): any {
    const selectedRow = this.rows.find((row) => row['lb_attribute_id'] === payload['lb_attribute_id']);
    if (selectedRow) {
      payload['level_path'] = selectedRow['level_path'];

      const newData = {
        ...selectedRow,
        ...payload
      };

      delete newData['created_at'];
      delete newData['created_by'];
      delete newData['updated_at'];
      delete newData['updated_by'];
      newData['valid_from'] = new Date();
      payload = { data: newData };
    }

    return payload;
  }

  protected getPayloadToDelete(payload: any): any {
    return { lb_attribute_id: payload['lb_attribute_id'] };
  }
}
