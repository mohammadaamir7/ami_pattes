import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import starsImg from "../img/Web Icons-06.png";
import leftArrow from "../img/Web Icons-08.png";
import rightArrow from "../img/Web Icons-09.png";

const PrevArrow = (props) => (
  <div
    className="slick-arrow slick-prev h-100 left-arrow-small"
    onClick={props.onClick}
    style={{ left: "-30px" }}
  >
    <img src={leftArrow} className="arrow-size" />
    <span>&#8592;</span>
  </div>
);

const NextArrow = (props) => (
  <div
    className="slick-arrow slick-next h-100 right-arrow-small"
    onClick={props.onClick}
    style={{ right: "-30px" }}
  >
    <img src={rightArrow} className="arrow-size " />
    <span>&#8594;</span>
  </div>
);

const ProductsSliderSmall = ({ handleTabChange, tabStates }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider className="small-slider" {...settings}>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2"
            data-bs-toggle="pill"
            onClick={() => handleTabChange("freezed")}
          >
            <span
              className={`text-uppercase tab-style text-uppercase nav-tabs-style + ${
                tabStates.freezed ? "active-product-tab" : ""
              }`}
              style={{ width: "130px" }}
            >
              freeze-dried meat
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2"
            data-bs-toggle="pill"
            onClick={() => handleTabChange("seafood")}
          >
            <span
              className={`text-uppercase tab-style text-uppercase nav-tabs-style + ${
                tabStates.seafood ? "active-product-tab" : ""
              }`}
              style={{ width: "130px" }}
            >
              freeze-dried seafood
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2"
            data-bs-toggle="pill"
            onClick={() => handleTabChange("others")}
          >
            <span
              className={`text-uppercase tab-style text-uppercase nav-tabs-style + ${
                tabStates.others ? "active-product-tab" : ""
              }`}
              style={{ width: "130px" }}
            >
              freeze-dried others
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex py-2 m-2"
            data-bs-toggle="pill"
            onClick={() => handleTabChange("homeMade")}
          >
            <span
              className={`text-uppercase tab-style text-uppercase nav-tabs-style + ${
                tabStates.homeMade ? "active-product-tab" : ""
              }`}
              style={{ width: "130px" }}
            >
              Home made style treats
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2"
            data-bs-toggle="pill"
            onClick={() => handleTabChange("bundled")}
          >
            <span
              className={`text-uppercase tab-style text-uppercase nav-tabs-style + ${
                tabStates.bundled ? "active-product-tab" : ""
              }`}
              style={{ width: "130px" }}
            >
              Bundled gift box
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2"
            data-bs-toggle="pill"
            onClick={() => handleTabChange("suppliments")}
          >
            <span
              className={`text-uppercase tab-style text-uppercase nav-tabs-style + ${
                tabStates.suppliments ? "active-product-tab" : ""
              }`}
              style={{ width: "130px" }}
            >
              Pet Suppliments
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="d-flex m-2 py-2"
            data-bs-toggle="pill"
            onClick={() => handleTabChange("toys")}
          >
            <span
              className={`text-uppercase tab-style text-uppercase nav-tabs-style + ${
                tabStates.toys ? "active-product-tab" : ""
              }`}
              style={{ width: "130px" }}
            >
              Pet toys
            </span>
          </a>
        </li>
      </Slider>
    </div>
  );
};

export default ProductsSliderSmall;
