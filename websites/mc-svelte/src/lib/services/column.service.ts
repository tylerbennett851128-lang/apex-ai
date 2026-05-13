import { LBColumn, getCellStyle } from '$components/LBDataTable/Cells/LBColumn';
import LBDrillDown from '$components/LBDataTable/Cells/LBDrillDown.svelte';
import LBDeleteButton from '$components/LBDataTable/Cells/LBDeleteButton.svelte';
import LBPlusButton from '$components/LBDataTable/Cells/LBPlusButton.svelte';
import LBHeaderCell from '$components/LBDataTable/Cells/LBHeaderCell.svelte';
import {
  GET_SCHEMA_TYPE,
  LBColumnSortDirection,
  NUMBER_SCHEMA_TYPES,
  SchemaDataAnnotation,
  type ColumnType,
  BOOLEAN_SCHEMA_TYPES,
  LBCellAlign,
  ATTRIBUTE_SCHEMA_TYPES,
  ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES,
  ATTRIBUTE_ARRAY_SCHEMA_TYPES,
  DATE_SCHEMA_TYPES,
  STRING_SCHEMA_TYPES,
  DESCRIPTION_SCHEMA_TYPES,
  JSON_SCHEMA_TYPES
} from '../types';
import { writable, get } from 'svelte/store';
import { load_storage, post_query_info, save_storage } from '$lib/utils';
import type { ColDef, ColumnState } from 'ag-grid-community/dist/lib/main';
import { ActionBarEvent, ACTION_BAR_EVENT, type QueryResult, type QueryService } from './query.service';
import { TextCellEditor } from '$components/LBDataTable/CellEditor/TextCellEditor';
import { DateCellEditor } from '$components/LBDataTable/CellEditor/DateCellEditor';
import { JsonCellEditor } from '$components/LBDataTable/CellEditor/JsonCellEditor';
import { AttributeCellEditor } from '$components/LBDataTable/CellEditor/AttributeCellEditor';
import { IdCellEditor } from '$components/LBDataTable/CellEditor/IdCellEditor';
import type { FilterService } from './filter.service';
import { FORM_TYPE } from './sidebar.service';
import { LBSchemaIdColumn } from '$components/LBDataTable/Cells/LBSchemaIdColumn';
import { LBIdColumn } from '$components/LBDataTable/Cells/LBIdColumn';
import { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
import { isNil } from 'lodash-es';

export type SortInfo = {
  columnId: string;
  sortDir: LBColumnSortDirection;
};

export class ColumnService {
  public queryService: QueryService;
  public multiSelect: boolean = true;
  public suppressRowClickSelection: boolean = false;
  public suppressRowDeselection: boolean = false;
  public rowMultiSelectWithClick: boolean = false;
  public useOnlyDefaultConfig: boolean = false; // This is the flag to use only columns that has been set on default config.
  public messageAtForm: string = '';

  public getColumnDefs(inlineEditing: boolean): ColDef[] {
    const colDefs: ColDef[] = [];

    const key = `${this.queryService.getKeyForStorage()}/column_state`;
    const states = load_storage(key) as ColumnState[];
    const mapState: Record<string, ColumnState> = {};

    if (states) {
      states.forEach((state, idx) => {
        state.sortIndex = idx;
        mapState[state.colId] = state;
      });
    }

    const keys = Object.keys(this.mapIdToCell);

    let totalWidth = 0;
    const columnsToExport: LBColumn[] = [];

    keys.forEach((columnId) => {
      const cell = this.mapIdToCell[columnId];
      const defaultCell = this.mapIdToDefaultCell[columnId];
      if (defaultCell) {
        cell.readOnly = defaultCell.readOnly !== undefined ? defaultCell.readOnly : cell.readOnly;
        cell.hide_from_form = defaultCell.hide_from_form !== undefined ? defaultCell.hide_from_form : cell.hide_from_form;
        cell.hide_by_default = defaultCell.hide_by_default !== undefined ? defaultCell.hide_by_default : cell.hide_by_default;
      }

      if (!this.columnsToExculde.includes(columnId)) {
        //!cell.hide_by_default &&
        const state = mapState[columnId];
        cell.width = state && state.width ? state.width : cell.width;
        totalWidth += cell.width;
        columnsToExport.push(cell);
      }
    });

    this.columnDefsExtra.forEach((column) => {
      totalWidth += column.width ? column.width : 0;
    });

    if (this.multiSelect) {
      const colDef: ColDef = {
        colId: 'checkbox',
        minWidth: 56,
        width: 56,
        pinned: 'left',
        suppressMenu: true,
        filter: false,
        resizable: false,
        pivot: false,
        enablePivot: false,
        lockPosition: true,
        lockPinned: true,
        checkboxSelection: true,
        headerCheckboxSelection: true,
        showDisabledCheckboxes: true
      };
      colDefs.push(colDef);
    }

    columnsToExport.forEach((cell, idx) => {
      const flex = Math.floor((cell.width / totalWidth) * 10000) / 10000;

      cell.flex = flex;
      if (idx === 0) {
        cell.align = LBCellAlign.LEFT;
      }

      const state = mapState[cell.id];
      const colDef = this.getGridColDef(cell, state);
      colDef.editable = colDef.editable && inlineEditing;

      if (Object.keys(this.mapIdToDefaultCell).length > 0) {
        if (!this.mapIdToDefaultCell[colDef.colId] && !mapState[colDef.colId]) {
          colDef.hide = true;
        }
      }

      if (cell.hide_by_default && isNil(mapState[colDef.colId])) {
        colDef.hide = true;
      }

      const defaultCell = this.mapIdToDefaultCell[colDef.colId];
      colDef.sortIndex = state ? state.sortIndex : defaultCell ? defaultCell.defaultSortIndex : null;
      colDef.onCellClicked = this.onCellClicked;
      colDefs.push(colDef);
    });

    colDefs.sort(function (a, b) {
      return a.sortIndex - b.sortIndex;
    });

    this.columnDefsExtra.forEach((column) => {
      colDefs.push(column);
    });

    return colDefs;
  }

  public get filterService(): FilterService {
    if (this.queryService) {
      return this.queryService.filterService;
    }
    return null;
  }

  protected columnDefsExtra: ColDef[] = [];
  protected mapIdToCell: Record<string, LBColumn> = {};
  protected mapIdToDefaultCell: Record<string, LBColumn> = {};

  public sortInfo = writable({ columnId: '', sortDir: null });

  protected columnsToExculde: string[] = [];

  public rowClicking: boolean = true;
  public cellClickHandler: ($event) => void;

  public onCellClicked = ($event) => {
    if (this.rowClicking) {
      this.cellClickHandler($event);
    }
  };

  public get isInited(): boolean {
    const keys = Object.keys(this.mapIdToCell);
    if (keys.length > 0) {
      return true;
    }
    return false;
  }

  public get isValid(): boolean {
    const keys = Object.keys(this.mapIdToCell);
    if (keys.length > 0) {
      return this.mapIdToCell[keys[0]].id !== 'no_column';
    }
    return false;
  }

  public get tableName(): string {
    return this.queryService.tableName;
  }

  public getCell(id: string): any {
    return this.mapIdToCell[id];
  }

  public setColumnsToExculde(columns: string[]) {
    this.columnsToExculde = columns;
  }

  constructor(queryService: QueryService) {
    this.queryService = queryService;

    if (this.queryService) {
      const key = `${this.queryService.getKeyForStorage()}/sort_state`;
      const value = load_storage(key);
      if (value) {
        this.sortInfo.set(value);
      } else {
        if (this.queryService.sort_column && this.queryService.sort_column !== '') {
          this.sortInfo.set({
            columnId: this.queryService.sort_column,
            sortDir: this.queryService.defaultSortDirection ? LBColumnSortDirection.DSC : LBColumnSortDirection.ASC
          });
        }
      }
    }
  }

  public async init() {
    if (this.queryService) {
      const result = await this.loadColumns(this.tableName);
      if (result) {
        await this.initWithRaw(result.rows);
      }
      this.queryService.actionBarEvent.set(new ActionBarEvent(ACTION_BAR_EVENT.COLUMNS_INITED));
      // when the column service is initialized, it send the COLUMNS_INITED into filter service, so the filterchips are displayed with the column name that user changed.
    }
    return null;
  }

  public initializeForForm() {}

  public addPlusColumn(onCellClicked: any) {
    const colDef: ColDef = {
      colId: 'plusIcon',
      headerName: '',
      field: 'plusIcon',
      cellRenderer: LBPlusButton,
      cellRendererParams: { getData: (data) => data },
      cellStyle: getCellStyle(LBCellAlign.CENCTER),
      minWidth: 60,
      width: 60,
      pinned: 'right',
      pivot: false,
      enablePivot: false,
      resizable: false,
      lockPosition: true,
      lockPinned: true,
      onCellClicked: onCellClicked
    };

    this.columnDefsExtra.push(colDef);
  }

  public addDrillColumn(onCellClicked: any) {
    const colDef: ColDef = {
      colId: 'drillIcon',
      headerName: '',
      field: 'drillIcon',
      cellRenderer: LBDrillDown,
      cellRendererParams: { getData: (data) => data },
      cellStyle: getCellStyle(LBCellAlign.CENCTER),
      minWidth: 60,
      width: 60,
      pinned: 'right',
      pivot: false,
      enablePivot: false,
      resizable: false,
      lockPosition: true,
      lockPinned: true,
      onCellClicked: onCellClicked
    };

    this.columnDefsExtra.push(colDef);
  }

  public addDeleteColumn(onCellClicked: any) {
    const colDef: ColDef = {
      colId: 'deleteIcon',
      headerName: '',
      field: 'deleteIcon',
      cellRenderer: LBDeleteButton,
      cellRendererParams: { getData: (data) => data },
      cellStyle: getCellStyle(LBCellAlign.CENCTER),
      minWidth: 60,
      pivot: false,
      enablePivot: false,
      width: 60,
      pinned: 'right',
      resizable: false,
      lockPosition: true,
      lockPinned: true,
      onCellClicked: onCellClicked
    };

    this.columnDefsExtra.push(colDef);
  }

  public getLBColumnFromType(column: ColumnType): any {
    if (column.schemaType === SchemaDataAnnotation.IDENTIFIER || (column.schemaType === SchemaDataAnnotation.ARRAY && (column.id === 'view_permission' || column.id === 'edit_permission'))) {
      if (column.id === 'lb_schema_id') {
        return new LBSchemaIdColumn(column, this.queryService);
      } else {
        return new LBIdColumn(column, this.queryService);
      }
    } else if (ATTRIBUTE_SCHEMA_TYPES.includes(column.schemaType)) {
      return new LBAttrColumn(column, this.queryService);
    } else if (ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES.includes(column.schemaType) || column.id === 'level_path') {
      return new LBAttrColumn(column, this.queryService);
    } else if (ATTRIBUTE_ARRAY_SCHEMA_TYPES.includes(column.schemaType)) {
      return new LBAttrColumn(column, this.queryService);
    }

    return new LBColumn(column, this.queryService);
  }

  public getPrimaryColumnId(): string | null {
    const ids = Object.keys(this.mapIdToCell);
    for (const i in ids) {
      const columnId = ids[i];
      if (this.mapIdToCell[columnId].primary_key === true) {
        return columnId;
      }
    }
    return null;
  }

  public setDefaultConfig(columnTypes: ColumnType[]) {
    this.mapIdToDefaultCell = {};
    if (this.useOnlyDefaultConfig) {
      // if useOnlyDefaultConfig == true, then mapIdToCell should be configured by the default config
      this.mapIdToCell = {};
    }

    for (let idx = 0; idx < columnTypes.length; idx++) {
      const column = columnTypes[idx];
      const cell = this.getLBColumnFromType(column);
      cell.defaultSortIndex = idx;
      this.mapIdToDefaultCell[cell.id] = cell;
      if (this.useOnlyDefaultConfig) {
        this.mapIdToCell[cell.id] = cell;
      }
    }
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {
    if (!this.useOnlyDefaultConfig) {
      // if the useOnlyDefaultConfig is true, then setting by the schema table should be aborted
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
        this.mapIdToCell[column.id] = this.getLBColumnFromType(column);
      }
    }
  }

  public getWidth(colId: string, totalWidth): number {
    const cell = this.mapIdToCell[colId];
    if (cell) {
      let width = Math.floor(cell.flex * totalWidth);
      if (width < cell.minWidth) {
        width = cell.minWidth;
      }
      return width;
    }
    return 0;
  }

  protected getCellEditor(cell: LBColumn): { component: any; cellEditorPopup: boolean } {
    if (cell.schemaType === SchemaDataAnnotation.IDENTIFIER || (cell.schemaType === SchemaDataAnnotation.ARRAY && (cell.id === 'view_permission' || cell.id === 'edit_permission'))) {
      return {
        component: IdCellEditor,
        cellEditorPopup: true
      };
    } else if (ATTRIBUTE_SCHEMA_TYPES.includes(cell.schemaType) || cell.id === 'level_path') {
      return {
        component: AttributeCellEditor,
        cellEditorPopup: true
      };
    } else if (ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES.includes(cell.schemaType)) {
      return {
        component: AttributeCellEditor,
        cellEditorPopup: true
      };
    } else if (ATTRIBUTE_ARRAY_SCHEMA_TYPES.includes(cell.schemaType)) {
      return {
        component: AttributeCellEditor,
        cellEditorPopup: true
      };
    } else if (JSON_SCHEMA_TYPES.includes(cell.schemaType)) {
      return {
        component: JsonCellEditor,
        cellEditorPopup: true
      };
    } else if (DATE_SCHEMA_TYPES.includes(cell.schemaType)) {
      return {
        component: DateCellEditor,
        cellEditorPopup: true
      };
    } else if (DESCRIPTION_SCHEMA_TYPES.includes(cell.schemaType)) {
      return {
        component: 'agLargeTextCellEditor',
        cellEditorPopup: true
      };
    } else if (BOOLEAN_SCHEMA_TYPES.includes(cell.schemaType)) {
      return {
        component: null,
        cellEditorPopup: false
      };
    }

    return {
      component: TextCellEditor,
      cellEditorPopup: false
    };
  }

  public getGridColDef(cell: LBColumn, colState: ColumnState): ColDef {
    const filter = this.getFilterComponent(cell);
    const cellEditor = this.getCellEditor(cell);

    const editable = this.queryService ? this.queryService.isInlineEditable && this.queryService.isEditable : false;

    const def: ColDef = {
      colId: cell.id,
      headerName: cell.name,
      field: cell.id,
      headerComponent: LBHeaderCell,
      headerComponentParams: {
        cell: cell,
        columnService: this
      },
      minWidth: cell.minWidth,
      initialWidth: colState && colState.width ? colState.width : cell.width,
      pinned: colState ? colState.pinned : null,
      hide: colState ? colState.hide : null,
      pivot: true,
      enablePivot: true,
      flex: cell.flex,
      cellStyle: cell.getCellStyle(cell.align),
      cellRenderer: cell.getCellRenderer(),
      cellRendererParams: { cell },
      editable: !cell.readOnly && cellEditor.component !== null && editable,
      cellEditor: editable ? cellEditor.component : null,
      cellEditorPopup: cellEditor.cellEditorPopup,
      cellEditorParams: { cell },
      onCellClicked: this.onCellClicked,
      filter: filter.component,
      filterParams: filter.filterParams
    };

    return def;
  }

  public async initWithRaw(rawData: any[]) {
    if (rawData) {
      await this.initWithColumnType(this.convertToColumnTypes(rawData));
    }
  }

  protected getFilterComponent(cell: LBColumn): { component: string | boolean; filterParams?: any; valueFormatter?: any; menuTabs?: any } {
    const schemaType = cell.schemaType;
    const hide_from_filter = cell.hide_from_filter;
    const result: { component: string | boolean; filterParams?: any; valueFormatter?: any; menuTabs?: any } = {
      component: 'agSetColumnFilter'
    };

    if (!hide_from_filter) {
      if (STRING_SCHEMA_TYPES.includes(schemaType) && cell.id !== 'level_path') {
        result.component = 'agTextColumnFilter';
        result.filterParams = {
          filterOptions: cell.id !== 'node_path' ? ['contains', 'equals'] : ['contains'],
          buttons: ['apply'],
          suppressAndOrCondition: true,
          closeOnApply: true
        };
        return result;
      } else if (NUMBER_SCHEMA_TYPES.includes(schemaType)) {
        result.component = 'agNumberColumnFilter';
        result.filterParams = {
          filterOptions: ['equals', 'greaterThanOrEqual', 'lessThanOrEqual', 'inRange'],
          buttons: ['apply'],
          suppressAndOrCondition: true,
          closeOnApply: true
        };

        return result;
      } else if (DATE_SCHEMA_TYPES.includes(schemaType)) {
        result.component = 'agDateColumnFilter';
        result.filterParams = {
          filterOptions: ['equals', 'greaterThanOrEqual', 'lessThanOrEqual', 'inRange'],
          buttons: ['apply'],
          suppressAndOrCondition: true,
          closeOnApply: true
        };
        return result;
      } else if (JSON_SCHEMA_TYPES.includes(schemaType)) {
        result.component = false;
      } else if (BOOLEAN_SCHEMA_TYPES.includes(schemaType)) {
        result.component = false;
      } else {
        result.component = 'agSetColumnFilter';
        result.filterParams = {
          cell: cell,
          filterService: this.queryService.filterService,
          buttons: ['apply'],
          closeOnApply: true,
          refreshValuesOnOpen: true
        };

        return result;
      }
    }

    result.component = false;
    return result;
  }

  protected async loadColumns(tableName: string): Promise<QueryResult> {
    let result: QueryResult = {
      total: 0,
      rows: []
    };

    const filters = [
      {
        match_type: 'AND',
        lb_column: 'lb_table',
        comparator: 'eq',
        value: tableName
      }
    ];

    const table = {
      lb_table: 'lb_schema',
      lb_id_column: 'lb_schema_id',
      sort_column: 'lb_sequence'
    };

    const query = {
      ...table,
      asc: false,
      limit: 1000,
      include_total: true,
      filters: filters
    };

    const response = await post_query_info('lb_query', query);

    if (response) {
      const { data } = response;

      if (data && data.data) {
        const rows = data.data as any[];
        result = { total: data.total, rows: rows };
      }
    }

    return result;
  }

  public setSort(columnId: string, sortDir: LBColumnSortDirection) {
    const value = { columnId, sortDir };
    this.sortInfo.set(value);

    if (this.queryService) {
      const key = `${this.queryService.getKeyForStorage()}/sort_state`;
      save_storage(key, value);
    }
  }

  public getSort() {
    const sort = get(this.sortInfo);
    return { sort_id: sort.sortDir !== null ? sort.columnId : '', direction: sort.sortDir !== LBColumnSortDirection.ASC };
  }

  protected convertToColumnTypes(rawData: any[]): ColumnType[] {
    const columns: ColumnType[] = [];

    rawData = rawData.sort((a, b) => {
      const a1 = a['lb_sequence'];
      const b1 = b['lb_sequence'];
      return a1 - b1;
    });

    rawData.forEach((datum) => {
      const schema = GET_SCHEMA_TYPE(datum.lb_data || SchemaDataAnnotation.TEXT);
      const name = datum.display && datum.display !== '' ? datum.display : datum.lb_column;
      if (name !== '') {
        columns.push({
          id: datum.lb_column,
          name: name,
          readOnly: datum.read_only,
          schemaType: schema,
          primary_key: datum.primary_key,
          is_unique: datum.is_unique,
          level_path: datum.level_path,
          hide_from_filter: datum.hide_from_filter,
          hide_from_form: datum.hide_from_form,
          hide_by_default: datum.hide_by_default,
          align: NUMBER_SCHEMA_TYPES.includes(schema) ? LBCellAlign.RIGHT : BOOLEAN_SCHEMA_TYPES.includes(schema) ? LBCellAlign.CENCTER : LBCellAlign.LEFT,
          required: datum.required
        });
      }
    });

    if (columns.length === 0) {
      columns.push({
        id: 'no_column',
        name: 'No Column',
        align: LBCellAlign.LEFT
      });
    }

    return columns;
  }

  public getColumnsForFilter(): LBColumn[] {
    const keys = Object.keys(this.mapIdToCell);

    const columns: LBColumn[] = [];

    keys.forEach((colId) => {
      const column = this.mapIdToCell[colId];
      if (!column.hide_from_filter) {
        columns.push(column);
      }
    });

    return columns;
  }

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData: any = null): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);
    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];
      const isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);
      if (isAbleToAdd) {
        if (formType === FORM_TYPE.CLONE && this.queryService) {
          cell.readOnly = cell.id === this.queryService.getIdColumn();
        }
        cells.push(cell);
      }
    });
    return cells;
  }
}
