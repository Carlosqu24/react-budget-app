import React from 'react'

import "./ActionsTab.css"

import { Tabs, Tab } from 'react-bootstrap'
import { ExpenseForm } from '../ExpenseForm'
import { ExpenseList } from '../ExpenseList'
import { Budget } from '../Budget'

export const ActionsTab = () => {
      return (
            <Tabs defaultActiveKey="expenses" id="uncontrolled-tab-example" className="tabs">
                  <Tab eventKey="expenses" title="All Expenses" className="tab">
                        <ExpenseList />
                  </Tab>
                  <Tab eventKey="add-expense" title="Add Expense" className="tab">
                        <ExpenseForm />
                  </Tab>
                  <Tab eventKey="budget" title="Budget" className="tab">
                        <Budget />
                  </Tab>
            </Tabs>
      )
}
