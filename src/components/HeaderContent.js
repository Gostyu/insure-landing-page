import React from 'react';
import '../stylesheets/components/_headerContent.scss';
import Button from '../components/Button';
import imageIntro from '../images/image-intro-mobile.jpg';
import bgPatternIntroRight from '../images/bg-pattern-intro-right-mobile.svg';
import bgPatternIntroLeft from '../images/bg-pattern-intro-left-mobile.svg';
const textBtn = "View plans";
function HeaderBody(){
    return <section className="headerBody">
    <img src={bgPatternIntroLeft} alt="" className=""/>
    <div className="headerBody_content">
    <h1 className="headerBody_title">Humanizing your insurance.</h1>
    <p className="headerBody_text"> 
    Get your life insurance coverage easier and faster. We blend our expertise 
and technology to help you find the plan that’s right for you. Ensure you 
and your loved ones are protected.
    </p>
    <Button text={textBtn.toLocaleUpperCase()}></Button>
    </div>
    <img src={bgPatternIntroRight} alt="" className="headerBody_bgPatternIntroRight"/>
</section>
}
export default function HeaderContent(){
    return <div className="headerContent">
       <div><img src={imageIntro} className="headerContent_imgIntro"/>
       </div>
        <HeaderBody></HeaderBody>
    </div>;
}