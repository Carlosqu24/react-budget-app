import React, { useContext } from 'react'

import './ExpensesTotal.css'

import { AppContext } from '../../context/AppContext'

export const ExpensesTotal = () => {

      const { expenses } = useContext(AppContext)

      const getTotalExpenses = () => {
            const totalExpenses = expenses.reduce((total, expense) => {
                  return total += expense.cost
            }, 0);

            return totalExpenses
      };

      return (
            <>
                  <p className="expenses-total">Total Expenses: {getTotalExpenses()}</p>
            </>
      )
}
