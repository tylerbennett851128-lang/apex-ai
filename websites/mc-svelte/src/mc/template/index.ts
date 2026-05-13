import { FORM_TYPE } from '$lib/services/sidebar.service';
import { post_query_info } from '$lib/utils';
import { ColumnService } from '$lib/services/column.service';
import type { QueryService } from '$lib/services/query.service';
import { TemplateColumnService } from './template.column.service';
import { templateformConfig } from '../config/templateform.config';
import type { LBColumn } from '$components/LBDataTable/Cells/LBColumn';
import { Comparator, type MatchType } from '$lib/services/filter.service';
import { DataQueryService } from '$mc/global-schema/data-query.service';

export class GoalTemplateService extends DataQueryService {
  public get subject(): string {
    return 'GoalTemplateService';
  }

  protected template_id: string;
  public getKeyForStorage() {
    return `${super.getKeyForStorage()}/${this.template_id}`; // the key to save page state should be depend on the template id;
  }

  constructor(tableName: string, template_id: string) {
    super(tableName);

    this.template_id = template_id;
    this.sendRequestAfterUpdate = true;
    // this will enable delete button in LBsidebar
    this._isDeletable = true;
    this.sort_column = 'lb_column';

    this.filters = [
      {
        match_type: 'AND',
        lb_column: 'goal_template_id',
        comparator: Comparator.EQ,
        value: this.template_id
      }
    ];

    this.columnService.multiSelect = false;
    // if true then view is template/[template_id].svelte
    this.columnService = new TemplateColumnService(this, template_id, true);
  }

  protected async saveInfo(data: any[], submitMode: FORM_TYPE): Promise<boolean> {
    const table = {
      lb_table: 'goal_field_by_template_by_phase',
      lb_id_column: 'goal_field_by_template_by_phase_id'
    };

    data['goal_template_id'] = this.template_id;
    delete data['goal_template_field_template_name_field_name_id'];
    delete data['lb_column'];
    delete data['section_ui_component'];

    const query =
      submitMode === FORM_TYPE.DELETE
        ? {
            ...table,
            lb_id_value: data['goal_field_by_template_by_phase_id']
          }
        : {
            ...table,
            data: [data]
          };

    const intent = this.getIntentToSubmit(submitMode);

    const response = await post_query_info(intent, query);
    if (response) {
      const { data } = response;
      if (data !== null) {
        return true;
      }
    }

    return false;
  }
}

export class GoalTemplateByFieldsIdService extends DataQueryService {
  public get subject(): string {
    return 'GoalTemplateByFieldsIdService';
  }

  protected lb_schema_id: string;

  constructor(tableName: string, lb_schema_id: string) {
    super(tableName);

    this.lb_schema_id = lb_schema_id;
    // this will enable delete button in LBsidebar
    this._isDeletable = true;
    this.sort_column = 'lb_column';
    this.isAddable = false;
    this.filters = [
      {
        match_type: 'AND',
        lb_column: 'lb_schema_id',
        comparator: Comparator.EQ,
        value: this.lb_schema_id
      }
    ];
    // if false then view is fields/[field_id].svelte
    this.columnService = new TemplateColumnService(this, lb_schema_id, false);
  }

  protected async saveInfo(data: any[], submitMode: FORM_TYPE): Promise<boolean> {
    const table = {
      lb_table: 'goal_field_by_template_by_phase',
      lb_id_column: 'goal_field_by_template_by_phase_id'
    };

    delete data['goal_template_field_template_name_field_name_id'];
    delete data['lb_column'];
    delete data['section_ui_component'];

    const query =
      submitMode === FORM_TYPE.DELETE
        ? {
            ...table,
            lb_id_value: data['goal_field_by_template_by_phase_id']
          }
        : {
            ...table,
            data: [data]
          };

    const intent = this.getIntentToSubmit(submitMode);

    const response = await post_query_info(intent, query);
    if (response) {
      const { data } = response;
      if (data !== null) {
        return true;
      }
    }

    return false;
  }
}

// Step to create a template:
// - Create a new Template.
// - Copy Fields from another template.
// - Copy goal_template_sections.
// - Copy Fields From - Reference Template from which we need to copy fields.

export class GoalTemplateFormService extends DataQueryService {
  public get subject(): string {
    return 'GoalTemplateFormService';
  }

  protected template_id: string;

  constructor() {
    super('goal_template');
    this.columnService = new TemplateFormColumnService(this);
    this._isDeletable = true;
  }

  protected async saveInfo(data: any[], submitMode: FORM_TYPE): Promise<boolean> {
    const copy_template_id = data['goal_template_id'];
    let new_goal_template_id;
    // if submit mode is add then delete goal_template_id from tuple.
    if (submitMode === FORM_TYPE.ADD) {
      delete data['goal_template_id'];
    }

    const query =
      submitMode === FORM_TYPE.DELETE
        ? {
            lb_table: this.lb_table,
            lb_id_column: this.lb_column,
            lb_id_value: data['goal_template_id']
          }
        : {
            lb_table: this.lb_table,
            lb_id_column: this.lb_column,
            data: [data]
          };

    const intent = submitMode === FORM_TYPE.ADD ? 'lb_add' : submitMode === FORM_TYPE.UPDATE ? 'lb_update' : 'lb_delete';

    const response = await post_query_info(intent, query);
    if (response) {
      const { data } = response;
      if (data !== null) {
        //getting newly created tempate's id from response.
        if (submitMode === FORM_TYPE.ADD && Array.isArray(data)) {
          new_goal_template_id = data[0];
          return this.set_fields_to_template(new_goal_template_id, copy_template_id);
        } else if (submitMode === FORM_TYPE.ADD) {
          // if failed we will not close the submitform
          return false;
        } else {
          // after deleting template we need to delete all it's fields.
          if (submitMode === FORM_TYPE.DELETE) {
            await this.delete_goal_template_section(copy_template_id);
            await this.delete_fields_from_template(copy_template_id);
          }
          return true;
        }
      }
    }

    return false;
  }

  protected async add_goal_template_section(new_goal_template_id: string, copy_template_id: string): Promise<any> {
    if (new_goal_template_id) {
      const table: string = 'goal_template_section';
      const rows = await this.query_goal_template_section_by_template_id(copy_template_id);
      if (rows) {
        const table_to_add = {
          lb_table: table,
          lb_id_column: `${table}_id`
        };
        //temp variable
        let old_goal_template_section_id;
        // storing template sections with newly created goal_template_section_id
        const goal_template_sections = [];
        for (let index = 0; index < rows.length; index++) {
          //temp variable
          old_goal_template_section_id = rows[index]['goal_template_section_id'];
          delete rows[index]['goal_template_section_id'];
          delete rows[index]['updated_at'];
          delete rows[index]['updated_by'];
          delete rows[index]['created_at'];
          delete rows[index]['created_by'];
          rows[index]['goal_template_id'] = new_goal_template_id;
          const query = {
            ...table_to_add,
            data: [rows[index]]
          };

          const add_response = await post_query_info('lb_add', query);

          rows[index]['goal_template_section_id'] = add_response.data[0];

          goal_template_sections[old_goal_template_section_id] = rows[index];
        }
        return goal_template_sections;
      }
    }
    return true;
  }

  protected async set_fields_to_template(new_goal_template_id: string, copy_template_id: string): Promise<any> {
    if (new_goal_template_id) {
      // get new goal_template_sections.
      const goal_template_sections = await this.add_goal_template_section(new_goal_template_id, copy_template_id);

      // copy goal_tempalte_section
      const table: string = 'goal_field_by_template_by_phase';
      const rows = await this.query_fields_from_template_by_template_id(copy_template_id);

      if (rows) {
        const table_to_add = {
          lb_table: table,
          lb_id_column: `${table}_id`
        };

        for (let index = 0; index < rows.length; index++) {
          // deleted key from tuple.
          delete rows[index]['goal_field_by_template_by_phase_id'];
          delete rows[index]['updated_at'];
          delete rows[index]['updated_by'];
          //replacing goal_template_id with newly created one
          rows[index]['goal_template_id'] = new_goal_template_id;

          if (Object.keys(goal_template_sections).length > 0) {
            //replace goal_template_section_id with newly created goal_template_section_id.
            rows[index]['goal_template_section_id'] = goal_template_sections[rows[index]['goal_template_section_id']]?.goal_template_section_id;
          }

          const query = {
            ...table_to_add,
            data: [rows[index]]
          };
          // adding fields to newly created template
          await post_query_info('lb_add', query);
        }
        return rows;
      }
    }
    return true;
  }

  //delete fields from goal_field_by_template_by_phase
  protected async delete_fields_from_template(goal_template_id: string): Promise<boolean> {
    if (goal_template_id) {
      const table: string = 'goal_field_by_template_by_phase';
      const rows = await this.query_fields_from_template_by_template_id(goal_template_id);
      if (rows) {
        const delay: number = 100; // Delay in milliseconds
        rows.forEach((obj, index) => {
          setTimeout(() => {
            post_query_info('lb_delete', {
              lb_table: table,
              lb_id_column: `${table}_id`,
              lb_id_value: obj[`${table}_id`]
            });
          }, index * delay);
        });
        return true;
      }
    }
  }
  //delete items from goal_template_section
  protected async delete_goal_template_section(goal_template_id: string): Promise<boolean> {
    if (goal_template_id) {
      const table = 'goal_template_section';
      const rows = await this.query_goal_template_section_by_template_id(goal_template_id);
      if (rows) {
        const delay: number = 150; // Delay in milliseconds
        rows.forEach((obj, index) => {
          setTimeout(() => {
            post_query_info('lb_delete', {
              lb_table: table,
              lb_id_column: `${table}_id`,
              lb_id_value: obj[`${table}_id`]
            });
          }, index * delay);
        });
        return true;
      }
    }
  }

  protected async query_fields_from_template_by_template_id(goal_template_id: string): Promise<any[]> {
    if (goal_template_id) {
      const table: string = 'goal_field_by_template_by_phase';

      const table_params = {
        lb_table: table,
        lb_id_column: `${table}_id`,
        sort_column: `${table}_id`
      };

      const filters: MatchType[] = [
        {
          match_type: 'AND',
          lb_column: 'goal_template_id',
          comparator: Comparator.EQ,
          value: goal_template_id
        }
      ];

      const query_params = {
        ...table_params,
        asc: true,
        limit: 1000,
        include_total: true,
        filters: filters
      };

      const fields_response = await post_query_info('lb_query', query_params);

      if (fields_response) {
        const { data } = fields_response;
        if (data) {
          const rows = data.data as any[];
          return rows;
        }
        return [];
      }
    }
  }

  protected async query_goal_template_section_by_template_id(goal_template_id: string): Promise<any[]> {
    if (goal_template_id) {
      const table: string = 'goal_template_section';
      const table_params = {
        lb_table: table,
        lb_id_column: `${table}_id`,
        sort_column: `${table}_id`
      };

      const filters: MatchType[] = [
        {
          match_type: 'AND',
          lb_column: 'goal_template_id',
          comparator: Comparator.EQ,
          value: goal_template_id
        }
      ];

      const query_params = {
        ...table_params,
        asc: true,
        limit: 1000,
        include_total: true,
        filters: filters
      };

      const fields_response = await post_query_info('lb_query', query_params);

      if (fields_response) {
        const { data } = fields_response;
        if (data) {
          const rows = data.data as any[];
          return rows;
        }
        return [];
      }
    }
  }
}
//template form column service
export class TemplateFormColumnService extends ColumnService {
  protected mapIdToCellForAdd: Record<string, LBColumn> = {};

  constructor(queryService: QueryService) {
    super(queryService);
    this.mapIdToCellForAdd = {};
    this.multiSelect = false;

    templateformConfig.forEach((column) => {
      const cell = this.getLBColumnFromType(column);
      this.mapIdToCellForAdd[cell.id] = cell;
    });
  }

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData: any = null): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);
    const clone_template_field = this.mapIdToCellForAdd['goal_template_id'];
    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];
      const isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);
      if (isAbleToAdd) {
        cells.push(cell);
      }
    });

    if (clone_template_field) {
      if (formType === FORM_TYPE.ADD) {
        cells.push(clone_template_field);
      }
    }

    return cells;
  }
}
