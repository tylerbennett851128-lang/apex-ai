import type { ICellEditorComp } from 'ag-grid-community';
import type { ICustomCellEditorParams } from '$components/LBDataTable/Cells/LBColumn';
import { NUMBER_SCHEMA_TYPES, SchemaDataAnnotation } from '$lib/types';
import { isEmpty } from 'lodash-es';
export class TextCellEditor implements ICellEditorComp {
  value: any;
  input!: HTMLInputElement;
  params: ICustomCellEditorParams;
  private initialValue: any;
  private oldData: any;
  private schemaType: SchemaDataAnnotation;

  init(params: ICustomCellEditorParams) {
    this.value = params.value;
    this.params = params;

    this.oldData = JSON.parse(JSON.stringify(params.data));
    this.input = document.createElement('input');
    this.input.classList.add('cell-input-number');

    this.schemaType = this.params.cell.schemaType;

    if (NUMBER_SCHEMA_TYPES.includes(this.schemaType)) {
      this.input.type = 'tel';
    } else {
      this.input.type = 'text';
    }

    this.input.id = 'input';

    const value = this.value ? this.value : '';
    this.initialValue = JSON.parse(JSON.stringify(value));
    this.input.value = value;

    this.input.addEventListener('input', (event: any) => {
      this.value = event.target.value;
    });
  }

  /* Component Editor Lifecycle methods */
  // gets called once when grid ready to insert the element
  getGui() {
    return this.input;
  }

  // the final value to send to the grid, on completion of editing
  getValue() {
    // this simple editor doubles any value entered into the input
    return this.value;
  }

  // after this component has been created and inserted into the grid
  afterGuiAttached() {
    this.input.focus();
    const stringValue = String(this.value);
    if (!isEmpty(stringValue)) {
      this.input.setSelectionRange(0, stringValue.length);
    }
  }
  // Gets called once before editing starts, to give editor a chance to
  // cancel the editing before it even starts.
  isCancelBeforeStart() {
    return false;
  }

  private onClose = async () => {
    if (this.initialValue !== this.value) {
      const coldId = this.params.column.getColId();

      let value = this.value;
      if (NUMBER_SCHEMA_TYPES.includes(this.schemaType)) {
        if (this.schemaType === SchemaDataAnnotation.METRIC) {
          value = parseFloat(value);
        } else {
          value = parseInt(value);
        }
      }

      this.params.data[coldId] = value;
      await this.params.cell.saveValue(this.oldData, this.params.data);
    }
  };
  // Gets called once when editing is finished (eg if Enter is pressed).
  // If you return true, then the result of the edit will be ignored.
  isCancelAfterEnd() {
    // our editor will reject any value lower than 0
    this.onClose();
    return true;
  }
}
