import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top-bg d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center py-2">
          {/* Left Section */}
          <div className="d-flex align-items-center text-white">
            <small>
              Talk To Sales:{" "}
              <a
                href="tel:+918431086185"
                className="text-white text-decoration-none"
              >
                +91-8431086185
              </a>
            </small>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center text-white">
            {/* <small className="me-3">Newsroom</small> */}
            <small className="me-3">
              <Link to="/contact" className="text-white text-decoration-none">
                Contact Us
              </Link>
            </small>
            <small className="me-3">Support</small>
            <small>
              <a
                href="mailto:sales@a2zsms.in"
                className="text-white text-decoration-none"
              >
                sales@a2zsms.in
              </a>
            </small>
            {/* <small className="me-3">Login</small> */}
            {/* <select className="country-select">
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
