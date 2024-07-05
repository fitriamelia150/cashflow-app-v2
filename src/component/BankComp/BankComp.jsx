import React from "react";
import './BankComp.css';
import {NumericFormat} from 'react-number-format';

const BankComp = (props) => {

    return (
        <div className="bank">
            <h2>{props.data.bankName}</h2>
            <NumericFormat value={props.data.saldo} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
        </div>
    )
}

export default BankComp;