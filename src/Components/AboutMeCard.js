import React from 'react';
import "../styles/AboutMeCard.css";

function AboutMeCard() {
    return (
        <div className='about-info-wrapper mb'>
            <div className='left-info-block'>
                <div className='left-block-text'>
                    <h3 className='left-block-title'>About Me</h3>
                    <p className='left-block-description'>Hover over the image to learn more about my background and experience</p>
                </div>
            </div>
            <div className='preinfo-block'>
                <div className="background-block">
                </div>
                <div className='about-info'>
                    <h2 className='about_me-title'>Hi, I'm Ilya</h2>
                    <h2 className='about_me-description center'>
                        Frontend Developer passionate about creating modern web applications
                    </h2>
                    <h4 className='about_me-preinfo center'>Welcome to my portfolio</h4>
                    <p className='about_me-info'>
                        I am a dedicated frontend developer with strong expertise in modern web technologies. 
                        I specialize in creating responsive, user-friendly applications using React, Vue.js, and vanilla JavaScript. 
                        My technical background includes proficiency in HTML, CSS, and JavaScript, along with experience in mobile development using Flutter.
                        I am fluent in Russian, German, and English, which enables me to work effectively in international teams.
                        I am committed to delivering high-quality, maintainable code and staying current with the latest industry trends and best practices.
                    </p>
                    <a id="btn" href="#projects">View My Projects</a>
                </div>
            </div>
        </div>
    );
}

export default AboutMeCard;