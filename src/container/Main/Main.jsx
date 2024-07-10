import React, { Component} from "react";
import axios from "axios";
import CashflowComp from "../../component/CashflowComp/CashflowComp";
import './Main.css';

class Main extends Component {

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

    render() {
        return (
            <div className="main-container">
                {/* <div className="head-profile">
                    <div className="profile-avatar">
                        <img src="" alt="" />
                    </div>

                    <h1>Hi, User</h1>
                </div> */}

                <div className="card-saldo">
                    <h2>Rp. 300,000,000</h2>
                </div>

                <div className="history-label">
                    <p>Activities</p>
                    <p>See All</p>
                </div>

                <div className="history">

                    { 
                        this.state.data.map(data => {
                            return <CashflowComp key={data.id} data={data}/>
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default Main;