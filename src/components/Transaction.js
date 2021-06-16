import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { RiDeleteBack2Fill } from 'react-icons/ri';

export const Transaction = ({ title, amount, isExpense }) => {
  return (
    <>
      <li className='displayed-list'>
        <FaMoneyBill className={`bill ${isExpense ? 'income' : 'expense'}`} />
        <p className='title'>{title}</p>
        <p className='amount'>${amount}</p>
        <RiDeleteBack2Fill className='delete-btn' />
      </li>
    </>
  );
};
