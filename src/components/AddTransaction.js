import React from 'react';

export const AddTransaction = () => {
  return (
    <div className='add-transaction'>
      <form>
        <div className='form-control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            placeholder='Add title'
            id='title'
            className='text-input'
          />
          <label>Select Income or Expense</label>
          <div className='checkboxes'>
            <label htmlFor='income'>
              <input type='radio' id='income' name='only-one' />
              <span>Income</span>
            </label>
            <label htmlFor='expense'>
              <input type='radio' id='expense' name='only-one' />
              <span>Expense</span>
            </label>
          </div>

          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            placeholder='Add amount'
            id='amount'
            className='text-input'
          />
          <button>Add transaction</button>
        </div>
      </form>
    </div>
  );
};
