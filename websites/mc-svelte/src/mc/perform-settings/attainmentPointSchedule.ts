import { QueryService } from '$lib/services/query.service';
import { SchemaDataAnnotation } from '$lib/types';
import type { ColumnType } from '$lib/types';
import { ColumnService } from '$src/lib/services/column.service';
import { Comparator, type MatchType } from '$src/lib/services/filter.service';
import { varEnv } from '$src/env';
import { FORM_TYPE } from '$src/lib/services/sidebar.service';
import type { ATTRIBUTE_ITEM_TYPE, LBColumn } from '$components/LBDataTable/Cells/LBColumn';
import { LBAttrColumn } from '$src/components/LBDataTable/Cells/LBAttrColumn';
import { isEmpty, isNil } from 'lodash-es';

export class APSDataColumnService extends ColumnService {
  constructor(queryService: QueryService) {
    super(queryService);
    this.messageAtForm = 'Attainment Points will be re-calculated the next time the goals referencing this Attainment Point Schedule are scored.';
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {
    this.mapIdToCell = {};
    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      if (column.id === 'attainment_point_schedule_id') {
        column.schemaType = SchemaDataAnnotation.NUMERIC;
      }
      const cell = this.getLBColumnFromType(column);
      this.mapIdToCell[cell.id] = cell;
    }
  }

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData: any = null): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);
    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];
      const isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);
      if (isAbleToAdd) {
        if (cell.id === 'attainment_point_schedule_id') {
          cell.hide_from_form = FORM_TYPE.ADD ? true : false;
          cell.readOnly = formType === FORM_TYPE.UPDATE ? true : false;
        }

        const phases = ['pending', 'distribute', 'collaborate', 'ready', 'review', 'archive', 'close', 'active'];
        if (formType === FORM_TYPE.ADD && phases.includes(cell.id) && !rowData[cell.id]) {
          rowData[cell.id] = 'View';
        }
        cells.push(cell);
      }
    });

    return cells;
  }
}

export class LBPathOrgColumn extends LBAttrColumn {
  protected path_org: any;
  constructor(def: ColumnType, queryService: QueryService, path_org: any) {
    super(def, queryService);
    this.path_org = path_org;
    this.level_path = 'Org.Corporate.Region';
    if (path_org) {
      const node_path = path_org.node_path;
      const nodes = node_path.split('.').slice(0, 3);
      this.node_path = nodes.join('.');
    }
  }

  protected getResultWithFormat(rawData: any[]): ATTRIBUTE_ITEM_TYPE[] {
    const rows: ATTRIBUTE_ITEM_TYPE[] = [];
    this.attributeIdField = 'node_path';
    rawData.forEach((item) => {
      const row = item;
      row.display = item.display;
      row.value = item['node_path'];
      row.leaf = item.level_path === 'Org.Corporate.Region.State.Site' ? true : item.leaf;
      rows.push(row);
    });
    return rows;
  }

  protected cacheToMap(rows: ATTRIBUTE_ITEM_TYPE[]) {
    const columnService = this.queryService.columnService as APSColumnService;

    if (rows.length > 0) {
      const firstItem = rows[0];
      if (!firstItem[this.attributeIdField]) {
        if (firstItem['value']) {
          this.attributeIdField = 'value';
        }
      }

      rows.forEach((row) => {
        const id = row[this.attributeIdField];
        this.mapIdToItem[id] = row;
        columnService.mapPathOrg[id] = row;
      });
    }
  }

  protected getQueryForAttribute(selected: ATTRIBUTE_ITEM_TYPE = null): any {
    let table = {};

    if (this.id === 'level_path' || this.schemaType === SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH) {
      table = {
        sort_column: 'level_path'
      };
    } else if (this.id === 'node_path') {
      table = {
        sort_column: 'node_path'
      };
    } else {
      table = {
        lb_table: 'lb_attribute',
        lb_id_column: 'lb_attribute_id',
        sort_column: 'lb_sequence'
      };
    }

    const node_path = this.id === 'node_path' ? 'node_path' : selected ? selected.node_path : this.node_path;
    const filters: MatchType[] = [
      {
        match_type: 'AND',
        comparator: Comparator.ILIKE,
        lb_column: 'node_path',
        value: this.path_org.node_path
      }
    ];

    const query = {
      ...table,
      asc: true,
      limit: 1000,
      include_total: true,
      tree: false,
      verbose: false,
      unique_levels_only: this.id === 'level_path' || this.id === 'node_path',
      level_path: selected ? selected.level_path : this.level_path,
      node_path: node_path,
      header: node_path === null || node_path === undefined ? false : true,
      filters: this.level_path === 'Org.Corporate.Region' ? filters : []
    };

    return query;
  }
}

export class APSColumnService extends ColumnService {
  public mapPathOrg: Record<string, any> = {};

  public getLBColumnFromType(column: ColumnType): any {
    if (column.id === 'path_org') {
      const queryService = this.queryService as AttainmentPointScheduleService;
      const path_org = queryService.path_org;
      const cell = new LBPathOrgColumn(column, this.queryService, path_org);
      const node_path = queryService.path_org.node_path;
      let nodes = node_path.split('.');
      if (nodes.length > 3) {
        nodes = nodes.slice(0, 3);
      }
      cell.node_path = nodes.join('.');
      return cell;
    }
    return super.getLBColumnFromType(column);
  }

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData: any = null): LBColumn[] {
    const cell = this.mapIdToCell['path_org'] as LBPathOrgColumn;

    if (formType === FORM_TYPE.ADD) {
      if (isEmpty(rowData['path_org'])) {
        cell.level_path = 'Org.Corporate.Region';
        const queryService = this.queryService as AttainmentPointScheduleService;
        const node_path = queryService.path_org.node_path;
        const nodes = node_path.split('.').slice(0, 3);
        cell.node_path = nodes.join('.');
        if (this.mapPathOrg[node_path]) {
          rowData['path_org'] = this.mapPathOrg[node_path];
        }
      }
    } else {
      if (rowData['path_org']) {
        if (typeof rowData['path_org'] === 'string') {
          const node_path = rowData['path_org'];
          const path_org = cell.mapIdToItem[node_path];
          if (path_org) {
            rowData['path_org'] = path_org;
          }
        }

        if (rowData['path_org'] && typeof rowData['path_org'] === 'object') {
          const level_path = rowData['path_org'].level_path;

          if (!isNil(level_path)) {
            const level_nodes = level_path.split('.');
            level_nodes.pop();

            const node_path = rowData['path_org'].node_path;
            const node_nodes = node_path.split('.');
            node_nodes.pop();

            cell.level_path = level_nodes.join('.');
            cell.node_path = node_nodes.join('.');
          }
        }
      }
    }

    return super.getCellsForForm(formType, rowData);
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {
    super.initWithColumnType(columnTypes);
    const cell = this.mapIdToCell['path_org'] as LBPathOrgColumn;
    await cell.loadAttributes();
    this.mapIdToCell['path_org'] = cell;
  }
}

export class AttainmentPointScheduleService extends QueryService {
  public get subject(): string {
    return 'AttainmentPointScheduleService';
  }

  public path_org: any;
  constructor(path_org: any) {
    super('query_attainment_points_schedule', 'attainment_point_schedule', 'attainment_point_schedule_id', 'attainment_point_schedule_id');
    this.path_org = path_org;
    this.columnService = new APSColumnService(this);
    this.intent_add = 'add_attainment_point_schedule';
    this.intent_update = 'update_attainment_point_schedule';
    this.intent_delete = 'delete_attainment_point_schedule';
    this.rowClicking = true;
    this.isDeletable = true;
    this.baseUrlToRead = varEnv.readerBaseUrl;
    this.baseUrlToUpdate = varEnv.writerBaseUrl;
    this.baseUrlToDelete = varEnv.writerBaseUrl;
    this.baseUrlToAdd = varEnv.writerBaseUrl;

    if (this.path_org) {
      this.filters = [
        {
          match_type: 'OR',
          lb_column: 'path_org',
          comparator: Comparator.ILIKE,
          value: path_org.node_path
        }
      ];
    }
  }

  protected async saveInfo(payload: any[], submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const intent = this.getIntentToSubmit(submitMode);
    const table = {
      attainment_point_schedule_id: payload[`${this.lb_table}_id`]
    };

    if (payload['path_org'] && typeof payload['path_org'] === 'object') {
      payload['path_org'] = payload['path_org'].node_path;
    }

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

export class AttainmentPointScheduleDataService extends QueryService {
  public get subject(): string {
    return 'AttainmentPointScheduleDataService';
  }

  protected aps_id: string = null;

  constructor() {
    super('query_attainment_points_schedule_data', 'attainment_point_schedule_data', 'attainment_point_schedule_data_id', 'attainment_point_schedule_data_id');
    this.columnService = new APSDataColumnService(this);
    this.intent_add = 'add_attainment_point_schedule_data';
    this.intent_update = 'update_attainment_point_schedule_data';
    this.intent_delete = 'lb_delete';

    this.isDeletable = true;
    this.baseUrlToRead = varEnv.readerBaseUrl;
    this.baseUrlToUpdate = varEnv.writerBaseUrl;
    this.baseUrlToDelete = varEnv.baseUrl;
    this.baseUrlToAdd = varEnv.writerBaseUrl;
  }

  public async setApsId(aps_id) {
    this.aps_id = aps_id;
    this.filters = [
      {
        match_type: 'OR',
        lb_column: 'attainment_point_schedule_id',
        comparator: Comparator.EQ,
        value: this.getApsId()
      }
    ];
  }

  public getApsId(): string {
    if (this.aps_id) {
      return this.aps_id;
    }
    return '';
  }

  protected async saveInfo(payload: any[], submitMode: FORM_TYPE = FORM_TYPE.UPDATE): Promise<boolean> {
    const intent = this.getIntentToSubmit(submitMode);

    const primaryKey = `${this.lb_table}_id`;
    payload['attainment_point_schedule_id'] = this.aps_id;
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
