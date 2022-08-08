import { React, NavLink } from 'react';
import "../styles/Navigation.css"
function Navigation() {
    return (
        <div className='nav mb'>
            <div className='logo__block'>
                {/* <img src="#" /> */}
                <h2 className='nav-title'>My Page</h2>
            </div>


            <ul className='nav_list'>
                <li className='nav_item'>About me</li>
                <li className='nav_item'>Others projects</li>
                <li className='nav_item'>Contact me</li>
            </ul>
        </div >
    );
}
<script>

</script>

export default Navigation;