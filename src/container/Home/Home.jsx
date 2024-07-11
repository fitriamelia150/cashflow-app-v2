import React, { Component , Fragment} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Transaction from '../Transaction/Transaction';
import Budget from '../Budget/Budget';
import Cashflow from '../Cashflow/Cashflow';
import Dashboard from '../Dashboard/Dashboard';
import Main from '../Main/Main';
import NavBar from '../../component/NavBarComp/NavBarComp';
import './Home.css';

class Home extends Component {
    render(){
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="header">
                        <div id="head-profile" className="head-profile">
                            <div className="profile-avatar">
                                {/* <img src="" alt="" /> */}
                            </div>

                            <div className="profile-label">
                                <h1 className="label-1">Hello !</h1>
                                <h1 className="label-2">Fitri Amelia</h1>
                            </div>
                        </div>
                        <NavBar/>
                    </div>

                    <div id="home-container" className="home-container">    
                        <Routes>
                            <Route path="/" exact element={<Main/>}/>
                            <Route path="/dashboard" element={<Dashboard/>}/>
                            <Route path="/cashflow" element={<Cashflow/>}/>
                            <Route path="/budget" element={<Budget/>}/>                        
                            <Route path="/transaction" element={<Transaction/>}/>
                        </Routes>
                    </div>

                </Fragment>

            </BrowserRouter>
        )
    }
}

export default Home;