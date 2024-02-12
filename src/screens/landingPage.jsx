import { useNavigate } from "react-router-dom";
import productImg from "../img/shutterstock_653239414.jpg";
import dogImg from "../img/shutterstock_1969088419.jpg";
import bootleImg from "../img/c16a3d9e712761b8ea287dac578e7434.jpg";
import topHitsImg from "../img/Web Icons-10.png";
import reviewsImg from "../img/Web Icons-11.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SliderComponent from "../components/slider";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <Navbar />

        <div className="container-fluid py-5 mb-5 hero-header mt-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center mt-5">
              <div className="col-md-12 col-lg-7 d-flex align-items-lg-start align-items-sm-center flex-column">
                <h1 className="mb-5 display-3 text-light hero-heading">
                  NEW ARRIVALS
                </h1>
                <div className="position-relative">
                  <button
                    type="submit"
                    className="btn btn-lg btn-outline-light text-uppercase btn-rounded-none btn-border-style w-100"
                    // style={{ top: 0, right: "25%" }}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div
                  id="carouselId"
                  className="carousel slide position-relative"
                  data-bs-ride="carousel"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid featurs py-5">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center p-4 product-card">
                  <div className="inner-div">
                    <h1 className="text-uppercase text-light category-text">
                      Premium freeze-dried meat
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center product-card p-4">
                  <div className="inner-div">
                    <h1 className="text-uppercase text-light  category-text">
                      Home made style treats
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center p-4  product-card">
                  <div className="inner-div">
                    <h1 className="text-uppercase text-light  category-text">
                      Bundled gift box
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center p-4  product-card">
                  <div className="inner-div">
                    <h1 className="text-uppercase text-light  category-text">
                      Pet Suppliments
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="row">
            <img src={reviewsImg} className="w-100 mb-5" />
          </div>
          <div className="row">
            <SliderComponent />

            {/* <div className="col-md-12 col-sm-12 col-12 mt-5">
              <div className="text-center mb-3">
                <img src={starsImg} className="stars-img" />
              </div>
              <h1 className="icon-color text-center review-title">
                "MY DOG LOVES IT, SO NICE!"
              </h1>
              <h4 className="icon-color text-center mb-5 reviewer-name">
                - ADA WU .
              </h4>
            </div> */}
          </div>
        </div>

        <div className="container-fluid py-5 mb-5 crossover-header">
          <div className="container py-5">
            <div className="row g-5 align-items-center mt-5">
              <div className="col-md-12 col-lg-7 d-flex align-items-center flex-column">
                <h1 className="mb-5 display-3 text-light text-uppercase hero-heading">
                  Croosover
                </h1>
              </div>
              <div className="col-md-12 col-lg-5">
                <div
                  id="carouselId"
                  className="carousel slide position-relative"
                  data-bs-ride="carousel"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <img src={topHitsImg} className="w-100 mb-5" />
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="position-relative fruite-item">
                <div className="fruite-img">
                  <img src={bootleImg} className="img-fluid" alt="" style={{ height: "250px" }} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative fruite-item">
                <div className="fruite-img">
                  <img
                    src={dogImg}
                    className="img-fluid"
                    style={{ height: "250px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="position-relative fruite-item">
                <div className="fruite-img">
                  <img
                    src={productImg}
                    className="img-fluid"
                    style={{ height: "250px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
