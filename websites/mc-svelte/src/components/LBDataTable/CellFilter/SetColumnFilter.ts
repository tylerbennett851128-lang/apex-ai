import type { AgPromise, IDoesFilterPassParams, IFilterComp, IFilterParams } from 'ag-grid-community';
import AttributeFilter from './AttributeFilter.svelte';
import IdFilter from './IdFilter.svelte';
import SchemaIdFilter from './SchemaIdFilter.svelte';
import type { LBSchemaIdColumn } from '$components/LBDataTable/Cells/LBSchemaIdColumn';
import type { LBColumn } from '../Cells/LBColumn';
import { ATTRIBUTE_ARRAY_SCHEMA_TYPES, ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES, ATTRIBUTE_SCHEMA_TYPES, SchemaDataAnnotation } from '$lib/types';
import { Comparator, FilterType, type Condition, type FilterService } from '$lib/services/filter.service';

export interface ICustomFilterParams extends IFilterParams {
  cell: LBColumn;
  filterService: FilterService;
}

export enum FilterComponentTypes {
  IdFilter = 'IdFilter',
  SchemaIdFilter = 'SchemaIdFilter',
  AttributeFilter = 'AttributeFilter',
  AttributeArrayFilter = 'AttributeArrayFilter'
}

export class SetColumnFilterComponent implements IFilterComp {
  params!: ICustomFilterParams;
  eGui!: HTMLDivElement;
  component: any;
  filterService: FilterService;

  init(params: ICustomFilterParams) {
    this.params = params;
    this.filterService = params.filterService;

    this.eGui = document.createElement('div');
    this.eGui.setAttribute('role', 'presentation');

    const cell = params.cell;
    const filterType = this.getComponentType(cell);

    if (filterType === FilterComponentTypes.AttributeFilter || filterType === FilterComponentTypes.AttributeArrayFilter) {
      // attribute and attribute array filter should be displayed with same filter component
      this.component = new AttributeFilter({
        target: this.eGui,
        props: {
          cell: params.cell,
          onClose: this.onClose
        }
      });
    } else if (filterType === FilterComponentTypes.SchemaIdFilter) {
      this.component = new SchemaIdFilter({
        target: this.eGui,
        props: {
          cell: params.cell as LBSchemaIdColumn,
          onClose: this.onClose
        }
      });
    } else {
      this.component = new IdFilter({
        target: this.eGui,
        props: {
          cell: params.cell,
          onClose: this.onClose
        }
      });
    }
  }

  private getComponentType(cell: LBColumn): FilterComponentTypes {
    if (cell.schemaType === SchemaDataAnnotation.IDENTIFIER || (cell.schemaType === SchemaDataAnnotation.ARRAY && (cell.id === 'view_permission' || cell.id === 'edit_permission'))) {
      return FilterComponentTypes.IdFilter;
    } else if (ATTRIBUTE_SCHEMA_TYPES.includes(cell.schemaType) || cell.id === 'level_path' || cell.schemaType === SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH) {
      return FilterComponentTypes.AttributeFilter;
    } else if (ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES.includes(cell.schemaType)) {
      return FilterComponentTypes.AttributeFilter;
    } else if (ATTRIBUTE_ARRAY_SCHEMA_TYPES.includes(cell.schemaType)) {
      return FilterComponentTypes.AttributeArrayFilter;
    }

    return FilterComponentTypes.AttributeFilter;
  }

  public onClose = (selected: any) => {
    const conditions: Condition[] = [];

    if (selected) {
      const filterType = this.getComponentType(this.params.cell);
      const colId = this.params.cell.id;

      if (typeof selected === 'object') {
        if (filterType === FilterComponentTypes.IdFilter || filterType === FilterComponentTypes.SchemaIdFilter) {
          if (selected[colId]) {
            selected = selected[colId];
          }
        }
      }

      if (filterType === FilterComponentTypes.AttributeFilter) {
        const condition: Condition = {
          lb_column: this.params.colDef.colId,
          joinOperator: 'AND',
          comparator: Comparator.ILIKE,
          value: selected,
          type: FilterType.ATTRIBUTE
        };
        conditions.push(condition);
      } else if (filterType === FilterComponentTypes.AttributeArrayFilter) {
        // if selected is array attributes, then we have to display it separated conditions
        if (Array.isArray(selected)) {
          selected.forEach((item) => {
            const condition: Condition = {
              lb_column: this.params.colDef.colId,
              joinOperator: 'AND',
              comparator: Comparator.ILIKE,
              value: item,
              type: FilterType.ATTRIBUTE
            };
            conditions.push(condition);
          });
        } else {
          const condition: Condition = {
            lb_column: this.params.colDef.colId,
            joinOperator: 'AND',
            comparator: Comparator.ILIKE,
            value: selected,
            type: FilterType.ATTRIBUTE
          };
          conditions.push(condition);
        }
      } else {
        const condition: Condition = {
          lb_column: this.params.colDef.colId,
          joinOperator: 'AND',
          comparator: Comparator.EQ,
          value: selected,
          type: FilterType.NUMBER
        };
        conditions.push(condition);
      }

      this.filterService.addNewFilter(this.params.colDef.colId, this.params.colDef.headerName, conditions);
    } else {
      this.filterService.removeFilter(this.params.colDef.colId, -1);
    }

    this.params.filterChangedCallback();
    this.component.$set({ open: false });
    this.params.api.hidePopupMenu();
  };

  getGui() {
    return this.eGui;
  }

  isFilterActive(): boolean {
    const open = this.getValueFromProps('open');
    return open;
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    const node = params.node;
    if (!node.data) {
      return false;
    }

    return true;
  }

  onFilterOpened() {}

  onFilterChanged() {}

  getModel() {}

  setModel(): void | AgPromise<void> {}

  onNewRowsLoaded?(): void {}

  protected getValueFromProps(key: string) {
    const idx = this.component.$$.props[key];
    return this.component.$$.ctx[idx];
  }

  onAnyFilterChanged?(): void {}

  getModelAsString?(): string {
    return '';
  }

  afterGuiAttached?(): void {
    this.component.$set({ forceLoad: true });
  }

  destroy(): void {
    this.component.$destroy();
  }
}
