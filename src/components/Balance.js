import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { calculateTotalIncome, calculateTotalExpense } =
    useContext(GlobalContext);

  return (
    <div className='balance'>
      <h3>your balance</h3>
      <h3 className='bal-value'>
        ${(calculateTotalIncome() - calculateTotalExpense()).toFixed(2)}
      </h3>
    </div>
  );
};
