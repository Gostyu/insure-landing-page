import '../stylesheets/components/_button.scss';
import React from 'react';

export default function Button({text}){
return <button className="headerBody_btn headerBody_btn--center btn">{text}</button>
}