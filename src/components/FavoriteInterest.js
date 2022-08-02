import React from "react";
import "../Style/FavoriteInterest.css";
import "../Animation/Animation.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
export default function Favorite() {
  return (
    <div>
      <h1>My Projects</h1>

      <Tabs
        defaultActiveKey="profile"
        className="m-3"
        
      >
        <Tab eventKey="home" title="HTML" className="FavoButton">
          <main className="page-content reveal">
            <div className="card">
              <div className="content">
                <h2 className="title">Football</h2>
                <p className="copy">
                  Football is life, passion, risk, it's unpredictable,
                  delightful, bright, incomparable, magnificent, interesting,
                  beautiful and the best game, it's a storm of emotions!
                </p>
                <button className="btn">View Trips</button>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">Music</h2>
                <p className="copy">
                  This is an art form in which musical sounds are organized in a
                  certain way as a means of embodying artistic images.
                </p>
                <button className="btn">View Trips</button>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">Game</h2>
                <p className="copy">
                  A game is such a set of actions, the value of which consists
                  not in the result, but in what was obtained in the process of
                  this pastime.
                </p>
                <button className="btn">Book Now</button>
              </div>
            </div>
          </main>
        </Tab>
        <Tab eventKey="profile" title="Vue">
          <main className="page-content reveal">
            <div className="card card1">
              <div className="content">
                <h2 className="title">Basketball</h2>
                <p className="copy">
                  Basketball is a collective sports game in which two teams of
                  five people each compete. The goal of the game is to throw the
                  most number of times the ball into the basket of the opposing
                  team.
                </p>
                <button className="btn">Book Now</button>
              </div>
            </div>

            <div className="card card1">
              <div className="content">
                <h2 className="title">Football</h2>
                <p className="copy">
                  Football is life, passion, risk, it's unpredictable,
                  delightful, bright, incomparable, magnificent, interesting,
                  beautiful and the best game, it's a storm of emotions!
                </p>
                <button className="btn">View Trips</button>
              </div>
            </div>
            <div className="card card1">
              <div className="content">
                <h2 className="title">Music</h2>
                <p className="copy">
                  This is an art form in which musical sounds are organized in a
                  certain way as a means of embodying artistic images.
                </p>
                <button className="btn">View Trips</button>
              </div>
            </div>
          </main>
        </Tab>
        <Tab eventKey="longer-tab" title="React">
          <main className="page-content reveal">
            <div className="card">
              <div className="content">
                <h2 className="title">Game</h2>
                <p className="copy">
                  A game is such a set of actions, the value of which consists
                  not in the result, but in what was obtained in the process of
                  this pastime.
                </p>
                <button className="btn">Book Now</button>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">Basketball</h2>
                <p className="copy">
                  Basketball is a collective sports game in which two teams of
                  five people each compete. The goal of the game is to throw the
                  most number of times the ball into the basket of the opposing
                  team.
                </p>
                <button className="btn">Book Now</button>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">Basketball</h2>
                <p className="copy">
                  Basketball is a collective sports game in which two teams of
                  five people each compete. The goal of the game is to throw the
                  most number of times the ball into the basket of the opposing
                  team.
                </p>
                <button className="btn">Book Now</button>
              </div>
            </div>
          </main>
        </Tab>
      </Tabs>
    </div>
  );
}
