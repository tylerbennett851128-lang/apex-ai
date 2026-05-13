import { SchemaDataAnnotation, type ColumnType } from '$lib/types';

export const metaAttributeTableConfig: ColumnType[] = [
  {
    id: 'level_path',
    name: 'Level Path',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'node_path',
    name: 'Node Path',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'level_path_display',
    name: 'Display',
    hide_by_default: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'version_key',
    name: 'Version Key',
    hide_by_default: true
  },
  {
    id: 'display',
    name: 'display',
    schemaType: SchemaDataAnnotation.TEXT
  }
];

export const metaAttributeLevelConfig: ColumnType[] = [
  {
    id: 'root_level_path',
    name: 'Root Level Path',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'new_level',
    name: 'New Level',
    schemaType: SchemaDataAnnotation.TEXT
  }
];

export const metaAttributeLevelUpdateConfig: ColumnType[] = [
  {
    id: 'level_path',
    name: 'Level Path',
    readOnly: true,
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'display',
    name: 'Display',
    schemaType: SchemaDataAnnotation.TEXT
  }
];
