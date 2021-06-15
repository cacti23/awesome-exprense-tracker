import React from 'react';

import { Transaction } from './Transaction';

export const TransactionList = () => {
  return (
    <div className='transaction-list'>
      <h4>history</h4>
      <ul>
        <Transaction />
      </ul>
    </div>
  );
};
