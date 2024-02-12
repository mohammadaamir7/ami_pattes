import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import starsImg from "../img/Web Icons-06.png";
import leftArrow from "../img/Web Icons-08.png";
import rightArrow from "../img/Web Icons-09.png";

const PrevArrow = (props) => (
  <div
    className="slick-arrow slick-prev h-100 left-arrow mt-5"
    onClick={props.onClick}
    style={{ left: "-30px" }}
  >
    <img src={leftArrow} className="arrow-size" />
    <span>&#8592;</span>
  </div>
);

const NextArrow = (props) => (
  <div
    className="slick-arrow slick-next h-100 right-arrow mt-5"
    onClick={props.onClick}
    style={{ right: "-30px" }}
  >
    <img src={rightArrow} className="arrow-size"/>
    <span>&#8594;</span>
  </div>
);

const SliderComponent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div className="col-md-12 col-sm-12 col-12 mt-5">
          <div className="text-center mb-3">
            <img src={starsImg} className="stars-img" />
          </div>
          <h1 className="icon-color text-center review-title">
            "MY DOG LOVES IT, SO NICE!"
          </h1>
          <h4 className="icon-color text-center mb-5 reviewer-name">
            - ADA WU .
          </h4>
        </div>
        <div className="col-md-12 col-sm-12 col-12 mt-5">
          <div className="text-center mb-3">
            <img src={starsImg} className="stars-img" />
          </div>
          <h1 className="icon-color text-center review-title">
            "MY DOG LOVES IT, SO NICE!"
          </h1>
          <h4 className="icon-color text-center mb-5 reviewer-name">
            - ADA WU .
          </h4>
        </div>
        <div className="col-md-12 col-sm-12 col-12 mt-5">
          <div className="text-center mb-3">
            <img src={starsImg} className="stars-img" />
          </div>
          <h1 className="icon-color text-center review-title">
            "MY DOG LOVES IT, SO NICE!"
          </h1>
          <h4 className="icon-color text-center mb-5 reviewer-name">
            - ADA WU .
          </h4>
        </div>
        <div className="col-md-12 col-sm-12 col-12 mt-5">
          <div className="text-center mb-3">
            <img src={starsImg} className="stars-img" />
          </div>
          <h1 className="icon-color text-center review-title">
            "MY DOG LOVES IT, SO NICE!"
          </h1>
          <h4 className="icon-color text-center mb-5 reviewer-name">
            - ADA WU .
          </h4>
        </div>
        <div className="col-md-12 col-sm-12 col-12 mt-5">
          <div className="text-center mb-3">
            <img src={starsImg} className="stars-img" />
          </div>
          <h1 className="icon-color text-center review-title">
            "MY DOG LOVES IT, SO NICE!"
          </h1>
          <h4 className="icon-color text-center mb-5 reviewer-name">
            - ADA WU .
          </h4>
        </div>
        <div className="col-md-12 col-sm-12 col-12 mt-5">
          <div className="text-center mb-3">
            <img src={starsImg} className="stars-img" />
          </div>
          <h1 className="icon-color text-center review-title">
            "MY DOG LOVES IT, SO NICE!"
          </h1>
          <h4 className="icon-color text-center mb-5 reviewer-name">
            - ADA WU .
          </h4>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
