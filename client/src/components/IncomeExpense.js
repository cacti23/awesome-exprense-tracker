import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
  const { calculateTotalIncome, calculateTotalExpense } =
    useContext(GlobalContext);
  return (
    <div className='income-expense'>
      <div className='income'>
        <h3>income</h3>
        <h3 className='income-color-h3'>${calculateTotalIncome()}</h3>
      </div>
      <div className='expense'>
        <h3>expense</h3>
        <h3 className='expense-color-h3'>${calculateTotalExpense()}</h3>
      </div>
    </div>
  );
};
