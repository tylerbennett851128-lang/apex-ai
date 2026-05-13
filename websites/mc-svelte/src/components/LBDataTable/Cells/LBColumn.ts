import { browser } from '$app/environment';
import LBCheckBoxCell from '$components/LBDataTable/Cells/LBCheckBoxCell.svelte';
import LBDateCell from '$components/LBDataTable/Cells/LBDateCell.svelte';
import LBTextCell from '$components/LBDataTable/Cells/LBTextCell.svelte';
import LBJsonDataCell from '$components/LBDataTable/Cells/LBJsonDataCell.svelte';
import LBProgressCell from '$components/LBDataTable/Cells/LBProgressCell.svelte';
import LBBadgeCell from '$components/LBDataTable/Cells//LBBadgeCell.svelte';
import { FORM_TYPE } from '$lib/services/sidebar.service';
import { BOOLEAN_SCHEMA_TYPES, DATE_SCHEMA_TYPES, DESCRIPTION_SCHEMA_TYPES, FORMAT_VALUE_BY_SCHEMA_TYPE, JSON_SCHEMA_TYPES, LBCellAlign, NUMBER_SCHEMA_TYPES, SchemaDataAnnotation, type ColumnType } from '$lib/types';
import type { ICellRendererParams, ICellEditorParams } from 'ag-grid-community';
import { getUpdated } from '$lib/utils';
import TextElement from '$components/LBSubmit/FormElements/TextElement.svelte';
import JsonElement from '$components/LBSubmit/FormElements/JsonElement.svelte';
import DateElement from '$components/LBSubmit/FormElements/DateElement.svelte';
import DescriptionElement from '$components/LBSubmit/FormElements/DescriptionElement.svelte';
import BooleanElement from '$components/LBSubmit/FormElements/CheckBoxElement.svelte';
import NumberElement from '$components/LBSubmit/FormElements/NumberElement.svelte';
import type { QueryService } from '$lib/services/query.service';

export type ATTRIBUTE_ITEM_TYPE = {
  lb_attribute_id: string;
  display: string;
  value: string;
  format_data?: { chip_type: string; color_code: string };
  lb_sequence?: number;
  leaf?: boolean;
  level_path?: string;
  more_data?: any;
  n_level?: number;
  node_path?: string;
  root?: boolean;
};

export interface ICustomCellParams extends ICellRendererParams {
  cell: LBColumn;
}

export interface ICustomCellEditorParams extends ICellEditorParams {
  cell: LBColumn;
}

export const getCellStyle = (alignCell: LBCellAlign) => {
  let align = 'flex-start';

  if (alignCell === LBCellAlign.RIGHT) {
    align = 'flex-end';
  }

  if (alignCell === LBCellAlign.CENCTER) {
    align = 'center';
  }

  return {
    display: 'flex',
    'padding-top': '0.25rem',
    'padding-bottom': '0.25rem',
    'align-items': 'center',
    'line-height': 1.5,
    'justify-content': align
  };
};

export class LBColumn {
  public id: string = '';
  public name: string = '';

  protected _width: number;
  public set width(value: number) {
    this._width = value;
  }

  public get width(): number {
    return this._width ? this._width : this._minWidth;
  }

  public set minWidth(value: number) {
    this._minWidth = value;
  }

  public get minWidth(): number {
    return this._minWidth;
  }

  protected _minWidth: number = 0;

  public maxWidth: number = 0;
  public flex: number = 1.0;

  public level_path?: string;
  public node_path?: string;
  public required?: boolean;
  public primary_key?: boolean;
  public is_unique?: boolean;
  public defaultSortIndex?: number;

  public hide_from_filter?: boolean;
  public hide_from_form?: boolean;
  public hide_by_default?: boolean;

  public allow_sorting: boolean;

  private _align: LBCellAlign;

  public set align(value: LBCellAlign) {
    this._align = value;
  }

  public get align(): LBCellAlign {
    if (this._align) {
      return this._align;
    }

    if (BOOLEAN_SCHEMA_TYPES.includes(this.schemaType)) {
      return LBCellAlign.CENCTER;
    }

    if (NUMBER_SCHEMA_TYPES.includes(this.schemaType) || this.schemaType === SchemaDataAnnotation.IDENTIFIER) {
      return LBCellAlign.RIGHT;
    }

    return LBCellAlign.LEFT;
  }

  public schemaType: SchemaDataAnnotation;
  public multiSelectEnabled: boolean;

  public readOnly?: boolean;
  public component?: any;

  public queryService: QueryService;
  public errorMessageInForm: string;

  public getData = (rowData: any): any => {
    return FORMAT_VALUE_BY_SCHEMA_TYPE(rowData[this.id], this.schemaType);
  };

  getValue?: (data: any) => any;
  setValue?: (data: any) => void;

  constructor(def: ColumnType, queryService: QueryService) {
    this.queryService = queryService;
    this.id = def.id;
    this.name = def.name;

    this.schemaType = def.schemaType || SchemaDataAnnotation.TEXT;
    this._align = def.align;

    const minWidth = def.minWidth ? def.minWidth : this.getTextWidth(def.name, this.schemaType);
    this.minWidth = minWidth;

    if (def.width) {
      this.width = def.width < minWidth ? minWidth : def.width;
    } else {
      this.width = minWidth;
    }

    this.level_path = def.level_path;
    this.readOnly = def.readOnly;
    this.primary_key = def.primary_key;
    this.is_unique = def.is_unique;

    this.required = def.required;
    this.hide_from_filter = def.hide_from_filter;
    this.hide_from_form = def.hide_from_form;
    this.hide_by_default = def.hide_by_default;
    this.allow_sorting = def.allow_sorting !== undefined ? def.allow_sorting : true;

    if (def.component) {
      this.component = def.component;
    }

    if (def.getData) {
      this.getData = def.getData;
    }
  }

  public getCellRenderer() {
    if (this.component) {
      return this.component;
    }

    this.getValue = (data) => ({ value: this.getData(data), type: this.schemaType });

    if (this.schemaType === SchemaDataAnnotation.CHECKBOX) {
      return LBCheckBoxCell;
    } else if (this.schemaType === SchemaDataAnnotation.DATE) {
      return LBDateCell;
    } else if (this.schemaType === SchemaDataAnnotation.JSONB) {
      return LBJsonDataCell;
    } else if (this.schemaType === SchemaDataAnnotation.PROGRESS) {
      return LBProgressCell;
    } else if (this.schemaType === SchemaDataAnnotation.BADGE) {
      return LBBadgeCell;
    } else if (this.schemaType === SchemaDataAnnotation.GROUP) {
      return 'agGroupCellRenderer';
    }

    return LBTextCell;
  }

  public getTextWidth(headerName: string, schemaType: SchemaDataAnnotation): number {
    if (browser && document) {
      const font = '1.4rem Roboto, sans-serif';
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = font;
      const { width } = context.measureText(headerName);

      let add = 25;
      if (schemaType === SchemaDataAnnotation.IDENTIFIER) {
        add = 50;
      } else if (schemaType === SchemaDataAnnotation.TEXT) {
        add = 100;
      } else if (schemaType === SchemaDataAnnotation.DESCRIPTION) {
        add = 200;
      }

      const cellWidth = Math.ceil(width / 10 + 1) * 10 + add;
      return cellWidth < 200 ? 200 : cellWidth;
    }

    return 0;
  }

  public getCellStyle = (alignCell: LBCellAlign) => {
    return getCellStyle(alignCell);
  };

  public saveValue = async (oldData: any, newData: any): Promise<boolean> => {
    const updated = getUpdated(oldData, newData);
    if (this.queryService) {
      return await this.queryService.submit(updated, FORM_TYPE.UPDATE);
    }

    return false;
  };

  public getElementForForm(): any {
    if (JSON_SCHEMA_TYPES.includes(this.schemaType)) {
      return JsonElement;
    } else if (DESCRIPTION_SCHEMA_TYPES.includes(this.schemaType)) {
      return DescriptionElement;
    } else if (DATE_SCHEMA_TYPES.includes(this.schemaType)) {
      return DateElement;
    } else if (BOOLEAN_SCHEMA_TYPES.includes(this.schemaType)) {
      return BooleanElement;
    } else if (NUMBER_SCHEMA_TYPES.includes(this.schemaType)) {
      return NumberElement;
    }

    return TextElement;
  }
}
