import React, { Component } from "react";
import { WalletComp } from "../../../component/BankComp/BankComp";
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

        const header = document.querySelector('.header');
        header.style.display = 'flex';
    }

    hideHeader = () => {
        const header = document.querySelector('.header');
        console.log(header);
        header.style.display = 'none';
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

                    <div className="wallet-card" onClick={this.hideHeader}>
                        {
                            this.state.dataWallets.map((data) => {
                                return <WalletComp key={data.id} data={data}/>
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default Main;