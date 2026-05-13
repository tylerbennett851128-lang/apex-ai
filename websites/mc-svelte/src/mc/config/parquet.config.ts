import { SchemaDataAnnotation, type ColumnType } from '$lib/types';

export const parquetFileTableConfig: ColumnType[] = [
  {
    id: 'file_lock',
    name: 'File Lock',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'atomic_key',
    name: 'Atomic Key',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'atomic_type',
    name: 'Atomic Type',
    schemaType: SchemaDataAnnotation.NUMBER
  },
  {
    id: 'version_key',
    name: 'Version Key',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'file_type_version',
    name: 'File Type Version',
    schemaType: SchemaDataAnnotation.TEXT
  },
  {
    id: 'reference_count',
    name: 'Ref Count',
    schemaType: SchemaDataAnnotation.NUMBER
  }
];
