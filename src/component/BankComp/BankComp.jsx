import React from "react";
import { useNavigate } from "react-router-dom";
import {NumericFormat} from 'react-number-format';
import './BankComp.css';

export const BankComp = (props) => {

    return (
        <div className="bank card-saldo">
            <h2>{props.data.bankName}</h2>
            <NumericFormat value={props.data.saldo} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
        </div>
    )
}

export const WalletsComp = (props) => {

    const navigate = useNavigate();
    const data = {id: props.data.walletName};
    
    return (
        <div className="wallets" onClick={() => navigate(`/detail-wallet/${props.data.walletName}`,{state: data})}>
            <div className="label">
                <h2>{props.data.walletName}</h2>
                <NumericFormat value={props.data.balance} displayType={'text'} thousandSeparator={true} prefix={'Rp'} className="balance"/>
            </div>

            <div className="icon"> 
                {/* <img src={require(`./../../../public/images/${props.data.icon}`)} alt="" className={props.data.walletName}/> */}
                <img src="" alt="" className={props.data.walletName}/>
            </div>
        </div>
    )
} 

export const WalletComp = (props) => {
    
    return (
        <div className="wallet" >
            <div className="label">
                <h2>{props.data.walletName}</h2>
                <NumericFormat value={props.data.balance} displayType={'text'} thousandSeparator={true} prefix={'Rp'} className="balance"/>
            </div>

            <div className="icon"> 
                {/* <img src={require(`./../../../public/images/${props.data.icon}`)} alt="" className={props.data.walletName}/> */}
                <img src="" alt="" className={props.data.walletName}/>
            </div>
        </div>
    )
}

export const BlankWalletComp = () => {

    const navigate = useNavigate();

    return (
        <div className="add-wallet" onClick={() => navigate('/add-wallet')}>
            <p>+</p>
        </div>
    )
}
