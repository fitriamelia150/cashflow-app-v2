//libraries
import React, { Component , Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route, withRouter } from 'react-router-dom';

//pages
import Transaction from '../Pages/Transaction/Transaction';
import Budget from '../Pages/Budget/Budget';
import Cashflow from '../Pages/Cashflow/Cashflow';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Main from '../Pages/Main/Main';
import NavBar from '../../component/NavBarComp/NavBarComp';
import DetailWallet from '../Pages/DetailWallet/DetailWallet';
import Banks from '../Pages/Banks/Banks';
import AddBank from '../Pages/AddBank/AddBank';
import AddWallet from '../Pages/AddWallet/AddWallet';

//style
import './Home.css';

class Home extends Component {


    render(){
        return (
            <Router>
                <Fragment>

                    <div id="home-container" className="home-container">    
                        <Routes>
                            <Route path="/" exact element={<Main/>}/>
                            <Route path="/dashboard" element={<Dashboard/>}/>
                            <Route path="/cashflow" element={<Cashflow/>}/>
                            <Route path="/detail-wallet/:id" element={<DetailWallet/>}/>
                            <Route path="/budget" element={<Budget/>}/>                        
                            <Route path="/transaction" element={<Transaction/>}/>
                            <Route path="/banks" element={<Banks/>}/>
                            <Route path="/add-wallet" element={<AddWallet/>}/>
                            <Route path="/add-bank" element={<AddBank/>}/>
                        </Routes>
                    </div>

                    <div className="footer">
                        <NavBar/>
                    </div>

                </Fragment>

            </Router>
        )
    }
}

export default Home;