import React from "react";
import icon1 from '../../image/feature-icon/icon-1.png'
import icon2 from '../../image/feature-icon/icon-2.png'
import icon3 from '../../image/feature-icon/icon-3.png'
import icon4 from '../../image/feature-icon/icon-4.png'
const featuresData = [
  {
    id: 1,
    title: "Register An Account",
    description:
      "Get started by creating an account with us. Registration is quick and simple, allowing you to access our bulk SMS platform and start sending messages right away.",
    image: icon1,
  },
  {
    id: 2,
    title: "Select A Bulk SMS Plan",
    description:
      "Choose the SMS plan that fits your needs. Whether you’re sending promotional messages, alerts, or reminders, we have flexible plans that suit businesses of all sizes.",
    image: icon2,
  },
  {
    id: 3,
    title: "Add Contacts & Compose Msg",
    description:
      "Easily upload your contact list and craft personalized messages. Our platform supports custom fields to make each SMS more impactful and engaging.",
    image: icon3,
  },
  {
    id: 4,
    title: "Send And Track Messages",
    description:
      "Launch your campaign with just a click! Monitor delivery rates and response metrics in real-time to ensure your message reaches the right audience.",
    image: icon4,
  },
];

const Home = () => {
  return (
    <div>
      {/* Features Section */}
      <section
        className=""
     
      >
        <div className="container-fluid aos  bg-light py-5 shadow">
          <div className="container">
            <div className="row " data-aos='flip-up'>
            <h2 className="font1 text-center py-3">How It Works: Simplify Your Bulk SMS Campaigns</h2>
            
              {featuresData.map((feature) => (
                <div className="col-md-3 mb-4" data-aos='zoom-in-up' data-aos-duration='2000' key={feature.id}>
                  <div
                    className="p-4"
                  
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "15px",
                      }}
                    />
                    <h5 className="fw-bold" style={{ color: "#203239" }}>
                      {feature.title}
                    </h5>
                    <p className="text-muted para-color" style={{ fontSize: "0.9rem" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
