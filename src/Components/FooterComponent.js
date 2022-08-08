import React from 'react';
import "../styles/FooterComponent.css";
import { AiFillGithub } from "react-icons/ai";
import { ImTelegram } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import EmailComponent from './EmailComponent';
function FooterComponent() {
    return ( 
        <div className='footer'>
            <h1 className='center'>Contact Me</h1>
            <EmailComponent/>
            <ul>
                <li>
                    <span className='icon'><ImTelegram className='footer-icon'/></span>
                    <span className='title'>Telegram</span>
                </li>
                <li>
                    <span className='icon'><BsInstagram className='footer-icon'/></span>
                    <span className='title'>Instagram</span>
                </li>
                <li>
                    <span className='icon'><GrFacebook className='footer-icon'/></span>
                    <span className='title'>Facebook</span>
                </li>
                <li>
                    <span className='icon'><AiFillGithub className='footer-icon'/></span>
                    <span className='title'>GitHub</span>
                </li>
            </ul>
        </div>
     );
}

export default FooterComponent;