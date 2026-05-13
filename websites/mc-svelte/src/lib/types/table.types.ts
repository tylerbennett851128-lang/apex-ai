import type { number } from 'zod';
import { SchemaDataAnnotation } from './schema-table.config';

export interface ColumnType {
  id: string;
  name: string;
  level_path?: string;
  required?: boolean;
  align?: LBCellAlign;
  minWidth?: number;
  width?: number;
  component?: any;
  getData?: (data: any) => any;
  schemaType?: SchemaDataAnnotation;
  readOnly?: boolean;
  primary_key?: boolean;
  is_unique?: boolean;
  hide_from_filter?: boolean;
  hide_from_form?: boolean;
  hide_by_default?: boolean;
  allow_sorting?: boolean;
}

export interface LBSchemaType {
  id: string;
  name: string;
  lb_data: string;
}

export enum PaginationRows {
  ROWS_50 = 50,
  ROWS_100 = 100,
  ROWS_250 = 250
}

export enum PaginationAction {
  PREV = 'prev',
  NEXT = 'next',
  LAST = 'last',
  FIRST = 'first',
  CURRENT = 'current'
}

export type LBTypeColumnWidth = {
  pctWidth?: number;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
};

export enum LBCellAlign {
  LEFT = 'justify-start',
  CENCTER = 'justify-center',
  RIGHT = 'justify-end'
}

export enum LBColumnSortDirection {
  ASC = 'ascending',
  DSC = 'descending'
}

export const getSchemaDataAnnotation = (value: any) => {
  if (typeof value === 'bigint' || typeof value === 'number') {
    return SchemaDataAnnotation.NUMBER;
  } else if (typeof value === 'boolean') {
    return SchemaDataAnnotation.CHECKBOX;
  }
  return SchemaDataAnnotation.TEXT;
};
