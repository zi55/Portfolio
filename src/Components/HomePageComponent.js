import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import FirstSlide from "../imgs/first-slide.jpg";
import SecondSlide from "../imgs/second-slide.jpg";
import ThirdSlide from "../imgs/third-slide.png";
import "../styles/HomePageComponent.css"
function HomePageComponent() {
    return <Carousel fade className="slider-wrapper mb">
        <Carousel.Item>
            <img
                className="Navbar-img"
                src={FirstSlide}
                alt="First slide"
            >
            </img>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Here can be everything you want</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="Navbar-img"
                src={SecondSlide}
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Here can be everything you want</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="Navbar-img"
                src={ThirdSlide}
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Here can be everything you want
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}

export default HomePageComponent;