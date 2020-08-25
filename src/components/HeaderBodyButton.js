import React from 'react';
import Button from './Button';
export default function HeaderBodyButton({text}){
    return <Button className="btn headerBody_btn headerBody_btn--center">{text}</Button>
}