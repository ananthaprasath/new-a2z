import React from "react";
import foodImage from "../../image/Solutions/Food.png"; // Replace with your food-related image path

const Home = () => {
  return (
    <section className="py-5 bg2">
      <div className="container">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Revolutionize Food & Beverage Industry with{" "}
              <span className="text-primary">Smart Messaging Solutions</span>
            </h1>
            <p className="text-muted">
              Enhance your food and beverage business by leveraging messaging
              services to engage customers, improve order management, and
              deliver real-time updates seamlessly.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Send personalized offers and promotional deals instantly.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Provide real-time updates on order confirmations and delivery statuses.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Share digital menus and payment receipts effortlessly.</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Engage customers with location-based offers and loyalty programs.
                </span>
              </li>
            </ul>
            <button className="btn btn-primary mt-4 px-4 py-2 fw-bold">
              Learn More
            </button>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src={foodImage}
              alt="Food & Beverage Messaging Services"
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
