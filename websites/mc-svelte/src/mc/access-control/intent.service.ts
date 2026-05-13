import { FORM_TYPE } from '$lib/services/sidebar.service';
import { QueryService } from '$lib/services/query.service';
import { ColumnService } from '$lib/services/column.service';
import type { LBIdColumn } from '$components/LBDataTable/Cells/LBIdColumn';
import { intentDetailsConfig, intentTableConfig } from '$mc/config/IntentTable.config';
import LBIntentGroupCell from './LBIntentGroupCell.svelte';
import { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
import type { ColumnType } from '$lib/types';
import { varEnv } from '$src/env';

export class IntentGroupColumn extends LBAttrColumn {
  public getCellRenderer() {
    return LBIntentGroupCell;
  }
}

export class IntentColumnService extends ColumnService {
  public getLBColumnFromType(column: ColumnType): any {
    if (column.id === 'intent_groups') {
      return new IntentGroupColumn(column, this.queryService);
    }
    return super.getLBColumnFromType(column);
  }
}

export class IntentQueryService extends QueryService {
  public get subject(): string {
    return 'IntentQueryService';
  }
  constructor() {
    super('query_lb_intent', 'lb_intent', 'lb_intent_id', 'intent');
    this.columnService = new IntentColumnService(this);
    this.columnService.multiSelect = false;
    this.wrapContent = true;

    this.intent_add = 'add_intent';
    this.intent_update = 'update_intent';
    this.intent_delete = 'delete_intent';
    this._isDeletable = true;

    this.sendRequestAfterUpdate = true;
    this.setDefaultConfig(intentTableConfig);

    this.baseUrlToRead = varEnv.readerBaseUrl;
    this.baseUrlToDelete = varEnv.writerBaseUrl;
    this.baseUrlToAdd = varEnv.writerBaseUrl;
  }

  protected getPayloadToDelete(payload: any): any {
    const primaryKey = `${this.lb_table}_id`;
    const value = {};
    value[primaryKey] = payload[primaryKey];
    return value;
  }

  public getDataAndTotalRows(response: any) {
    // This function is used to extract the data and total number when we send queries.
    // because each api has diffferent structure in response, we can use it to get the data and total number from different APIs.
    // by overriding this api, we can avoid the re-defining loadInfo and we can reduce the code amount.
    if (response) {
      const { data, total } = response;
      const rows = data as any[];
      return {
        rows: rows,
        total: total
      };
    }
    return null;
  }
}

export class IntentDetailsColumnService extends ColumnService {
  public setDefaultConfig(columnTypes: ColumnType[]) {
    this.mapIdToDefaultCell = {};
    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      const cell = this.getLBColumnFromType(column);
      cell.defaultSortIndex = idx;
      this.mapIdToDefaultCell[cell.id] = cell;
      this.mapIdToCell[cell.id] = cell;
    }
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {
    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      if (!this.mapIdToCell[column.id]) {
        const cell = this.getLBColumnFromType(column);
        this.mapIdToCell[column.id] = cell;
      }
    }
  }

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData: any = null): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);
    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];
      const isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);
      if (isAbleToAdd) {
        if (cell.id === 'lb_role_id') {
          cell.name = 'Role';
          if (formType === FORM_TYPE.ADD) {
            cell.readOnly = false;
          } else {
            cell.readOnly = true;
          }
          cells.push(cell);
        } else {
          cells.push(cell);
        }
      }
    });
    return cells;
  }
}

export class IntentDetailService extends QueryService {
  public get subject(): string {
    return 'IntentDetailService';
  }

  protected intent_id: string;

  constructor(intent_id: string) {
    super('query_roles_for_intent', 'lb_role_intent', 'lb_role_intent_id', 'lb_intent_id');
    this.columnService = new IntentDetailsColumnService(this);
    this.intent_id = intent_id;
    this.loadParams = { lb_intent_id: this.intent_id };
    this.intent_add = 'add_roles_to_intent';
    this.intent_update = 'update_role_to_intent';
    this.intent_delete = 'delete_role_intent';
    this.sendRequestAfterUpdate = true;
    this.isDeletable = true;
    this.isMultiSelectable = false;
    this.wrapContent = true;
    this.setDefaultConfig(intentDetailsConfig);
  }

  public getDataAndTotalRows(response: any) {
    if (response) {
      const { data } = response;
      if (data) {
        const rows = data.data as any[];
        rows.forEach((row) => {
          if (row.lb_role) {
            row['lb_role_name'] = row.lb_role['lb_role_name'];
          }
        });

        return {
          rows: rows,
          total: data.total
        };
      }
    }

    return null;
  }

  protected async saveInfo(payload: any, submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const table = {
      lb_table: this.lb_table,
      lb_id_column: this.lb_column
    };

    const intent = this.getIntentToSubmit(submitMode);

    if (submitMode === FORM_TYPE.ADD) {
      const cell = this.columnService.getCell('lb_role_id') as LBIdColumn;
      payload.lb_role_ids = [payload.lb_role_id];
      const lb_role_id = [cell.mapIdToItem[payload.lb_role_id]];
      payload['lb_role_id'] = lb_role_id;
      payload['lb_intent_id'] = this.intent_id;
    } else if (submitMode === FORM_TYPE.UPDATE) {
      payload.lb_role_ids = [payload.lb_role_id];
      delete payload['lb_role_id'];
    } else if (submitMode === FORM_TYPE.DELETE) {
      payload['lb_intent_id'] = this.intent_id;

      const payloadToDelete = {
        lb_intent_id: this.intent_id,
        lb_role_intent_id: payload['lb_role_intent_id']
      };
      payload = payloadToDelete;
    }

    const data = submitMode === FORM_TYPE.ADD || submitMode === FORM_TYPE.UPDATE ? { data: [payload] } : { ...payload };

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

    return false;
  }
}
