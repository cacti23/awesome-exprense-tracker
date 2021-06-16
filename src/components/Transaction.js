import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaMoneyBill } from 'react-icons/fa';
import { RiDeleteBack2Fill } from 'react-icons/ri';

export const Transaction = ({ id, title, amount, isExpense }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <li className='displayed-list'>
        <FaMoneyBill className={`bill ${isExpense ? 'income' : 'expense'}`} />
        <p className='title'>{title}</p>
        <p className='amount'>${amount}</p>
        <RiDeleteBack2Fill
          className='delete-btn'
          onClick={() => deleteTransaction(id)}
        />
      </li>
    </>
  );
};
