import React from 'react';
import "../styles/AboutMeCard.css";
function AboutMeCard() {
    return ( 
        <div className='about-info-wrapper mb'>
            <div className='left-info-block'>
                <div className='left-block-text'>
                    <h3 className='left-block-title'>About ME</h3>
                    <p className='left-block-description'>If want read some information about Me hover right picture</p>
                </div>
            </div>
            <div className='preinfo-block'>
                <div className="background-block">
                </div>
                <div className='about-info'>
                    <h2 className='about_me-title'>Hi, my name is Ilya</h2>
                    <h2 className='about_me-perscription center'>
                        So, thank you for visiting my Site, hope you enjoy it.
                    </h2>
                    <h4 className='about_me-preinfo center'>Here you can find some information about me</h4>
                    <p className='about_me-info'>
                        I am a young but very hardworking website developer.
                        I am Russian by nationality. I know 3 languages ​​well - Russian, German, English (together with Javascript, there are actually 4 of them 😊).
                        Working with me, be sure that you will get a high-quality product at the end, which will contain all the new subtleties and technologies of modern layout.
                        Just below you can see the rest of my work written in Vue, React, and just native JavaScript.
                    </p>
                    <input type="button" value="Other projects" className="projects-btn" data="about" />
                </div>
            </div>

        </div>
     );
}

export default AboutMeCard;