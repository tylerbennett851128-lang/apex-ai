import { PaginationAction } from '../types';
import { load_storage, save_storage } from '$lib/utils';
import type { QueryService } from './query.service';

export type PaginationQuery = {
  action: PaginationAction;
  limit: number;
  last_id_value?: string;
  last_sort_value?: string;
};

export class PaginationService {
  currentPage = 0;
  rowsPerPage = 50;
  lastPage = 0;
  itemsTotal = 0;
  sort_column?: string;
  sort_direction?: boolean;

  show = true;
  editable = false;

  protected queryService: QueryService;
  protected map: Record<number, { last_id_value: string; first_id_value: string; first_sort_value: string; last_sort_value: string }> = {};
  constructor(qureyService: QueryService) {
    this.sort_direction = false;
    this.queryService = qureyService;

    const rowsPerPage = load_storage(this.getKeyForStorage());
    if (rowsPerPage) {
      this.rowsPerPage = rowsPerPage;
    }
  }

  protected getKeyForStorage() {
    return `pagination:${this.queryService.getKeyForStorage()}`;
  }

  public updateItemsTotal(itemsTotal: number, firstItem: any, lastItem: any, itemsInPage = 0, id_column: string, sort_column?: string, sort_direction?: boolean) {
    if (this.rowsPerPage !== itemsInPage && this.itemsTotal > 0 && this.itemsTotal !== itemsTotal) {
      this.reset();
    }

    if (this.sort_column && sort_column && this.sort_column !== sort_column) {
      this.reset();
    }

    if (this.sort_direction && this.sort_direction !== sort_direction) {
      this.reset();
    }

    this.sort_column = sort_column;
    this.sort_direction = sort_direction;

    if (firstItem && lastItem) {
      if (this.findPageIndexWithId(firstItem, lastItem) === -1) {
        this.map[this.currentPage] = {
          first_id_value: firstItem[id_column],
          last_id_value: lastItem[id_column],
          first_sort_value: sort_column ? firstItem[sort_column] : null,
          last_sort_value: sort_column ? lastItem[sort_column] : null
        };
      }
    }

    this.itemsTotal = itemsTotal;
    this.lastPage = itemsTotal ? Math.max(Math.ceil(itemsTotal / this.rowsPerPage) - 1, 0) : 0;
  }

  public reset() {
    this.map = {};
    this.currentPage = 0;
  }

  protected findPageIndexWithId(firstItem: any, lastItem: any) {
    if (lastItem && firstItem) {
      const keys = Object.keys(this.map);
      return keys.findIndex((key) => {
        return this.map[key].last_id_value === lastItem.lb_attribute_id && this.map[key].first_id_value === firstItem.lb_attribute_id;
      });
    }
    return -1;
  }

  public getQuery(action: PaginationAction = PaginationAction.FIRST): PaginationQuery {
    if (action === PaginationAction.NEXT) {
      const oldPageIndex = this.currentPage - 1;
      const page = this.map[oldPageIndex];

      let rowsPerPage = this.rowsPerPage;

      if (this.currentPage === this.lastPage) {
        const limit = this.itemsTotal % this.rowsPerPage;
        rowsPerPage = limit ? limit : this.rowsPerPage;
      }

      if (page) {
        return {
          action: action,
          limit: rowsPerPage,
          last_id_value: page ? page.last_id_value : null,
          last_sort_value: page ? page.last_sort_value : null
        };
      }
    } else if (action === PaginationAction.CURRENT) {
      const pageIndex = this.currentPage - 1;
      const page = this.map[pageIndex];

      if (page) {
        return {
          action: action,
          limit: this.rowsPerPage,
          last_id_value: page.last_id_value,
          last_sort_value: page.last_sort_value
        };
      }
    } else if (action === PaginationAction.PREV) {
      const oldPageIndex = this.currentPage + 1;

      const page = this.map[oldPageIndex];
      if (page) {
        return {
          action: action,
          limit: this.rowsPerPage,
          last_id_value: page.first_id_value,
          last_sort_value: page.first_sort_value
        };
      }
    } else if (action === PaginationAction.LAST) {
      const limit = this.itemsTotal % this.rowsPerPage;
      return {
        action: action,
        limit: limit ? limit : this.rowsPerPage
      };
    }

    return {
      action: action,
      limit: this.rowsPerPage
    };
  }

  public updateRowsPerPage(value: number) {
    if (value !== this.rowsPerPage) {
      this.map = {};
    }
    this.rowsPerPage = value;
    save_storage(this.getKeyForStorage(), this.rowsPerPage);
  }
}
