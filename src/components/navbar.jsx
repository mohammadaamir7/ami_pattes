import React from "react";
import searchIcon from "../img/Web Icons-02.png";
import barsIcon from "../img/Web Icons-03.png";
import cartIcon from "../img/Web Icons-04.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="container-fluid fixed-top">
        <div className="container-fluid px-0">
          <nav class="navbar navbar-light bg-white navbar-expand-lg bg-body-tertiary h-auto control-display-large">
            <div class="container-fluid">
              <button
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler border-0 bars-img-margin"
                type="button"
                data-toggle="collapse"
              >
                <img src={barsIcon} className="bars-img" />
              </button>
              <button
                className="btn-search btn btn-md-square bg-white nav-margin control-display"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <img className="search-img" src={searchIcon} />
              </button>
              <Link className="navbar-brand mt-sm-3" to="/">
                <h1 className="logo-head">Ami Pattes</h1>
                <p className="logo-para">
                  THE <span>Premium</span> PET TREATS
                </p>
              </Link>
              {/* <div className="d-flex"> */}
              <div className="control-display-large">
                <div className="d-flex">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="btn-search btn btn-md-square bg-white login-btn mx-5 nav-link nav-link-color text-uppercase"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                        to="/products"
                      >
                        Products
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        className="btn-search btn btn-md-square bg-white login-btn mx-5 nav-link nav-link-color text-uppercase w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                        to="/add-product"
                      >
                        Add product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="btn-search btn btn-md-square bg-white login-btn mx-5 nav-link nav-link-color text-uppercase w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                        to="/list-products"
                      >
                        List Products
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        className="btn-search btn btn-md-square bg-white login-btn mx-5 nav-link nav-link-color text-uppercase"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                  <Link to="/cart" className="position-relative ml-5 my-auto">
                    <img
                      src={cartIcon}
                      style={{ width: "40px", height: "40px" }}
                    />
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
                      {cartItems?.length}
                    </span>
                  </Link>
                </div>
              </div>
              <button
                className="btn-search btn btn-md-square bg-white login-btn control-display"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <Link
                  className="nav-link nav-link-color text-uppercase"
                  to="/login"
                >
                  Login
                </Link>
              </button>
              <Link
                className="position-relative ml-5 my-auto control-display cart-img-margin"
                to="/cart"
              >
                <img src={cartIcon} className="cart-img" />
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
                  {cartItems?.length}
                </span>
              </Link>

              {/* </div> */}

              {/* <span class="navbar-toggler-icon justify-content-end"></span> */}
            </div>
                  
          </nav>
          <Navbar
            expand="lg"
            className="bg-body-tertiary  navbar-light bg-white navbar-expand-lg bg-body-tertiary h-auto control-display"
          >
            <Container fluid>
              <Navbar.Toggle className="navbar-toggler border-0 bars-img-margin" aria-controls="navbarScroll">
                {" "} 
                  <img src={barsIcon} className="bars-img" />
              </Navbar.Toggle>
              <button
                className="btn-search btn btn-md-square bg-white nav-margin control-display"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <img className="search-img" src={searchIcon} />
              </button>
              <Link className="navbar-brand mt-sm-3" to="/">
                <h1 className="logo-head">Ami Pattes</h1>
                <p className="logo-para">
                  THE <span>Premium</span> PET TREATS
                </p>
              </Link>
              <button
                className="btn-search btn btn-md-square bg-white login-btn control-display"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <Link
                  className="nav-link nav-link-color text-uppercase"
                  to="/login"
                >
                  Login
                </Link>
              </button>
              <Link
                className="position-relative ml-5 my-auto control-display cart-img-margin"
                to="/cart"
              >
                <img src={cartIcon} className="cart-img" />
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
                  {cartItems?.length}
                </span>
              </Link>
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link to="/products" className="btn-search btn btn-md-square bg-white login-btn mx-5 nav-link nav-link-color text-uppercase">
                    Products
                  </Link>
                  <Link to="/list-products" className="btn-search btn btn-md-square bg-white login-btn mx-5 nav-link nav-link-color text-uppercase">
                    List Product
                  </Link>
                  <Link to="/add-product" className="mt-3 btn-search btn btn-md-square bg-white login-btn mx-5 nav-link nav-link-color text-uppercase">
                    Add Product
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
