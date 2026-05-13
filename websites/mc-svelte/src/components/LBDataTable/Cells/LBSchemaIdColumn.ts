import { post_query_info } from '$lib/utils';
import SchemaIdElement from '$components/LBSubmit/FormElements/SchemaIdElement.svelte';
import { LBIdColumn } from './LBIdColumn';
import type { QueryService } from '$lib/services/query.service';
import type { ColumnType } from '$lib/types';
import { Comparator, type MatchType } from '$lib/services/filter.service';

export class LBSchemaIdColumn extends LBIdColumn {
  protected filters: MatchType[] = [];

  constructor(def: ColumnType, queryService: QueryService, filters: MatchType[] = undefined) {
    super(def, queryService);
    if (filters) {
      this.filters = filters;
    } else {
      this.filters = [
        {
          comparator: Comparator.EQ,
          lb_column: 'lb_table',
          match_type: 'AND',
          value: 'goal'
        },
        {
          comparator: Comparator.EQ,
          lb_column: 'allow_filters',
          match_type: 'AND',
          value: true
        }
      ];
    }
  }

  public getElementForForm(): any {
    return SchemaIdElement;
  }

  public async loadIds(): Promise<any[]> {
    const tableName = this.id ? this.id.replace('_id', '') : 'lb_schema';
    const sort_column = 'display';

    const table = {
      lb_table: tableName,
      lb_id_column: this.id,
      sort_column: sort_column
    };

    const query = {
      ...table,
      asc: true,
      filters: this.filters,
      limit: 1000
    };

    const response = await post_query_info('lb_query', query);

    if (response) {
      const { data } = response;

      if (data) {
        const rawData = data.data as any[];
        const rows: any[] = [];
        this.mapIdToItem = {};

        rawData.forEach((item) => {
          const schemaId = item[this.id];
          this.mapIdToItem[schemaId] = item;
          rows.push(item);
        });

        return rows;
      }
    }
    return [];
  }
}
