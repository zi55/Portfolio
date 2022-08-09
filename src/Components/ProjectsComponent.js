import React from 'react';
import "../styles/ProjectsComponent.css";
function ProjectsComponent() {
    return (
        <div id="projects" className="projects-wrapper mb">
            <h1 className="projects-title title-mb">My Projects</h1>
            <div className="cols">
                <div className="col" onClick={(e)=>e.target.classList.toggle('hover')}>
                    <div className="container">
                        <div className="front a">
                            <div className="inner">
                                <p>Photo shooting</p>
                                <span>Click to visit it</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" onClick={(e)=>e.target.classList.toggle('hover')}>
                    <div className="container">
                        <div className="front b">
                            <div className="inner">
                                <p>Book shop</p>
                                <span>Click to visit it</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" onClick={(e)=>e.target.classList.toggle('hover')}>
                    <div className="container">
                        <div className="front c">
                            <div className="inner">
                                <p>Watch shop</p>
                                <span>Click to visit it</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col" onClick={(e)=>e.target.classList.toggle('hover')}>
                    <div className="container">
                        <div className="front d">
                            <div className="inner">
                                <p>Weather</p>
                                <span>Click to visit it</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="col" ontouchstart="this.classList.toggle('hover');">
                    <div className="container">
                        <div className="front" style="background-image: url(https://unsplash.it/504/504/">
                            <div className="inner">
                                <p>Rendann</p>
                                <span>Lorem ipsum</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" ontouchstart="this.classList.toggle('hover');">
                    <div className="container">
                        <div className="front" style="background-image: url(https://unsplash.it/505/505/)">
                            <div className="inner">
                                <p>Reflupper</p>
                                <span>Lorem ipsum</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" ontouchstart="this.classList.toggle('hover');">
                    <div className="container">
                        <div className="front" style="background-image: url(https://unsplash.it/506/506/)">
                            <div className="inner">
                                <p>Acirassi</p>
                                <span>Lorem ipsum</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" ontouchstart="this.classList.toggle('hover');">
                    <div className="container">
                        <div className="front" style="background-image: url(https://unsplash.it/508/508/)">
                            <div className="inner">
                                <p>Sohanidd</p>
                                <span>Lorem ipsum</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div> 
        </div>
    );
}

export default ProjectsComponent;