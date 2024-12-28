import React from "react";
import voiceCallImage from "../../image/product/VoiceCall.png"; // Replace with your voice call-related image path

const Home = () => {
  return (
    <section className="py-5 bg2">
      <div className="container">
        <div className="row align-items-center aos para-color">
          {/* Left Content */}
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Revolutionize Communication with{" "}
              <span className="text-primary">Voice Call Solutions</span>
            </h1>
            <p className="text-muted">
              Enhance your communication strategy with automated and interactive 
              voice call solutions tailored for notifications, alerts, and personalized engagement.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Deliver real-time notifications through automated voice calls.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Send alerts for emergencies, reminders, or announcements.</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Enable interactive voice response (IVR) systems for self-service support.</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>Reach large audiences instantly with pre-recorded bulk voice calls.</span>
              </li>
            </ul>
       
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              src={voiceCallImage}
              alt="Voice Call Solutions"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
