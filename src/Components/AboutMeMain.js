import React from 'react';
import "../styles/AboutMeMain.css";
import htmlIcon from "../imgs/icons/html-icon.webp";
import cssIcon from "../imgs/icons/css-icon.png";
import javascriptIcon from "../imgs/icons/javascript-icon.png";
import vueIcon from "../imgs/icons/vue-icon.png";
import reactIcon from "../imgs/icons/react-icon.png";


import basketballIcon from "../imgs/icons/basketball-icon.png";
import swimIcon from "../imgs/icons/swim-icon.png";
import fitnessIcon from "../imgs/icons/fitness-icon.png";

import readingIcon from "../imgs/icons/reading-icon.png";
import gamingIcon from "../imgs/icons/gaming-icon.png";
import learningIcon from "../imgs/icons/learning-icon.png";

function AboutMeMain() {
    return (
        <div className="about-me_main">
            <div className='hobbies-wrapper mb'>
                <h1 className='hobby-title center title-mb'>My favorite hobbies</h1>
                <div className='hobby-content card-content'>
                    <div className='hobby card'>
                        <div className='hobby-icon about-me_icon'><img src={readingIcon}/></div>
                        <h3 className='hobby-title'>Reading</h3>
                        <p className='hobby-description'>At school, I often played basketball with my friends. I was one of the best players in high school. But unfortunately now I don't have enough time to get together with friends and play a couple of games 😥</p>
                    </div>
                    <div className='hobby card'>
                        <div className='hobby-icon about-me_icon'><img src={gamingIcon}/></div>
                        <h3 className='hobby-title'>Gaming</h3>
                        <p className='hobby-description'>At school, I often played basketball with my friends. I was one of the best players in high school. But unfortunately now I don't have enough time to get together with friends and play a couple of games 😥</p>
                    </div>
                    <div className='hobby card'>
                        <div className='hobby-icon about-me_icon'><img src={learningIcon}/></div>
                        <h3 className='hobby-title'>Learning</h3>
                        <p className='hobby-description'>At school, I often played basketball with my friends. I was one of the best players in high school. But unfortunately now I don't have enough time to get together with friends and play a couple of games 😥</p>
                    </div>
                </div>
            </div>
            <hr/>
            
            <div className='sport-wrapper mb'>
            <h1 className='sport-title center title-mb'>Sport</h1>
                <div className='sport-content card-content'>
                    <div className='sport card'>
                        <div className='sport-icon about-me_icon'><img src={basketballIcon}/></div>
                        <h3 className='sport-title'>Basketball</h3>
                        <p className='sport-description'>At school, I often played basketball with my friends. I was one of the best players in high school. But unfortunately now I don't have enough time to get together with friends and play a couple of games 😥</p>
                    </div>
                    <div className='sport card'>
                        <div className='sport-icon about-me_icon'><img src={swimIcon}/></div>
                        <h3 className='sport-title'>Swim</h3>
                        <p className='sport-description'>At school, I often played basketball with my friends. I was one of the best players in high school. But unfortunately now I don't have enough time to get together with friends and play a couple of games 😥</p>
                    </div>
                    <div className='sport card'>
                        <div className='sport-icon about-me_icon'><img src={fitnessIcon}/></div>
                        <h3 className='sport-title'>Fisportness</h3>
                        <p className='sport-description'>At school, I often played basketball with my friends. I was one of the best players in high school. But unfortunately now I don't have enough time to get together with friends and play a couple of games 😥</p>
                    </div>
                </div>
            </div>
            
            <hr/>
            <div className='skills-wrapper mb'>
                <h1 className='skills-title title-mb'>My Main Skills</h1>
                <div className='skills-content'>
                    <div className='skill '><span className='skill-perscription'>Html</span><div className='skill-icon '><img src={htmlIcon} /></div></div>
                    <div className='skill '><span className='skill-perscription'>Css</span><div className='skill-icon'><img src={cssIcon} /></div></div>
                    <div className='skill '><span className='skill-perscription'>JavaScript</span><div className='skill-icon'><img src={javascriptIcon} /></div></div>
                    <div className='skill '><span className='skill-perscription'>React</span><div className='skill-icon'><img src={reactIcon} /></div></div>
                    <div className='skill '><span className='skill-perscription'>Vue</span><div className='skill-icon'><img src={vueIcon} /></div></div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default AboutMeMain;