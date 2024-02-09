import React from "react";
import Navbar from "../components/navbar";
import productImg from "../img/shutterstock_653239414.jpg";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid py-5 cart-margin">
        <div className="container py-5">
          <h1 className="mb-4 cart-title">Billing details</h1>
          <form action="#">
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3 cart-title">
                        First Name<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3 cart-title">
                        Last Name<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label my-3 cart-title">
                    Company Name<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3 cart-title">
                    Address <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House Number Street Name"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3 cart-title">
                    Town/City<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3 cart-title">
                    Country<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3 cart-title">
                    Postcode/Zip<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3 cart-title">
                    Mobile<sup>*</sup>
                  </label>
                  <input type="tel" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3 cart-title">
                    Email Address<sup>*</sup>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-check my-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Account-1"
                    name="Accounts"
                    value="Accounts"
                  />
                  <label
                    className="form-check-label cart-title"
                    for="Account-1"
                  >
                    Create an account?
                  </label>
                </div>
                <hr />
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Address-1"
                    name="Address"
                    value="Address"
                  />
                  <label
                    className="form-check-label cart-title"
                    for="Address-1"
                  >
                    Ship to a different address?
                  </label>
                </div>
                <div className="form-item">
                  <textarea
                    name="text"
                    className="form-control"
                    spellcheck="false"
                    cols="30"
                    rows="11"
                    placeholder="Oreder Notes (Optional)"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img
                              src={productImg}
                              className="img-fluid rounded-circle"
                              style={{ width: "90px", height: "90px" }}
                              alt=""
                            />
                          </div>
                        </th>
                        <td
                          className="py-5 cart-title"
                          style={{ color: "#9a9a74" }}
                        >
                          Dried Meat
                        </td>
                        <td
                          className="py-5 price-style"
                          style={{ color: "#9a9a74" }}
                        >
                          $69.00
                        </td>
                        <td
                          className="py-5 price-style"
                          style={{ color: "#9a9a74" }}
                        >
                          2
                        </td>
                        <td
                          className="py-5 price-style"
                          style={{ color: "#9a9a74" }}
                        >
                          $138.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img
                              src={productImg}
                              className="img-fluid rounded-circle"
                              style={{ width: "90px", height: "90px" }}
                              alt=""
                            />
                          </div>
                        </th>
                        <td
                          className="py-5 cart-title"
                          style={{ color: "#9a9a74" }}
                        >
                          Home Made
                        </td>
                        <td
                          className="py-5 price-style"
                          style={{ color: "#9a9a74" }}
                        >
                          $69.00
                        </td>
                        <td
                          className="py-5 price-style"
                          style={{ color: "#9a9a74" }}
                        >
                          2
                        </td>
                        <td
                          className="py-5 price-style"
                          style={{ color: "#9a9a74" }}
                        >
                          $138.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img
                              src={productImg}
                              className="img-fluid rounded-circle"
                              style={{ width: "90px", height: "90px" }}
                              alt=""
                            />
                          </div>
                        </th>
                        <td
                          className="py-5 cart-title"
                          style={{ color: "#9a9a74" }}
                        >
                          Suppliments
                        </td>
                        <td
                          className="py-5 price-style"
                          style={{ color: "#9a9a74" }}
                        >
                          $69.00
                        </td>
                        <td
                          className="py-5 price-style"
                          style={{ color: "#9a9a74" }}
                        >
                          2
                        </td>
                        <td
                          className="py-5 price-style"
                          style={{ color: "#9a9a74" }}
                        >
                          $138.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5"></td>
                        <td className="py-5"></td>
                        <td className="py-5">
                          <p className="mb-0 text-dark py-3">Subtotal</p>
                        </td>
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">$414.00</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5">
                          <p className="mb-0 py-4 cart-title">Shipping</p>
                        </td>
                        <td colspan="3" className="py-5">
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input border-success"
                              id="Shipping-1"
                              name="Shipping-1"
                              value="Shipping"
                            />
                            <label
                              className="form-check-label"
                              for="Shipping-1"
                            >
                              Free Shipping
                            </label>
                          </div>
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input border-success"
                              id="Shipping-2"
                              name="Shipping-1"
                              value="Shipping"
                            />
                            <label
                              className="form-check-label"
                              for="Shipping-2"
                            >
                              Flat rate: $15.00
                            </label>
                          </div>
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input border-success"
                              id="Shipping-3"
                              name="Shipping-1"
                              value="Shipping"
                            />
                            <label
                              className="form-check-label"
                              for="Shipping-3"
                            >
                              Local Pickup: $8.00
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5">
                          <p className="mb-0 text-uppercase py-3  cart-title">
                            TOTAL
                          </p>
                        </td>
                        <td className="py-5"></td>
                        <td className="py-5"></td>
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">$135.00</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input border-success"
                        id="Transfer-1"
                        name="Transfer"
                        value="Transfer"
                      />
                      <label
                        className="form-check-label cart-title"
                        for="Transfer-1"
                      >
                        Direct Bank Transfer
                      </label>
                    </div>
                    <p className="text-start text-dark">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input border-success"
                        id="Payments-1"
                        name="Payments"
                        value="Payments"
                      />
                      <label
                        className="form-check-label cart-title"
                        for="Payments-1"
                      >
                        Check Payments
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input border-success"
                        id="Delivery-1"
                        name="Delivery"
                        value="Delivery"
                      />
                      <label
                        className="form-check-label cart-title"
                        for="Delivery-1"
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input border-success"
                        id="Paypal-1"
                        name="Paypal"
                        value="Paypal"
                      />
                      <label
                        className="form-check-label cart-title"
                        for="Paypal-1"
                      >
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button
                    type="button"
                    className="btn border-success py-3 px-4 text-uppercase w-100 icon-color"
                    style={{ color: "#9a9a74" }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
