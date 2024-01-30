import { useNavigate } from "react-router-dom";
import productImg from "../img/shutterstock_653239414.jpg";
import instaImg from "../img/instagram.png";
import fbImg from "../img/facebook.png";
import { useState } from "react";

const ProductsPage = () => {
  const productsTabStates = {
    freezed: true,
    homeMade: false,
    bundled: false,
    suppliments: false,
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
      console.log("newState : ", newState);

      return newState;
    });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid fixed-top">
        <div className="container-fluid px-0">
          <nav class="navbar navbar-light bg-white navbar-expand-xl bg-body-tertiary h-auto">
            <div class="container-fluid">
              <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars icon-color"></span>
              </button>
              <button
                className="btn-search btn btn-md-square bg-white nav-margin control-display"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search icon-color"></i>
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
                className="btn-search btn btn-md-square bg-white"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <a
                  href="index.html"
                  className="nav-link nav-link-color text-uppercase"
                >
                  Login
                </a>
              </button>
              <a href="#" className="position-relative ml-5 my-auto">
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
                    className="d-flex m-2 py-2 active"
                    data-bs-toggle="pill"
                    onClick={() => handleTabChange("freezed")}
                  >
                    <span
                      className={`text-uppercase tab-style text-uppercase + ${
                        tabStates.freezed ? "active-product-tab" : ""
                      }`}
                      style={{ width: "130px" }}
                    >
                      Premium freeze-dired meat
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
                      className={`text-uppercase tab-style text-uppercase + ${
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
                      className={`text-uppercase tab-style text-uppercase + ${
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
                      className={`text-uppercase tab-style text-uppercase + ${
                        tabStates.suppliments ? "active-product-tab" : ""
                      }`}
                      style={{ width: "130px" }}
                    >
                      Pet Suppliments
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
          <div className="col-lg-12 text-lg-end text-sm-center ml-5">
            <ul className="nav d-inline-flex text-center">
              <li className="nav-item">
                <a
                  className="d-flex m-2 py-2 active"
                  data-bs-toggle="pill"
                  onClick={() => handleTabChange("freezed")}
                >
                  <span
                    className="text-uppercase icon-color tab-style text-uppercase"
                    style={{ width: "130px" }}
                  >
                    Premium freeze-dired meat
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
                    className="tab-style text-uppercase"
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
                    className="tab-style text-uppercase"
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
                    className="tab-style text-uppercase"
                    style={{ width: "130px" }}
                  >
                    Pet Suppliments
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
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid text-white-50 footer pt-5 mt-5"
          style={{ backgroundColor: "#9a9a74" }}
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-4 col-md-4 col-sm-4">
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
              <div className="col-lg-4 col-md-4 col-sm-4">
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
              <div className="col-lg-4 col-md-4 col-sm-4 text-sm-center">
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
                  <h4 className="text-light mb-3 footer-head delivery-head text-sm-start">
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

export default ProductsPage;
