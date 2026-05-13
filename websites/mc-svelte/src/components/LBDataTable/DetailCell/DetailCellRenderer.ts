import type { ICellRenderer } from 'ag-grid-community';
import type { ICustomCellParams } from '$components/LBDataTable/Cells/LBColumn';
import LBDetailCell from './LBDetailCell.svelte';

export class DetailCellRenderer implements ICellRenderer {
  container!: HTMLElement;
  component: any;

  init(params: ICustomCellParams) {
    this.container = document.createElement('div');
    this.component = new LBDetailCell({
      target: this.container,
      props: {
        params: params
      }
    });
  }

  getGui() {
    return this.container;
  }

  refresh(params: ICustomCellParams): boolean {
    return false;
  }
}
