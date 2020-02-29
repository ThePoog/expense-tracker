export interface Action {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
}
