import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pricing = () => {
  const pricingData = [
    {

      
      package: "Lite Plans",
      plans: [
        { calls: "2,500 Conversations", price: "₹179/month" },
        { calls: "5,000 Conversations", price: "₹419/month" },
        { calls: "10,000 Conversations", price: "₹779/month" },
        { calls: "25,000 Conversations", price: "₹1,199/month" },
        { calls: "100,000 Conversations", price: "₹1,799/month" },
        { calls: "Unlimited Conversations", price: "₹4,799/month" },
      ],
      color: "success",
    },
    {
      package: "Pro Plans",
      plans: [
        { calls: "1,250 Conversations", price: "₹359/month" },
        { calls: "2,500 Conversations", price: "₹839/month" },
        { calls: "5,000 Conversations", price: "₹1,559/month" },
        { calls: "12,500 Conversations", price: "₹2,399/month" },
        { calls: "50,000 Conversations", price: "₹3,599/month" },
        { calls: "Unlimited Conversations", price: "₹7,199/month" },
      ],
      color: "primary",
    },
    {
      package: "Add-On Plans",
      plans: [
        { calls: "1,000 Conversations", price: "₹119" },
        { calls: "5,000 Conversations", price: "₹419" },
        { calls: "10,000 Conversations", price: "₹659" },
        { calls: "25,000 Conversations", price: "₹1,199" },
        { calls: "100,000 Conversations", price: "₹1,799" },
      ],
      color: "warning",
    },
  ];

  return (
    <div className="py-5 bg-light">
      <h2 className="text-center py-3">Unlock the Power of WhatsApp Business API for Your Business</h2>
      <p className="text-center mb-5">
        Boost your customer engagement with personalized and efficient communication. Choose a plan that fits your business needs, whether you're starting small or managing high-volume conversations.
      </p>

      <h3 className="text-center py-3">Our Pricing Plans</h3>

      {/* Pricing Plan Details */}
      <div className="container pt-2">
        <div className="row justify-content-center">
          <div className="col-md-12 mb-5">
            {pricingData.map((category, index) => (
              <div key={index} className="text-center mb-4">
                <h4 className="mb-4">{category.package}</h4>
                <div className="row justify-content-center">
                  {category.plans.map((item, i) => (
                    <div className="col-md-2 mb-4" key={i}>
                      <div className="card shadow border-0">
                        <div className={`card-header bg-${category.color} text-white`} style={{ fontWeight: "bold" }}>
                          {item.calls}
                        </div>
                        <div className="card-body text-center">
                          <h4 className="fw-bold">{item.price}</h4>
                          <hr />
                          <button className={`btn btn-${category.color} text-white fw-bold w-100 mt-3`} style={{ borderRadius: "20px" }}>
                            Buy Now <i className="bi bi-arrow-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
