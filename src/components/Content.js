import React, { Children } from 'react';
import '../stylesheets/layouts/_content.scss';
import contents from '../models/content_data.js';
import Button from '../components/Button';
import bgPatternHww from '../images/bg-pattern-how-we-work-mobile.svg';
const ContentChild = (props)=>{
    return  <div className="contentChild">
        <img className="contentChild_img" src={props.img} alt=""></img>
        <h2 className="contentChild_title">{props.title}</h2>
        <p className="contentChild_text">{props.children}</p>
    </div>
}

export default function Content(){
    const titleContent = "We’re different";
    const contentChildItems = contents.map((item)=>
        <ContentChild img={item.icon} title={item.title}>{item.text}</ContentChild>
            );
    return <main className="content">
        <div className="contentLine"></div>
        <h1 className="contentTitle">{titleContent}</h1>
        {contentChildItems}
        <section className="contentSection">
            <img className="contentSectionImg" src={bgPatternHww} alt=""></img>
            <h1 className="contentSectionText">Find out more about how we work</h1>
            <Button text="How we work"></Button>
        </section>
    </main>;
}