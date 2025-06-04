import React from 'react';
import "../styles/AboutMeMain.css";
import htmlIcon from "../imgs/icons/html-icon.webp";
import cssIcon from "../imgs/icons/css-icon.png";
import javascriptIcon from "../imgs/icons/javascript-icon.png";
import vueIcon from "../imgs/icons/vue-icon.png";
import reactIcon from "../imgs/icons/react.png";
import gitIcon from "../imgs/icons/github.png";
import pythonIcon from "../imgs/icons/python.png";
import javaIcon from "../imgs/icons/java.png";
import flutterIcon from "../imgs/icons/flag.png";
import mysqlIcon from "../imgs/icons/mysql-database.png";
import basketballIcon from "../imgs/icons/basketball-icon.png";
import swimIcon from "../imgs/icons/swim-icon.png";
// import fitnessIcon from "../imgs/icons/fitness-icon.png";

// import readingIcon from "../imgs/icons/reading-icon.png";
// import gamingIcon from "../imgs/icons/gaming-icon.png";
// import learningIcon from "../imgs/icons/learning-icon.png";

function AboutMeMain() {
    return (
        <div className="about-me_main">
            <div className='skills-wrapper mb'>
                <h1 className='skills-title title-mb'>Technical Skills</h1>
                <div className='skills-content'>
                    <div className='skill-category card'>
                        <h3 className='skill-category-title'>Web Development</h3>
                        <div className='skill-list'>
                            <div className='skill'><span className='skill-description'>HTML</span><div className='skill-icon'><img src={htmlIcon} /></div></div>
                            <div className='skill'><span className='skill-description'>CSS</span><div className='skill-icon'><img src={cssIcon} /></div></div>
                            <div className='skill'><span className='skill-description'>JavaScript</span><div className='skill-icon'><img src={javascriptIcon} /></div></div>
                            <div className='skill'><span className='skill-description'>React</span><div className='skill-icon'><img src={reactIcon} /></div></div>
                            <div className='skill'><span className='skill-description'>Vue</span><div className='skill-icon'><img src={vueIcon} /></div></div>
                        </div>
                    </div>

                    <div className='skill-category card'>
                        <h3 className='skill-category-title'>Other Technologies</h3>
                        <div className='skill-list'>
                            <div className='skill'><span className='skill-description'>Git</span><div className='skill-icon'><img src={gitIcon} /></div></div>
                            <div className='skill'><span className='skill-description'>MySQL</span><div className='skill-icon'><img src={mysqlIcon} /></div></div>
                            <div className='skill'><span className='skill-description'>Flutter</span><div className='skill-icon'><img src={flutterIcon} /></div></div>
                            <div className='skill'><span className='skill-description'>Python</span><div className='skill-icon'><img src={pythonIcon} /></div></div>
                            <div className='skill'><span className='skill-description'>Java</span><div className='skill-icon'><img src={javaIcon} /></div></div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <div className='sport-wrapper mb'>
                <h1 className='sport-title center title-mb'>Sports & Activities</h1>
                <div className='sport-content card-content'>
                    <div className='sport card'>
                        <div className='sport-icon about-me_icon'><img src={basketballIcon} /></div>
                        <h3 className='sport-title'>Basketball</h3>
                        <p className='sport-description'>I enjoy playing basketball as it helps me develop teamwork skills and strategic thinking. This sport taught me the importance of collaboration and quick decision-making under pressure.</p>
                    </div>
                    <div className='sport card'>
                        <div className='sport-icon about-me_icon'><img src={swimIcon} /></div>
                        <h3 className='sport-title'>Swimming</h3>
                        <p className='sport-description'>Swimming is my way to maintain physical fitness and mental clarity. It helps me stay disciplined and focused, which translates well into my approach to coding and problem-solving.</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default AboutMeMain;