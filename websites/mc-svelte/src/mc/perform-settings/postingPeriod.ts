import { LBAttrColumn } from '$components/LBDataTable/Cells/LBAttrColumn';
import type { ATTRIBUTE_ITEM_TYPE, LBColumn } from '$components/LBDataTable/Cells/LBColumn';
import { FORM_TYPE } from '$lib/services/sidebar.service';
import { ColumnService } from '$lib/services/column.service';
import { Comparator, Condition, FilterService, type FilterItem } from '$lib/services/filter.service';
import type { QueryResult } from '$lib/services/query.service';
import type { ColumnType } from '$lib/types';
import { save_storage } from '$lib/utils';
import { DataQueryService } from '$mc/global-schema/data-query.service';
import { getUTCTime } from '$lib/time_utils';
import moment from 'moment-timezone';
import { get } from 'svelte/store';

export class LBSiteIdColumn extends LBAttrColumn {
  protected getQueryForAttribute(selected?: ATTRIBUTE_ITEM_TYPE): any {
    const table = {
      lb_table: 'lb_attribute',
      lb_id_column: 'lb_attribute_id',
      sort_column: 'lb_sequence'
    };

    const queryService = this.queryService as PerformPostingPeriodService;

    const query = {
      ...table,
      header: true,
      asc: true,
      level_path: 'Org.Corporate.Region.State',
      node_path: queryService.path_org,
      tree: false,
      verbose: false,
      limit: 1000
    };
    return query;
  }

  protected getResultWithFormat(rawData: any[]): ATTRIBUTE_ITEM_TYPE[] {
    const rows: ATTRIBUTE_ITEM_TYPE[] = [];

    this.attributeIdField = 'value';

    rawData.forEach((item) => {
      const row = item;
      row.display = item.level_path !== 'Org.Corporate.Region' ? `${item['ref_value']} ${item.display}` : item.display;
      row.value = item['ref_value'];
      rows.push(row);
    });

    return rows;
  }
}

const getNextPeriodAsDate = (postingPeriod: number) => {
  const strValue = postingPeriod.toString();
  if (strValue.length === 6) {
    const strYear = strValue.substring(0, 4);
    const strMonth = strValue.substring(4, 6);
    const year = parseInt(strYear) + Math.floor(parseInt(strMonth) / 12);
    const month = (parseInt(strMonth) % 12) + 1;
    const strNewYear = year.toString();
    let strNewMonth = `00${month.toString()}`;
    strNewMonth = strNewMonth.substring(strNewMonth.length - 2);
    const strDate = `${strNewYear}-${strNewMonth}-01`;
    const date = getUTCTime(new Date(strDate).getTime());
    return date;
  }
  return null;
};

const setNewPostingInfo = (rowData: any, posting_end_date, posting_period) => {
  const new_date_timestamp = posting_end_date * 1000 + 24 * 3600000;
  const new_date = new Date(new_date_timestamp);

  rowData['posting_period'] = posting_period;
  rowData['posting_start_date'] = Math.floor(new_date.getTime() / 1000);
  const datePeriod = getNextPeriodAsDate(posting_period);
  if (datePeriod) {
    rowData['posting_period'] = moment(datePeriod).format('YYYYMM');
  }
  return datePeriod;
};

const getLastDateFromPeriodDate = (datePeriod: Date) => {
  const year = datePeriod.getFullYear();
  const month = datePeriod.getMonth();
  const daysPerMonth = [31, year % 4 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const strDate = moment(new Date(year, month, daysPerMonth[month]).getTime()).format('YYYY-MM-DD');
  return new Date(strDate);
};

export class PeriodColumnService extends ColumnService {
  protected last_site_id: number = 0;
  public async setDefaultConfig(columnTypes: ColumnType[]) {
    this.mapIdToDefaultCell = {};

    for (let idx = 0; idx < columnTypes.length; idx++) {
      let cell;
      const column = columnTypes[idx];
      if (column.id === 'site_id') {
        const site_cell = new LBSiteIdColumn(column, this.queryService);
        await site_cell.loadAttributes();
        cell = site_cell;
      } else {
        cell = this.getLBColumnFromType(column);
      }

      this.mapIdToDefaultCell[cell.id] = cell;
      this.mapIdToCell[cell.id] = cell;
    }
  }

  protected async initWithColumnType(columnTypes: ColumnType[]) {}

  public getCellsForForm(formType: FORM_TYPE = FORM_TYPE.UPDATE, rowData: any = null): LBColumn[] {
    const cells: LBColumn[] = [];
    const keys = Object.keys(this.mapIdToCell);

    const queryService = this.queryService as PerformPostingPeriodService;
    const mapIdToValue = queryService.mapIdToValue;
    const site_ids = Object.keys(mapIdToValue);

    keys.forEach((colId) => {
      const cell = this.mapIdToCell[colId];
      const isAbleToAdd = !(cell.id.includes('created_at') || cell.id.includes('created_by') || cell.id.includes('updated_at') || cell.id.includes('updated_by') || cell.hide_from_form);

      if (isAbleToAdd) {
        if (formType == FORM_TYPE.ADD) {
          if (cell.id === 'site_id') {
            cell.readOnly = false;
            if (site_ids.length == 1) {
              if (rowData) {
                const site_id = site_ids[0];
                const lastData = mapIdToValue[site_id][0];
                rowData['site_id'] = lastData['site_id'];
                const datePeriod = setNewPostingInfo(rowData, lastData.posting_end_date, lastData.posting_period);
                if (datePeriod) {
                  if (!rowData['posting_end_date'] || rowData['site_id'] !== this.last_site_id) {
                    const new_end_date = getLastDateFromPeriodDate(datePeriod);
                    rowData['posting_end_date'] = Math.floor(new_end_date.getTime() / 1000);
                  }
                }
              }
            } else {
              if (rowData['site_id'] !== this.last_site_id) {
                const site_id = rowData['site_id'];
                if (mapIdToValue[site_id]) {
                  const lastData = mapIdToValue[site_id][0];
                  rowData['site_id'] = lastData['site_id'];
                  const datePeriod = setNewPostingInfo(rowData, lastData.posting_end_date, lastData.posting_period);
                  if (datePeriod) {
                    if (!rowData['posting_end_date'] || rowData['site_id'] !== this.last_site_id) {
                      const new_end_date = getLastDateFromPeriodDate(datePeriod);
                      rowData['posting_end_date'] = Math.floor(new_end_date.getTime() / 1000);
                    }
                  }
                }
              }
            }
          }
        }

        cells.push(cell);
      }
    });

    this.last_site_id = rowData['site_id'];
    return cells;
  }
}

export class PeriodFilterService extends FilterService {
  public addNewFilter(colId: string, columnName: string, conditions: Condition[]) {
    const mapFilters = get(this.mapFilters);

    if (colId === 'site_id') {
      conditions.forEach((condition) => {
        condition.comparator = Comparator.EQ;
      });
    }

    const item: FilterItem = {
      colId,
      columnName,
      conditions
    };

    mapFilters[colId] = item;
    this.mapFilters.set(mapFilters);
    save_storage(this.getKeyForStorage(), mapFilters);
  }
}

export class PerformPostingPeriodService extends DataQueryService {
  public get subject(): string {
    return 'PerformPostingPeriodService';
  }

  public path_org: string;
  public mapIdToValue: Record<string, any[]> = {};

  public getKeyForStorage() {
    // The key for local storage should be differ depend on the path_org, so the filtering and sorting should be differ depend on path_org.
    return `${this.subject}/${this.intent_query}/${this.lb_table}/${this.path_org}`;
  }
  constructor(path_org: string) {
    super('site_posting_period');
    this.columnService = new PeriodColumnService(this);
    this.filterService = new PeriodFilterService(this);
    this.path_org = path_org;
    this.isInlineEditable = false;
    this.inlineEditing = false;
    this.isDeletable = true;

    this.lb_column = `${this.lb_table}_id`;
    this.filters = [
      {
        match_type: 'OR',
        lb_column: 'path_org',
        comparator: Comparator.ILIKE,
        value: path_org
      }
    ];
  }

  public updateWithInfo(info: QueryResult) {
    const columnService = this.columnService as PeriodColumnService;
    const site_cell = columnService.getCell('site_id') as unknown as LBSiteIdColumn;
    const mapIdToItem = site_cell.mapIdToItem;
    const ids = Object.keys(mapIdToItem);
    this.mapIdToValue = {};

    info.rows.forEach((row) => {
      const site_id = row['site_id'];
      const findId = ids.find((id) => id.includes(site_id));
      if (findId) {
        row['site_id'] = mapIdToItem[findId];
        const value = row['site_id'].value;
        if (!this.mapIdToValue[value]) {
          this.mapIdToValue[value] = [];
        }
        this.mapIdToValue[value].push(row);
      }
    });

    const keys = Object.keys(this.mapIdToValue);
    keys.forEach((key) => {
      const list = this.mapIdToValue[key];
      list.sort(function (a, b) {
        return b.posting_period - a.posting_period;
      });
      this.mapIdToValue[key] = list;
    });
    super.updateWithInfo(info);
  }

  protected getPayloadToAdd(payload: any): any {
    const site_id = payload['site_id'];
    if (site_id && typeof site_id === 'object') {
      payload['site_id'] = site_id['value'];
    }
    payload['path_org'] = this.path_org;
    return { data: [payload] };
  }

  protected getPayloadToUpdate(payload: any): any {
    const site_id = payload['site_id'];
    if (site_id && typeof site_id === 'object') {
      payload['site_id'] = site_id['value'];
    }
    payload['path_org'] = this.path_org;

    const list = this.rows.filter((item) => item['site_id'].value === payload['site_id']);

    list.sort(function (a, b) {
      return b['posting_period'] - a['posting_period'];
    });

    const findidx = list.findIndex((item) => item['site_posting_period_id'] === payload['site_posting_period_id']);
    let rowData = JSON.parse(JSON.stringify(list[findidx]));

    payload['posting_period'] = list[findidx].posting_period;
    payload['posting_start_date'] = list[findidx].posting_start_date;

    const newPayload = [payload];

    if (payload['posting_end_date']) {
      rowData.posting_end_date = payload['posting_end_date'];

      for (let i = findidx - 1; i >= findidx - 2; i--) {
        if (list[i]) {
          setNewPostingInfo(list[i], rowData.posting_end_date, rowData.posting_period);
          const item = {
            site_posting_period_id: list[i].site_posting_period_id,
            site_id: list[i]['site_id'].value,
            posting_period: list[i].posting_period,
            posting_start_date: list[i].posting_start_date,
            posting_end_date: list[i].posting_end_date
          };
          rowData = list[i];
          newPayload.push(item);
        }
      }
    }

    return { data: newPayload };
  }
}
