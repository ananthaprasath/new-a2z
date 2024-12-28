import React from 'react';
import video from './Images/video.mp4';
import {Link} from 'react-router-dom';
import './home.css';
import Image1 from "../image/isk.png";
import Image2 from "../image/motherhood.png";
import Image4 from "../image/ping4sms-client1.webp";
import Image5 from "../image/ping4sms-client5.webp";
// import Image6 from "../image/ping4sms-client8.webp";

const Video = () => {
  return (
    <div className="video-container position-relative">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        src={video}
        alt="background"
        className="w-100"
      />

      {/* Black Overlay */}
      <div className="video-overlay"></div>

      {/* Content Overlay */}
      <div className="container">
        <div className="video-content text-white ">
        <h1 className="fw-bold">
            Boost Your Business Revenue by{" "}
            <span className="highlight">5X with WhatsApp Marketing</span>
          </h1>
          <p className="description ">
            Unlock the full potential of WhatsApp to connect with your audience
            in real-time. Deliver personalized promotions, build stronger
            customer relationships, and drive unmatched engagement rates.
            Transform your marketing strategy with a platform that guarantees
            results.
          </p>
          <div className="action-buttons gap-3 w-100">
            <Link to='/whatsapp-api/' className="btn btn-outline-light px-4  me-2 mb-2">Learn More</Link>
            <Link to='/try-for-free/' className="btn btn-primary px-4  ms-2">Set Up Discovery Call</Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}

   <div className='container'>
       <div className=" bottom-logos text-center mt-5">
        <h3 className='text-white fw-bold'>Out TrustedBrands</h3>
         <div className="dflex " style={{justifyContent:'space-around'}}>
           <img src={Image2} alt="MotherHood" className="m-2  logo-img" />
           <img src={Image1} alt="Isckon" className="ms-2 p-3" width={'120px'} />

           <img src={Image4} alt="Yamaha" className="m-2 logo-img" />
           <img src={Image5} alt="Dunzo" className="me-2 logo-img" />
           {/* <img src={Image6} alt="Dunzo" className="m-2 logo-img" /> */}
         </div>
       </div>
   </div>
    </div>
  );
};

export default Video;
