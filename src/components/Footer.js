import React, { Fragment } from 'react';
import logo from '../images/logo.svg';
import bgPatternFooterMobile from '../images/bg-pattern-footer-mobile.svg';
import bgPatternFooterDesktop from '../images/bg-pattern-footer-desktop.svg';
import '../stylesheets/layouts/_footer.scss';
import {contents,socialIcons} from '../models/footer_data';
function FooterSectionItems(){
    return <Fragment>
         {contents.map((item)=>{ 
            return <Fragment>
            <h1 className="footerSectionItemTitle">{item.title}</h1>
            <ul className="footerSectionItemLinks">
                {item.links.map((link)=>{
                    return <li className="footerSectionItemLink"><a href="#">{link}</a></li>
                })}
            </ul>
       </Fragment>
         })}
    </Fragment>
}
function FooterSection(props){
    return <section className={props.className}>
       <FooterSectionItems/>
    </section>
}

export default function Footer(props){

    return <footer className="footer">
       <div className="footerHeader">
        <img className="footerbgPatternFooterMobile" src={bgPatternFooterMobile} alt=""></img>
             <img src={logo} alt="" className="footerImg"></img>
                <ul className="footerSocialMedias">
                {socialIcons.map((icon)=>{
                    return  <li className="footerSocialMediasLink"><a href="#"><img src={icon}/></a></li>
                })}
                </ul>
                </div>
        <div className="footerDivider"></div>
        <FooterSection className="footerSection"></FooterSection>
    </footer>;
}