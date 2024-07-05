import React, {Component, Fragment} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Budget.css';
// import BudgetComp from "../../component/BudgetComp/BudgetComp";
// import ButtonComp from "../../component/ButtonComp/ButtonComp";

class Budget extends Component {
    
    state = {
        budget : [],
        startDate: new Date(),
        formBudget : {
            userId: 1,
            id: 1,
            trxDate: '',
            bankFrom: '',
            bankTo: '',
            trxType: '',
            trxName: '',
            trxVia: '',
            trxAmount: 0,
            trxNote: '',
            trxColor: '#828EFF'
        }
    }
    

    postDataToAPI = () => {
        axios.post('http://localhost:3010/cashflow', this.state.formBudget)
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
        
        // copy semua property dari object formBudget
        let formBudgetNew = {...this.state.formBudget}
        
        //set id
        let timestamp = new Date().getTime();
        formBudgetNew['id'] = timestamp;

        //set property yang berubah
        formBudgetNew[event.target.name] = event.target.value;

        //set formBudget dengan value baru dari property yg berubah
        this.setState({
            formBudget: formBudgetNew
        });
    }

    handleDateChange = date => {
        this.setState({
          startDate: date
        });

        this.setState(prevState => ({
            formBudget: {
              ...prevState.formBudget,
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
                        <h1>Add your budgetting</h1>
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
                            <label htmlFor="trxType">Budget Type</label>
                            <select name="trxType" id="trxType" onChange={this.handleFormChange}>
                                <option value="-">-</option>
                                <option value="BUDGETING">Budgeting</option>
                                <option value="SAVING">Saving</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="bankTo">To Bank</label>
                            <select name="bankTo" id="bankTo" onChange={this.handleFormChange}>
                                <option value="-">-</option>
                                <option value="BCA">BCA</option>
                                <option value="BSI">BSI</option>
                                <option value="MANDIRI">MANDIRI</option>
                                <option value="HIJRA">HIJRA</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="trxName">Budget Name</label>
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
                                <option value="PULANG-KAMPUNG">PULANG KAMPUNG</option>
                                <option value="MOTOR">MOTOR</option>
                                <option value="SKINCARE">SKINCARE</option>
                                <option value="TRAVELING">TRAVELING</option>
                                <option value="ZAKAT">ZAKAT</option>
                                <option value="MARRIED">MARRIED</option>
                                <option value="SABUN-BULANAN">SABUN BULANAN</option>
                                <option value="BENSIN">BENSIN</option>
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

export default Budget;