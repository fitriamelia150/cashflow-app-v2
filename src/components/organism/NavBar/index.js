import React, {useState} from 'react'
import './Navbar.css'
import { Logo, Hamburger } from '../../../assets'
import { lifesciences_v2beta } from 'googleapis';
const NavBar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(click ? false : true)

    const iconMenu = document.querySelector('.icon-menu');
    const line1 = iconMenu.firstChild;
    const line2 = iconMenu.childNodes[1];
    const line3 = iconMenu.lastChild;

    if(!click) {
      line1.style.transform = 'rotate(34deg)';
      line1.style.transformOrigin = 'left';
      line1.style.transition = '1s';
      line2.style.opacity = '0';
      line2.style.transition = '1s';
      line3.style.transform = 'rotate(-32deg)';
      line3.style.transformOrigin = 'left';
      line3.style.transition = '1s';
    }else{
      line1.style.transform = 'rotate(0)';
      line2.style.opacity = '1';
      line3.style.transform = 'rotate(0)';
    }

  }

  return (
      <nav>
        <Logo/>

        <div id='nav-menu' className={click ? '#nav-menu active' : '#nav-menu'}>
          <ul>
            <li><a href='/#'>Dashboard</a></li>
            <li><a href='/#'>Cashflow</a></li>
            <li><a href='/#'>Wallet</a></li>
            <li><a href='/#'>Profile</a></li>
            <li><a href='/#'>Logout</a></li>
          </ul>
        </div>

        <Hamburger onClick={handleClick}/>
      </nav>
  )
}

export default NavBar
