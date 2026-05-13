import LBCheckBoxCell from '$components/LBDataTable/Cells/LBCheckBoxCell.svelte';
import { LBCellAlign, SchemaDataAnnotation, type ColumnType } from '$lib/types';

export const treeTableConfig: ColumnType[] = [
  {
    id: 'level_path',
    name: 'Level Path',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'node_path',
    name: 'Node Path',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'display',
    name: 'Display',
    schemaType: SchemaDataAnnotation.TEXT
  },

  {
    id: 'ref_key',
    name: 'Ref Key',
    schemaType: SchemaDataAnnotation.TEXT
  },

  {
    id: 'ref_value',
    name: 'Ref Value',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'version_key',
    name: 'Version Key ',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'root',
    name: 'root',
    align: LBCellAlign.CENCTER,
    component: LBCheckBoxCell,
    hide_from_form: true,
    schemaType: SchemaDataAnnotation.BOOLEAN
  },
  {
    id: 'leaf',
    name: 'leaf',
    align: LBCellAlign.CENCTER,
    component: LBCheckBoxCell,
    hide_from_form: true,
    schemaType: SchemaDataAnnotation.BOOLEAN
  },
  {
    id: 'lb_sequence',
    name: 'Sequence',
    schemaType: SchemaDataAnnotation.NUMBER
  },
  {
    id: 'attribute_description',
    name: 'Attribute Description',
    schemaType: SchemaDataAnnotation.DESCRIPTION
  },
  {
    id: 'more_data',
    name: 'More Data',
    schemaType: SchemaDataAnnotation.JSONB
  }
];
