import React from "react";
import whatsappIcon from "../../image/feature-icon/icon-1.png"; // Replace with actual image paths
import rcsIcon from "../../image/feature-icon/icon-2.png";
import promoIcon from "../../image/feature-icon/icon-3.png";
import transIcon from "../../image/feature-icon/icon-4.png";
import voiceCallIcon from "../../image/feature-icon/icon-8.png";
import otpIcon from "../../image/feature-icon/icon-7.png";

const OurService = () => {
  const services = [
    {
      icon: whatsappIcon,
      title: "WhatsApp SMS",
      anime:'zoom-in-right',
      description:
        "Engage your audience on WhatsApp with instant, interactive messages. Reach customers where they’re active, with high open and engagement rates.",
    },
    {
      icon: rcsIcon,
      title: "RCS SMS",
      anime:'zoom-in',

      description:
        "Deliver rich, multimedia messages with RCS SMS, bringing a more engaging experience to your users. Enhance communication with images, buttons, and more.",
    },
    {
      icon: promoIcon,
      title: "Promotional SMS",
      anime:'zoom-in-left',

      description:
        "Promote your business effectively with targeted SMS campaigns. Reach thousands instantly and boost engagement with special offers and updates.",
    },
    {
      icon: transIcon,
      title: "Transactional SMS",
      anime:'zoom-in-right',

      description:
        "Send important alerts, updates, and confirmations to customers in real-time. Ensure critical information reaches your users instantly and securely.",
    },
    {
      icon: voiceCallIcon,
      title: "Bulk Voice Call",
      anime:'zoom-in',

      description:
        "Communicate with your audience using pre-recorded voice messages. Perfect for alerts, reminders, and personalized updates on a large scale.",
    },
    {
      icon: otpIcon,
      title: "OTP SMS",
      anime:'zoom-in-left',

      description:
        "Secure your transactions with One-Time Password (OTP) SMS. Provide an extra layer of protection with fast, reliable, and secure OTP delivery.",
    },
  ];

  return (
    <section className="py-5 bg2">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-primary text-uppercase fw-bold small">
            Best Services
          </p>
          <h2 className="fw-bold">Powerful Bulk SMS Services</h2>
        </div>
        <div className="row g-4 aos">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" data-aos={service.anime} key={index}>
              <div
                className="card border-0 shadow-sm h-100 service-card"
                style={{
                  transition: "all 0.3s ease",
                }}
              >
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="me-3"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div>
                      <h5 className="fw-bold mb-2">{service.title}</h5>
                      <p className="text-muted mb-0">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for hover effect */}
      <style>
        {`
          .service-card:hover {
          cursor:pointer;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-5px);
          }
        `}
      </style>
    </section>
  );
};

export default OurService;
