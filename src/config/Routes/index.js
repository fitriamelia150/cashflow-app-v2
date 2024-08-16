import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, MainApp } from '../../pages';

const AllRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login"  element={<Login/>} />
                <Route path="/register"  element={<Register/>} />
                <Route path="*" exact element={<MainApp/>} />
            </Routes>
        </Router>
    )
}

export default AllRoute;