import { ColumnService } from '$lib/services/column.service';
import { varEnv } from '$src/env';
import { getSchemaDataAnnotation, type ColumnType, type LBSchemaType } from '$lib/types';
import { callApiWithBaseUrl, titleCase } from '$lib/utils';
import { writable } from 'svelte/store';
import type { QueryService } from '$src/lib/services/query.service';
import { FORM_TYPE } from '$src/lib/services/sidebar.service';
import type { LBColumn } from '$src/components/LBDataTable/Cells/LBColumn';

export class GlobalColumnService extends ColumnService {
  public get subject(): string {
    return 'GlobalColumnService';
  }

  public rows: any[] = [];

  constructor() {
    super(null);
  }

  public async init() {
    const result = await this.loadColumns('lb_schema');
    if (result) {
      this.rows = result.rows;
      this.rows.forEach((row) => {
        if (row.id === 'lb_table') {
          row.read_only = true;
        }
      });
      await this.initWithRaw(result.rows);
    }
    return result;
  }

  protected getLBDataFromTemplate(columnName: string, value: any): string {
    if (columnName.includes('_id')) {
      return 'LbData.Int8.Identifier.Id';
    }

    if (typeof value === 'bigint') {
      return 'LbData.Int8.Identifier.Id';
    } else if (typeof value === 'number') {
      return 'LbData.Int8.Number.Standard';
    } else if (typeof value === 'boolean') {
      return 'LbData.Bool.Boolean.Checkbox';
    }

    return 'LbData.String.Text.PlainText';
  }

  public async registerTableIntoSchema(tableName: string, queryService: QueryService): Promise<ColumnType[]> {
    const defaultConfig: ColumnType[] = [];
    const schemaTypes: LBSchemaType[] = [];

    if (queryService) {
      const info = await queryService.loadInfo();
      if (info) {
        const rows = info.rows;
        if (rows && rows.length > 0) {
          const firstRow = rows[0]; // it's to extract the column configuration from the first row. but this is simple apporach to get default column.
          const keys = Object.keys(firstRow); // but in future, we have to register schema for the columns into lb_schema table.

          keys.forEach((key) => {
            const def: ColumnType = {
              id: key,
              name: key,
              readOnly: true,
              schemaType: getSchemaDataAnnotation(firstRow[key])
            };
            defaultConfig.push(def);

            const lb_schema: LBSchemaType = {
              id: key,
              name: titleCase(key),
              lb_data: this.getLBDataFromTemplate(key, firstRow[key])
            };

            schemaTypes.push(lb_schema);
          });

          await this.registerTableWithSchema(tableName, schemaTypes);
        }
      }
    }

    return defaultConfig;
  }

  public async registerTableWithSchema(tableName: string, schemaTypes: LBSchemaType[]) {
    console.log('registerTableWithSchema : ', tableName, schemaTypes);

    for (const i in schemaTypes) {
      const column = schemaTypes[i];

      const payload = {
        lb_table: 'lb_schema',
        lb_id_column: 'lb_schema_id',
        data: [
          {
            collection_filter: false,
            hide_from_form: false,
            hide_from_filter: false,
            hide_by_default: false,
            required: false,
            read_only: false,
            primary_key: false,
            is_unique: false,
            lb_sequence: 0,
            allow_filters: false,
            display: titleCase(column.id),
            lb_column: column.id,
            lb_table: tableName,
            lb_data: column.lb_data
          }
        ]
      };

      await this.saveInfo(payload);
    }
  }

  private async post_query_info(endpoint: string, query: any) {
    const response = await callApiWithBaseUrl(varEnv.baseUrl, endpoint, query);

    if (response) {
      return response.data;
    }

    return null;
  }

  protected async saveInfo(payload: any): Promise<boolean> {
    const response = await this.post_query_info('lb_add', payload);
    if (response) {
      const { data } = response;
      if (data !== null) {
        return true;
      }
    }

    return false;
  }
}

function createGlobalColumnService() {
  const service = new GlobalColumnService();
  const { subscribe, update, set } = writable(service);
  return {
    subscribe,
    update,
    set
  };
}

export const globalColumnService = createGlobalColumnService();

export class SchemaColumnService extends ColumnService {
  public get subject(): string {
    return 'SchemaColumnService';
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {
    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      const cell = this.mapIdToDefaultCell[column.id];
      if (cell) {
        column.readOnly = cell.readOnly;
        column.required = cell.required;
        column.hide_by_default = cell.hide_by_default;
        column.hide_from_form = cell.hide_from_form;
        column.hide_from_filter = cell.hide_from_filter;
      }

      if (column.id === 'lb_table') {
        column.readOnly = true;
      }

      this.mapIdToCell[column.id] = this.getLBColumnFromType(column);
    }
  }

  // The overriding is for updating on adding mode.
  // In adding mode, the lb_table column should be filled by table name.
  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData: any = null): LBColumn[] {
    if (formType === FORM_TYPE.ADD) {
      if (rowData) {
        rowData['lb_table'] = this.queryService.tableName;
      }
    }
    return super.getCellsForForm(formType, rowData);
  }
}
