import { SchemaDataAnnotation, type ColumnType } from '$lib/types';

export const enumTableConfig: ColumnType[] = [
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
    schemaType: SchemaDataAnnotation.ATTRIBUTE
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
