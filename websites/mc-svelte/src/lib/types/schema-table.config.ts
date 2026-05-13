import { getUTCTimeStringWithFormat } from '../time_utils';

export enum SchemaDataAnnotation {
  ALL = 'all',
  ARRAY = 'array',
  ATTRIBUTE_ARRAY = 'attributearray',
  ATTRIBUTE_ARRAY_ENUM = 'attributearray_enum',
  ATTRIBUTE_ARRAY_TREEPATH = 'attributearray_treepath',
  ATTRIBUTE_ARRAY_JSON = 'attributearrayjson',
  ATTRIBUTE_LEVEL_PATH = 'attributelevelpath',
  ATTRIBUTE_LEAF = 'attribute_leaf',
  ATTRIBUTE_ARRAY_LEAF = 'attribute_array_leaf',
  ATTRIBUTE = 'attribute',
  IncludeExcludeAttributeSelector = 'include_exclude_attribute_selector',
  ENUM = 'enum',
  BIG_INTEGER = 'biginteger',
  NUMERIC = 'numeric',
  BOOL = 'bool',
  BOOLEAN = 'boolean',
  BADGE = 'badge',
  CHECKBOX = 'checkbox',
  CLIENT_ID = 'clientid',
  DATE = 'date',
  DESCRIPTION = 'description',
  GEO_POINT = 'geopoint',
  GEO_POLYGON = 'geopolygon',
  GIS = 'gis',
  GROUP = 'group',
  IDENTIFIER = 'identifier',
  INTEGER = 'integer',
  JSON_ARRAY = 'json_array',
  JSON_DICTIONARY = 'json_dictionary',
  JSONB = 'jsonb',
  KPI = 'kpi',
  LTREE = 'ltree',
  LTREE_ATTRIBUTE = 'ltree_attribute',
  METRIC = 'ketric',
  NUMBER = 'number',
  OBJECT = 'object',
  ORG = 'org',
  PERCENT = 'percent',
  PERIOD = 'period',
  PROGRESS = 'progress',
  RANGE = 'range',
  SALTED_HASH = 'salted_hash',
  SQUID = 'squid',
  STRING = 'string',
  TEXT = 'text',
  TIMESTAMP = 'timestamp',
  UTC = 'utc',
  Users = 'users',
  ICON = 'Icon'
}

export const DESCRIPTION_SCHEMA_TYPES = [SchemaDataAnnotation.DESCRIPTION];
export const STRING_SCHEMA_TYPES = [SchemaDataAnnotation.STRING, SchemaDataAnnotation.TEXT, SchemaDataAnnotation.DESCRIPTION, SchemaDataAnnotation.SQUID];
export const NUMBER_SCHEMA_TYPES = [SchemaDataAnnotation.INTEGER, SchemaDataAnnotation.METRIC, SchemaDataAnnotation.NUMBER, SchemaDataAnnotation.PERCENT, SchemaDataAnnotation.RANGE];
export const ATTRIBUTE_SCHEMA_TYPES = [SchemaDataAnnotation.ATTRIBUTE, SchemaDataAnnotation.ATTRIBUTE_LEAF, SchemaDataAnnotation.LTREE_ATTRIBUTE, SchemaDataAnnotation.ENUM];
export const ATTRIBUTE_ARRAY_SCHEMA_TYPES = [
  SchemaDataAnnotation.ATTRIBUTE_ARRAY,
  SchemaDataAnnotation.ATTRIBUTE_ARRAY_LEAF,
  SchemaDataAnnotation.ATTRIBUTE_ARRAY_ENUM,
  SchemaDataAnnotation.ATTRIBUTE_ARRAY_TREEPATH,
  SchemaDataAnnotation.IncludeExcludeAttributeSelector
];
export const ATTRIBUTE_LEVEL_PATH_SCHEMA_TYPES = [SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH];
export const DATE_SCHEMA_TYPES = [SchemaDataAnnotation.DATE, SchemaDataAnnotation.TIMESTAMP, SchemaDataAnnotation.UTC, SchemaDataAnnotation.PERIOD];
export const JSON_SCHEMA_TYPES = [SchemaDataAnnotation.ATTRIBUTE_ARRAY_JSON, SchemaDataAnnotation.JSON_ARRAY, SchemaDataAnnotation.JSON_DICTIONARY, SchemaDataAnnotation.JSONB, SchemaDataAnnotation.OBJECT];
export const BOOLEAN_SCHEMA_TYPES = [SchemaDataAnnotation.BOOL, SchemaDataAnnotation.BOOLEAN, SchemaDataAnnotation.CHECKBOX];

export const GET_SCHEMA_TYPE = (type: string): SchemaDataAnnotation => {
  // console.log(type);
  /// TODO: Take care of type that is contained in another type, such as
  /// * ATTRIBUTE, ATTRIBUTE_ARRAY_JSON
  /// * RANGE(Range(worker_start_range, worker_end_range)
  switch (type.toLowerCase().trim()) {
    case 'lbdata.array.string.text':
    case 'lbdata.array.string.freetype':
      return SchemaDataAnnotation.ARRAY;
    case SchemaDataAnnotation.ARRAY.toLowerCase():
      return SchemaDataAnnotation.ARRAY;
    case SchemaDataAnnotation.ATTRIBUTE_ARRAY.toLowerCase():
      return SchemaDataAnnotation.ATTRIBUTE_ARRAY;
    case SchemaDataAnnotation.ATTRIBUTE_ARRAY_JSON.toLowerCase():
      return SchemaDataAnnotation.ATTRIBUTE_ARRAY_JSON;
    case 'lbdata.string.attributelevelpath.treepath':
    case SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH.toLowerCase():
      return SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH;
    case 'lbdata.string.attribute.enum':
      return SchemaDataAnnotation.LTREE_ATTRIBUTE;
    case 'lbdata.array.attribute.enum':
      return SchemaDataAnnotation.ATTRIBUTE_ARRAY_ENUM;
    case 'lbdata.array.attribute.treepath':
      return SchemaDataAnnotation.ATTRIBUTE_ARRAY_TREEPATH;
    case 'lbdata.string.attribute.leaf':
      return SchemaDataAnnotation.ATTRIBUTE_LEAF;
    case 'lbdata.array.attribute.leaf':
      return SchemaDataAnnotation.ATTRIBUTE_ARRAY_LEAF;
    case 'lbdata.string.attribute.treepath':
    case 'lbdata.string.attribute.standard':
    case SchemaDataAnnotation.ATTRIBUTE.toLowerCase():
      return SchemaDataAnnotation.ATTRIBUTE;
    case SchemaDataAnnotation.BIG_INTEGER.toLowerCase():
      return SchemaDataAnnotation.BIG_INTEGER;
    case SchemaDataAnnotation.BOOL.toLowerCase():
      return SchemaDataAnnotation.BOOL;
    case SchemaDataAnnotation.BOOLEAN.toLowerCase():
      return SchemaDataAnnotation.BOOLEAN;
    case 'lbdata.bool.boolean.checkbox':
    case 'lbdata.bool.boolean.yesno':
    case 'lbdata.bool.boolean.truefalse':
    case SchemaDataAnnotation.CHECKBOX.toLowerCase():
      return SchemaDataAnnotation.CHECKBOX;
    case SchemaDataAnnotation.CLIENT_ID.toLowerCase():
      return SchemaDataAnnotation.CLIENT_ID;

    case 'lbdata.timestamp.period.goal':
    case SchemaDataAnnotation.DATE.toLowerCase():
      return SchemaDataAnnotation.DATE;

    case 'lbdata.string.text.description':
    case SchemaDataAnnotation.DESCRIPTION.toLowerCase():
      return SchemaDataAnnotation.DESCRIPTION;
    case SchemaDataAnnotation.GEO_POINT.toLowerCase():
      return SchemaDataAnnotation.GEO_POINT;
    case SchemaDataAnnotation.GEO_POLYGON.toLowerCase():
      return SchemaDataAnnotation.GEO_POLYGON;
    case SchemaDataAnnotation.GIS.toLowerCase():
      return SchemaDataAnnotation.GIS;
    case 'lbdata.int8.identifier.id':
    case 'lbdata.int64.identifier.id':
    case 'lbdata.string.identifier.uuid':
    case SchemaDataAnnotation.IDENTIFIER.toLowerCase():
      return SchemaDataAnnotation.IDENTIFIER;
    case 'lbdata.array.attribute.includeexcludeattributeselector':
      return SchemaDataAnnotation.IncludeExcludeAttributeSelector;
    case SchemaDataAnnotation.INTEGER.toLowerCase():
      return SchemaDataAnnotation.INTEGER;
    case SchemaDataAnnotation.JSON_ARRAY.toLowerCase():
      return SchemaDataAnnotation.JSON_ARRAY;
    case SchemaDataAnnotation.JSON_DICTIONARY.toLowerCase():
      return SchemaDataAnnotation.JSON_DICTIONARY;
    case 'lbdata.json.object.keyvalue':
    case 'lbdata.array.string.enum':
    case SchemaDataAnnotation.OBJECT.toLowerCase():
    case SchemaDataAnnotation.JSONB.toLowerCase():
      return SchemaDataAnnotation.JSONB;
    case SchemaDataAnnotation.KPI.toLowerCase():
      return SchemaDataAnnotation.KPI;
    case SchemaDataAnnotation.LTREE.toLowerCase():
      return SchemaDataAnnotation.LTREE;
    case 'lbdata.float64.metric.scale2':
    case 'lbdata.float8.metric.scale2':
    case 'lbdata.float8.number.scale1':
    case 'lbdata.float8.metric.positivenumber':
    case SchemaDataAnnotation.METRIC.toLowerCase():
      return SchemaDataAnnotation.METRIC;
    case 'lbdata.int8.number.standard':
    case 'lbdata.int4.number.standard':
    case 'lbdata.int4.number.badge':
    case 'lbdata.int2.number.standard':
    case 'lbdata.bytea':
    case SchemaDataAnnotation.NUMBER.toLowerCase():
      return SchemaDataAnnotation.NUMBER;
    case SchemaDataAnnotation.ORG.toLowerCase():
      return SchemaDataAnnotation.ORG;
    case SchemaDataAnnotation.PERCENT.toLowerCase():
      return SchemaDataAnnotation.PERCENT;

    case 'lbdata.timestamp.period.basis':
    case 'lbdata.timestamp.period.review':
    case 'lbdata.timestamp.period.unsold':
    case 'lbdata.timestamp.period.yyyymmdd':
    case SchemaDataAnnotation.PERIOD.toLowerCase():
      return SchemaDataAnnotation.PERIOD;

    case SchemaDataAnnotation.SALTED_HASH.toLowerCase():
      return SchemaDataAnnotation.SALTED_HASH;

    case SchemaDataAnnotation.SQUID.toLowerCase():
      return SchemaDataAnnotation.SQUID;

    case SchemaDataAnnotation.STRING.toLowerCase():
      return SchemaDataAnnotation.STRING;

    case 'lbdata.string.text.plaintext':
    case 'lbdata.string.string.text':
    case 'lbdata.string.text.shortdescription':
    case 'lbdata.string.attribute.alias':
    case 'lbdata.string.text.shorttext':
    case SchemaDataAnnotation.TEXT.toLowerCase():
      return SchemaDataAnnotation.TEXT;

    case 'lbdata.timestamp.date.second':
    case 'lbdata.timestamp.date.day':
    case SchemaDataAnnotation.TIMESTAMP.toLowerCase():
      return SchemaDataAnnotation.TIMESTAMP;

    case SchemaDataAnnotation.UTC.toLowerCase():
      return SchemaDataAnnotation.UTC;

    default:
      console.warn(`unhandled data type ${type.toLowerCase()}`);
      break;
  }
  /// Be careful for RANGE.
  /// Because type is like 'Range(worker_start_range, worker_end_range)'
  if (type.toLowerCase().startsWith(SchemaDataAnnotation.RANGE.toLowerCase())) return SchemaDataAnnotation.RANGE;
  return SchemaDataAnnotation.TEXT;
};

/// Stringify column value by schema type
export const FORMAT_VALUE_BY_SCHEMA_TYPE = (val: any, schemaType: SchemaDataAnnotation) => {
  switch (schemaType) {
    case SchemaDataAnnotation.BOOLEAN: {
      return val;
    }

    case SchemaDataAnnotation.DESCRIPTION:
    case SchemaDataAnnotation.TEXT:
      return val ? val : '';
    case SchemaDataAnnotation.DATE:
      if (val instanceof Date) return val.toDateString();
      else {
        return val ? getUTCTimeStringWithFormat(val * 1000, 'D-MMM-yyyy') : '';
      }

    case SchemaDataAnnotation.TIMESTAMP:
    case SchemaDataAnnotation.UTC:
      if (val instanceof Date) return val.toDateString();
      else {
        return val ? getUTCTimeStringWithFormat(val * 1000, 'YYYY-MM-DD h:mm A') : '';
      }

    case SchemaDataAnnotation.INTEGER:
      return val;

    case SchemaDataAnnotation.METRIC:
    case SchemaDataAnnotation.NUMBER:
    case SchemaDataAnnotation.PERCENT:
    case SchemaDataAnnotation.RANGE:
    case SchemaDataAnnotation.PERIOD:
      return val;
    case SchemaDataAnnotation.IDENTIFIER: {
      return val?.user_name || val;
    }
    case SchemaDataAnnotation.JSONB: {
      return val;
    }
    case SchemaDataAnnotation.ATTRIBUTE_ARRAY:
    case SchemaDataAnnotation.ATTRIBUTE_ARRAY_ENUM:
    case SchemaDataAnnotation.ATTRIBUTE_ARRAY_TREEPATH:
      if (Array.isArray(val)) {
        return val.map((datum) => datum?.node_path || datum);
      }
      return val;
    default:
      return val?.node_path || val;
  }
};

/// Correct value to be suitable for api parameter
export const parameterize_by_schema_type = (val, schema_type): any => {
  if (schema_type == SchemaDataAnnotation.IDENTIFIER) return Array.isArray(val) ? val : String(val);
  if (SchemaDataAnnotation.JSONB == schema_type) return JSON.parse(val);
  if (NUMBER_SCHEMA_TYPES.includes(schema_type)) return Number(val);
  if (DATE_SCHEMA_TYPES.includes(schema_type)) return Number(val) / 1000; // convert to seconds since epoch
  if (BOOLEAN_SCHEMA_TYPES.includes(schema_type)) return val || false;
  if (ATTRIBUTE_SCHEMA_TYPES.includes(schema_type)) return val && Object.keys(val).length === 0 ? val : val?.node_path;
  if (SchemaDataAnnotation.ATTRIBUTE_ARRAY == schema_type && Array.isArray(val)) {
    const array_literal = val
      .filter((attr) => attr['node_path'])
      .map((attr) => `"${attr.node_path}"`)
      .join(',');
    return `{${array_literal}}`;
  }

  if (ATTRIBUTE_ARRAY_SCHEMA_TYPES.includes(schema_type) && Array.isArray(val)) {
    const attribute_array: string[] = [];
    val?.map((a) => {
      if (a) {
        attribute_array.push(a.node_path);
      }
    });
    return attribute_array;
  }
  return val;
};
