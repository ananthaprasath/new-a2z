import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Importing icons

const faqData = [
  {
    question: "What is RCS Messaging and how does it work?",
    answer:
      "RCS (Rich Communication Services) is the next-generation messaging standard that replaces traditional SMS with interactive, media-rich communication. It enables businesses to send high-resolution images, videos, carousels, and more through default messaging apps. RCS enhances customer engagement by allowing users to interact directly within the message interface, eliminating the need for external apps or links.",
  },
  {
    question: "How is RCS different from traditional SMS?",
    answer:
      "RCS offers advanced features like verified sender branding, rich media content, and interactive buttons, which traditional SMS cannot provide. Unlike SMS, RCS allows businesses to deliver immersive experiences with product catalogs, video tutorials, and customer support chats directly in the message thread. It transforms text-based messaging into a fully interactive and engaging experience.",
  },
  {
    question: "What are the benefits of using RCS for businesses?",
    answer:
      "RCS provides businesses with the ability to create personalized, engaging, and visually appealing communication. It offers higher delivery rates and read receipts, making it easier to track campaign performance. Features like chatbots, payment integration, and suggested replies enable businesses to automate customer interactions, improve conversion rates, and provide seamless user experiences.",
  },
  {
    question: "Can RCS Messaging be used for marketing campaigns?",
    answer:
      "Absolutely! RCS is perfect for marketing campaigns as it allows businesses to showcase products, run promotions, and provide personalized offers with visually rich content. Campaigns delivered through RCS have significantly higher engagement rates than traditional SMS, as customers can view and interact with content like videos, images, and carousels directly in their messaging app.",
  },
  {
    question: "What is a Verified Sender in RCS Messaging?",
    answer:
      "Verified Sender ensures that customers know they are communicating with an authentic and trusted business. RCS allows businesses to add branding elements like logos, colors, and company names to their messages. This not only improves brand recognition but also builds trust, as users can easily differentiate between legitimate communication and potential fraud.",
  },
  {
    question: "Is RCS Messaging secure for businesses and customers?",
    answer:
      "Yes, RCS Messaging is designed with security in mind. It supports encryption and ensures messages are delivered over secure channels. Features like verified sender and controlled communication access help businesses maintain customer trust. Additionally, RCS is compliant with global privacy standards, making it a safe choice for industries like banking, healthcare, and e-commerce.",
  },
  {
    question: "What kind of industries can benefit the most from RCS Messaging?",
    answer:
      "RCS Messaging is beneficial for various industries, including retail, travel, banking, and healthcare. Retailers can use it to showcase product catalogs, provide personalized offers, and enable in-app purchases. Travel companies can share boarding passes and real-time updates, while banks can deliver secure transaction alerts. Healthcare providers can utilize RCS for appointment scheduling and reminders, improving overall customer engagement.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container py-5 aos ">
      <h2
        className="text-center mb-4"
        data-aos="zoom-in"
        style={{ color: "#007bff" }}
      >
        Frequently Asked Questions about RCS Messaging
      </h2>
      <div className="accordion aos">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-3"
            style={{
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              padding: "15px",
              cursor: "pointer",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div
              className="d-flex justify-content-between align-items-center"
              data-aos="zoom-in-up"
            >
              <h5 className=" mb-0" style={{ color: "#203239" }}>
                {faq.question}
              </h5>
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
                style={{ color: "#007bff" }}
              />
            </div>
            {activeIndex === index && (
              <p className="text-muted mt-2 ">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
