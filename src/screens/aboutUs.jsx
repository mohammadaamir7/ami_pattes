import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutUs = () => {
  return (
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
      <div className="container">
        <div className="row">
          <h3 className="text-uppercase aboutus-heading text-center icon-color aboutus-head">
            About Us
          </h3>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="mt-5 aboutus-para">
              At our establishment, we prioritize your pet's well-being and
              happiness. Our commitment to quality extends to meticulously
              selected treats that focus on enhancing longevity and overall
              health. We aspire to create "the forever pet" by promoting a
              healthy lifestyle through nutrition. Your pet's well-being is our
              mission, contributing to a long, vibrant, and joyous existence.
              Trust us to provide high-quality treats that not only delight but
              also contribute to your pet's enduring joy and health.
            </p>
            <p className="aboutus-para">
              Introducing our revolutionary Freeze-Dried pet food, a complete
              and balanced meal in a convenient kibble format, encapsulating the
              flavor and nutrition of natural, quality ingredients. Freeze-dried
              pet treats offer a distinct advantage over conventional air-dried
              pet food. The freeze- drying process preserves the treats' natural
              flavors, nutrients, and texture without compromising on quality.
              Unlike air-drying, which may involve exposure to higher
              temperatures, freeze-drying retains more nutritional value,
              ensuring your pet receives maximum benefits.
            </p>
            <p className="aboutus-para">
              This method eliminates the need for preservatives or artificial
              additives, making the treats a wholesome and natural choice. The
              freeze-drying process also results in a lightweight and convenient
              treat, maintaining the original taste and nutritional integrity.
              Opt for freeze-dried pet treats to provide your furry friend with
              a healthier, tastier, and more nourishing snack option.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
