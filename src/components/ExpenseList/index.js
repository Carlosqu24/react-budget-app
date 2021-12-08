import React, { useContext } from 'react'

import './ExpenseList.css';

import { AppContext } from "../../context/AppContext"

export const ExpenseList = () => {

      const { expenses, deleteExpense } = useContext(AppContext);

      const handleClick = (id) => deleteExpense(id);

      return (
            <div className="expense-list">
                  {
                        expenses.map(({ cost, id, name }) => (
                              <div className="expense" key={id}>
                                    <h5 className="expense__title">{name}</h5>
                                    <div className="info">
                                          <span 
                                                className="expense__cost"
                                          >${cost}</span>

                                          <span
                                                className="delete"
                                                onClick={() => handleClick(id)}
                                          >
                                                Delete
                                          </span>
                                    </div>
                              </div>
                        ))
                  }
            </div>
      )
}
