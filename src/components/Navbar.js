import React from 'react';
import logo from '../images/logo.svg';
import hamburgerLogo from '../images/icon-hamburger.svg';
import '../stylesheets/components/_navbar.scss';
function Links(){
    const items = ["How we work","Blog"," Account","View plans"];
    return <ul className="nav_links">
       {items.map((item)=>{
           return <li className="nav_link"><a href={"#"+item}>{item}</a></li>
       })}
    </ul>
}
export default function NavBar (){
    return <nav className="nav">
        <img src={logo} alt="" className="nav_brand"></img>
        <img src={hamburgerLogo} alt="" className="nav_hamburgerMenu"></img>
    </nav>
}