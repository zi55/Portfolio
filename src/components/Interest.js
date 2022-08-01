import React from "react";
import "../Style/Interest.css";
// import "../Style/InterestCard.css";
// import '../components/Animation'
import '../Animation/Animation.js'

export default function NavBar() {
  return (
    <div>
      <h2>INTEREST</h2>
      <div className="Interest-block reveal">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis et tortor ac tincidunt. In euismod iaculis lobortis.
            Vestibulum posuere molestie ipsum vel sollicitudin. Vestibulum
            venenatis pharetrami. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div >
          <ul className="grid-list ">
            <li>
              <i className="bx bx-football football"></i>
              <p>Football</p>
            </li>
            <li>
              <i className="bx bxs-music music"></i>
              <p>Music</p>
            </li>
            <li>
              <i className="bx bx-joystick joystik"></i>
              <p>Game</p>
            </li>
            <li>
              <i className="bx bxs-basketball basketball"></i>
              <p>Basketball</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
