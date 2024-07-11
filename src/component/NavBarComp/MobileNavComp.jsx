import NavLinks from "./NavLinksComp";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import './NavBarComp.css';


const MobileNav = () => {
    const [click, setClick] = useState(false);
    const headProfile = document.getElementById('head-profile');
    // const homeContainer = document.getElementById('home-container');


    const Hamburger = <MdOutlineMenu className="hamburgerMenu" size="30px" color="black" onClick={() => {
        
        setClick(!click)
        // homeContainer.classList.add('menu-open');
        headProfile.classList.add('menu-open');

    }}/>

    const close = <MdClose className="hamburgerMenu" size="30px" color="black" onClick={() => {
        
        setClick(!click)
        // homeContainer.classList.remove('menu-open');
        headProfile.classList.remove('menu-open');

    }}/>

    const closeMenu = () => {
        setClick(false)
        headProfile.classList.remove('menu-open');
    };

    return(
        <nav className="MobileNavigation">
            { click ? close : Hamburger}
            {click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
        </nav>
    )
}

export default MobileNav;