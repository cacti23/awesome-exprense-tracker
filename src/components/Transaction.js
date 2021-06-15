import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';

export const Transaction = () => {
  return (
    <>
      <li className='displayed-list'>
        <FaMoneyBill className='bill' />
        <p className='title'>aditya</p>
        <FiDelete className='delete-btn' />
      </li>
    </>
  );
};
