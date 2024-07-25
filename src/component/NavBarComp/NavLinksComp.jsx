import { Link, useNavigate } from 'react-router-dom';

import './NavBarComp.css';

let latestMenu = "" ;
let idMenu = "";

const NavLinks = ({isClicked, closeMenu}) => {
    const navigate = useNavigate();

    const clickMenu = (id) => {

        switch(id) {
            case 'home':
                idMenu = "nav-home";
                break;

            case 'dashboard':
                idMenu = "nav-dashboard";
                break;

            case 'cashflow':
                idMenu = "nav-cashflow";
                break;

            case 'card':
                idMenu = "nav-card";
                break;
            
            case 'add':
                idMenu = "nav-add";
                break;

            default:
                break;

        }

        if ((latestMenu !== idMenu) && (latestMenu !== "")) {
            const selectedMenu = document.getElementById(latestMenu);
            selectedMenu.classList.remove('selected');
        }

        if (idMenu !== "") {
            latestMenu = idMenu;
            const selectedMenu = document.getElementById(idMenu);
            selectedMenu.classList.add('selected');
        }

    }

    return(
        <nav className="NavLinks">
            {/* <ul>
                <li>
                    <Link to="/" onClick={() => closeMenu()}>Home</Link>
                </li>
                <li>
                    <Link to="/dashboard" onClick={() => closeMenu()}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/cashflow" onClick={() => closeMenu()}>Cashflow</Link>
                </li>
                <li>
                    <Link to="/budget" onClick={() => closeMenu()}>Add Budget</Link>
                </li>
                <li>
                    <Link to="/transaction" onClick={() => closeMenu()}>Add Transaction</Link>
                </li>
            </ul> */}
            <div id="nav-home" className="nav" onClick={() => {navigate('/'); clickMenu('home')}}>
                <img src="" alt="home-icon" className='home-icon'/>
            </div>

            <div id="nav-dashboard" className="nav" onClick={() => {navigate('dashboard'); clickMenu('dashboard')}}>
                <img src="" alt="dashboard-icon" className='dashboard-icon'/>
            </div>

            <div id="nav-mid" className="nav-mid">
                <img src="" alt="add-icon" className='add-icon'/>
            </div>

            <div id="nav-card" className="nav">
                <img src="" alt="card-icon" className='card-icon'/>
            </div>

            <div id="nav-cashflow" className="nav" onClick={() => {navigate('cashflow'); clickMenu('cashflow')}}>
                <img src="" alt="cashflow-icon" className='cashflow-icon'/>
            </div>
        </nav>
    )
}

export default NavLinks;