import React from 'react';

import AboutMeCard from './AboutMeCard';
import AboutMeMain from './AboutMeMain';
function AboutMeComponent() {
    return (
        <div className='about_me-wrapper mb' id="about">
            <AboutMeCard/>
            <AboutMeMain/>
        </div>

    );
}

export default AboutMeComponent;