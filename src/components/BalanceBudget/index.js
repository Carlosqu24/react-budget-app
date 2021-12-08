import React, { useContext } from 'react'

import './BalanceBudget.css'

import { AppContext } from '../../context/AppContext';

export const BalanceBudget = () => {

      const { budget, expenses } = useContext(AppContext);

      const getTotalExpenses = () => {
            const totalExpenses = expenses.reduce((total, expense) => {
                  return total += expense.cost
            }, 0);

            return totalExpenses
      };

      return (
            <div className="balance-budget">
                  <div className="balance-budget-container">
                        <h2 className="balance-budget-container__title">Available remaining</h2>
                        <h2 className="total-remaining">${budget - getTotalExpenses()}</h2>
                  </div>
                  <div className="content">
                        <div className="total-budget">
                              <h3 className="total-budget__title">Budget</h3>
                              <p className="total-budget__amount">${budget}</p>
                        </div>
                        <div className="total-expenses">
                              <h3  className="total-expenses__title">Expenses</h3>
                              <p className="total-expenses__amount">${getTotalExpenses()}</p>
                        </div>
                  </div>
            </div>
      )
}
