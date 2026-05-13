import { QueryService } from '$lib/services/query.service';
import { SchemaDataAnnotation, type ColumnType } from '$lib/types';
import LBDuckDbFileDetailAdapter from '$mc/components/LBDuckDbFileDetailAdapter.svelte';
import { varEnv } from '$src/env';

export const duckDbTrackerTableConfig: ColumnType[] = [
  {
    id: 'tracker_name',
    name: 'Tracker Name',
    minWidth: 100,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'tracker_period',
    name: 'Period',
    minWidth: 80,
    schemaType: SchemaDataAnnotation.DATE
  },
  {
    id: 'tracker_phase',
    name: 'Phase',
    minWidth: 80,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'completion_ratio',
    name: 'progress',
    minWidth: 150,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.PROGRESS
  },
  {
    id: 'update_at',
    name: 'Update At',
    minWidth: 80,
    schemaType: SchemaDataAnnotation.TIMESTAMP
  },
  {
    id: 'created_at',
    name: 'Created At',
    minWidth: 80,
    schemaType: SchemaDataAnnotation.TIMESTAMP
  }
];

export class DuckDbTrackerQueryService extends QueryService {
  protected content_index_id: string;
  protected atomic_key: string;
  protected atomic_type: string;

  constructor(content_index_id: string, atomic_key: string, atomic_type: string) {
    super('list_duck_tracker', '', '');
    this.content_index_id = content_index_id;
    this.atomic_key = atomic_key;
    this.atomic_type = atomic_type;

    this.baseUrlToRead = varEnv.readerBaseUrl;
    this.columnService.useOnlyDefaultConfig = true;
    this.columnService.suppressRowClickSelection = true;
    this._isEditable = false;
    this._isAddable = false;
    this._isDeletable = false;
    this.rowClicking = false;
    this.isDoPagination = false;
    this.isMultiSelectable = false;

    this.columnService.setDefaultConfig(duckDbTrackerTableConfig);
  }

  public getActionBarAdapter() {
    return LBDuckDbFileDetailAdapter;
  }

  public async loadInfo() {
    const query = {
      atomic_key: this.atomic_key,
      atomic_type: this.atomic_type,
      file_type: 'Duckdb',
      limit: 10
    };

    const response = await this.post_query_info(this.intent_query, query);
    if (response) {
      const { data } = response;
      if (data) {
        const rawRows = data.data as any[];
        if (rawRows.length > 0) {
          const mapStateToRow = {};
          rawRows.forEach((row) => {
            const state = row['file_state'];
            if (!mapStateToRow[state]) {
              mapStateToRow[state] = row;
            }
          });

          const firstRow = rawRows[0];

          const keys = Object.keys(firstRow);
          const rows: any[] = [];

          const states = Object.keys(mapStateToRow);

          if (states.length > 0) {
            keys.forEach((property) => {
              let item = {
                property: property
              };

              for (const st of states) {
                const state = st.toLowerCase();
                const row = mapStateToRow[st];
                const data = row[property];
                const mapStateToProperty = {};
                mapStateToProperty[state] = typeof data === 'object' ? JSON.stringify(data) : data;

                item = {
                  ...item,
                  ...mapStateToProperty
                };
              }

              rows.push(item);
            });
          }

          return {
            total: rows.length,
            rows: rows
          };
        }
      }
    }

    return {
      total: 0,
      rows: []
    };
  }
}
