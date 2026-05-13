import { QueryService } from '$lib/services/query.service';
import { logTableConfig } from '$mc/config';
import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
import { ColumnService } from '$lib/services/column.service';
import { Comparator } from '$lib/services/filter.service';
import { FORM_TYPE } from '$lib/services/sidebar.service';

export class LogColumnService extends ColumnService {
  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData: any = null): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);

    const listExclude = ['created_at', 'created_by', 'updated_at', 'updated_by', 'lb_parent_logs', 'lb_log_id', 'lb_parent_log_ids', 'org_id', 'position_id', 'user_id', 'worker_id'];

    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];
      cell.readOnly = true;
      if (!listExclude.includes(colId)) {
        cells.push(cell);
      }
    });
    return cells;
  }
}

export class LogQueryService extends QueryService {
  public get subject(): string {
    return 'LogQueryService';
  }

  constructor() {
    super('lb_query', 'lb_log', 'lb_log_id', 'updated_at');
    this.columnService = new LogColumnService(this);
    this.isEditable = false;
    this.isMultiSelectable = false;
    this.isAddable = false;
    this.defaultSortDirection = false;

    this.filters = [
      {
        match_type: 'OR',
        lb_column: 'intent',
        comparator: Comparator.EQ,
        value: 'lb_attribute_add'
      },
      {
        match_type: 'OR',
        lb_column: 'intent',
        comparator: Comparator.EQ,
        value: 'lb_attribute_update'
      },
      {
        match_type: 'OR',
        lb_column: 'intent',
        comparator: Comparator.EQ,
        value: 'lb_attribute_delete'
      },
      {
        match_type: 'OR',
        lb_column: 'intent',
        comparator: Comparator.EQ,
        value: 'lb_attribute_metadata_add'
      }
    ];

    this.setDefaultConfig(logTableConfig);
  }
}
