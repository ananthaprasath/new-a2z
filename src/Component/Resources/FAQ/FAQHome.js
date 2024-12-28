import React from "react";

const FAQHome = ({ data }) => {
  const { title, subtitle, faqs } = data;

  return (
    <div className="bg2">
      <div className="container py-5 aos">
        {/* Title and Subtitle Section */}
        <div className="text-center mb-4">
          <h3 className="fw-bold" style={{ color: "#203239" }}>
            {title}
          </h3>
          <p className="fw-light" style={{ color: "#203239" }}>
            {subtitle}
          </p>
        </div>

        {/* FAQ Section */}
        <div className="accordion aos" id="faqAccordion">
          {faqs.map((faq) => (
            <div
              className="accordion-item mb-1"
              data-aos="zoom-in"
              key={faq.id}
            >
              <h2
                className="accordion-header"
                id={`heading${faq.id}`}
              >
                <button
                  className="accordion-button fw-bold border-0 bg-white py-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${faq.id}`}
                  aria-expanded={faq.id === 1 ? "true" : "false"}
                  aria-controls={`collapse${faq.id}`}
                >
                  <i
                    className={`me-2 ${faq.icon}`}
                    style={{ color: "#007bff" }}
                  ></i>
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${faq.id}`}
                className={`accordion-collapse collapse ${
                  faq.id === 1 ? "show" : ""
                }`}
                aria-labelledby={`heading${faq.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div
                  className="accordion-body para-color"
                  style={{ color: "#333" }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQHome;
