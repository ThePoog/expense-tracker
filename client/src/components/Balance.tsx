import React, { useContext } from 'react';
import { GlobalContext } from '../context';
import { ITransaction } from '../models';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction: ITransaction) => transaction.amount);
  const total = amounts.reduce((acc: any, item: any) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{total}€</h1>
    </div>
  );
};
