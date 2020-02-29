import React, { useContext } from 'react';
import { ITransaction } from '../models';
import { GlobalContext } from '../context';

export const Transaction = ({ transaction }: { transaction: ITransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{transaction.amount}€</span>
        <button
          className='delete-btn'
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};
