import react, { Component , Fragment} from 'react';
// import Transaction from '../Transaction/Transaction';
// import Budget from '../Budget/Budget';
// import Cashflow from '../Cashflow/Cashflow';
import Dashboard from '../Dashboard/Dashboard';

class Home extends Component {
    render(){
        return (
            <Fragment>
                {/* <Transaction/> */}
                {/* <Budget/> */}
                {/* <Cashflow/> */}
                <Dashboard/>
            </Fragment>
        )
    }
}

export default Home;