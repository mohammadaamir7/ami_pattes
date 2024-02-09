import React from "react";
import instaImg from "../img/instagram.png";
import fbImg from "../img/facebook.png";
import footerLogos from "../img/IG FB.png";

const footer = () => {
  return (
    <div>
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
              <img src={footerLogos} className="insta-logo w-100 mb-3" />
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
  );
};

export default footer;
