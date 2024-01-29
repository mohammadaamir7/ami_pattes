import { Image, Container, Row, Col } from "react-bootstrap";
import dpi from "../images/dpi-cropped.jpeg";
import hec from "../images/hec-logo.jpeg";
import nccs from "../images/nccs.jpeg";
import Navbar from "../components/navbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../lib/owlcarousel/assets/owl.carousel.css"
// import "../lib/owlcarousel/assets/owl.carousel.css"
import "../css/style.css";
import "../css/bootstrap.min.css";
import productImg from "../img/shutterstock_653239414.jpg";
import dogImg from "../img/shutterstock_1969088419.jpg";
import bootleImg from "../img/c16a3d9e712761b8ea287dac578e7434.jpg";
import instaImg from "../img/instagram.png";
import fbImg from "../img/facebook.png";
import logoImg from "../img/Logo_Ami Pattes_final_Green.png";
import { useEffect } from "react";
import Script from "react-load-script";
import { Helmet } from "react-helmet";
const LandingPage = () => {
  const navigate = useNavigate();
  //   useEffect(() => {
  //     // Load jQuery
  //     const loadScript = (src, callback) => {
  //         const script = document.createElement('script');
  //         script.src = src;
  //         script.onload = callback;
  //         document.head.appendChild(script);
  //       };

  //       // Load jQuery
  //       loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js', () => {
  //         // jQuery has been loaded, you can perform actions after loading
  //       });

  //       // Load Bootstrap
  //       loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js', () => {
  //         // Bootstrap has been loaded, you can perform actions after loading
  //       });

  //       // Load other scripts
  //       const scriptUrls = [
  //         '../lib/easing/easing.min.js',
  //         '../lib/waypoints/waypoints.min.js',
  //         '../lib/lightbox/js/lightbox.min.js',
  //         '../lib/owlcarousel/owl.carousel.min.js',
  //         'js/main.js',
  //       ];

  //       scriptUrls.forEach((url) => {
  //         loadScript(url, () => {
  //           // Individual script has been loaded, you can perform actions after loading
  //         });
  //       });

  //       return () => {
  //         // Clean up on component unmount
  //         // Remove the dynamically added script tags
  //         document.head.removeChild(document.querySelector('script[src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"]'));
  //         document.head.removeChild(document.querySelector('script[src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"]'));
  //         scriptUrls.forEach((url) => {
  //           const scriptElement = document.querySelector(`script[src="${url}"]`);
  //           if (scriptElement) {
  //             document.head.removeChild(scriptElement);
  //           }
  //         });
  //       };
  //   }, []);
  return (
    <>
      {/* <Navbar /> */}
      <div>
        {/* <div
          id="spinner"
          className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
        >
          <div className="spinner-grow text-primary" role="status"></div>
        </div> */}

        <div className="container-fluid fixed-top">
          <div className="container px-0">
            <nav class="navbar navbar-light bg-white navbar-expand-xl bg-body-tertiary h-auto">
              <div class="container-fluid">
                <button
                  className="navbar-toggler py-2 px-3 border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  <span className="fa fa-bars icon-color"></span>
                </button>
                <button
                  className="btn-search btn btn-md-square bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search icon-color"></i>
                </button>
                <a href="index.html" className="navbar-brand mx-sm-auto mt-sm-3">
                  <h1 className="logo-head">Ami Pattes</h1>
                  <p className="logo-para">
                    THE <span>Premium</span> PET TREATS
                  </p>
                  {/* <img src={logoImg} className="logo-size"/> */}
                </a>
                <button
                  className="btn-search btn btn-md-square bg-white me-5"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <a
                    href="index.html"
                    className="nav-item nav-link active nav-link-color text-uppercase"
                  >
                    Login
                  </a>
                </button>
                <a href="#" className="position-relative my-auto">
                  <i className="fa fa-shopping-bag fa-2x icon-color"></i>
                  <span
                    className="position-absolute rounded-circle d-flex align-items-center justify-content-center text-light px-1"
                    style={{
                      top: "-5px",
                      left: "15px",
                      height: "20px",
                      minWidth: "20px",
                      backgroundColor: "#9A9A74",
                    }}
                  >
                    3
                  </span>
                </a>

                {/* <span class="navbar-toggler-icon justify-content-end"></span> */}
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-end">
                    <li class="nav-item">
                      <a
                        href="index.html"
                        className="nav-item nav-link active nav-link-color"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
                    
            </nav>
          </div>
        </div>

        <div
          className="modal fade"
          id="searchModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Search by keyword
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex align-items-center">
                <div className="input-group w-75 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 mb-5 hero-header mt-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center mt-5">
              <div className="col-md-12 col-lg-7 d-flex align-items-center flex-column">
                <h1 className="mb-5 display-3 text-light hero-heading">
                  NEW ARRIVALS
                </h1>
                <div className="position-relative mx-auto">
                  <button
                    type="submit"
                    className="btn btn-lg btn-outline-light text-uppercase btn-rounded-none btn-border-style w-100"
                    // style={{ top: 0, right: "25%" }}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div
                  id="carouselId"
                  className="carousel slide position-relative"
                  data-bs-ride="carousel"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid featurs py-5">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center p-4 product-card">
                  <div className="inner-div">
                    <h1 className="text-uppercase text-light my-4 mt-5 category-text">
                      Premium freeze-dired meat
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center product-card p-4">
                  <div className="inner-div">
                    <h1 className="text-uppercase text-light my-4 mt-5 category-text">
                      Home made style treats
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center p-4  product-card">
                  <div className="inner-div">
                    <h1 className="text-uppercase text-light my-4 mt-5 category-text">
                      Bundled gift box
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center p-4  product-card">
                  <div className="inner-div">
                    <h1 className="text-uppercase text-light my-4 mt-5 category-text">
                      Pet Suppliments
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-5">
              <div className="border-top border border-dark mb-5 mt-3"></div>
            </div>
            <div className="col-md-2 col-sm-2 col-2 mt-sm-1 mt-md-0 mt-lg-0">
              <h3 className="text-uppercase review-heading">Reviews</h3>
            </div>
            <div className="col-md-5 col-sm-5 col-5">
              <div className="border-top border border-dark mb-5 mt-3"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
              <div className="text-center mb-3">
                <i class="fa fa-solid fa-star fa-2x icon-color"></i>
                <i class="fa fa-solid fa-star fa-2x icon-color"></i>
                <i class="fa fa-solid fa-star fa-2x icon-color"></i>
              </div>
              <h1 className="icon-color text-center review-title">
                "MY DOG LOVES IT, SO NICE!"
              </h1>
              <h4 className="icon-color text-center mb-5 reviewer-name">- ADA WU .</h4>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 mb-5 crossover-header">
          <div className="container py-5">
            <div className="row g-5 align-items-center mt-5">
              <div className="col-md-12 col-lg-7 d-flex align-items-center flex-column">
                <h1 className="mb-5 display-3 text-light text-uppercase hero-heading">
                  Croosover
                </h1>
              </div>
              <div className="col-md-12 col-lg-5">
                <div
                  id="carouselId"
                  className="carousel slide position-relative"
                  data-bs-ride="carousel"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-5">
              <div className="border-top border border-dark mb-5 mt-3"></div>
            </div>
            <div className="col-md-2 col-sm-2 col-2 mt-sm-1 mt-md-0 mt-lg-0">
              <h3 className="text-uppercase hits-heading">Top Hits</h3>
            </div>
            <div className="col-md-5 col-sm-5 col-5">
              <div className="border-top border border-dark mb-5 mt-3"></div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="position-relative fruite-item">
                <div className="fruite-img">
                  <img src={bootleImg} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative fruite-item">
                <div className="fruite-img">
                  <img
                    src={dogImg}
                    className="img-fluid"
                    style={{ height: "250px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative fruite-item">
                <div className="fruite-img">
                  <img
                    src={productImg}
                    className="img-fluid"
                    style={{ height: "250px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="container-fluid fruite py-5"
          style={{ backgroundColor: "#e8e7e6" }}
        >
          <div className="container py-5">
            <div className="tab-className text-center">
              <div className="row g-4">
                <div className="col-lg-4 text-start">
                  <h1>Products</h1>
                </div>
                <div className="col-lg-8 text-end">
                  <ul className="nav nav-pills d-inline-flex text-center mb-5">
                    <li className="nav-item">
                      <a
                        className="d-flex m-2 py-2 bg-light rounded-pill active"
                        data-bs-toggle="pill"
                        href="#tab-1"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          All Products
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="d-flex py-2 m-2 bg-light rounded-pill"
                        data-bs-toggle="pill"
                        href="#tab-2"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          Vegetables
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="d-flex m-2 py-2 bg-light rounded-pill"
                        data-bs-toggle="pill"
                        href="#tab-3"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          Fruits
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="d-flex m-2 py-2 bg-light rounded-pill"
                        data-bs-toggle="pill"
                        href="#tab-4"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          Bread
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="d-flex m-2 py-2 bg-light rounded-pill"
                        data-bs-toggle="pill"
                        href="#tab-5"
                      >
                        <span className="text-dark" style={{ width: "130px" }}>
                          Meat
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border px-3 icon-color"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-4" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-5" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={productImg}
                                className="img-fluid w-100"
                                alt=""
                              />
                            </div>
                            <div className="p-4 rounded-bottom">
                              <h4 className="icon-color text-uppercase">
                                Lamb
                              </h4>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                                <a
                                  href="#"
                                  className="btn border icon-color px-3"
                                >
                                  <i className="fa fa-shopping-bag me-2 icon-color"></i>{" "}
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="container-fluid service py-5">
          <div className="container py-5">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-secondary rounded border border-secondary">
                    <img
                      src="img/featur-1.jpg"
                      className="img-fluid w-100"
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-primary text-center p-4 rounded">
                        <h5 className="text-white">Fresh Apples</h5>
                        <h3 className="mb-0">20% OFF</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-dark rounded border border-dark">
                    <img
                      src="img/featur-2.jpg"
                      className="img-fluid w-100"
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-light text-center p-4 rounded">
                        <h5 className="text-primary">Tasty Fruits</h5>
                        <h3 className="mb-0">Free delivery</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="#">
                  <div className="service-item bg-primary rounded border border-primary">
                    <img
                      src="img/featur-3.jpg"
                      className="img-fluid w-100"
                      alt=""
                    />
                    <div className="px-4 rounded-bottom">
                      <div className="service-content bg-secondary text-center p-4 rounded">
                        <h5 className="text-white">Exotic Vegitable</h5>
                        <h3 className="mb-0">Discount 30$</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid vesitable py-5">
          <div className="container py-5">
            <h1 className="mb-0">Fresh Organic Vegetables</h1>
            <div className="owl-carousel vegetable-carousel justify-content-center">
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img
                    src="img/vegetable-item-6.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div
                  className="text-white bg-primary px-3 py-1 rounded position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  Vegetable
                </div>
                <div className="p-4 rounded-bottom">
                  <h4>Parsely</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="fs-5 fw-bold mb-0 icon-color">$45</p>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img
                    src="img/vegetable-item-1.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div
                  className="text-white bg-primary px-3 py-1 rounded position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  Vegetable
                </div>
                <div className="p-4 rounded-bottom">
                  <h4>Parsely</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="fs-5 fw-bold mb-0 icon-color">$45</p>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img
                    src="img/vegetable-item-3.png"
                    className="img-fluid w-100 bg-light"
                    alt=""
                  />
                </div>
                <div
                  className="text-white bg-primary px-3 py-1 rounded position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  Vegetable
                </div>
                <div className="p-4 rounded-bottom">
                  <h4>Banana</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="fs-5 fw-bold mb-0">$7.99</p>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img
                    src="img/vegetable-item-4.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div
                  className="text-white bg-primary px-3 py-1 rounded position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  Vegetable
                </div>
                <div className="p-4 rounded-bottom">
                  <h4>Bell Papper</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="fs-5 fw-bold mb-0">$7.99</p>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img
                    src="img/vegetable-item-5.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div
                  className="text-white bg-primary px-3 py-1 rounded position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  Vegetable
                </div>
                <div className="p-4 rounded-bottom">
                  <h4>Potatoes</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="fs-5 fw-bold mb-0">$7.99</p>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img
                    src="img/vegetable-item-6.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div
                  className="text-white bg-primary px-3 py-1 rounded position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  Vegetable
                </div>
                <div className="p-4 rounded-bottom">
                  <h4>Parsely</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="fs-5 fw-bold mb-0">$7.99</p>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img
                    src="img/vegetable-item-5.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div
                  className="text-white bg-primary px-3 py-1 rounded position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  Vegetable
                </div>
                <div className="p-4 rounded-bottom">
                  <h4>Potatoes</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="fs-5 fw-bold mb-0">$7.99</p>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                  <img
                    src="img/vegetable-item-6.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div
                  className="text-white bg-primary px-3 py-1 rounded position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  Vegetable
                </div>
                <div className="p-4 rounded-bottom">
                  <h4>Parsely</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="fs-5 fw-bold mb-0">$7.99</p>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid banner bg-secondary my-5">
          <div className="container py-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="py-4">
                  <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
                  <p className="fw-normal display-3 text-dark mb-4">
                    in Our Store
                  </p>
                  <p className="mb-4 text-dark">
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words etc.
                  </p>
                  <a
                    href="#"
                    className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                  >
                    BUY
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    src="img/baner-1.png"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div
                    className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                    style={{ width: "140px", height: "140px", top: 0, left: 0 }}
                  >
                    <h1 style={{ fontSize: "100px" }}>1</h1>
                    <div className="d-flex flex-column">
                      <span className="h2 mb-0">50$</span>
                      <span className="h4 text-muted mb-0">kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto mb-5"
              style={{ maxWidth: "700px" }}
            >
              <h1 className="display-4">Bestseller Products</h1>
              <p>
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="img/best-product-1.jpg"
                        className="img-fluid rounded-circle w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="img/best-product-2.jpg"
                        className="img-fluid rounded-circle w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="img/best-product-3.jpg"
                        className="img-fluid rounded-circle w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="img/best-product-4.jpg"
                        className="img-fluid rounded-circle w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="img/best-product-5.jpg"
                        className="img-fluid rounded-circle w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="img/best-product-6.jpg"
                        className="img-fluid rounded-circle w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        Organic Tomato
                      </a>
                      <div className="d-flex my-3">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="mb-3">3.12 $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img
                    src="img/fruite-item-1.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                  <div className="py-4">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img
                    src="img/fruite-item-2.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                  <div className="py-4">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img
                    src="img/fruite-item-3.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                  <div className="py-4">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="text-center">
                  <img
                    src="img/fruite-item-4.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                  <div className="py-2">
                    <a href="#" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3 justify-content-center">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container">
            <div className="bg-light p-5 rounded">
              <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary"></i>
                    <h4>satisfied customers</h4>
                    <h1>1963</h1>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary"></i>
                    <h4>quality of service</h4>
                    <h1>99%</h1>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary"></i>
                    <h4>quality certificates</h4>
                    <h1>33</h1>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="counter bg-white rounded p-5">
                    <i className="fa fa-users text-secondary"></i>
                    <h4>Available Products</h4>
                    <h1>789</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid testimonial py-5">
          <div className="container py-5">
            <div className="testimonial-header text-center">
              <h4 className="text-primary">Our Testimonial</h4>
              <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item img-border-radius bg-light rounded p-4">
                <div className="position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-secondary position-absolute"
                    style={{ bottom: "30px", right: 0 }}
                  ></i>
                  <div className="mb-4 pb-4 border-bottom border-secondary">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="bg-secondary rounded">
                      <img
                        src="img/testimonial-1.jpg"
                        className="img-fluid rounded"
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4 d-block">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item img-border-radius bg-light rounded p-4">
                <div className="position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-secondary position-absolute"
                    style={{ bottom: "30px", right: 0 }}
                  ></i>
                  <div className="mb-4 pb-4 border-bottom border-secondary">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="bg-secondary rounded">
                      <img
                        src="img/testimonial-1.jpg"
                        className="img-fluid rounded"
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4 d-block">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item img-border-radius bg-light rounded p-4">
                <div className="position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-secondary position-absolute"
                    style={{ bottom: "30px", right: 0 }}
                  ></i>
                  <div className="mb-4 pb-4 border-bottom border-secondary">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="bg-secondary rounded">
                      <img
                        src="img/testimonial-1.jpg"
                        className="img-fluid rounded"
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4 d-block">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="container-fluid text-white-50 footer pt-5 mt-5"
          style={{ backgroundColor: "#9a9a74" }}
        >
          <div className="container py-5">
            {/* <div
              className="pb-4 mb-4"
              style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
            >
              <div className="row g-4">
                <div className="col-lg-3">
                  <a href="#">
                    <h1 className="text-primary mb-0">Fruitables</h1>
                    <p className="text-secondary mb-0">Fresh products</p>
                  </a>
                </div>
                <div className="col-lg-6">
                  <div className="position-relative mx-auto">
                    <input
                      className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                      type="number"
                      placeholder="Your Email"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                      style={{ top: 0, right: 0 }}
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="d-flex justify-content-end pt-3">
                    <a
                      className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                      href=""
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      className="btn btn-outline-secondary btn-md-square rounded-circle"
                      href=""
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="footer-item">
                  <h4 className="text-light mb-3 footer-head text-uppercase">
                    About us
                  </h4>
                  <h4 className="text-light mb-3 footer-head text-uppercase">
                    Contact us
                  </h4>
                  <h4 className="text-light mb-3 footer-head text-uppercase">
                    ORDERS & DELIVERY
                  </h4>
                  <h4 className="text-light mb-3 footer-head text-uppercase">
                    TERMS & CONDITION
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-item">
                  <h4 className="text-light mb-3 footer-head text-uppercase">
                    MEMBERSHIP LOGIN
                  </h4>
                  <h4 className="text-light mb-3 footer-head text-uppercase">
                    BUSINESS WITH US
                  </h4>
                  <h4 className="text-light mb-3 footer-head text-uppercase">
                    PRESS RELEASE
                  </h4>
                  <h4 className="text-light mb-3 footer-head text-uppercase">
                    DONATION PROGRAM
                  </h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 text-sm-center">
                <img
                  src={instaImg}
                  className="footer-icon"
                  style={{ marginLeft: "15%" }}
                />
                <img src={fbImg} className="footer-icon" />
                <span className="text-uppercase text-light footer-head">
                  Ami-Pattes
                </span>
                <div className="d-flex flex-column text-start footer-item">
                  <h4 className="text-light mb-3 footer-head text-sm-center">
                    FREE DELIVERY WORLD-WIDE OVER $500
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
