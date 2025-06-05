import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import FirstSlide from "../imgs/first-slide.jpg";
import SecondSlide from "../imgs/second-slide.jpg";
import ThirdSlide from "../imgs/third-slide.png";
import MyAvatar from "../imgs/icons/github.png";
import "../styles/HomePageComponent.css"
function HomePageComponent() {
    return <div className='about_me'>
        <div className='about_me-container'>

            <div className='about_me-text'>
                <span>👋</span>
                <h2 className='my_name'>
                    Ilya Zaytsev
                </h2>
                <p>
                    lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                </p>
            </div>
            <div className='about_me-avatar'>
                <img src={MyAvatar} alt='my avatar'></img>
            </div>
        </div>
    </div>
}

export default HomePageComponent;
{/* <Carousel fade id="home" className="slider-wrapper mb">
        <Carousel.Item className="slide1">
            <img
                className="Navbar-img"
                src={FirstSlide}
                alt="First slide"
            >
            </img>
            <Carousel.Caption className='slide1_text'>
                <h3>First slide label</h3>
                <p>Here can be everything you want</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide2">
            <img
                className="Navbar-img"
                src={SecondSlide}
                alt="Second slide"
            />

            <Carousel.Caption className='slide2_text'>
                <h3>Second slide label</h3>
                <p>Here can be everything you want</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide3">
            <img
                className="Navbar-img"
                src={ThirdSlide}
                alt="Third slide"
            />

            {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Here can be everything you want
                </p>
            </Carousel.Caption> */}
    //     </Carousel.Item>
    // </Carousel> */}