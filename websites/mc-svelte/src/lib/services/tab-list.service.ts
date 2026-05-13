import { post_query_info, load_storage, save_storage } from '$lib/utils';

export type TabItemType = {
  id: string;
  label: string;
};

export class TabListService {
  protected data_source: string;
  protected _activeTab: TabItemType;

  get activeTab(): TabItemType {
    return this._activeTab;
  }

  set activeTab(value: TabItemType) {
    save_storage(this.getKeyForSelected(), value);
    this._activeTab = value;
  }

  get savedTab(): TabItemType {
    const value = load_storage(this.getKeyForSelected()) as TabItemType;
    return value;
  }

  public tabItems: TabItemType[];
  public listItems: TabItemType[] = [];

  constructor(data_source: string) {
    this.data_source = data_source;
    const data = load_storage(this.getKeyForStorage());
    if (data) {
      this.tabItems = data as TabItemType[];
      if (this.tabItems.length > 0) {
        if (this.savedTab) {
          this.activeTab = this.savedTab;
        } else {
          this.activeTab = this.tabItems[0];
        }
      }
    }
  }

  protected getKeyForStorage() {
    return `TabListService/${this.data_source}`;
  }

  protected getKeyForSelected() {
    return `TabListService/${this.data_source}/Selected`;
  }

  public prepareListItems(newTabs: TabItemType[]) {
    if (this.tabItems) {
      const listItems = newTabs.filter((tab) => this.tabItems.findIndex((item) => item.id === tab.id) === -1);
      this.listItems = listItems;

      if (!this.activeTab && this.tabItems.length > 0) {
        this.activeTab = this.tabItems[this.tabItems.length - 1];
      }
    }
  }

  public addTab(item: TabItemType) {
    this.tabItems.push(item);
    this.prepareListItems(this.listItems);

    if (this.tabItems.length > 0) {
      this.activeTab = this.tabItems[this.tabItems.length - 1];
    }

    save_storage(this.getKeyForStorage(), this.tabItems);
  }

  public removeTab(tab: TabItemType): string {
    let label = '';
    this.tabItems = this.tabItems.filter((item) => {
      if (item.id !== tab.id) {
        return true;
      } else {
        this.listItems.push(item);
        label = item.label;
        if (this.activeTab.id === tab.id) {
          this.activeTab = null;
        }

        return false;
      }
    });

    if (!this.activeTab && this.tabItems.length > 0) {
      this.activeTab = this.tabItems[this.tabItems.length - 1];
    }

    save_storage(this.getKeyForStorage(), this.tabItems);
    return label;
  }

  public isReadyToDisplay(): boolean {
    return this.tabItems && this.tabItems.length > 0;
  }

  public async loadData() {
    return await TabListService.loadData(this.data_source);
  }

  public static async loadData(data_source: string) {
    const query = {
      lb_table: 'lb_table_index',
      lb_id_column: 'table_name',
      sort_column: 'table_name',
      asc: true,
      limit: 100,
      filters: [
        {
          match_type: 'AND',
          lb_column: 'data_source',
          comparator: 'eq',
          value: data_source
        }
      ]
    };

    const response = await post_query_info('lb_query', query);

    if (response && response.data) {
      const { data } = response.data;
      return data;
    }

    return null;
  }

  public initWithData(data) {
    if (data) {
      const newTabs: TabItemType[] = [];
      const items = data as any[];

      items.forEach((item) => {
        const table_name = item['table_name'];
        const id = item['lb_table_index_id'];
        newTabs.push({ id: id, label: table_name });
      });

      if (this.tabItems) {
        if (this.tabItems.length > 0) {
          this.prepareListItems(newTabs);
        } else {
          this.listItems = newTabs;
        }
      } else {
        this.tabItems = newTabs.slice(0, 5);
        this.prepareListItems(newTabs);
      }

      save_storage(this.getKeyForStorage(), this.tabItems);
    }
  }
}
