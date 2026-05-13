import { SchemaDataAnnotation } from '$lib/types/schema-table.config';
import type { ColumnType } from '$lib/types';

export const intentTableConfig: ColumnType[] = [
  {
    id: 'lb_intent_id',
    name: 'Intent Id',
    hide_by_default: true,
    hide_from_form: true,
    required: false
  },
  {
    id: 'intent',
    name: 'Intent',
    required: true
  },
  {
    id: 'display',
    name: 'Display',
    required: true
  },
  {
    id: 'intent_groups',
    name: 'Intent Group'
  },
  {
    id: 'intent_description',
    name: 'Intent Description'
  },
  {
    id: 'intent_status',
    name: 'Intent Status'
  },
  {
    id: 'created_at',
    name: 'Created At'
  },
  {
    id: 'created_by',
    name: 'Created By'
  },
  {
    id: 'updated_at',
    name: 'Updated At'
  },
  {
    id: 'updated_by',
    name: 'Updated By'
  }
];

export const intentDetailsConfig: ColumnType[] = [
  {
    id: 'lb_role_id',
    name: 'Role Id',
    hide_from_form: false,
    hide_by_default: false,
    required: true,
    readOnly: true,
    schemaType: SchemaDataAnnotation.IDENTIFIER,
    minWidth: 10
  },
  {
    id: 'lb_role_name',
    name: 'Role Name',
    hide_from_form: true,
    hide_by_default: false,
    required: true,
    readOnly: false,
    minWidth: 20,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'lb_role_intent_id',
    name: 'lb_role_intent_id',
    schemaType: SchemaDataAnnotation.NUMBER,
    hide_from_filter: true,
    readOnly: true,
    hide_from_form: true,
    hide_by_default: false,
    minWidth: 10
  },
  {
    id: 'lb_intent_id',
    name: 'lb_intent_id',
    readOnly: true,
    schemaType: SchemaDataAnnotation.IDENTIFIER,
    hide_from_filter: true,
    hide_from_form: true,
    hide_by_default: true,
    minWidth: 10
  },
  {
    id: 'ui_view',
    name: 'UI View',
    schemaType: SchemaDataAnnotation.ATTRIBUTE_ARRAY_ENUM,
    level_path: 'UiView',
    hide_from_filter: true,
    hide_from_form: false,
    minWidth: 30
  },
  {
    id: 'lb_intent_menu',
    name: 'Intent Menu',
    readOnly: false,
    schemaType: SchemaDataAnnotation.CHECKBOX,
    hide_from_filter: true,
    hide_from_form: false,
    hide_by_default: false,
    required: false,
    minWidth: 10
  }
];
