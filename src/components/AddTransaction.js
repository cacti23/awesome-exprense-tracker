import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [title, setTitle] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    addTransaction({
      id: Math.floor(Math.random() * 10000),
      title,
      amount: +amount,
      isExpense,
    });
  };

  return (
    <div className='add-transaction'>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            className='text-input'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Add title...'
          />
          <label>Select Income or Expense</label>
          <div className='checkboxes'>
            <label htmlFor='income'>
              <input
                type='radio'
                id='income'
                name='only-one'
                onChange={() => setIsExpense(true)}
              />
              <span>Income</span>
            </label>
            <label htmlFor='expense'>
              <input
                type='radio'
                id='expense'
                name='only-one'
                onChange={() => setIsExpense(false)}
              />
              <span>Expense</span>
            </label>
          </div>

          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            placeholder='Add amount...'
            id='amount'
            className='text-input'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <button type='submit'>Add transaction</button>
        </div>
      </form>
    </div>
  );
};
