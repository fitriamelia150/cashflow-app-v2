import { Link } from 'react-router-dom';

import './NavBarComp.css';

const NavLinks = ({isClicked, closeMenu}) => {
    return(
        <nav className="NavLinks">
            <ul>
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
            </ul>
        </nav>
    )
}

export default NavLinks;