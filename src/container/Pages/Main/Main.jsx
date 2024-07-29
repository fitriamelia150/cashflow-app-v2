import React, { Component } from "react";
import { WalletsComp } from "../../../component/BankComp/BankComp";
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

        // const header = document.querySelector('.header');
        // header.style.display = 'flex';
    }

    // hideHeader = () => {
    //     const header = document.querySelector('.header');
    //     console.log(header);
    //     header.style.display = 'none';
    // }

    render() {
        return (
            <div className="main-container">

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
                </div>

                <div class="card-saldo">
                    <p>Your current saldo</p>
                    <div class="icon"></div>
                    <p>$ 200.00</p>
                </div>

                <div className="main-wallet">
                    <div className="wallet-label">
                        <p className="label-1">Wallets Balance</p>
                        <p className="label-2">See all</p>
                    </div>

                    {/* <div className="wallet-card" onClick={this.hideHeader}> */}
                    <div className="wallet-card">
                        {
                            this.state.dataWallets.map((data) => {
                                return <WalletsComp key={data.id} data={data}/>
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default Main;