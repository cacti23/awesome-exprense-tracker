import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='transaction-list'>
      <h4>history</h4>
      <ul>
        {transactions.map((transaction, index) => (
          <Transaction key={transaction._id} {...transaction} />
        ))}
      </ul>
    </div>
  );
};
