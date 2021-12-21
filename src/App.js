import React from 'react'


import './App.css';


import { AppProvider } from './context/AppContext';

// COMPONENTS
import { Budget } from './components/Budget';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { ExpensesTotal } from './components/ExpensesTotal';
import { RemainingBudget } from './components/RemainingBudget';
import { BalanceBudget } from './components/BalanceBudget';
import { ActionsTab } from './components/ActionsTab';

function App() {
  return (
    <AppProvider>
      <div className="App">

        <div className="container">
          <BalanceBudget />
          {/* <ExpenseList />
          <ExpenseForm /> */}

          <ActionsTab />
        </div>
        


        
      </div>
    </AppProvider>
  );
}

export default App;
