import React from "react";
import governmentImage from "../../image/Solutions/Government.png"; // Replace with your government-related image path

const Home = () => {
  return (
    <section className="py-5 bg2">
      <div className="container">
        <div className="row align-items-center aos para-color">
          {/* Left Content */}
          <div className="col-md-6 " data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Streamline Governance with{" "}
              <span className="text-primary">WhatsApp Solutions</span>
            </h1>
            <p className="text-muted">
              Enhance public services and communication by utilizing WhatsApp
              for instant notifications, citizen engagement, and streamlined operations.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Notify citizens with real-time updates on policies and schemes.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Send reminders for bill payments, tax deadlines, or registrations.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Provide seamless OTP-based authentication for secure access.</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Facilitate citizen queries with WhatsApp chatbots and support.</span>
              </li>
            </ul>
            <button className="btn btn-primary mt-4 px-4 py-2 fw-bold">
              Learn More
            </button>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src={governmentImage}
              alt="Government WhatsApp Services"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
