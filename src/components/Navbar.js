import React from 'react';
import logo from '../images/logo.svg';
import hamburgerLogo from '../images/icon-hamburger.svg';
import '../stylesheets/components/_navbar.scss';
export default function NavBar (){

    return <nav class="nav">
        <img src={logo} alt="" class="nav_brand"></img>
        <img src={hamburgerLogo} alt=""></img>
    </nav>
}