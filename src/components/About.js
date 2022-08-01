import React from "react";
import "../Style/About.css";
import IconImage from "../Img/sticker.webp";
import '../Animation/Animation.js';
export default function NavBar() {
  return (
    <div className="About-container-block reveal">
      <div className="Img-block">
        <img className="My-icon-img" src={IconImage} />
      </div>
      <div>
        <ul className="wrapper">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <span>
              <i className="bx bxl-facebook facebook"></i>
            </span>
          </li>
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <span>
              <i className="bx bxl-twitter twitter"></i>
            </span>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span>
              <i className=" bx bxl-instagram instagram"></i>
            </span>
          </li>
          <li className="icon github">
            <span className="tooltip">Github</span>
            <span>
              <i className="bx bxl-github github"></i>
            </span>
          </li>
          <li className="icon youtube">
            <span className="tooltip">Youtube</span>
            <span>
              <i className="bx bxl-youtube youtube"></i>
            </span>
          </li>
          
        </ul>
      </div>
      <div>
        <p className="p-text-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          exercitationem cumque officia, nisi veniam aut laboriosam rem
          consequatur cum et tempore nam sit, repellat suscipit vero quasi
          omnis! Assumenda dignissimos animi, voluptate libero eius totam
          obcaecati ipsum quas consectetur expedita suscipit est commodi officia
          accusantium inventore porro consequatur, cum repudiandae?
        </p>
      </div>
      <div className="flex-block">
        <div className="button" id="button-2">
          <div id="slide"></div>
          <a className="About-p" >Contact Me</a>
        </div>
      </div>
    </div>
  );
}
