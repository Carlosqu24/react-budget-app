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

function App() {
  return (
    <AppProvider>
      <div className="App">

        <div className="container">
          <BalanceBudget />
          <ExpenseList />
          <ExpenseForm />
        </div>
        


        <div className="container">
          {/* <h2>My Budget Planner</h2>
          <div className="row py-4">
              <div className="col-sm">
                  <Budget />
              </div>

              <div className="col-sm">
                  <ExpensesTotal />
              </div>

              <div className="col-sm">
                  <RemainingBudget />
              </div>
          </div> */}
          {/* <h2>Expenses</h2>
          <div className="row py-4">
            <div className="col-sm">
              
            </div>
          </div>
          <h2>Add Expense</h2>
          <div className="row py-4">
            <div className="col-sm">
              <ExpenseForm />
            </div>
          </div> */}
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
