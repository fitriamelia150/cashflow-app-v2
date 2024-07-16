import React, { Component, Fragment } from "react";
import axios from "axios";
import './Cashflow.css';
import CashflowComp from "../../../component/CashflowComp/CashflowComp";

class Cashflow extends Component {

    state = {
        data: []
    }

    getDataFromAPI = () => {
        axios.get('http://localhost:3010/cashflow')
        .then((res) => {
            
            this.setState({
                data: (res.data).sort((a, b) => b.id - a.id)
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

                    { this.state.data.map(data => {
                        return <CashflowComp key={data.id} data={data}/>
                    })}
                    
                </div>
            </Fragment>
        )
    }
}

export default Cashflow;