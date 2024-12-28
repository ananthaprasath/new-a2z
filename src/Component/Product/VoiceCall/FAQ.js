import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaRegClock,
  FaFileInvoiceDollar,
  FaUsers,
  FaHeadset,
  FaRegCheckCircle,
  FaGlobe,
  FaSyncAlt,
  FaBroadcastTower,
  FaLock,
} from "react-icons/fa"; // Importing required icons

const faqData = [
  {
    id: 1,
    question: "What is Bulk Voice Call Service?",
    answer:
      "Bulk Voice Call Service allows businesses to send pre-recorded voice messages to a large audience. It’s an effective tool for promotional campaigns, surveys, reminders, and alerts, ensuring efficient communication with minimal effort. Businesses can use this service to share information quickly with customers and make their messaging more impactful. It eliminates manual calls, saving time and ensuring a consistent message for all recipients.",
    icon: <FaPhoneAlt color="#007bff" />,
  },
  {
    id: 2,
    question: "How does Bulk Voice Call work?",
    answer:
      "Bulk Voice Calls work by uploading a pre-recorded voice message and a list of recipient phone numbers. The system automatically dials these numbers and plays the message upon answering. This process is automated and ensures timely delivery of messages. It’s perfect for notifying customers about offers, delivery updates, or event reminders. Advanced features such as retrying failed calls ensure maximum reach.",
    icon: <FaBroadcastTower color="#007bff" />,
  },
  {
    id: 3,
    question: "Can I schedule Bulk Voice Calls?",
    answer:
      "Yes, you can schedule your Bulk Voice Calls for specific dates and times. This is useful for sending timely reminders, notifications, or promotional messages to your audience. Scheduling enables you to plan campaigns ahead of time and target your audience when they are most likely to engage. For instance, you can schedule morning reminders for appointments or evening promotional calls for greater effectiveness.",
    icon: <FaRegClock color="#007bff" />,
  },
  {
    id: 4,
    question: "Is it possible to track call delivery?",
    answer:
      "Yes, detailed analytics are available, allowing you to track call delivery, answered calls, and failed attempts. This ensures transparency and helps refine future campaigns. Call tracking features include real-time status updates and reports, enabling businesses to understand call engagement levels. By analyzing the data, you can identify trends, improve targeting, and enhance overall campaign performance.",
    icon: <FaRegCheckCircle color="#007bff" />,
  },
  {
    id: 5,
    question: "Can Bulk Voice Calls reach DND numbers?",
    answer:
      "Transactional Bulk Voice Calls can reach DND (Do Not Disturb) numbers. However, promotional messages cannot be delivered to numbers on the DND list, adhering to regulatory guidelines. It’s essential for businesses to classify their messages correctly to avoid compliance issues. Using DND-compliant transactional calls is particularly beneficial for sending alerts, reminders, and updates to customers.",
    icon: <FaLock color="#007bff" />,
  },
  {
    id: 6,
    question: "What are the pricing options for Bulk Voice Calls?",
    answer:
      "Pricing typically depends on the number of calls and their duration. Most providers offer flexible packages, making it cost-effective for both small and large-scale campaigns. For instance, businesses can choose pay-as-you-go plans for smaller campaigns or bulk packages for larger audiences. Comparing pricing across providers helps in choosing a plan that suits your budget and campaign goals.",
    icon: <FaFileInvoiceDollar color="#007bff" />,
  },
  {
    id: 7,
    question: "How reliable is Bulk Voice Call Service?",
    answer:
      "Bulk Voice Call Services are highly reliable, ensuring consistent delivery even during peak usage times. With redundant systems in place, downtime is minimized, and messages are delivered effectively. Additionally, many providers offer service-level agreements (SLAs) guaranteeing uptime and performance. Reliability makes these services ideal for critical communications such as alerts and emergency updates.",
    icon: <FaSyncAlt color="#007bff" />,
  },
  {
    id: 8,
    question: "Can I use Bulk Voice Calls for customer feedback?",
    answer:
      "Yes, Bulk Voice Calls are an excellent way to gather customer feedback. By integrating with interactive voice response (IVR) systems, customers can provide responses via keypresses during the call. This approach allows businesses to collect real-time feedback, measure customer satisfaction, and improve their services. For instance, post-service follow-up calls can gather valuable insights to enhance customer experience.",
    icon: <FaUsers color="#007bff" />,
  },
  {
    id: 9,
    question: "Is support available for Bulk Voice Call setup?",
    answer:
      "Yes, most providers offer dedicated support to assist with setup, configuration, and troubleshooting. This ensures your campaigns run smoothly without any technical difficulties. Providers often include guides, tutorials, and live support to help businesses make the most of their voice call services. Onboarding support ensures businesses can launch their campaigns quickly and efficiently.",
    icon: <FaHeadset color="#007bff" />,
  },
  {
    id: 10,
    question: "Can Bulk Voice Calls be used internationally?",
    answer:
      "Yes, Bulk Voice Call services can reach international audiences. This is ideal for global businesses looking to connect with customers across different regions. Providers often offer customizable plans for international calls, ensuring cost-effective communication. These services are perfect for businesses that operate across multiple time zones and need to ensure effective outreach to a global customer base.",
    icon: <FaGlobe color="#007bff" />,
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle logic
  };

  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h3 className="fw-bold" style={{ color: "#203239" }}>
          Bulk Voice Call FAQs
        </h3>
        <p className="text-muted">Find answers to common questions about Bulk Voice Call Services.</p>
      </div>

      {/* FAQ Accordion */}
      <div className="accordion aos" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="accordion-item mb-3"data-aos='zoom-in-up' key={faq.id}>
            <h2 className="accordion-header"  id={`heading${faq.id}`}>
              <button
                className={`accordion-button fw-bold border-0 py-4 ${
                  activeIndex === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index ? "true" : "false"}
                aria-controls={`collapse${faq.id}`}
              >
                {faq.icon}
                <span className="ms-2">{faq.question}</span>
              </button>
            </h2>
            <div
              id={`collapse${faq.id}`}
              className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
              aria-labelledby={`heading${faq.id}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-muted para-color">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
