import type { ICellEditorComp } from 'ag-grid-community';
import type { ICustomCellEditorParams } from '$components/LBDataTable/Cells/LBColumn';
import AttributeEditor from './AttributeEditor.svelte';

export class AttributeCellEditor implements ICellEditorComp {
  container: any;
  component: AttributeEditor;
  params: ICustomCellEditorParams;

  private initialValue: string;
  private oldData: any;

  init(params: ICustomCellEditorParams) {
    this.params = params;
    this.container = document.createElement('div');
    this.container.style = 'width: 250px; display:inline-block;outline:none';
    this.initialValue = params.value ? JSON.parse(JSON.stringify(params.value)) : '';
    this.oldData = JSON.parse(JSON.stringify(params.data));

    this.component = new AttributeEditor({
      target: this.container,
      props: {
        cell: params.cell,
        selected: params.value,
        onClose: this.onClose
      }
    });
  }

  public onClose = async (selected: string) => {
    if (selected && this.initialValue !== selected) {
      const coldId = this.params.column.getColId();
      this.params.data[coldId] = selected;
      this.params.value = selected;
      await this.params.cell.saveValue(this.oldData, this.params.data);
    }
    this.params.api.stopEditing(true);
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
