import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';

export const TransactionList = () => {
  return (
    <div className='transaction-list'>
      <h4>history</h4>
      <ul>
        <li className='displayed-list'>
          <FaMoneyBill className='bill' />
          <p className='title'>aditya</p>
          <FiDelete className='delete-btn' />
        </li>
      </ul>
    </div>
  );
};
