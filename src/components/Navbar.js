import React from 'react';
import logo from '../images/logo.svg';
import hamburgerLogo from '../images/icon-hamburger.svg';
import '../stylesheets/components/_navbar.scss';
function Links(){
    const items = ["How we work","Blog"," Account","View plans"];
    return <ul class="nav_links">
       {items.map((item)=>{
           return <li class="nav_link"><a href={"#"+item}>{item}</a></li>
       })}
    </ul>
}
export default function NavBar (){
    return <nav class="nav">
        <img src={logo} alt="" class="nav_brand"></img>
        <img src={hamburgerLogo} alt="" class="nav_hamburgerMenu"></img>
    </nav>
}