import React, { Component} from "react";
import axios from "axios";
import './Dashboard.css';
import { DoughnutChart } from "../../../component/chartsComp/chartsComp";
import { BankComp as BankComp, WalletsComp as WalletsComp } from "../../../component/BankComp/BankComp";


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
        dataWallets: [],
        dataCashflow: []
    }

    getBanksFromAPI = () => {
        axios.get('http://localhost:3010/banks')
        .then((res) => {

            this.setState({
                dataBank: res.data
            })

        }).catch((err) => {
            // console.log(err)
        })
    }

    getWalletsFromAPI = () => {
        axios.get('http://localhost:3010/wallets')
        .then((res) => {

            this.setState({
                dataWallets: res.data
            },() => {
                console.log(this.state.dataWallets)
            })
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
        this.getWalletsFromAPI();
    }

    render() {
        return (
            <div className="dashboard-container">
                

                {/* <div className="tab-btn">
                    <button className="active-tab">Budgeting</button>
                    <button>Spending</button>
                </div> */}

                <div className="chart">
                    <h1>Dashboard</h1>
                    <DoughnutChart data={this.state.dataChart}/>
                </div>

                <div className="bank-balance">
                    <h1>Banks Balance</h1>
                    <div className="banks">
                        {
                            this.state.dataBank.map((data) => {
                                return <BankComp key={data.id} data={data}/>
                            })
                        }
                    </div>
                </div>

                <div className="wallet-balance">
                    <h1>Wallet Balance</h1>
                    <div className="wallets-list">
                        {
                            this.state.dataWallets.map((data) => {
                                return <WalletsComp key={data.id} data={data}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;