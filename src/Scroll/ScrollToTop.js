import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for location changes
import { FaArrowUp } from "react-icons/fa"; // Import icon for scroll button
import './Anime.css';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation(); // To detect route changes

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollTop(true); 
      } else {
        setShowScrollTop(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <>
      {showScrollTop && (
        <div
        className="bounce-in-top button-bottom"
          onClick={scrollToTop}
        
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
