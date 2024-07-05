import React, { Component} from "react";
import axios from "axios";
import './Dashboard.css';
import { DoughnutChart } from "../../component/chartsComp/chartsComp";
import BankComp from "../../component/BankComp/BankComp";


class Dashboard extends Component {

    state = {
        data:[],
        dataChart: [
            {
                label: '',
                value: 0
            }
        ],
        dataBank: [],
        dataCashflow: []
    }

    getBanksFromAPI = () => {
        axios.get('http://localhost:3010/banks')
        .then((res) => {

            this.setState({
                dataBank: res.data
            })

        }).catch((err) => {
            console.log(err)
        })
    }

    getDataFromAPI = () => {
        axios.get('http://localhost:3010/cashflow')
        .then((res) => {

            this.setState({
                data: res.data
            },() => {
                this.genDataChart();
            })
        })
    }

    genDataChart = () => {
        let spendingAmt = 0.0;
        let savingAmt = 0.0;
        let budgetAmt = 0.0;

        for(let i = 0; i < this.state.data.length; i++) {

            if(this.state.data[i].trxType === 'SPENDING') {
                spendingAmt += parseFloat(this.state.data[i].trxAmount);
            }

            if(this.state.data[i].trxType === 'SAVING') {
                savingAmt += parseFloat(this.state.data[i].trxAmount);
            }

            if(this.state.data[i].trxType === 'BUDGETING') {
                budgetAmt += parseFloat(this.state.data[i].trxAmount);
            }

        }

        this.setState({
            dataChart: [
                {
                    label: 'Spending',
                    value: spendingAmt
                },
                {
                    label: 'Saving',
                    value: savingAmt
                },
                {
                    label: 'Budgeting',
                    value: budgetAmt
                }
            ]
        },() => {
            // console.log(this.state.dataChart);
        })

        // console.log(spendingAmt, savingAmt, budgetAmt);
    }

    componentDidMount() {
        this.getBanksFromAPI();
        this.getDataFromAPI();
    }

    render() {
        return (
            <div className="dashboard-container">
                <h1>Dashboard</h1>
                <div className="chart">
                    <DoughnutChart data={this.state.dataChart}/>
                </div>

                <div className="bank-balance">
                <h1>Here's your saldo!</h1>
                    {
                        this.state.dataBank.map((data) => {
                            return <BankComp key={data.id} data={data}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Dashboard;