import { SchemaDataAnnotation, type ColumnType } from '$lib/types';

export const templateformConfig: ColumnType[] = [
  {
    id: 'goal_template_id',
    name: 'Copy Fields From',
    readOnly: false,
    required: false,
    hide_from_form: false,
    schemaType: SchemaDataAnnotation.IDENTIFIER
  }
];
