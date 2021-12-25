import React from 'react'

import "./ActionsTab.css"

import { Tabs, Tab } from 'react-bootstrap'
import { ExpenseForm } from '../ExpenseForm'
import { ExpenseList } from '../ExpenseList'

export const ActionsTab = () => {
      return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="tabs">
                  <Tab eventKey="home" title="All Expenses" className="tab">
                        <ExpenseList />
                  </Tab>
                  <Tab eventKey="profile" title="Add Expense" className="tab">
                        <ExpenseForm />
                  </Tab>
            </Tabs>
      )
}
