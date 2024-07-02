import react, { Component , Fragment} from 'react';
import Transaction from '../Transaction/Transaction';

class Home extends Component {
    render(){
        return (
            <Fragment>
                <Transaction/>
            </Fragment>
        )
    }
}

export default Home;