import React, { Component, Fragment } from "react";
import axios from "axios";
import './Cashflow.css';
import CashflowComp from "../../../component/CashflowComp/CashflowComp";

class Cashflow extends Component {

    state = {
        data: []
    }

    getDataFromAPI = () => {
        axios.get(`https://cashflow-api-v1.vercel.app/v1/transactions?userId=1`)
        .then((res) => {
            
            this.setState({
                data: res.data.data
            })

        }, (err) => {
            console.log(err);
        })
    }

    componentDidMount(){
        this.getDataFromAPI();
    }

    render(){
        return (
            <Fragment>
                <div className="cashflow-container">
                    <h1>Here's your Cash Flow!</h1>

                    {this.state.data.length > 0 &&
                        this.state.data.map(data => {
                            return <CashflowComp key={data._id} data={data}/>
                        })
                    }
                    
                </div>
            </Fragment>
        )
    }
}

export default Cashflow;