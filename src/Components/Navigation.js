import React,{ useState } from 'react';
import "../styles/Navigation.css"
function Navigation() {
        const [isActive, setIsAcive]= useState(false)
        let toggleMenu = () => {
            setIsAcive(!isActive);
            // const menu = document.querySelector('.nav_list');
        }

    return (
        <div className='nav mb'>
            <div className='logo__block'>
                {/* <img src="#" /> */}
                <h2 className='nav-title'>Portfolio</h2>
            </div>
            <ul className={isActive ? 'active nav_list ':'nav_list'}>
                <li  className='nav_item' onClick={toggleMenu}><a href="#about">About me</a></li>
                <li  className='nav_item' onClick={toggleMenu}><a href="#projects">Others projects</a></li>
                <li  className='nav_item' onClick={toggleMenu}><a href="#contact">Contact me</a></li>
            </ul>
            <div className="burger" onClick={toggleMenu}>
                <span className="burger-item"></span>
                <span className="burger-item close-item"></span>
                <span className="burger-item"></span>
            </div>
        </div >
    );
}
<script>

</script>

export default Navigation;