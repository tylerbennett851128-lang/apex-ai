import { SchemaDataAnnotation, type ColumnType } from '$lib/types';

export const duckDbFileTableConfig: ColumnType[] = [
  {
    id: 'file_lock',
    name: 'File Lock',
    readOnly: true,
    width: 50,
    minWidth: 50,
    schemaType: SchemaDataAnnotation.CHECKBOX
  },
  {
    id: 'atomic_type',
    name: 'Atomic Type',
    minWidth: 70,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'atomic_key',
    name: 'Atomic Key',
    minWidth: 70,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'version_key',
    name: 'Version Key',
    minWidth: 100,
    schemaType: SchemaDataAnnotation.NUMBER
  },
  {
    id: 'file_type_version',
    name: 'File Type Version',
    minWidth: 80,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'reference_count',
    name: 'Ref Count',
    minWidth: 80,
    schemaType: SchemaDataAnnotation.NUMBER
  },
  {
    id: 'completion_ratio',
    name: 'progress',
    minWidth: 150,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.PROGRESS
  },
  {
    id: 'trackers',
    name: 'Trackers',
    minWidth: 50,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.BADGE
  }
];

export const duckDbFileDetailTableConfig: ColumnType[] = [
  {
    id: 'property',
    name: 'Property',
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'next',
    name: 'Next',
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'current',
    name: 'Current',
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'previous',
    name: 'Previous',
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'old',
    name: 'Old',
    allow_sorting: false,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.TEXT
  }
];
