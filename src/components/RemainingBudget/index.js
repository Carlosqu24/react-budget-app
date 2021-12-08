import React, { useContext } from 'react'

import './RemainingBudget.css'

import { AppContext } from '../../context/AppContext';

export const RemainingBudget = () => {

      const { budget, expenses } = useContext(AppContext);

      const getTotalExpenses = () => {
            const totalExpenses = expenses.reduce((total, expense) => {
                  return total += expense.cost
            }, 0);

            return totalExpenses
      };

      return (
            <>
                  <p 
                        className="remaining-budget"
                  >Remaining Budget: { budget - getTotalExpenses() }
                  </p>
            </>
      )
}
