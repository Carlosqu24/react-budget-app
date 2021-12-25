import React from 'react'

// STYLES
import './App.css';

// CONTEXT
import { AppProvider } from './context/AppContext';

// COMPONENTS
import { BalanceBudget } from './components/BalanceBudget';
import { ActionsTab } from './components/ActionsTab';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="container">
          <BalanceBudget />
          <ActionsTab />
        </div>        
      </div>
    </AppProvider>
  );
}

export default App;
