import { useNavigate } from "react-router-dom";
import productImg from "../img/shutterstock_653239414.jpg";
import instaImg from "../img/instagram.png";
import fbImg from "../img/facebook.png";
import { useState } from "react";

import searchIcon from "../img/Web Icons-02.png";
import barsIcon from "../img/Web Icons-03.png";
import cartIcon from "../img/Web Icons-04.png";
import Footer from "../components/footer";

const ProductsPage = () => {
  const productsTabStates = {
    freezed: true,
    seafood: false,
    others: false,
    homeMade: false,
    bundled: false,
    suppliments: false,
    toys: false,
  };
  const [tabStates, setTabStates] = useState(productsTabStates);
  const navigate = useNavigate();

  const handleTabChange = (activeTab) => {
    setTabStates((prevState) => {
      const newState = { ...prevState };
      for (const tab in newState) {
        newState[tab] = false;
      }
      newState[activeTab] = true;

      return newState;
    });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid fixed-top">
        <div className="container-fluid px-0">
          <nav class="navbar navbar-light bg-white navbar-expand-xl bg-body-tertiary h-auto w-auto">
            <div class="container-fluid">
              <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <img src={barsIcon} style={{ width: "40px", height: "25px" }} />
              </button>
              <button
                className="btn-search btn btn-md-square bg-white nav-margin control-display"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <img
                  src={searchIcon}
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
              <a href="index.html" className="navbar-brand mt-sm-3">
                <h1 className="logo-head">Ami Pattes</h1>
                <p className="logo-para">
                  THE <span>Premium</span> PET TREATS
                </p>
                {/* <img src={logoImg} className="logo-size"/> */}
              </a>
              {/* <div className="d-flex"> */}
              <button
                className="btn-search btn btn-md-square bg-white login-btn"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <a
                  href="index.html"
                  className="nav-link nav-link-color text-uppercase my-auto"
                >
                  Login
                </a>
              </button>
              <a href="#" className="position-relative my-auto">
                <img src={cartIcon} style={{ width: "40px", height: "40px" }} />
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
              {/* </div> */}

              {/* <span class="navbar-toggler-icon justify-content-end"></span> */}
            </div>
            {/* <div className="col-lg-4 text-start">
              <h1>Products</h1>
            </div> */}
            <div className="col-lg-12 text-lg-end text-sm-center ml-5 control-display products-tab">
              <ul className="nav d-inline-flex text-center mb-5">
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
              </ul>
            </div>
                  
          </nav>
        </div>
      </div>

      <div>
        <div
          className="container-fluid fruite py-5 mt-5"
          style={{ backgroundColor: "#e8e7e6" }}
        >
          <div className="container col-lg-12 text-lg-end text-sm-center ml-5">
            <ul className="nav d-inline-flex text-center products-tabs-margin">
              <li className="nav-item">
                <a
                  className="d-flex m-2 py-2 active"
                  data-bs-toggle="pill"
                  onClick={() => handleTabChange("freezed")}
                >
                  <span
                    className={`text-uppercase tab-style large-tab text-uppercase + ${
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
                  className="d-flex m-2 py-2 active"
                  data-bs-toggle="pill"
                  onClick={() => handleTabChange("seafood")}
                >
                  <span
                    className={`text-uppercase tab-style large-tab text-uppercase + ${
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
                  className="d-flex m-2 py-2 active"
                  data-bs-toggle="pill"
                  onClick={() => handleTabChange("others")}
                >
                  <span
                    className={`text-uppercase tab-style large-tab text-uppercase + ${
                      tabStates.others ? "active-product-tab" : ""
                    }`}
                    style={{ width: "130px" }}
                  >
                    Premium freeze-dried others
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
                    className={`text-uppercase tab-style large-tab text-uppercase + ${
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
                    className={`text-uppercase tab-style large-tab text-uppercase + ${
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
                    className={`text-uppercase tab-style large-tab text-uppercase + ${
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
                  className="d-flex m-2 py-2 active"
                  data-bs-toggle="pill"
                  onClick={() => handleTabChange("toys")}
                >
                  <span
                    className={`text-uppercase tab-style large-tab text-uppercase + ${
                      tabStates.toys ? "active-product-tab" : ""
                    }`}
                    style={{ width: "130px" }}
                  >
                    Pet Toys
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="container py-5 products-margin">
            <div className="tab-className text-center">
              <div className="tab-content">
                {tabStates.freezed && (
                  <div
                    id="tab-1"
                    className={`tab-pane fade show p-0 + ${
                      tabStates.freezed ? "active" : ""
                    }`}
                  >
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
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tabStates.seafood && (
                  <div
                    id="tab-1"
                    className={`tab-pane fade show p-0 + ${
                      tabStates.seafood ? "active" : ""
                    }`}
                  >
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
                                  Sea Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Sea Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Sea Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Sea Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Sea Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Sea Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Sea Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Sea Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tabStates.others && (
                  <div
                    id="tab-1"
                    className={`tab-pane fade show p-0 + ${
                      tabStates.others ? "active" : ""
                    }`}
                  >
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
                                  Other Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Other Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Other Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Other Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Other Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Other Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Other Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Other Food
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tabStates.homeMade && (
                  <div
                    id="tab-2"
                    className={`tab-pane fade show p-0 + ${
                      tabStates.homeMade ? "active" : ""
                    }`}
                  >
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
                                  Home Made
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Home Made
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tabStates.bundled && (
                  <div
                    id="tab-3"
                    className={`tab-pane fade show p-0 + ${
                      tabStates.bundled ? "active" : ""
                    }`}
                  >
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
                                  Bundled
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Bundled
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tabStates.suppliments && (
                  <div
                    id="tab-4"
                    className={`tab-pane fade show p-0 + ${
                      tabStates.suppliments ? "active" : ""
                    }`}
                  >
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
                                  Suppliments
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Suppliments
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tabStates.toys && (
                  <div
                    id="tab-4"
                    className={`tab-pane fade show p-0 + ${
                      tabStates.toys ? "active" : ""
                    }`}
                  >
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
                                  Toys
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
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
                                  Toys
                                </h4>
                                <p className="fs-5 fw-bold mb-0 icon-color price-style">
                                  $45
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
