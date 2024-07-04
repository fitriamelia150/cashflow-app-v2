import React, { Component} from "react";
import './Dashboard.css';
import { DoughnutChart } from "../../component/chartsComp/chartsComp";


class Dashboard extends Component {

    state = {
        dataChart:[],
        dataBank: [],
        dataCashflow: []
        
    }

    render() {
        return (
            <div className="dashboard-container">
                <h1>Dashboard</h1>
                <div className="chart">
                    <DoughnutChart/>
                </div>
                <div className="bank-balance">
                    
                </div>
            </div>
        );
    }
}

export default Dashboard;