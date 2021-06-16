import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .filter(transaction => !transaction.isExpense)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const expense = transactions
    .filter(transaction => transaction.isExpense)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  return (
    <div className='income-expense'>
      <div className='income'>
        <h3>income</h3>
        <h3 className='income-color-h3'>${income}</h3>
      </div>
      <div className='expense'>
        <h3>expense</h3>
        <h3 className='expense-color-h3'>${expense}</h3>
      </div>
    </div>
  );
};
