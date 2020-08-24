import React from 'react';
import '../stylesheets/components/_headerContent.scss';
import Button from '../components/Button';
import imageIntro from '../images/image-intro-mobile.jpg';
function HeaderBody(){
    return <section>
    <h1>Humanizing your insurance.</h1>
    <p> Get your life insurance coverage easier and faster. We blend our expertise 
and technology to help you find the plan that’s right for you. Ensure you 
and your loved ones are protected.
    </p>
    <Button text="View plans"></Button>
</section>
}
export default function HeaderContent(){
    return <div class="headerContent">
        <img src={imageIntro}></img>
        <HeaderBody></HeaderBody>
    </div>;
}