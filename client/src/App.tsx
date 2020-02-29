import React from 'react';
import './App.css';
import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddTransaction
} from './components';
import { GlobalProvider } from './context';

function App(): any {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
