import React from "react";
import manWithLaptop from "../../image/hosting-boy.png"; // Replace with the actual path to your image

const Home = () => {
  return (
    <section className="py-5 ">
      <div className="container">
        <div className="row align-items-center aos">
          {/* Left Image Section */}
          <div className="col-md-6 text-center" data-aos='fade-right'>
            <img
              src={manWithLaptop}
              alt="Man with laptop"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>

          {/* Right Content Section */}
          <div className="col-md-6" data-aos='fade-left'>
            <p className="text-primary text-uppercase fw-bold small mb-2">
              Reliable Bulk SMS Solutions
            </p>
            <h1 className="fw-bold mb-3">Get High-Quality SMS Services</h1>
            <p className="text-muted mb-4">
              Deliver effective messages to your customers at the best prices.
              Our reliable SMS service ensures instant delivery and high
              engagement for every campaign.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
                <span>Instant Message Delivery Guarantee</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
                <span>Comprehensive Campaign Management Tools</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
                <span>Unlimited Contacts and Customized Messaging</span>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
