import type { QueryService } from './query.service';
import EditForm from '$components/LBSubmit/EditForm.svelte';

export enum FORM_TYPE {
  UPDATE = 'Update',
  ADD = 'Add',
  CLONE = 'clone',
  DELETE = 'Delete'
}

export enum SUBMIT_STATE {
  UPDATED = 'Updated',
  CLOSED = 'Closed',
  OPENED = 'Opened',
  REFRESH = 'Refresh'
}

export class SideBarService {
  public get open(): boolean {
    return this._open;
  }

  public set open(value: boolean) {
    if (value === true) {
      this.status = SUBMIT_STATE.OPENED;
    }
    this._open = value;
  }

  private _open = false;

  public row: any;

  private _queryService: QueryService;
  public set queryService(value: QueryService) {
    this._queryService = value;
    if (this._queryService && this._queryService.columnService) {
      this._queryService.columnService.initializeForForm();
    }
  }

  public get queryService(): QueryService {
    return this._queryService;
  }

  public formType: FORM_TYPE = FORM_TYPE.UPDATE;

  public component = EditForm;

  public getcomponent() {
    return EditForm;
  }
  public status: SUBMIT_STATE;

  public get title(): string {
    return this.queryService ? this.queryService.titleForForm : '';
  }

  public update(open: boolean, status: SUBMIT_STATE, queryService: QueryService) {
    this.open = open;
    this.status = status;
    this.queryService = queryService;
  }

  constructor() {}
}
