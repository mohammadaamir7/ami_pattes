import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import productImg from "../img/shutterstock_653239414.jpg";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div class="container-fluid py-5 cart-margin">
        <div class="container py-5">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div class="d-flex align-items-center">
                      <img
                        src={productImg}
                        class="img-fluid me-5 rounded-circle"
                        style={{ width: "80px", height: "80px" }}
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p class="mb-0 mt-4 cart-title">Dried Meat</p>
                  </td>
                  <td>
                    <p class="mb-0 mt-4 icon-color price-style">45$</p>
                  </td>
                  <td>
                    <div
                      class="input-group quantity mt-4"
                      style={{ width: "100px" }}
                    >
                      <div class="input-group-btn">
                        <button class="btn btn-sm btn-minus rounded-circle bg-light border">
                          <i class="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        class="form-control form-control-sm text-center border-0"
                        value="1"
                      />
                      <div class="input-group-btn">
                        <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0 mt-4 icon-color price-style">45$</p>
                  </td>
                  <td>
                    <button class="btn btn-md rounded-circle bg-light border mt-4">
                      <i class="fa fa-times text-danger"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="d-flex align-items-center">
                      <img
                        src={productImg}
                        class="img-fluid me-5 rounded-circle"
                        style={{ width: "80px", height: "80px" }}
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p class="mb-0 mt-4 cart-title">Home Made</p>
                  </td>
                  <td>
                    <p class="mb-0 mt-4 icon-color price-style">45$</p>
                  </td>
                  <td>
                    <div
                      class="input-group quantity mt-4"
                      style={{ width: "100px" }}
                    >
                      <div class="input-group-btn">
                        <button class="btn btn-sm btn-minus rounded-circle bg-light border">
                          <i class="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        class="form-control form-control-sm text-center border-0"
                        value="1"
                      />
                      <div class="input-group-btn">
                        <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0 mt-4 icon-color price-style">45$</p>
                  </td>
                  <td>
                    <button class="btn btn-md rounded-circle bg-light border mt-4">
                      <i class="fa fa-times text-danger"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="d-flex align-items-center">
                      <img
                        src={productImg}
                        class="img-fluid me-5 rounded-circle"
                        style={{ width: "80px", height: "80px" }}
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p class="mb-0 mt-4 cart-title">Suppliments</p>
                  </td>
                  <td>
                    <p class="mb-0 mt-4 icon-color price-style">45$</p>
                  </td>
                  <td>
                    <div
                      class="input-group quantity mt-4"
                      style={{ width: "100px" }}
                    >
                      <div class="input-group-btn">
                        <button class="btn btn-sm btn-minus rounded-circle bg-light border">
                          <i class="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        class="form-control form-control-sm text-center border-0"
                        value="1"
                      />
                      <div class="input-group-btn">
                        <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                          <i class="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0 mt-4 icon-color price-style">45$</p>
                  </td>
                  <td>
                    <button class="btn btn-md rounded-circle bg-light border mt-4">
                      <i class="fa fa-times text-danger"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-5">
            <input
              type="text"
              class="border-0 border-bottom rounded me-5 py-3 mb-4"
              placeholder="Coupon Code"
            />
            <button
              class="btn border-success rounded-pill px-4 py-3 icon-color"
              type="button"
              style={{ color: "#9a9a74" }}
            >
              Apply Coupon
            </button>
          </div>
          <div class="row g-4 justify-content-end">
            <div class="col-8"></div>
            <div class="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div class="bg-light rounded">
                <div class="p-4">
                  <h1 class="display-6 mb-4 icon-color cart-title">
                    Cart <span class="fw-normal">Total</span>
                  </h1>
                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="mb-0 me-4 icon-color cart-title">Subtotal:</h5>
                    <p class="mb-0">$96.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5 class="mb-0 me-4 icon-color cart-title">Shipping</h5>
                    <div class="">
                      <p class="mb-0">Flat rate: $3.00</p>
                    </div>
                  </div>
                  <p class="mb-0 text-end">Shipping to Ukraine.</p>
                </div>
                <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 class="mb-0 ps-4 me-4 icon-color cart-title">Total</h5>
                  <p class="mb-0 pe-4">$99.00</p>
                </div>
                <button
                  class="btn border-success rounded-pill px-4 py-3 text-uppercase mb-4 ms-4"
                  type="button"
                  style={{ color: "#9a9a74" }}
                >
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
