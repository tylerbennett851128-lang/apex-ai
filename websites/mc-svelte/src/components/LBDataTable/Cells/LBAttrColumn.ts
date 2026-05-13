import { LBColumn, type ATTRIBUTE_ITEM_TYPE } from './LBColumn';
import AttributeElement from '$components/LBSubmit/FormElements/AttributeElement.svelte';
import { post_query_info } from '$lib/utils';
import { SchemaDataAnnotation } from '$lib/types';
import LBAttrCell from './LBAttrCell.svelte';

export class LBAttrColumn extends LBColumn {
  public mapIdToItem: Record<string, any> = {};
  public defaultAttributeValue?: { value?: string; display?: string };
  public attributeIdField: string = 'node_path';

  public getElementForForm(): any {
    return AttributeElement;
  }

  public getCellRenderer() {
    if (this.component) {
      return this.component;
    }
    return LBAttrCell;
  }

  protected getQueryForAttribute(selected: ATTRIBUTE_ITEM_TYPE = null): any {
    let table = {};

    if (this.id === 'level_path' || this.schemaType === SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH) {
      table = {
        sort_column: 'level_path'
      };
    } else if (this.id === 'node_path') {
      table = {
        sort_column: 'node_path'
      };
    } else {
      table = {
        lb_table: 'lb_attribute',
        lb_id_column: 'lb_attribute_id',
        sort_column: 'lb_sequence'
      };
    }

    const node_path = this.id === 'node_path' ? 'node_path' : selected ? selected.node_path : this.node_path;

    const query = {
      ...table,
      asc: true,
      limit: 1000,
      include_total: true,
      tree: false,
      verbose: false,
      unique_levels_only: this.id === 'level_path' || this.id === 'node_path',
      level_path: selected ? selected.level_path : this.level_path,
      node_path: node_path,
      header: node_path === null || node_path === undefined ? false : true
    };

    return query;
  }

  protected sortResult(rows: ATTRIBUTE_ITEM_TYPE[]): ATTRIBUTE_ITEM_TYPE[] {
    rows.sort(function (a, b) {
      if (a.display && b.display) {
        if (a.display.toLowerCase() < b.display.toLowerCase()) return -1;
        if (a.display.toLowerCase() > b.display.toLowerCase()) return 1;
      }
      return 0;
    });

    return rows;
  }

  protected getResultWithFormat(rawData: any[]): ATTRIBUTE_ITEM_TYPE[] {
    const rows: ATTRIBUTE_ITEM_TYPE[] = [];

    if (this.id === 'level_path' || this.schemaType === SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH) {
      this.attributeIdField = 'level_path';
    }

    rawData.forEach((item) => {
      if (this.id === 'level_path' || this.schemaType === SchemaDataAnnotation.ATTRIBUTE_LEVEL_PATH) {
        const row = item;
        row.display = item.level_path;
        row.value = item.level_path;
        rows.push(row);
      } else {
        const row = item;
        row.display = item.display ? item.display : item.node_path;
        row.value = item.node_path;
        rows.push(row);
      }
    });

    return rows;
  }

  protected cacheToMap(rows: ATTRIBUTE_ITEM_TYPE[]) {
    if (rows.length > 0) {
      const firstItem = rows[0];
      if (!firstItem[this.attributeIdField]) {
        if (firstItem['value']) {
          this.attributeIdField = 'value';
        }
      }

      rows.forEach((row) => {
        const id = row[this.attributeIdField];
        this.mapIdToItem[id] = row;
      });
    }
  }

  public loadAttributes = async (selected: ATTRIBUTE_ITEM_TYPE = null): Promise<ATTRIBUTE_ITEM_TYPE[]> => {
    const response = await post_query_info('lb_attribute_query', this.getQueryForAttribute(selected));
    if (response) {
      const { data } = response;
      if (data) {
        const rows = this.sortResult(this.getResultWithFormat(data.data as any[]));
        this.cacheToMap(rows);
        return rows;
      }
    }

    return [];
  };
}
