import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className='transaction-list'>
      <h4>history</h4>
      <ul>
        {transactions.map((transaction, index) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </div>
  );
};
