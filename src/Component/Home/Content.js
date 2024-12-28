import React from "react";
import { Link } from "react-router-dom"; // For internal navigation
import content from "../image/content1.webp"; // Replace with your image

const Content = () => {
  const servicesData = [
    {
      title: "WhatsApp Service",
      description:
        "Leverage the power of WhatsApp to deliver personalized and interactive communication. Share updates, send reminders, and promote your services effortlessly, all while engaging with customers on their favorite platform.",
      link: "/whatsapp-api",
      icon: "bi bi-whatsapp",
      animation: "zoom-in-right"
    },
    {
      title: "RCS Service",
      description:
        "Elevate your customer engagement with visually stunning RCS messages. Share high-quality images, captivating videos, and interactive buttons for an immersive messaging experience that boosts conversions.",
      link: "/rcs-sms",
      icon: "bi bi-layout-text-sidebar-reverse",
      animation: "zoom-in-right"
    },
    {
      title: "Bulk SMS",
      description:
        "Reach your audience instantly with targeted promotional messages. Share offers, announcements, and campaigns that are tailored to customer needs, ensuring high engagement and quick responses.",
      link: "/bulk-sms",
      icon: "bi bi-megaphone-fill",
      animation: "zoom-in-left"
    },
    {
      title: "Bulk Voice Call",
      description:
        "Add a human touch to your messaging with bulk voice calls. Deliver reminders, updates, or personalized offers through interactive voice communication that resonates with your audience.",
      link: "/voice-call",
      icon: "bi bi-telephone-fill",
      animation: "zoom-in-left"
    }
  ];

  return (
    <div className="bg-light">
      <div className="container py-5 para-color">
        <div className="row align-items-center gy-5 text-muted aos">
          {/* Left Section */}
          <div className="col-md-4 px-md-3">
            <ul className="list-unstyled">
              {servicesData.slice(0, 2).map((service, index) => (
                <li
                  key={index}
                  className="mb-4 d-flex align-items-start"
                  data-aos={service.animation}
                >
                  <i className={`${service.icon} display-6 iconcolor me-3`}></i>
                  <div className="pb-4">
                    <h5 className="fw-bold">{service.title}</h5>
                    <p>{service.description}</p>
                    <Link to={service.link} className="fw-bold">
                      Explore &rarr;
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Section */}
          <div className="col-md-4 text-center px-md-3" data-aos="fade-in">
            <img
              src={content}
              alt="Service Overview"
              className="w-75 rounded"
            />
          </div>

          {/* Right Section */}
          <div className="col-md-4 px-md-3">
            <ul className="list-unstyled">
              {servicesData.slice(2).map((service, index) => (
                <li
                  key={index}
                  className="mb-4 d-flex align-items-start"
                  data-aos={service.animation}
                >
                  <i className={`${service.icon} display-6 iconcolor me-3`}></i>
                  <div className="pb-4">
                    <h5 className="fw-bold">{service.title}</h5>
                    <p>{service.description}</p>
                    <Link to={service.link} className="fw-bold">
                      Explore &rarr;
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
