import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CashflowComp from "../../../component/CashflowComp/CashflowComp";
import {WalletComp as WalletComp} from "../../../component/BankComp/BankComp";
import axios from "axios";
import './DetailWallet.css';



const DetailWallet = () => {
    const location = useLocation();
    const walletName = location.state.id;

    const [data, setData] = useState([]);
    const [wallet, setWallet] = useState([]);

    useEffect(() => {
        console.log(walletName);

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://cashflow-api-v1.vercel.app/v1/transaction?trxName=${walletName}`);
                setData(response.data.data);

                const response2 = await axios.get(`https://cashflow-api-v1.vercel.app/v1/wallets?walletName=${walletName}`);
                setWallet(response2.data.data);
            }catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);


    return (
        <div className="cashflow-wallet">
            <div className="card-wallet">
                {wallet.length > 0 &&
                    wallet.map(data => {
                        return <WalletComp key={data.id} data={data}/>
                    })
                }
            </div>

            <div className="list">
                {data.length > 0 &&
                    data.map(data => {
                        return <CashflowComp key={data.id} data={data}/>
                    })
                }
            </div>

        </div>
    )
    
}


export default DetailWallet

