import React from 'react';

export const AddTransaction = () => {
  return (
    <div className='add-transaction'>
      <form>
        <div className='form-control'>
          <label htmlFor='title'>Title</label>
          <input type='text' placeholder='Add title' />
          <label htmlFor='amount'>Amount</label>
          <input type='text' placeholder='Add amount' />
          <button>Add transaction</button>
        </div>
      </form>
    </div>
  );
};
