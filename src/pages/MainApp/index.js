import React from 'react'
import { Routes, Route } from 'react-router-dom';

// components
import { NavBar } from '../../components';

//pages
import Home from '../Home';
import Dashboard from '../Dashboard';
import AddCashflow from '../AddCashflow';

const MainApp = () => {
  return (
    <>
        <NavBar/>

        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/add-cashflow"  element={<AddCashflow/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        
    </>
  )
}

export default MainApp
