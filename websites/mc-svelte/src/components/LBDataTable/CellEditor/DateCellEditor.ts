import type { ICellEditorComp } from 'ag-grid-community';
import type { ICustomCellEditorParams } from '$components/LBDataTable/Cells/LBColumn';
import LBDateEditor from './LBDateEditor.svelte';

export class DateCellEditor implements ICellEditorComp {
  container: any;
  component: LBDateEditor;
  params: ICustomCellEditorParams;

  private initialValue: any;
  private oldData: any;

  constructor() {}

  onKeyDown(event: any) {
    const key = event.key;
    if (
      key === 'ArrowLeft' || // left
      key === 'ArrowRight'
    ) {
      event.stopPropagation();
    }
  }

  init(params: ICustomCellEditorParams) {
    this.params = params;
    this.container = document.createElement('div');
    this.container.style = 'width: 241px; display:inline-block;outline:none;';

    const timestamp = params.value;
    this.initialValue = timestamp;

    this.oldData = JSON.parse(JSON.stringify(params.data));

    this.component = new LBDateEditor({
      target: this.container,
      props: {
        timestamp: timestamp,
        onClose: this.onClose
      }
    });

    this.container.addEventListener('keydown', (event: any) => {
      this.onKeyDown(event);
    });
  }

  public onClose = async (timestamp: number) => {
    if (timestamp && timestamp !== this.initialValue) {
      const coldId = this.params.column.getColId();
      this.params.data[coldId] = timestamp;
      const result = await this.params.cell.saveValue(this.oldData, this.params.data);
      if (result) {
        this.params.value = timestamp;
      }
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
    return this.params.value;
  }

  destroy() {}

  getPopupPosition?(): string {
    return 'under';
  }

  isPopup() {
    return true;
  }
}
