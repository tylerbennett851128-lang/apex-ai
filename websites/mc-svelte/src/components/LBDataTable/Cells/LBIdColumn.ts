import { LBColumn } from './LBColumn';
import IdElement from '$components/LBSubmit/FormElements/IdElement.svelte';
import { post_query_info } from '$lib/utils';

export class LBIdColumn extends LBColumn {
  public mapIdToItem: Record<string, any> = {};

  public defaultIdValue?: { id?: string; value?: string; display?: string };

  public getElementForForm() {
    return IdElement;
  }

  public async loadIds(): Promise<any[]> {
    let id = this.id;
    if (this.id === 'edit_permission' || this.id === 'view_permission') {
      id = 'lb_role_id';
    }

    const tableName = id ? id.replace('_id', '') : 'lb_schema';
    const sort_column = id ? id : 'created_by';

    const table = {
      lb_table: tableName,
      lb_id_column: id,
      sort_column: sort_column
    };

    const query = {
      ...table,
      asc: true,
      limit: 1000
    };

    const response = await post_query_info('lb_query', query);

    if (response) {
      const { data } = response;

      if (data) {
        const rawData = data.data as any[];
        const rows: any[] = [];
        const nameField = `${tableName}_name`;

        rawData.forEach((item) => {
          const idValue = item[id];
          if (idValue) {
            rows.push(item);
            this.mapIdToItem[idValue] = item;
          }
        });

        rows.sort(function (a, b) {
          if (a[nameField] && b[nameField]) {
            if (a[nameField].toLowerCase() < b[nameField].toLowerCase()) return -1;
            if (a[nameField].toLowerCase() > b[nameField].toLowerCase()) return 1;
          }
          return 0;
        });

        return rows;
      }
    }
    return [];
  }
}
