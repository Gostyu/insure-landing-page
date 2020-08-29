import '../stylesheets/components/_button.scss';
import React from 'react';

export default function Button(props){
    // {console.log(props.className);}
return <button className={props.className}>{props.children}</button>
}

