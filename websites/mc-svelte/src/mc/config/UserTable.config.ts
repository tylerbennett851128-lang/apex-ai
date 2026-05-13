import { SchemaDataAnnotation } from '$lib/types/schema-table.config';
import type { ColumnType } from '$lib/types/table.types';

export const usersDetailConfig: ColumnType[] = [
  {
    id: 'lb_role_name',
    name: 'Role',
    hide_from_form: true,
    hide_by_default: false,
    hide_from_filter: true,
    required: false,
    readOnly: false,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'lb_role_id',
    name: 'Role',
    hide_from_form: false,
    hide_by_default: true,
    required: true,
    readOnly: false,
    schemaType: SchemaDataAnnotation.IDENTIFIER
  },
  {
    id: 'path_org',
    name: 'Org',
    level_path: 'Org',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'lb_domains',
    name: 'Domains',
    level_path: 'LbDomain',
    required: true,
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.ATTRIBUTE_ARRAY_ENUM
  },
  {
    id: 'position_name',
    name: 'Position Name',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  }
];

export const assignUsersConfig: ColumnType[] = [
  {
    id: 'lb_user_id',
    name: 'User ID',
    hide_by_default: true,
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'first_name',
    name: 'First Name',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'last_name',
    name: 'Last Name',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'user_key',
    name: 'User Key',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'path_org',
    name: 'Org',
    level_path: 'Org',
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.ATTRIBUTE
  },
  {
    id: 'national',
    name: 'National',
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.CHECKBOX
  },
  {
    id: 'site',
    name: 'Site',
    hide_from_filter: true,
    schemaType: SchemaDataAnnotation.CHECKBOX
  }
];
