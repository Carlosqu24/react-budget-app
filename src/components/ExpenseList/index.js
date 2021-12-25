import React, { useContext } from 'react'

import './ExpenseList.css';

import { AppContext } from "../../context/AppContext"
import { ExpenseItem } from '../ExpenseItem';

export const ExpenseList = () => {

      const { expenses, deleteExpense } = useContext(AppContext);

      const handleClick = (id) => deleteExpense(id);

      return (
            <div className="expense-list">
                  {
                        expenses.map(({ cost, id, name }) => (
                              <ExpenseItem
                                    id={id}
                                    cost={cost}
                                    name={name}
                                    handleClick={handleClick}
                              />
                        ))
                  }
            </div>
      )
}
