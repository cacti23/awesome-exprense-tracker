import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const transactions = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div className='transaction-list'>
      <h4>history</h4>
      <ul>
        {transactions.map((transaction, index) => {
          return <Transaction key={index} {...transaction} />;
        })}
      </ul>
    </div>
  );
};
