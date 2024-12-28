import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Importing icons

const faqData = [
  {
    question: "What is Promotional SMS and how can it benefit my business?",
    answer:
      "Promotional SMS refers to bulk text messages sent to a large audience to promote products, services, or offers. It is a cost-effective marketing tool that ensures direct communication with your target audience. Businesses can use it for flash sales, exclusive deals, or event promotions, driving customer engagement and increasing sales.",
  },
  {
    question: "How do Transactional SMS differ from Promotional SMS?",
    answer:
      "Transactional SMS are used to send critical information like order updates, payment confirmations, or alerts to customers. Unlike promotional SMS, they can be sent to recipients on DND (Do Not Disturb) lists, ensuring compliance with regulations. They are essential for maintaining transparency and trust in customer interactions.",
  },
  {
    question: "What is an OTP service and why is it important?",
    answer:
      "An OTP (One-Time Password) service is used to enhance security during login, transactions, or account recovery. OTPs provide an additional layer of protection by verifying the user's identity through a unique password sent via SMS. They are critical for industries like banking, e-commerce, and healthcare to safeguard sensitive information and prevent fraud.",
  },
  {
    question: "Can I schedule SMS campaigns for a future date and time?",
    answer:
      "Yes, most SMS platforms allow you to schedule messages for a specific date and time. This feature is especially useful for time-sensitive campaigns, such as holiday promotions or event reminders. Scheduling ensures your messages are sent when your audience is most likely to engage, improving the effectiveness of your campaign.",
  },
  {
    question: "How secure is SMS communication for sensitive information?",
    answer:
      "SMS communication is secure when paired with proper encryption and compliance with data protection laws. Platforms offering SMS services usually follow industry standards to protect sensitive information like OTPs or account updates. However, businesses must ensure they use trusted SMS providers to avoid unauthorized access or data breaches.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container py-5 aos">
      <h2 className="text-center mb-4 " data-aos='zoom-in' style={{ color: "#007bff" }}>
        Frequently Asked Questions
      </h2>
      <div className="accordion aos" >
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-3"
            style={{
            //   border: "1px solid #d8e9ff",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              padding: "15px",
              cursor: "pointer",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div className="d-flex justify-content-between align-items-center" data-aos='zoom-in-up'>
              <h5 className="fw-bold mb-0" style={{ color: "#203239" }}>
                {faq.question}
              </h5>
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
                style={{ color: "#007bff" }}
              />
            </div>
            {activeIndex === index && (
              <p className="text-muted mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
