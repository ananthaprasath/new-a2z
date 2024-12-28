import React, { useState } from "react";

const SolutionFaq = ({ data }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg2">
        <div className="container py-5">
          {/* Title */}
          <h2 className="text-center fw-bold mb-4">{data.title}</h2>
        
          {/* Accordion Section */}
          <div className="accordion aos">
            {data.faqs.map((faq) => (
              <div key={faq.id} className="accordion-item border-0 shadow-sm  mb-2 py-2" data-aos='zoom-in-up'>
                {/* Question */}
                <h2 className="accordion-header" id={`heading-${faq.id}`}>
                  <button
                    className={`accordion-button ${
                      activeId === faq.id ? "" : "collapsed"
                    } fw-bold`}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    {faq.question}
                  </button>
                </h2>
        
                {/* Answer */}
                <div
                  id={`collapse-${faq.id}`}
                  className={`accordion-collapse collapse ${
                    activeId === faq.id ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p className="mb-0">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default SolutionFaq;
