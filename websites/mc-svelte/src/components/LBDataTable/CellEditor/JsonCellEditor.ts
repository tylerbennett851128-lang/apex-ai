import type { ICellEditorComp } from 'ag-grid-community';
import type { ICustomCellEditorParams } from '$components/LBDataTable/Cells/LBColumn';
import JsonEditor from './JsonEditor.svelte';

import { isEqual } from '$lib/utils';

export class JsonCellEditor implements ICellEditorComp {
  container: any;
  component: JsonEditor;
  params: ICustomCellEditorParams;

  private initialValue: any;
  private oldData: any;

  init(params: ICustomCellEditorParams) {
    this.params = params;
    this.container = document.createElement('div');
    this.container.style = 'width: 500px; display:inline-block;outline:none';
    this.initialValue = params.value ? JSON.parse(JSON.stringify(params.value)) : '';
    this.oldData = JSON.parse(JSON.stringify(params.data));

    const colId = this.params.column.getColId();

    this.params.onKeyDown = this.onKeyDown;

    this.component = new JsonEditor({
      target: this.container,
      props: {
        content: this.params.data[colId],
        onChange: this.onChange
      }
    });
  }

  public onChange = async (data: any) => {
    if (data) {
      if (!isEqual(this.initialValue, data)) {
        const coldId = this.params.column.getColId();
        this.params.data[coldId] = data;
        const result = await this.params.cell.saveValue(this.oldData, this.params.data);
        if (result) {
          this.params.value = data;
        }
      }
    }

    this.params.api.stopEditing(true);
  };

  onKeyDown = (event: KeyboardEvent) => {
    this.container.focus();
  };

  getGui() {
    return this.container;
  }

  afterGuiAttached() {
    this.container.focus();
  }

  getValue() {
    return this.params.value ? this.params.value : '';
  }

  destroy() {}

  getPopupPosition?(): string {
    return 'under';
  }

  isPopup() {
    return true;
  }
}
