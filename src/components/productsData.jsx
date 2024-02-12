import React from "react";
import { Link } from "react-router-dom";

const ProductsData = ({ products, tabState }) => {
  return (
    <div>
      <div className={`tab-pane fade show p-0 + ${tabState ? "active" : ""}`}>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              {products?.map((rec) => (
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <Link to={`/product/${rec._id}`}>
                    <div className="position-relative fruite-item">
                      <div className="fruite-img">
                        <img
                          src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${rec.image}`}
                          className="img-fluid w-100"
                          alt=""
                        />
                      </div>
                      <div className="p-4 rounded-bottom">
                        <h4 className="icon-color text-uppercase">
                          {rec.title}
                        </h4>
                        <p className="fs-5 fw-bold mb-0 icon-color price-style">
                          ${rec.price}
                        </p>
                        {/* <div class="d-flex justify-content-between flex-lg-wrap">
                        <Link
                          to=""
                          className="btn border border-success rounded-pill px-3 icon-color"
                          onClick={() => handleAddToCart(rec._id)}
                        >
                          Add to cart
                        </Link>
                      </div> */}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsData;
