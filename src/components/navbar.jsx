import React from "react";
import searchIcon from "../img/Web Icons-02.png";
import barsIcon from "../img/Web Icons-03.png";
import cartIcon from "../img/Web Icons-04.png";

const NavbarComponent = () => {
  return (
    <div>
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
                  className="nav-link nav-link-color text-uppercase"
                >
                  Login
                </a>
              </button>
              <a href="#" className="position-relative ml-5 my-auto">
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
                  
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
