import React, { useState, useContext } from 'react'

import { AppContext } from '../../context/AppContext'

export const Budget = () => {
      const [form, setForm] = useState(null);

      const { budget, setBudget } = useContext(AppContext)

      const handleInputChange = (e) => {
            // setForm({ ...form, [e.target.name]: e.target.value })
            setForm(e.target.value)
      }

      const handleSubmit = (e) => {
            e.preventDefault()

            setBudget(form)
            setForm('')
      }


      return (
            <form onSubmit={(e) => handleSubmit(e)}>
                  <h2>Budget</h2>

                  <p className="mb-3">Current budget: ${ budget }</p>

                  <input 
                        type="number"
                        name="budget"
                        className="form-control mb-3"
                        placeholder="Example: 2500" 
                        value={form}
                        onChange={handleInputChange}
                  />

                  <button
                        type="submit"
                        className="btn btn-save-expnse"
                  >Set Budget</button>
            </form>
      )
}
