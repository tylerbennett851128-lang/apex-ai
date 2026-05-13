import type { ColumnService } from '$lib/services/column.service';
import { DataQueryService } from '$mc/global-schema/data-query.service';
import { Comparator } from '$lib/services/filter.service';
import { QueryService } from '$lib/services/query.service';
import { SchemaColumnService } from './global-schema.service';
import { writable } from 'svelte/store';

export type SchemaUpdateEvent = {
  tableName: string;
};

function createSchemaUpdateService() {
  const event: SchemaUpdateEvent = {
    tableName: ''
  };

  const { subscribe, update, set } = writable(event);
  return {
    subscribe,
    update,
    set
  };
}

export const schemaUpdateService = createSchemaUpdateService();

//This is the query service on Schema tab.
export class SchemaQueryService extends QueryService {
  public get subject(): string {
    return 'SchemaQueryService';
  }

  public get tableName(): string {
    return this._tableName;
  }

  protected _tableName = '';

  constructor(tableName: string) {
    super('lb_query', 'lb_schema', 'lb_schema_id', 'lb_sequence');
    this._tableName = tableName;
    this.columnService = new SchemaColumnService(this);
    this.filters = [
      {
        match_type: 'AND',
        lb_column: 'lb_table',
        comparator: Comparator.EQ,
        value: this.tableName
      }
    ];
    this._isDeletable = true;
  }

  public getKeyForStorage() {
    return `Schema:${this.subject}/${this.intent_query}/${this.lb_table}/${this.lb_column}/${this._tableName}`;
  }
}

//The table query service has data query service and schema query service.
export class TableService {
  public tableName = '';

  public get columnService(): ColumnService {
    if (this._dataService) {
      return this._dataService.columnService;
    }

    return null;
  }

  public set columnService(value: ColumnService) {
    if (this._dataService) {
      this._dataService.columnService = value;
    }
  }

  private _dataService: DataQueryService;

  public set dataService(value: DataQueryService) {
    if (value) {
      this._dataService = value;
    }
  }
  public get dataService(): DataQueryService {
    return this._dataService;
  }

  private _schemaService: SchemaQueryService;
  public set schemaService(value: SchemaQueryService) {
    if (value) {
      this._schemaService = value;
    }
  }
  public get schemaService(): SchemaQueryService {
    return this._schemaService;
  }

  constructor(tableName: string) {
    this.tableName = tableName;
    this._dataService = new DataQueryService(tableName);
    this._schemaService = new SchemaQueryService(tableName);
  }
}
