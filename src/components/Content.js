import React, { Children } from 'react';
import '../stylesheets/layouts/_content.scss';
import contents from '../models/content_data.js';

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
        
    </main>;
}