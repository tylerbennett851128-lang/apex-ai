import { SchemaDataAnnotation, type ColumnType } from '$lib/types';
import LBTextCell from '$components/LBDataTable/Cells/LBTextCell.svelte';
import LBPermissionCell from '$components/LBDataTable/Cells/LBPermissionCell.svelte';

export const performDefaultValueTableConfig: ColumnType[] = [
  {
    id: 'lb_schema_id',
    name: 'Schema Id',
    hide_by_default: false,
    required: true,
    schemaType: SchemaDataAnnotation.IDENTIFIER
  },
  {
    id: 'lb_column',
    name: 'Column',
    component: LBTextCell,
    hide_from_form: true,
    hide_from_filter: true,
    allow_sorting: false,
    getData: (data) => {
      return data.lb_schema?.lb_column;
    },
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'display',
    name: 'Display',
    component: LBTextCell,
    hide_from_form: true,
    hide_from_filter: true,
    allow_sorting: false,
    getData: (data) => {
      return data.lb_schema?.display;
    },
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'lb_data',
    name: 'Lb Data',
    component: LBTextCell,
    hide_by_default: true,
    hide_from_form: true,
    getData: (data) => {
      return data.lb_schema?.lb_data;
    },
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'default_node_path',
    name: 'Default Node Path',
    required: true,
    hide_from_filter: true,
    component: LBTextCell,
    getData: (data) => {
      return data.default_node_path?.node_path || data.default_node_path || '';
    },
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'default_values',
    name: 'Default Values',
    required: true,
    hide_from_filter: true,
    getData: (data) => {
      return data.default_values && Array.isArray(data.default_values) && data.default_values.length > 0
        ? data.default_values.map((default_value) => default_value?.display || default_value?.node_path || default_value).join(',')
        : data.default_values?.display || data.default_values?.node_path || data.default_values;
    },
    level_path: 'AchievementUom',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'lb_domain',
    name: 'Domain',
    required: true,
    component: LBTextCell,
    getData: (data) => {
      return data.lb_domain?.display || data.lb_domain?.node_path || data.lb_domain;
    },
    level_path: 'LbDomain',
    schemaType: SchemaDataAnnotation.LTREE_ATTRIBUTE
  },
  {
    id: 'goal_category',
    name: 'Goal Category',
    component: LBTextCell,
    required: true,
    getData: (data) => {
      return data.goal_category?.display || data.goal_category?.node_path || data.goal_category;
    },
    level_path: 'GoalCategory',
    schemaType: SchemaDataAnnotation.LTREE_ATTRIBUTE
  },
  {
    id: 'edit_permission',
    name: 'Edit Permission',
    required: true,
    hide_from_filter: true,
    component: LBPermissionCell,
    getData: (data) => {
      return data.edit_permission;
    },
    schemaType: SchemaDataAnnotation.ARRAY
  }
];

export const postingPeriodTableConfig: ColumnType[] = [
  {
    id: 'site_id',
    name: 'Site Id',
    hide_by_default: false,
    required: true,
    readOnly: true,
    getData: (data) => {
      const col_data = data.site_id;
      return col_data ? col_data.display : '';
    },
    schemaType: SchemaDataAnnotation.LTREE_ATTRIBUTE
  },
  {
    id: 'posting_period',
    name: 'Posting Period',
    hide_by_default: false,
    required: true,
    readOnly: true
  },
  {
    id: 'posting_start_date',
    name: 'Posting Start Date',
    hide_by_default: false,
    required: true,
    readOnly: true,
    schemaType: SchemaDataAnnotation.DATE
  },
  {
    id: 'posting_end_date',
    name: 'Posting End Date',
    hide_by_default: false,
    required: true,
    schemaType: SchemaDataAnnotation.DATE
  }
];

export const distinctTableConfig: ColumnType[] = [
  {
    id: 'path_org',
    name: 'Hierarchy',
    readOnly: true,
    hide_from_form: false,
    level_path: 'Org',
    schemaType: SchemaDataAnnotation.LTREE_ATTRIBUTE
  },
  {
    id: 'lb_schema_id',
    name: 'Schema Id',
    hide_by_default: true,
    hide_from_filter: true,
    required: true,
    schemaType: SchemaDataAnnotation.IDENTIFIER
  },
  {
    id: 'default_node_path',
    name: 'Default Node Path',
    required: true,
    hide_by_default: true,
    hide_from_filter: true,
    component: LBTextCell,
    getData: (data) => {
      return data.default_node_path?.node_path || data.default_node_path || '';
    },
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'default_values',
    name: 'Default Values',
    required: true,
    hide_by_default: true,
    hide_from_filter: true,
    getData: (data) => {
      return data.default_values && Array.isArray(data.default_values) && data.default_values.length > 0
        ? data.default_values.map((default_value) => default_value?.display || default_value?.node_path || default_value).join(',')
        : data.default_values?.display || data.default_values?.node_path || data.default_values;
    },
    level_path: 'AchievementUom',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'lb_domain',
    name: 'Domain',
    required: true,
    hide_from_filter: false,
    level_path: 'LbDomain',
    schemaType: SchemaDataAnnotation.LTREE_ATTRIBUTE
  },
  {
    id: 'goal_category',
    name: 'Goal Category',
    component: LBTextCell,
    hide_by_default: true,
    hide_from_filter: true,
    required: true,
    getData: (data) => {
      return data.goal_category?.display || data.goal_category?.node_path || data.goal_category;
    },
    level_path: 'GoalCategory',
    schemaType: SchemaDataAnnotation.LTREE_ATTRIBUTE
  },
  {
    id: 'edit_permission',
    name: 'Edit Permission',
    required: true,
    hide_by_default: true,
    hide_from_filter: true,
    component: LBPermissionCell,
    getData: (data) => {
      return data.edit_permission;
    },
    schemaType: SchemaDataAnnotation.ARRAY
  }
];
