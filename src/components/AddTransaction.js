import React, { useState, useContext } from 'react';
import uuid from 'react-uuid';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [title, setTitle] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    let newTransaction;
    console.log(title + ' ' + isExpense + ' ' + amount);
    if (title && amount) {
      newTransaction = {
        id: uuid(),
        title,
        amount: +amount,
        isExpense,
      };
      addTransaction(newTransaction);
    }
    setTitle('');
    setAmount('');
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
                name='radio-input'
                checked={isExpense === false}
                onChange={e => setIsExpense(false)}
              />
              <span>Income</span>
            </label>
            <label htmlFor='expense'>
              <input
                type='radio'
                id='expense'
                name='radio-input'
                checked={isExpense === true}
                onChange={e => setIsExpense(true)}
              />
              <span>Expense</span>
            </label>
          </div>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            id='amount'
            className='text-input'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder='Add amount...'
          />
          <button type='submit'>Add transaction</button>
        </div>
      </form>
    </div>
  );
};
