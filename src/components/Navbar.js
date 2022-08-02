import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import "../Style/NavBar.css";
// import Typer from "../TypingText/Typing.js";
import Header from "../DarkTheme/dark";
import "../Style/Dark.css";

// // import '../menu/menu.js'

// export default function NavBar({ arrLink }) {
//   return (
//     <div>
//       <div className="navbar">
//         <div className="logo">
//           <Header></Header>
//           {/* <h2>portfolio</h2> */}
//         </div>
//         <ul className="links">
//           {arrLink.map((val, i) => {
//             return (
//               <NavLink key={i} to={val.url}>
//                 <li className="NavbarList">{val.txt}</li>
//               </NavLink>
//             );
//           })}
//         </ul>
//         <div className="right">
//           <button>Поддержка</button>
//         </div>
//         <div className="toggle">
//           <div className="line1"></div>
//           <div className="line2"></div>
//           <div className="line3"></div>
//         </div>
//       </div>
//       <div>
//         {/* <img
//           className="Navbar-img"
//           src="https://rb.ru/media/upload_tmp/2018/blake-connally-435076-unsplash.jpg"
//         ></img>
//           <img
//             className="Navbar-hack"
//             src="https://cdn-icons-png.flaticon.com/128/1320/1320457.png"
//           ></img>
//         <Typer
//           className=""
//           heading={""}
//           dataText={[
//             "I’m Doni",
//             "I love coding",
//             "I code cool websites",
//             "I develop mobile apps",
//           ]}
//         ></Typer> */}
//         <Carousel fade>
//           <Carousel.Item>
//             <img
//               className="Navbar-img"
//               src="https://rb.ru/media/upload_tmp/2018/blake-connally-435076-unsplash.jpg"
//               alt="First slide"

//             >

//             </img>
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="Navbar-img"
//               src="https://avatars.mds.yandex.net/i?id=f3da82973aea55b388c9c7365d4e5d6b-5482565-images-thumbs&n=13"
//               alt="Second slide"
//             />

//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="Navbar-img"
//               src="https://cdn.pixabay.com/photo/2017/10/10/21/47/computer-2838920__340.jpg"
//               alt="Third slide"
//             />

//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </div>
//   );
// }
function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          
          <NavLink  to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                Home
            </li>
            <li className="nav-item">
                About
            </li>
            <li className="nav-item">
                Blog
            </li>
            <li className="nav-item">
              <Header ></Header>              
            </li>
            <li className="nav-item">
            </li>
            
          </ul>
          
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fa fa-times" : "fa fa-bars"}></i> */}
            <i className={click ? "fa fa-times bx bx-menu" :  "fa fa-bars bx bx-menu"}></i>
          </div>
        </div>
      </nav>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="Navbar-img"
            src="https://rb.ru/media/upload_tmp/2018/blake-connally-435076-unsplash.jpg"
            alt="First slide"
          >
          </img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Navbar-img"
            src="https://trashexpert.ru/wp-content/uploads/2021/03/surface-pro-7.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Navbar-img"
            src="https://assets.entrepreneur.com/content/3x2/2000/1594639789-startup-593296.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </ div>
  );
}
export default NavBar