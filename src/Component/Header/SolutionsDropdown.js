import React from "react";
import { Link } from "react-router-dom";
import "./SolutionsDropdown.css";

const SolutionsDropdown = () => {
//   const byFunction = [
//     { name: "Conversational Marketing", icon: "💬", path: "/conversational-marketing" },
//     { name: "Conversational Commerce", icon: "🛒", path: "/conversational-commerce" },
//     { name: "Conversational Support", icon: "📞", path: "/conversational-support" },
//   ];

  const byIndustry = [
    // { name: "BFSI", icon: "🏦", path: "/bfsi" },
    { name: "Real Estate", icon: "🏠", path: "/real-estate/" },
    { name: "Tours & Travels", icon: "🏨", path: "/tours-travel/" },
    { name: "Gaming", icon: "🎮", path: "/gaming/" },

    { name: "Healthcare", icon: "🩺", path: "/health-care/" },
   
  ];

  const byAdvertising = [
    { name: "Food & Beverage", icon: "🍔", path: "/food-beverage/" },
    { name: "Retail and eCommerce", icon: "🛍️", path: "/retail-ecommerce/" },
    { name: "Media & Entertainment", icon: "🎥", path: "/media-entertainment/" },
    { name: "Government", icon: "🏛️", path: "/government/" },
    { name: "Education", icon: "📚", path: "/education/" },
  
  ];

  return (
    <div className="solutions-dropdown p-4">
      <div className="row">
        {/* First Column: By Function */}
        {/* <div className="col-md-4">
          <h6 className="fw-bold">By Function</h6>
          <ul className="list-unstyled">
            {byFunction.map((item, index) => (
              <li key={index} className="mb-2">
                <Link to={item.path} className="dropdown-item d-flex align-items-center">
                  <span className="icon me-2">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Second Column: By Industry */}
        <div className="col-md-6">
          <h6 className="fw-bold">By Industry</h6>
          <ul className="list-unstyled">
            {byIndustry.map((item, index) => (
              <li key={index} className="mb-2">
                <Link to={item.path} className="dropdown-item d-flex align-items-center">
                  <span className="icon me-2">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Column: By Advertising */}
        <div className="col-md-6">
          {/* <h6 className="fw-bold">By Advertising</h6> */}
          <ul className="list-unstyled">
            {byAdvertising.map((item, index) => (
              <li key={index} className="mb-2">
                <Link to={item.path} className="dropdown-item d-flex align-items-center">
                  <span className="icon me-2">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolutionsDropdown;
