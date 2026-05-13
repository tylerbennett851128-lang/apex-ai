import { LBColumn, type ATTRIBUTE_ITEM_TYPE } from '$components/LBDataTable/Cells/LBColumn';

import { QueryService } from '$lib/services/query.service';
import TextElement from '$components/LBSubmit/FormElements/TextElement.svelte';
import { metaAttributeLevelConfig, metaAttributeLevelUpdateConfig } from '$mc/config';
import type { ColumnType } from '$lib/types';
import { ColumnService } from '$lib/services/column.service';
import { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
import { Comparator } from '$lib/services/filter.service';
import { FORM_TYPE } from '$lib/services/sidebar.service';

export class LBMetaLevelPathColumn extends LBAttrColumn {
  public getElementForForm() {
    return TextElement;
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
    this.attributeIdField = 'level_path';
    const rows: ATTRIBUTE_ITEM_TYPE[] = [];
    rawData.forEach((item) => {
      const row = item;
      row.display = item.level_path;
      row.value = item.level_path;
      rows.push(row);
    });

    return rows;
  }
}

export class MetaColumnService extends ColumnService {
  protected async initWithColumnType(columnTypes: ColumnType[]) {
    this.mapIdToCell = {};
    this.multiSelect = false;

    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      let cell;
      if (column.id === 'level_path') {
        cell = new LBMetaLevelPathColumn(column, this.queryService);
      } else {
        cell = this.getLBColumnFromType(column);
      }
      this.mapIdToCell[cell.id] = cell;
    }
  }

  public getCellsForForm(): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);

    const nodeCell = this.mapIdToDefaultCell['node_path'];

    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];
      const isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);
      if (isAbleToAdd) {
        cells.push(cell);

        if (nodeCell) {
          if (cell.id === 'level_path') {
            cells.push(nodeCell);
          }
        }
      }
    });
    return cells;
  }
}

export class MetaAttributeQueryService extends QueryService {
  public get subject(): string {
    return 'MetaAttributeQueryService';
  }

  constructor() {
    super('lb_query', 'lb_attribute_metadata', 'lb_attribute_metadata_id', 'level_path');
    this.intent_add = 'lb_attribute_add';
    this.intent_update = 'lb_attribute_update';
    this.intent_delete = 'lb_attribute_delete';

    this.columnService = new MetaColumnService(this);
    this.isEditable = false;
  }

  protected async saveInfo(payload: any, submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    if (submitMode === FORM_TYPE.ADD) {
      if (payload['level_path']) {
        payload['attribute_value_to_add'] = JSON.parse(JSON.stringify(payload['level_path']));
      }

      if (payload['node_path']) {
        payload['enum_value_to_add'] = JSON.parse(JSON.stringify(payload['node_path']));
      }

      delete payload['node_path'];
      delete payload['level_path'];
    }

    const data = submitMode === FORM_TYPE.ADD ? payload : submitMode === FORM_TYPE.UPDATE ? { data: payload } : { lb_attribute_id: payload['lb_attribute_id'] };

    const query = {
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

export class MetaLevelColumnService extends ColumnService {
  protected mapIdToCellForUpdate: Record<string, LBColumn> = {};

  constructor(queryService: QueryService) {
    super(queryService);

    this.mapIdToCellForUpdate = {};
    metaAttributeLevelUpdateConfig.forEach((column) => {
      const cell = new LBColumn(column, this.queryService);
      this.mapIdToCellForUpdate[cell.id] = cell;
    });
  }

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE): LBColumn[] {
    const cells: LBColumn[] = [];

    if (formType === FORM_TYPE.ADD) {
      const keys = Object.keys(this.mapIdToDefaultCell);
      keys.forEach((colId) => {
        const cell = this.mapIdToDefaultCell[colId];
        cells.push(cell);
      });
    } else if (formType === FORM_TYPE.UPDATE) {
      const keys = Object.keys(this.mapIdToCellForUpdate);

      keys.forEach((colId) => {
        const cell = this.mapIdToCellForUpdate[colId];
        cells.push(cell);
      });
    }

    return cells;
  }
}

export class MetaLevelQueryService extends QueryService {
  public get subject(): string {
    return 'MetaAttributeQueryService';
  }

  constructor() {
    super('lb_query', 'lb_attribute_metadata', 'lb_attribute_metadata_id');

    this.intent_add = 'lb_attribute_metadata_add';

    this.columnService = new MetaLevelColumnService(this);
    this.setDefaultConfig(metaAttributeLevelConfig);
    this.isDeletable = false;
  }

  protected async saveInfo(payload: any, submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const intent = this.getIntentToSubmit(submitMode);

    if (submitMode === FORM_TYPE.ADD) {
      const query = payload;
      const response = await this.post_query_info(intent, query);
      if (response) {
        const { data } = response;
        if (data !== null) {
          return true;
        }
      }
    } else if (submitMode === FORM_TYPE.UPDATE) {
      const table = {
        lb_table: this.lb_table,
        lb_id_column: this.lb_column
      };

      const data = { data: [payload] };
      const query = {
        ...table,
        ...data
      };

      const response = await this.post_query_info(intent, query);
      if (response) {
        const { data } = response;
        if (data !== null) {
          return true;
        }
      }
    }

    return false;
  }
}
