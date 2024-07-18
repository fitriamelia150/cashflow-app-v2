import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CashflowComp from "../../CashflowComp/CashflowComp";
import axios from "axios";
import './DetailWallet.css';



const DetailWallet = (props) => {
    const location = useLocation();
    const walletName = location.state;

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3010/cashflow`);
                setData(response.data);
            }catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);

    console.log(walletName);

    return (
        <div className="cashflow-wallet">
            <nav>
                <div className="line1"></div>
                <div className="line2"></div>
            </nav>

            <h1>detail Wallet</h1>

            {data.map(data => {
                return <CashflowComp key={data.id} data={data}/>
            })}

        </div>
    )
    
}


export default DetailWallet

