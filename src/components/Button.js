import '../stylesheets/components/_button.scss';
import React from 'react';

/*export default function Button({text}){
return <button className=" contentSection_btn contentSection_btn--center btn">{text}</button>
}*/
export default function Button(props){
    {console.log(props.className);}
return <button className={props.className}>{props.children}</button>
}

