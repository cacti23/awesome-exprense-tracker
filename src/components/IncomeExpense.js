import React from 'react';

export const IncomeExpense = () => {
  return (
    <div className='income-expense'>
      <div className='income'>
        <h3>income</h3>
        <h3 className='income-color-h3'>$500</h3>
      </div>
      <div className='expense'>
        <h3>expense</h3>
        <h3 className='expense-color-h3'>$30</h3>
      </div>
    </div>
  );
};
