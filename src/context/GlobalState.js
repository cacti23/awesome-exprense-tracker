import React, { createContext } from 'react';

const initialState = {
  transactions: [
    { id: 1, title: 'Flower', amount: -20, isExpense: true },
    { id: 2, title: 'Salary', amount: 300, isExpense: false },
    { id: 3, title: 'Book', amount: -10, isExpense: true },
    { id: 4, title: 'Camera', amount: 150, isExpense: false },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
