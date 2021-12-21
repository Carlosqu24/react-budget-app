import React from 'react'

import { Tabs, Tab } from 'react-bootstrap'
import { ExpenseForm } from '../ExpenseForm'
import { ExpenseList } from '../ExpenseList'

export const ActionsTab = () => {
      return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                  <Tab eventKey="home" title="All Expenses" className="fw-light">
                        <ExpenseList />
                  </Tab>
                  <Tab eventKey="profile" title="Add Expense" className="fw-light">
                        <ExpenseForm />
                  </Tab>
            </Tabs>
      )
}
