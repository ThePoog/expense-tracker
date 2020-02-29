import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { ActionType, Action } from '../models/actions';
import { ITransaction } from '../models';

// Initial State

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 } as ITransaction,
    { id: 2, text: 'Salary', amount: 300 } as ITransaction,
    { id: 3, text: 'Book', amount: -10 } as ITransaction,
    { id: 4, text: 'Camera', amount: 150 } as ITransaction,
  ],

  // Context actions need to be declared on context creation
  deleteTransaction: (id: string | number) => {},
  addTransaction: (transaction: ITransaction) => {},
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: string | number): void {
    dispatch({
      type: ActionType.DELETE_TRANSACTION,
      payload: id,
    } as Action);
  }

  function addTransaction(transaction: ITransaction): void {
    dispatch({
      type: ActionType.ADD_TRANSACTION,
      payload: transaction,
    } as Action);
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions as ITransaction[],
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
