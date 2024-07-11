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
            </ul>
        </nav>
    )
}

export default NavLinks;