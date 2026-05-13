import { load_storage, save_storage } from '$lib/utils';
import moment from 'moment-timezone';
import { isEmpty } from 'lodash-es';
import { get, writable, type Writable } from 'svelte/store';
import { SchemaDataAnnotation } from '../types';
import type { QueryService } from './query.service';

export enum Comparator {
  EQ = 'eq',
  GTE = 'gte',
  LTE = 'lte',
  RANGE = 'range',
  IN = 'in',
  JSON_CONTAINS = 'json_contains',
  LTREE = 'Ltree',
  ILIKE = 'ilike'
}

export enum FilterType {
  STRING = 'string',
  NUMBER = 'number',
  DATE = 'date',
  ATTRIBUTE = 'attribute'
}

export class Condition {
  lb_column: string;
  joinOperator: 'AND' | 'OR' = 'AND';
  comparator: Comparator;
  value: any;
  valueTo?: any;
  type: FilterType;
}

export type MatchType = {
  match_type: 'AND' | 'OR';
  lb_column: string;
  comparator: Comparator;
  value: any;
  formatted_value?: any;
};

export const getDisplayForConsitions = (conditions: Condition[]): string => {
  let display = '';
  conditions.forEach((condition) => {
    let str = '';
    if (condition.type === FilterType.NUMBER) {
      if (condition.comparator === Comparator.EQ) {
        str = ' = ' + condition.value;
      } else if (condition.comparator === Comparator.GTE) {
        str = ' >= ' + condition.value;
      } else if (condition.comparator === Comparator.LTE) {
        str = ' <= ' + condition.value;
      } else if (condition.comparator === Comparator.RANGE) {
        str = condition.value + ' ~ ' + condition.valueTo;
      }
    } else if (condition.type === FilterType.DATE) {
      const value = moment(condition.value * 1000).format('YYYY-MM-DD');
      if (condition.comparator === Comparator.EQ) {
        str = ' = ' + value;
      } else if (condition.comparator === Comparator.GTE) {
        str = ' >= ' + value;
      } else if (condition.comparator === Comparator.LTE) {
        str = ' <= ' + value;
      } else if (condition.comparator === Comparator.RANGE) {
        str = value + ' ~ ' + moment(condition.valueTo * 1000).format('YYYY-MM-DD');
      }
    } else if (condition.type === FilterType.STRING) {
      if (condition.comparator === Comparator.ILIKE) {
        str = ' ' + condition.value;
      } else if (condition.comparator === Comparator.EQ) {
        str = ' ' + condition.value;
      }
    } else if (condition.type === FilterType.ATTRIBUTE) {
      str = ' ' + condition.value;
    }

    display += str;
  });

  return display;
};

export const getDisplayForConsition = (condition: Condition): string => {
  // This is to display filter chips separately for attribute array column
  let str = '';
  if (condition.type === FilterType.NUMBER) {
    if (condition.comparator === Comparator.EQ) {
      str = ' = ' + condition.value;
    } else if (condition.comparator === Comparator.GTE) {
      str = ' >= ' + condition.value;
    } else if (condition.comparator === Comparator.LTE) {
      str = ' <= ' + condition.value;
    } else if (condition.comparator === Comparator.RANGE) {
      str = condition.value + ' ~ ' + condition.valueTo;
    }
  } else if (condition.type === FilterType.DATE) {
    const value = moment(condition.value * 1000).format('YYYY-MM-DD');
    if (condition.comparator === Comparator.EQ) {
      str = ' = ' + value;
    } else if (condition.comparator === Comparator.GTE) {
      str = ' >= ' + value;
    } else if (condition.comparator === Comparator.LTE) {
      str = ' <= ' + value;
    } else if (condition.comparator === Comparator.RANGE) {
      str = value + ' ~ ' + moment(condition.valueTo * 1000).format('YYYY-MM-DD');
    }
  } else if (condition.type === FilterType.STRING) {
    if (condition.comparator === Comparator.ILIKE) {
      str = ' ' + condition.value;
    } else if (condition.comparator === Comparator.EQ) {
      str = ' ' + condition.value;
    }
  } else if (condition.type === FilterType.ATTRIBUTE) {
    str = ' ' + condition.value;
  }

  return str;
};

export type ColumnListItemType = {
  label: string;
  level_path: string;
  schema: SchemaDataAnnotation;
  columnId: string;
};

export type FilterItem = {
  colId: string;
  columnName: string;
  conditions: Condition[];
};

export type MapFilterType = Record<string, FilterItem>;

export class FilterService {
  public queryService: QueryService;
  protected columnsToExclude: string[] = [];
  protected columnsToInclude: ColumnListItemType[] = [];

  public get isInited() {
    return this._inited;
  }

  private _inited = false;

  public mapFilters: Writable<MapFilterType> = writable({});
  public searchQueryText: Writable<string> = writable('');

  constructor(queryService: QueryService) {
    this.queryService = queryService;
    this._inited = false;
    this.init();
  }

  public init() {
    const data = load_storage(this.getKeyForStorage());
    if (data) {
      const mapData = data as MapFilterType;
      const keys = Object.keys(mapData);
      const mapFilters: MapFilterType = {};

      keys.forEach((key) => {
        const item = mapData[key] as FilterItem;
        mapFilters[key] = item;
      });

      this.mapFilters.set(mapFilters);
    }

    const searchText = load_storage(this.getKeyForStorage('query'));
    if (searchText && searchText !== '') {
      this.searchQueryText.set(searchText);
    }

    this._inited = true;
  }

  public getColumnName(colId: string, defaultName: string) {
    if (this.queryService.columnService) {
      const cell = this.queryService.columnService.getCell(colId);
      if (cell) {
        return cell.name;
      }
    }
    return isEmpty(defaultName) ? colId : defaultName;
  }

  public setColumnsToExculde(columns: string[]) {
    if (columns) {
      this.columnsToExclude = columns;
    }
  }

  public setColumnsToInclude(columns: ColumnListItemType[]) {
    if (columns) {
      this.columnsToInclude = columns;
    }
  }

  public get columnsForFilter(): ColumnListItemType[] {
    const columnsForFilter: ColumnListItemType[] = [];

    const colums = this.queryService.getColumnsForFilter();

    colums.forEach((column) => {
      if (column.name !== '') {
        if (this.columnsToExclude.findIndex((name) => name === column.id) === -1) {
          columnsForFilter.push({
            label: column.name,
            columnId: column.id,
            level_path: column?.level_path,
            schema: column.schemaType
          });
        }
      }
    });

    columnsForFilter.sort(function (a, b) {
      if (a.label.toLowerCase() < b.label.toLowerCase()) return -1;
      if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
      return 0;
    });

    return [
      {
        label: 'All',
        level_path: '',
        schema: SchemaDataAnnotation.ALL,
        columnId: ''
      },
      ...columnsForFilter
    ];
  }

  public getFiltersForQurey(): MatchType[] | null {
    const mapFilters = get(this.mapFilters);
    const keys = Object.keys(mapFilters);

    if (keys.length > 0) {
      const filters: MatchType[] = [];
      keys.forEach((key) => {
        const conditions = mapFilters[key].conditions;

        conditions.forEach((condition) => {
          if (condition.type === FilterType.NUMBER) {
            if (condition.comparator === Comparator.RANGE) {
              const matchType1: MatchType = {
                match_type: condition.joinOperator,
                comparator: Comparator.GTE,
                lb_column: condition.lb_column,
                formatted_value: condition.value,
                value: condition.value
              };
              filters.push(matchType1);

              const matchType2: MatchType = {
                match_type: condition.joinOperator,
                comparator: Comparator.LTE,
                lb_column: condition.lb_column,
                formatted_value: condition.value,
                value: condition.valueTo
              };

              filters.push(matchType2);
            } else {
              const matchType: MatchType = {
                match_type: condition.joinOperator,
                comparator: condition.comparator,
                lb_column: condition.lb_column,
                formatted_value: condition.value,
                value: condition.value
              };
              filters.push(matchType);
            }
          } else if (condition.type === FilterType.DATE) {
            if (condition.comparator === Comparator.RANGE) {
              const matchType1: MatchType = {
                match_type: condition.joinOperator,
                comparator: Comparator.GTE,
                lb_column: condition.lb_column,
                value: condition.value,
                formatted_value: moment(condition.value * 1000).format('YYYY-MM-DD')
              };
              filters.push(matchType1);

              const matchType2: MatchType = {
                match_type: condition.joinOperator,
                comparator: Comparator.LTE,
                lb_column: condition.lb_column,
                value: condition.valueTo,
                formatted_value: moment(condition.valueTo * 1000).format('YYYY-MM-DD')
              };

              filters.push(matchType2);
            } else {
              const matchType: MatchType = {
                match_type: condition.joinOperator,
                comparator: condition.comparator,
                lb_column: condition.lb_column,
                value: condition.value,
                formatted_value: moment(condition.value * 1000).format('YYYY-MM-DD')
              };
              filters.push(matchType);
            }
          } else {
            const matchType: MatchType = {
              match_type: condition.joinOperator,
              comparator: condition.comparator,
              lb_column: condition.lb_column,
              value: condition.value
            };
            filters.push(matchType);
          }
        });
      });
      return filters;
    }
    return null;
  }

  public saveSearchQuery(searchText: string) {
    this.searchQueryText.set(searchText);
    save_storage(this.getKeyForStorage('query'), searchText);
  }

  public getSearchQurey() {
    let searchQuery = {};
    const searchText = get(this.searchQueryText);
    if (searchText && searchText !== '') {
      const columns = [];
      this.queryService.getColumnsForFilter().forEach((column) => {
        columns.push(column.id);
      });

      searchQuery = {
        search_fields: columns,
        search_text: searchText
      };
    }

    return searchQuery;
  }

  public getKeyForStorage(mode: 'query' | 'filter' = 'filter') {
    const key = this.queryService.getKeyForStorage();
    return `Filter:${mode}:${key}`;
  }

  public addAgFilterModel(colId: string, columnName: string, model: any) {
    if (model) {
      const operator = model['operator'];
      const ag_conditions: { filterType: string; type: string; filter: any; filterTo: any; dateFrom: string; dateTo: string }[] = [];

      if (operator) {
        const condition1 = model['condition1'];
        const condition2 = model['condition2'];
        ag_conditions.push(condition1);
        ag_conditions.push(condition2);
      } else {
        ag_conditions.push(model);
      }

      const conditions: Condition[] = [];

      ag_conditions.forEach((ag_condition) => {
        if (ag_condition.filterType === 'text') {
          const textCond = new Condition();
          textCond.value = ag_condition.filter;
          textCond.lb_column = colId;
          textCond.type = FilterType.STRING;

          if (ag_condition.type === 'contains') {
            textCond.comparator = Comparator.ILIKE;
          } else if (ag_condition.type === 'equals') {
            textCond.comparator = Comparator.EQ;
          }
          conditions.push(textCond);
        } else if (ag_condition.filterType === 'number') {
          const numberCond = new Condition();
          numberCond.value = ag_condition.filter;
          numberCond.lb_column = colId;
          numberCond.type = FilterType.NUMBER;

          if (ag_condition.type === 'equals') {
            numberCond.comparator = Comparator.EQ;
          } else if (ag_condition.type === 'greaterThanOrEqual') {
            numberCond.comparator = Comparator.GTE;
          } else if (ag_condition.type === 'lessThanOrEqual') {
            numberCond.comparator = Comparator.LTE;
          } else if (ag_condition.type === 'inRange') {
            numberCond.comparator = Comparator.RANGE;
            numberCond.valueTo = ag_condition.filterTo;
          }

          conditions.push(numberCond);
        } else if (ag_condition.filterType === 'date') {
          const dateCond = new Condition();
          dateCond.value = Math.floor(new Date(ag_condition.dateFrom).getTime() / 1000);
          dateCond.lb_column = colId;
          dateCond.type = FilterType.DATE;

          if (ag_condition.type === 'equals') {
            dateCond.comparator = Comparator.EQ;
          } else if (ag_condition.type === 'greaterThanOrEqual') {
            dateCond.comparator = Comparator.GTE;
          } else if (ag_condition.type === 'lessThanOrEqual') {
            dateCond.comparator = Comparator.LTE;
          } else if (ag_condition.type === 'inRange') {
            dateCond.comparator = Comparator.RANGE;
            dateCond.valueTo = Math.floor(new Date(ag_condition.dateTo).getTime() / 1000);
          }
          conditions.push(dateCond);
        }
      });

      this.addNewFilter(colId, columnName, conditions);
    }
  }

  public addNewFilter(colId: string, columnName: string, conditions: Condition[]) {
    const mapFilters = get(this.mapFilters);
    const item: FilterItem = {
      colId,
      columnName,
      conditions
    };

    mapFilters[colId] = item;
    this.mapFilters.set(mapFilters);
    this.saveMapFilters(mapFilters);
  }

  public saveMapFilters(mapFilters: MapFilterType) {
    save_storage(this.getKeyForStorage(), mapFilters);
  }

  public removeFilter(key: string, idx: number) {
    const mapFilters = get(this.mapFilters);

    if (key === 'All') {
      this.searchQueryText.set('');
      save_storage(this.getKeyForStorage('query'), '');
    } else {
      const item = mapFilters[key];
      item.conditions = item.conditions.filter((condition, index) => {
        return index !== idx;
      });

      mapFilters[key].conditions = item.conditions;

      if (item.conditions.length === 0 || idx === -1) {
        delete mapFilters[key];
      }

      this.mapFilters.set(mapFilters);
      this.saveMapFilters(mapFilters);
    }
  }

  public removeAll() {
    this.mapFilters.set({});
    save_storage(this.getKeyForStorage(), {});

    this.searchQueryText.set('');
    save_storage(this.getKeyForStorage('query'), '');
  }

  protected clearFilter() {}
}
