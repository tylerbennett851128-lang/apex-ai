import { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
import { LBColumn, type ATTRIBUTE_ITEM_TYPE } from '$components/LBDataTable/Cells/LBColumn';
import { ATTRIBUTE_ARRAY_SCHEMA_TYPES, ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES, ATTRIBUTE_SCHEMA_TYPES, SchemaDataAnnotation, type ColumnType } from '$lib/types';
import { post_query_info } from '$lib/utils';
import { ColumnService } from '$lib/services/column.service';
import { QueryService } from '$lib/services/query.service';

// The LBTableColumn is the column for "lb_table"
// when user open the sidebar on longbow section and goal data section, client data section, the lb_table column should be read only
// and for lb_schema table, it should be dropdown.
export class LBTableColumn extends LBAttrColumn {
  constructor(def: ColumnType, queryService: QueryService) {
    super(def, queryService);
    this.attributeIdField = 'value';
  }

  protected getResultWithFormat(rawData: any[]): ATTRIBUTE_ITEM_TYPE[] {
    const rows: ATTRIBUTE_ITEM_TYPE[] = [];

    rawData.forEach((item) => {
      const row = item;
      row.display = item.table_name;
      row.value = item.table_name;
      rows.push(row);
    });

    return rows;
  }

  public loadAttributes = async (): Promise<ATTRIBUTE_ITEM_TYPE[]> => {
    const table = {
      lb_table: 'lb_table_index',
      lb_id_column: 'lb_table_index_id',
      sort_column: 'lb_table_index_id'
    };

    const query = {
      ...table,
      asc: true,
      limit: 1000,
      include_total: true,
      tree: false
    };

    const response = await post_query_info('lb_query', query);
    if (response) {
      const { data } = response;
      if (data) {
        const rows = this.sortResult(this.getResultWithFormat(data.data as any[]));
        return rows;
      }
    }

    return [];
  };
}

export class DataColumnService extends ColumnService {
  public getLBColumnFromType(column: ColumnType): LBColumn {
    if (column.id === 'lb_table' && this.queryService.tableName === 'lb_schema') {
      column.schemaType = SchemaDataAnnotation.ATTRIBUTE_LEAF;
      return new LBTableColumn(column, this.queryService);
    } else if (column.schemaType === SchemaDataAnnotation.IDENTIFIER) {
      column.schemaType = SchemaDataAnnotation.NUMBER;
      return new LBColumn(column, this.queryService);
    } else if (ATTRIBUTE_SCHEMA_TYPES.includes(column.schemaType)) {
      return new LBAttrColumn(column, this.queryService);
    } else if (ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES.includes(column.schemaType) || column.id === 'level_path') {
      return new LBAttrColumn(column, this.queryService);
    } else if (ATTRIBUTE_ARRAY_SCHEMA_TYPES.includes(column.schemaType)) {
      return new LBAttrColumn(column, this.queryService);
    }
    return new LBColumn(column, this.queryService);
  }
}

//The DataQueryService is the query service in Data tab.
//This should have the columns service and the name is DataColumnService
export class DataQueryService extends QueryService {
  public get subject(): string {
    return 'DataQueryService';
  }

  constructor(tableName: string) {
    super('lb_query', tableName, `${tableName}_id`, `${tableName}_id`);
    this.columnService = new DataColumnService(this);
    this._isDeletable = true;
    this.isMultiSelectable = false;
    this.selectionDeletable = true;
    this.isAbleToClone = true;
  }

  public getKeyForStorage() {
    const key = super.getKeyForStorage();
    return `Data:${key}`;
  }
}
