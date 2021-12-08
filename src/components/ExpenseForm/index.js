import React, { useState, useEffect, useContext } from 'react'

import { v4 as uuidv4 } from 'uuid';

import { AppContext } from '../../context/AppContext'

export const ExpenseForm = () => {
      const [expenseForm, setExpenseForm] = useState({});

      const { expenses, addExpense } = useContext(AppContext);

      useEffect(() => {
            setExpenseForm({
                  id: uuidv4()
            })
      }, [expenses]);

      const handleChange = (e) => setExpenseForm({ ...expenseForm, [e.target.name]: e.target.value});

      const handleSubmit = (e) => {
            e.preventDefault();
       
            const newExpense = {
                  id: expenseForm.id,
                  name: expenseForm.name,
                  cost: parseFloat(expenseForm.cost)
            };

            addExpense(newExpense);
      };

      return (
            <form 
                  className="form"
                  onSubmit={(e) => handleSubmit(e)}
            >
                  <div className="row d-flex flex-column justify-content-between">
                        <div className="col-sm col-lg-4">
                              <label htmlFor="name">Name</label>
                              <input 
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={handleChange} 
                              />
                        </div>
                        <div className="col-sm col-lg-4">
                              <label htmlFor="cost">Cost</label>
                              <input 
                                    type="text" 
                                    className="form-control"
                                    name="cost"
                                    onChange={handleChange} 
                              />
                        </div>

                        <div className="row mt-3">
                              <div className="col-sm">
                                    <button
                                          type="submit" 
                                          className="btn btn-primary"
                                    >
                                          Save
                                    </button>
                              </div>
                        </div>
                  </div>
            </form>
      )
}
