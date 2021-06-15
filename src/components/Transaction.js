import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { RiDeleteBack2Fill } from 'react-icons/ri';

export const Transaction = () => {
  return (
    <>
      <li className='displayed-list'>
        <FaMoneyBill className='bill' />
        <p className='title'>aditya</p>
        <RiDeleteBack2Fill className='delete-btn' />
      </li>
    </>
  );
};
