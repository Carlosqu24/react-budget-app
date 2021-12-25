import React from 'react'

import "./ExpenseItem.css"

export const ExpenseItem = ({ id, name, cost, handleClick }) => {
      return (
            <div className="expense-item" key={id}>
                  <h5 className="expense-item__title">{name}</h5>
                  <div className="info">
                        <span
                              className="expense-item__cost"
                        >${cost}</span>

                        <span
                              className="delete"
                              onClick={() => handleClick(id)}
                        >
                              Delete
                        </span>
                  </div>
            </div>
      )
}
