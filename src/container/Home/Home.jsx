import react, { Component , Fragment} from 'react';
// import Transaction from '../Transaction/Transaction';
// import Budget from '../Budget/Budget';
import Cashflow from '../Cashflow/Cashflow';

class Home extends Component {
    render(){
        return (
            <Fragment>
                {/* <Transaction/> */}
                {/* <Budget/> */}
                <Cashflow/>
            </Fragment>
        )
    }
}

export default Home;