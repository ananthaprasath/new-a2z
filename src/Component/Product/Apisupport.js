import React from "react";

// Import images
import stackIcon1 from "../image/icons/stack-icon1.png";
import stackIcon2 from "../image/icons/stack-icon2.png";
import stackIcon3 from "../image/icons/stack-icon3.png";
import stackIcon4 from "../image/icons/stack-icon4.png";
import stackIcon5 from "../image/icons/stack-icon5.png";
import stackIcon6 from "../image/icons/stack-icon6.png";
import stackIcon7 from "../image/icons/stack-icon7.png";
import stackIcon8 from "../image/icons/stack-icon8.png";

// Image array with imports
const icons = [
  { src: stackIcon1, alt: "PHP Support" },
  { src: stackIcon2, alt: ".NET Support" },
  { src: stackIcon3, alt: "Ruby on Rails Support" },
  { src: stackIcon4, alt: "Python Support" },
  { src: stackIcon5, alt: "Node.js Support" },
  { src: stackIcon6, alt: "Drupal Support" },
  { src: stackIcon7, alt: "WordPress Support" },
  { src: stackIcon8, alt: "Magento Support" },
];

const Apisupport = () => {
  return (
    <div className="container py-5 text-center aos">
      <h2 className="fw-bold mb-4" style={{ color: "#203239" }}>
        Our Whatsapp & API Will Support
      </h2>
      <div className="row justify-content-center" data-aos='zoom-in-up'>
        {icons.map((icon, index) => (
          <div
            key={index}
            className="mb-4 col-6 col-md-3 col-lg-1 mx-auto"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              width= {"50px"}
              height={"50px"}
              style={{
              
                transition: "transform 0.6s ease",
              }}
              className="hover-effect"
            />
          </div>
        ))}
      </div>

      {/* CSS for Hover Effect */}
      <style jsx>{`
        .hover-effect:hover {
        border-radius:50%;
          transform: scale(1.1);
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
          padding:2px;
          
        
        }
      `}</style>
    </div>
  );
};

export default Apisupport;
