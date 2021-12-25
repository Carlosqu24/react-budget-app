import React, { createContext, useReducer } from 'react'

import { appReducer } from './AppReducer';

import { v4 as uuidv4 } from 'uuid';

const initialState = {
      budget: 2000,
      expenses: [
            {
                  id: uuidv4(),
                  name: 'Shopping',
                  cost: 100
            },
            {
                  id: uuidv4(),
                  name: 'Holiday',
                  cost: 50
            },
            {
                  id: uuidv4(),
                  name: 'Transportation',
                  cost: 80
            },
            {
                  id: uuidv4(),
                  name: 'Fuel',
                  cost: 70
            },
            {
                  id: 5,
                  name: 'Child Care',
                  cost: 150
            }
      ]
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
      const [state, dispatch] = useReducer(appReducer, initialState)

      const addExpense = (expense) => {
            dispatch({ type: 'ADD_EXPENSE', payload: expense })
      };

      const deleteExpense = (id) => {
            dispatch({ type: 'DELETE_EXPENSE', payload: id });
      };

      const setBudget = (value) => {
            dispatch({ type: 'SET_BUDGET', payload: value });
      };

      const value = {
            budget: state.budget,
            setBudget,
            expenses: state.expenses,
            addExpense,
            deleteExpense
      };

      return (
            <AppContext.Provider value={value}>
                  { children }
            </AppContext.Provider>
      )
}