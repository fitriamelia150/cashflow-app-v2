import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddCashflow from '../AddCashflow';
import { NavBar } from '../../components';

const MainApp = () => {
  return (
    <div>
        <NavBar/>

        <Routes>
            <Route path="/add-cashflow"  element={<AddCashflow/>} />
        </Routes>
        
        <p>Footer</p>
    </div>
  )
}

export default MainApp
