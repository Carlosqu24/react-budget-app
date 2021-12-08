import React, { useContext } from 'react'

import './Budget.css';

import { AppContext } from '../../context/AppContext';

export const Budget = () => {

      const { budget } = useContext(AppContext);

      return (
            <div className="budget">
                  <p>Total Budget: {budget}</p>
                  <button className="btn btn-primary">Set</button>
            </div>
      )
}
