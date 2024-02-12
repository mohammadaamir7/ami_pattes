import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import searchIcon from "../img/Web Icons-02.png";
import barsIcon from "../img/Web Icons-03.png";
import cartIcon from "../img/Web Icons-04.png";
import Footer from "../components/footer";
import { getProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import ProductsData from "../components/productsData";
import ProductsSlider from "../components/productsSlider";
import ProductsSliderSmall from "../components/productsSliderSmall";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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

  const { cartItems } = useSelector((state) => state.cart);
  const { products: allProducts } = useSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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
          <nav class="navbar navbar-light bg-white navbar-expand-xl bg-body-tertiary h-auto control-display-large">
            <div class="container-fluid">
              <button
                className="navbar-toggler border-0 bars-img-margin"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <img src={barsIcon} className="bars-img" />
              </button>
              <button
                className="btn-search btn btn-md-square bg-white nav-margin control-display"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <img
                  src={searchIcon}
                  className="search-img"
                />
              </button>
              <Link to="/" className="navbar-brand mt-sm-3">
                <h1 className="logo-head">Ami Pattes</h1>
                <p className="logo-para">
                  THE <span>Premium</span> PET TREATS
                </p>
              </Link>
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
            </div>
            <div className="col-lg-12 col-sm-12 col-12 text-lg-end text-sm-center ml-5 control-display products-tab">
              <ul className="text-center mb-5">
                <ProductsSliderSmall
                  handleTabChange={(state) => handleTabChange(state)}
                  tabStates={tabStates}
                />
              </ul>
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
              <div className="col-lg-12 col-sm-12 col-12 text-lg-end text-sm-center ml-5 control-display products-tab">
              <ul className="text-center mb-5">
                <ProductsSliderSmall
                  handleTabChange={(state) => handleTabChange(state)}
                  tabStates={tabStates}
                />
              </ul>
            </div>
            </Container>
          </Navbar>
        </div>
      </div>

      <div>
        <div
          className="container-fluid fruite py-5 mt-5"
          // style={{ backgroundColor: "#e8e7e6" }}
        >
          <div className="container col-lg-12 text-lg-end text-sm-center ml-5">
            <ul className="nav d-inline-flex text-center products-tabs-margin">
              <ProductsSlider
                handleTabChange={(state) => handleTabChange(state)}
                tabStates={tabStates}
              />
            </ul>
          </div>
          <div className="container py-5 products-margin">
            <div className="tab-className text-center">
              <div className="tab-content">
                {tabStates.freezed && (
                  <ProductsData
                    products={allProducts?.filter(
                      (product) => product.category === "Freezed-Dried Meat"
                    )}
                    tabsState={tabStates.freezed}
                  />
                )}
                {tabStates.seafood && (
                  <ProductsData
                    products={allProducts?.filter(
                      (product) => product.category === "Freezed-Dried Seafod"
                    )}
                    tabsState={tabStates.seafood}
                  />
                )}
                {tabStates.others && (
                  <ProductsData
                    products={allProducts?.filter(
                      (product) => product.category === "Freezed-Dried Others"
                    )}
                    tabsState={tabStates.others}
                  />
                )}
                {tabStates.homeMade && (
                  <ProductsData
                    products={allProducts?.filter(
                      (product) => product.category === "Home Made Style Treats"
                    )}
                    tabsState={tabStates.homeMade}
                  />
                )}
                {tabStates.bundled && (
                  <ProductsData
                    products={allProducts?.filter(
                      (product) => product.category === "Bundled Gift Box"
                    )}
                    tabsState={tabStates.bundled}
                  />
                )}
                {tabStates.suppliments && (
                  <ProductsData
                    products={allProducts?.filter(
                      (product) => product.category === "Pet Suppliments"
                    )}
                    tabsState={tabStates.suppliments}
                  />
                )}
                {tabStates.toys && (
                  <ProductsData
                    products={allProducts?.filter(
                      (product) => product.category === "Pet Toys"
                    )}
                    tabsState={tabStates.toys}
                  />
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
