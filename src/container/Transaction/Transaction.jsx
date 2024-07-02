import React, {Component, Fragment} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Transaction.css';
// import TransactionComp from "../../component/TransactionComp/TransactionComp";
// import ButtonComp from "../../component/ButtonComp/ButtonComp";

class Transaction extends Component {
    
    state = {
        transaction : [],
        startDate: new Date(),
        formTransaction : {
            userId: 1,
            id: 1,
            trxDate: '',
            bankFrom: '',
            trxType: '',
            trxName: '',
            trxVia: '',
            trxAmount: 0,
            trxNote: ''
        }
    }
    

    postDataToAPI = () => {
        axios.post('http://localhost:3030/cashflow', this.state.formTransaction)
        .then((res) => {
            console.log(res.data);
        }, (err) => {
            console.log(err);
        })
    }

    handleSubmit = () => {
        this.postDataToAPI();
    }


    handleFormChange = (event) => {
        
        // copy semua property dari object formTransaction
        let formTransactionNew = {...this.state.formTransaction}

        //set property yang berubah
        formTransactionNew[event.target.name] = event.target.value;

        //set formTransaction dengan value baru dari property yg berubah
        this.setState({
            formTransaction: formTransactionNew
        });
    }

    handleDateChange = date => {
        this.setState({
          startDate: date
        });

        this.setState(prevState => ({
            formTransaction: {
              ...prevState.formTransaction,
              trxDate: date
            }
        }));
    };

    render(){

        return (
            <Fragment>
                <div className="container">
                    <img src="" alt="" />
                    <div className="form">
                        <h1>Add your transactions</h1>
                        <div className="input-box">
                            <label htmlFor="trxDate">Date</label>
                            <DatePicker dateFormat={"dd / MM / yyyy"} selected={this.state.startDate} onChange={this.handleDateChange} className="datePicker"/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="bankFrom">From Bank</label>
                            <select name="bankFrom" id="bankFrom" onChange={this.handleFormChange}>
                                <option value="-">-</option>
                                <option value="BCA">BCA</option>
                                <option value="BSI">BSI</option>
                                <option value="MANDIRI">MANDIRI</option>
                                <option value="HIJRA">HIJRA</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="trxVia">Transaction Via</label>
                            <select name="trxVia" id="trxVia" onChange={this.handleFormChange}>
                                <option value="-">-</option>
                                <option value="QR">QR</option>
                                <option value="TF">TF</option>
                                <option value="VA">VA</option>
                                <option value="TT">TT</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="trxType">Transaction Type</label>
                            <select name="trxType" id="trxType" onChange={this.handleFormChange}>
                                <option value="-">-</option>
                                <option value="SPENDING">Spending</option>
                                <option value="SAVING">Saving</option>
                                <option value="BA">Biaya Admin</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="trxName">Transaction Name</label>
                            <select name="trxName" id="trxName" onChange={this.handleFormChange}>
                                <option value="-">-</option>
                                <option value="KESEHATAN">KESEHATAN</option>
                                <option value="HOME">HOME</option>
                                <option value="KOST">KOST</option>
                                <option value="LAUNDRY">LAUNDRY</option>
                                <option value="PAKET-DATA">PAKET DATA</option>
                                <option value="MAKAN">MAKAN</option>
                                <option value="JAJAN">JAJAN</option>
                                <option value="BPJS">BPJS</option>
                                <option value="BELANJA">BELANJA</option>
                                <option value="EMERGENCY">EMERGENCY</option>
                                <option value="KLINIK">KLINIK</option>
                                <option value="GOPAY">GOPAY</option>
                                <option value="TAPCASH">TAPCASH</option>
                                <option value="ASTRO-GOODS">ASTRO GOODS</option>
                                <option value="BENSIN">BENSIN</option>
                                <option value="PULANG-KAMPUNG">PULANG KAMPUNG</option>
                                <option value="MOTOR">MOTOR</option>
                                <option value="SKINCARE">SKINCARE</option>
                                <option value="TRAVELING">TRAVELING</option>
                                <option value="ZAKAT">ZAKAT</option>
                                <option value="MARRIED">MARRIED</option>
                                <option value="SABUN-BULANAN">SABUN BULANAN</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="trxAmount">Amount</label>
                            <input type="text" name="trxAmount" id="trxAmount" onChange={this.handleFormChange}/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="trxNote">Notes</label>
                            <textarea type="text" name="trxNote" id="trxNote" onChange={this.handleFormChange}/>
                        </div>

                        <button onClick={this.handleSubmit}>submit</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Transaction;