import React from "react";
import retailEcommerceImage from "../../image/Solutions/Ecommerce.png"; // Replace with your image path

const Home = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Transform Your <span className="text-primary">Retail & E-commerce</span> with WhatsApp API!
            </h1>
            <p>
              Revolutionize customer engagement, streamline shopping experiences, 
              and drive sales with our advanced WhatsApp API solutions. Enhance your 
              e-commerce journey with seamless communication!
            </p>
            <ul className="list-unstyled mt-4 text-muted">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Share real-time order updates, shipping details, and delivery notifications.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Send personalized promotions and exclusive product recommendations.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Provide 24/7 customer support through AI-driven chatbots.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Automate abandoned cart reminders to recover lost sales.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src={retailEcommerceImage}
              alt="Retail & E-commerce Services"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
