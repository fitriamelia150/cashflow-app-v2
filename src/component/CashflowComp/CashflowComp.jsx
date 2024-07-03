import React from "react";
import {NumericFormat} from 'react-number-format';
import './CashflowComp.css';

const CashflowComp = (props) => {
    let date = props.data.trxDate.substring(0, 10);

    return (
        <div className="cashflow-list">
            <div className="label-cashflow">
                <div id="icon-triangle" 
                    className={props.data.trxType === 'SPENDING' ? "icon-triangle-up" : "icon-triangle-down"}
                    style={props.data.trxType === 'SPENDING' ? {borderBottomColor: props.data.trxColor} : {borderTopColor: props.data.trxColor}}
                    >

                </div>
                <div className="label-desc">
                    <p>{props.data.trxName}</p>
                    <span>{date}</span>
                </div>
            </div>
            <div className="label-amt">
                <NumericFormat value={props.data.trxAmount} displayType={'text'} thousandSeparator={true} prefix={'Rp'} style={{color: props.data.trxColor}}/>
            </div>
        </div>
        
    )
}


export default CashflowComp;