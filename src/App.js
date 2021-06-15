import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Balance />
      <IncomeExpense />
    </div>
  );
}

export default App;
