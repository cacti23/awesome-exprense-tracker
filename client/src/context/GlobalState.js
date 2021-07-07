import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';
import axios from 'axios';

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error,
      });
    }
  }

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
        getTransactions,
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
