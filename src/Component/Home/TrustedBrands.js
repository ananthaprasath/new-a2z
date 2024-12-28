import React from "react";
import Image1 from "../image/motherhood.png";
import Image2 from "../image/Groavy.png";
import Image3 from "../image/isk.png";
import Image4 from "../image/ping4sms-client1.webp";
import Image5 from "../image/ping4sms-client8.webp";
import Image6 from "../image/saishishirtours.png";
import Image7 from "../image/ping4sms-client3.webp";
import Image8 from "../image/ping4sms-client4.webp";
import Image9 from "../image/ping4sms-client9.webp";
import Image10 from "../image/ping4sms-client2.webp";

const TrustedBrands = () => {
  return (
    <div className="py-5 ">
      <div className="container py-4 aos">
      <h3 className="text-center fw-bold mb-3">Trusted by Top Brands</h3>

        <div className="row row-cols-4 row-cols-md-4 row-cols-lg-5 g-4 text-center"  data-aos='zoom-in'>
          <div className="col" >
            <img src={Image1} alt="Brand 1" className="w-100 logo-img mx-auto mb-4" />
          </div>
          <div className="col" >
            <img src={Image2} alt="Brand 2" className="w-100 logo-img mx-auto mb-4" />
          </div>
          <div className="col" >
            <img src={Image3} alt="Brand 3" className="w-100 logo-img mx-auto mb-4" />
          </div>
          <div className="col" >
            <img src={Image4} alt="Brand 4" className="w-100 logo-img mx-auto mb-4" />
          </div>
          <div className="col" >
            <img src={Image5} alt="Brand 5" className="w-100 logo-img mx-auto mb-4" />
          </div>
          <div className="col" >
            <img src={Image6} alt="Brand 6" className="w-100 logo-img mx-auto mb-4" />
          </div>
          <div className="col" >
            <img src={Image7} alt="Brand 7" className="w-100 logo-img mx-auto mb-4" />
          </div>
          <div className="col" >
            <img src={Image8} alt="Brand 8" className="w-100 logo-img mx-auto mb-4" />
          </div>
          <div className="col" >
            <img src={Image9} alt="Brand 9" className="w-100 logo-img mx-auto mb-4" />
          </div>
          <div className="col">
            <img src={Image10} alt="Brand 9" className="w-100 logo-img mx-auto mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
