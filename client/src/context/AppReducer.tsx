import { Action, ActionType, ITransaction } from '../models';

export default (state: any, { type, payload }: Action) => {
  switch (type) {
    case ActionType.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: ITransaction) => transaction.id !== payload
        ),
      };

    case ActionType.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };

    default:
      return state;
  }
};
