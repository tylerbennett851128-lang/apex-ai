import { SchemaDataAnnotation, type ColumnType } from '$lib/types';

export const logTableConfig: ColumnType[] = [
  {
    id: 'lb_log_id',
    name: 'Lb Log ID',
    hide_by_default: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'intent',
    name: 'Intent',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'user_key',
    name: 'user_key',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'updated_at',
    name: 'updated_at',
    schemaType: SchemaDataAnnotation.DATE
  },
  {
    id: 'request',
    name: 'request',
    schemaType: SchemaDataAnnotation.DESCRIPTION
  }
];
