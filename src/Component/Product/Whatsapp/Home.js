import React from "react";
import whatsappImage from "../../image/product/Whatsapp.png"; // Replace with your WhatsApp-related image path

const WhatsAppSolutions = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Elevate Your Business with{" "}
              <span className="text-success">Cloud WhatsApp API</span>
            </h1>
            <p className="text-muted">
              Transform how your business communicates with customers by leveraging our Cloud WhatsApp API. Achieve seamless engagement, automation, and scalability, all through a trusted platform.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Automate customer support with intelligent chatbots.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Send personalized messages at scale with templates.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Provide secure and instant OTP verification services.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Deliver real-time notifications for orders and updates.</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Integrate seamlessly with CRMs for unified workflows.</span>
              </li>
            </ul>
         
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src={whatsappImage}
              alt="Cloud WhatsApp API Services"
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSolutions;
