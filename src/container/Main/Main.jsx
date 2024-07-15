import React, { Component} from "react";
import { Link } from 'react-router-dom';
import { WalletComp } from "../../component/BankComp/BankComp";
import axios from "axios";
import './Main.css';

class Main extends Component {

    state = {
        dataWallets: []
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

    componentDidMount() {
        this.getWalletsFromAPI();
    }

    render() {
        return (
            <div className="main-container">

                <div className="card-saldo">
                    <h2>Rp. 300,000,000</h2>
                </div>

                <div className="wallets">
                    <div className="wallet-label">
                        <p className="label-1">Wallets Balance</p>
                        <p className="label-2">See all</p>
                    </div>

                    <Link to="/cashflow-wallet/1" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="wallet-card" onClick={() => console.log('clicked')}>
                            {
                                this.state.dataWallets.map((data) => {
                                    return <WalletComp key={data.id} data={data}/>
                                })
                            }
                        </div>
                    </Link>
                </div>

            </div>
        )
    }
}

export default Main;