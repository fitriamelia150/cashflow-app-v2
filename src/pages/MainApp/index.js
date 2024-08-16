import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddCashflow from '../AddCashflow';

const MainApp = () => {
  return (
    <div>
        <p>Header</p>
            <Routes>
                <Route path="/add-cashflow"  element={<AddCashflow/>} />
            </Routes>
        <p>Footer</p>
    </div>
  )
}

export default MainApp
