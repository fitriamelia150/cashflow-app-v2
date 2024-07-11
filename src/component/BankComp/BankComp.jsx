import React from "react";
import './BankComp.css';
import {NumericFormat} from 'react-number-format';

export const BankComp = (props) => {

    return (
        <div className="bank">
            <h2>{props.data.bankName}</h2>
            <NumericFormat value={props.data.saldo} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
        </div>
    )
}

export const WalletComp = (props) => {

    return (
        <div className="wallet">
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
