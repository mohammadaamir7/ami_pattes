import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart);
  const [productQuantity, setProductQuantity] = useState(1);
  
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
                {!cartItems?.length ? (
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="text-center">No Data</h1>
                    </div>
                  </div>
                ) : (
                  cartItems?.map((item) => {
                    return (
                      <tr>
                        <th scope="row">
                          <div class="d-flex align-items-center">
                            <img
                              src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${item?.image}`}
                              class="img-fluid me-5 rounded-circle"
                              style={{ width: "80px", height: "80px" }}
                              alt=""
                            />
                          </div>
                        </th>
                        <td>
                          <p class="mb-0 mt-4 cart-title">{item?.title}</p>
                        </td>
                        <td>
                          <p class="mb-0 mt-4 icon-color price-style">
                            ${item?.price}
                          </p>
                        </td>
                        <td>
                          <p class="mb-0 mt-4 icon-color price-style">
                            {item?.quantity}
                          </p>
                        </td>
                        <td>
                          <p class="mb-0 mt-4 icon-color price-style">
                            ${item?.quantity * item?.price}
                          </p>
                        </td>
                        <td>
                          <button
                            class="btn btn-md rounded-circle bg-light border mt-4"
                            onClick={() => dispatch(removeFromCart(item?._id))}
                          >
                            <i class="fa fa-times text-danger"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
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
                    <p class="mb-0">
                      $
                      {cartItems?.reduce(
                        (acc, curr) => acc + curr?.price * curr?.quantity,
                        0
                      )}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5 class="mb-0 me-4 icon-color cart-title">Shipping</h5>
                    <div class="">
                      <p class="mb-0">Flat rate: $3.00</p>
                    </div>
                  </div>
                  <p class="mb-0 text-end">Shipping to UAE.</p>
                </div>
                <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 class="mb-0 ps-4 me-4 icon-color cart-title">Total</h5>
                  <p class="mb-0 pe-4">
                    $
                    {cartItems?.reduce(
                      (acc, curr) => acc + curr?.price * curr?.quantity,
                      0
                    ) + 3}
                  </p>
                </div>
                <Link
                  class="btn border-success rounded-pill px-4 py-3 text-uppercase mb-4 ms-4"
                  type="button"
                  style={{ color: "#9a9a74" }}
                  to="/checkout"
                >
                  Proceed Checkout
                </Link>
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
