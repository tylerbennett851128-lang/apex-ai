import { SchemaDataAnnotation, type ColumnType } from '$lib/types';

export const userRoleDetailConfig: ColumnType[] = [
  {
    id: 'user_id',
    name: 'User Id',
    hide_by_default: true,
    hide_from_form: true,
    schemaType: SchemaDataAnnotation.NUMBER
  },
  {
    id: 'user_name',
    name: 'User Name',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'user_key',
    name: 'User Email (Key)',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'path_org',
    name: 'Org',
    level_path: 'Org',
    schemaType: SchemaDataAnnotation.ATTRIBUTE
  },
  {
    id: 'national',
    name: 'National',
    hide_from_filter: true,
    allow_sorting: false,
    schemaType: SchemaDataAnnotation.CHECKBOX
  },
  {
    id: 'site',
    name: 'Site',
    hide_from_filter: true,
    allow_sorting: false,
    schemaType: SchemaDataAnnotation.CHECKBOX
  }
];

export const roleTableConfig: ColumnType[] = [
  {
    id: 'lb_role_id',
    name: 'Role Id',
    hide_by_default: true,
    hide_from_form: true
  },
  {
    id: 'lb_role_name',
    name: 'Role Name',
    required: true
  },
  {
    id: 'lb_role_description',
    name: 'Role Description'
  },
  {
    id: 'lb_role_type',
    level_path: 'LbRoleType',
    name: 'Role Type',
    required: true
  },
  {
    id: 'lb_role_status',
    name: 'Role Status'
  }
];

export const intentRoleDetailConfig: ColumnType[] = [
  {
    id: 'intent',
    name: 'Intent',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'display',
    name: 'Display',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'intent_description',
    name: 'Intent Description',
    hide_from_form: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'lb_intent_menu',
    name: 'Intent Menu',
    schemaType: SchemaDataAnnotation.CHECKBOX
  },
  {
    id: 'ui_view',
    name: 'UI View',
    level_path: 'UiView',
    schemaType: SchemaDataAnnotation.ATTRIBUTE_ARRAY_ENUM
  }
];

export const assignIntentsConfig: ColumnType[] = [
  {
    id: 'lb_intent_id',
    name: 'Intent ID',
    hide_by_default: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'intent',
    name: 'Intent',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'intent_group',
    name: 'Intent Group',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'lb_intent_menu',
    name: 'Intent Menu',
    schemaType: SchemaDataAnnotation.CHECKBOX
  },
  {
    id: 'ui_view',
    name: 'UI View',
    level_path: 'UiView',
    schemaType: SchemaDataAnnotation.ATTRIBUTE_ARRAY_ENUM
  }
];
