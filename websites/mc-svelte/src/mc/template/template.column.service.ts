import { FORM_TYPE } from '$lib/services/sidebar.service';
import { SchemaDataAnnotation, type ColumnType } from '$lib/types';
import { ColumnService } from '$lib/services/column.service';
import type { QueryService } from '$lib/services/query.service';
import { LBSchemaIdColumn } from '$components/LBDataTable/Cells/LBSchemaIdColumn';
import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
import { Comparator, type MatchType } from '$lib/services/filter.service';

export class TemplateColumnService extends ColumnService {
  protected template_id: string;
  protected template_name: string;
  protected is_template: boolean; // if true then view is template/[template_id].svelte
  constructor(queryService: QueryService, template_id: string, is_template: boolean) {
    super(queryService);
    this.template_id = template_id;
    this.is_template = is_template;
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {
    this.mapIdToCell = {};

    columnTypes.forEach((column) => {
      let cell;
      column.name = column.id;
      // we will hide it from template/[template_id].svelte ag grid and sidebar
      if (column.id === 'goal_template_name' && !this.is_template) {
        column.readOnly = true;
        column.hide_by_default = false;
        column.hide_from_form = false;
      }

      if (column.id === 'lb_column') {
        // we will hide it from fields/[field_id].svelte ag grid and sidebar
        column.hide_by_default = !this.is_template;
        column.readOnly = true;
        column.schemaType = SchemaDataAnnotation.NUMBER;
      } else if (column.id === 'user_key') {
        column.name = 'Updated BY';
      }

      if (column.id === 'lb_schema_id') {
        column.schemaType = SchemaDataAnnotation.IDENTIFIER;
        // we will hide it from fields/[field_id].svelte ag grid and sidebar
        column.hide_by_default = !this.is_template;
        const filters: MatchType[] = [
          {
            comparator: Comparator.EQ,
            lb_column: 'lb_table',
            match_type: 'AND',
            value: 'goal'
          }
        ];
        cell = new LBSchemaIdColumn(column, this.queryService, filters);
      } else if (column.id === 'goal_template_section_id') {
        // we will hide it from fields/[field_id].svelte ag grid and sidebar
        column.hide_from_form = !this.is_template;
        column.schemaType = SchemaDataAnnotation.IDENTIFIER;
        column.name = 'Section Ui Component';
        const filters: MatchType[] = [
          {
            comparator: Comparator.EQ,
            lb_column: 'goal_template_id',
            match_type: 'AND',
            value: this.template_id
          }
        ];
        cell = new LBSchemaIdColumn(column, this.queryService, filters);
      } else {
        cell = this.getLBColumnFromType(column);
      }

      this.mapIdToCell[cell.id] = cell;
    });
  }

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData: any = null): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);
    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];
      const isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);
      if (isAbleToAdd) {
        if (cell.id === 'lb_schema_id') {
          cell.name = 'Column Name';
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
