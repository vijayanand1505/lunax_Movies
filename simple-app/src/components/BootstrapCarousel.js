import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import spiderman from "../images/Spiderman.jpg";
import avatar from "../images/Avatar.jpg";
import avengers from "../images/Avengers.jpg";
import thor from "../images/Thor.jpg";
import Home from "./Home";

function BootstrapCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            src={spiderman}
            alt="Spiderman No Way Home"
            className="d-block w-100"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src={avatar}
            alt="Avatar 2 Way of Water"
            className="d-block w-100"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src={avengers}
            alt="Avengers Endgame"
            className="d-block w-100"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={thor} alt="Thor Ragnarok" className="d-block w-100" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
      <br />
      <Home />
    </>
  );
}

export default BootstrapCarousel;
