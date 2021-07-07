import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function calculateTotalIncome() {
    return state.transactions
      .filter(transaction => !transaction.isExpense)
      .reduce((acc, transaction) => (acc += transaction.amount), 0)
      .toFixed(2);
  }
  function calculateTotalExpense() {
    return state.transactions
      .filter(transaction => transaction.isExpense)
      .reduce((acc, transaction) => (acc += transaction.amount), 0)
      .toFixed(2);
  }

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        calculateTotalIncome,
        calculateTotalExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
