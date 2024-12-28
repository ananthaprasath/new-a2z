import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
   faLinkedinIn,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import logo from "../image/logo.png";
import visa from "../image/visa-logo.png";
import payoneer from "../image/payoneer-logo.png";
import master from "../image/mastercard-logo.png";
import affirm from "../image/affirm-logo.png";

const Footer = () => {
  return (
    <footer className="bg text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-4 mb-4">
            <img
              src={logo} // Replace with your logo
              alt="A2Z SMS Logo"
              className="w-75 mb-2"
            />
            <p className="pt-1">
              Bulk SMS is the most popular marketing method compared to other
              marketing methods. It is trusted, reliable, and cost-effective.
            </p>
            <h5 className="fw-bold mt-4">Payment Method</h5>
            <div>
              <img
                src={visa} // Replace with Visa icon
                alt="Visa"
                className="me-4"
              />
              <img
                src={payoneer} // Replace with Mastercard icon
                alt="Mastercard"
                className="me-4"
              />
              <img
                src={master} // Replace with Payoneer icon
                alt="Payoneer"
                className="me-4 "
              />
              <img
                src={affirm} // Replace with Affirm icon
                alt="Affirm"
              />
            </div>
          </div>

          {/* Company Links */}
          <div className="col-5 col-md-2 mx-3 mb-4">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled" id="line-space">
              <li>
                <Link
                  to="/"
                  className="text-white text-decoration-none hover pt-2"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about/"
                  className="text-white text-decoration-none hover pt-2"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services/"
                  className="text-white text-decoration-none hover pt-2"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/faq/"
                  className="text-white text-decoration-none hover pt-2"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="text-white text-decoration-none hover pt-2"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SMS Plans Links */}
          <div className="col-5 col-md-2 mx-3 mb-4">
            <h5 className="fw-bold">SMS Plans</h5>
            <ul className="list-unstyled" id="line-space">
              <li>
                <Link
                  to="/bulk-sms/"
                  className="text-white text-decoration-none hover"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Bulk SMS
                </Link>
              </li>
              <li>
                <Link
                  to="/whatsapp-api/"
                  className="text-white text-decoration-none hover pt-2"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  to="/rcs-sms/"
                  className="text-white text-decoration-none hover pt-2"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  RCS SMS
                </Link>
              </li>
              <li>
                <Link
                  to="/voice-call/"
                  className="text-white text-decoration-none hover pt-2"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Bulk Voice Call
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs/"
                  className="text-white text-decoration-none hover pt-2"
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="me-2" />
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Newsletter</h5>
            <p className="py-2">
              Sign up to receive our weekly newsletter to get the latest
              updates.
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
                aria-label="Enter Email Address"
              />
              <button className="btn btn-light">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
            <div className="d-flex mt-4">
              <Link
                to="https://www.facebook.com/A2zsmsservices/"
                className="text-white me-3 fs-5 d-flex justify-content-center align-items-center bg-primary rounded-circle"
                style={{ width: "40px", height: "40px" }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              {/* <Link
                to="#"
                className="text-white me-3 fs-5 d-flex justify-content-center align-items-center bg-info rounded-circle"
                style={{ width: "40px", height: "40px" }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link> */}
              <Link
                to="https://in.linkedin.com/in/vinay-reddy-76337b336"
                className="text-white me-3 fs-5 d-flex justify-content-center align-items-center bg-primary rounded-circle"
                style={{ width: "40px", height: "40px" }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link
                to="https://wa.me/918431086185?text=Hi"
                className="text-white me-3 fs-5 d-flex justify-content-center align-items-center bg-success rounded-circle"
                style={{ width: "40px", height: "40px" }}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
              <Link
                to="https://www.youtube.com/@a2zsms"
                className="text-white fs-5 d-flex justify-content-center align-items-center bg-danger rounded-circle"
                style={{ width: "40px", height: "40px" }}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* Footer Bottom */}
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Copyright */}
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} by <strong>A2ZSMS</strong>.
                All rights reserved.
              </p>
            </div>

            {/* Right Side - Links */}
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                <Link
                  to="/terms/"
                  className="text-white text-decoration-none me-3"
                  style={{ fontWeight: "500" }}
                >
                  Terms & Condition
                </Link>
                <Link
                  to="/privacy/"
                  className="text-white text-decoration-none"
                  style={{ fontWeight: "500" }}
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
