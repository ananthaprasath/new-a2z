import React from "react";
import Slider from "react-slick";
import motherhood from "../image/motherhood.png";
import Groavy from "../image/Groavy.png";
import SaiShishir from "../image/saishishirtours.png";
import naidum from "../image/naidum.jpeg";
import nite from "../image/nite.png";
import client1 from "../image/ping4sms-client1.webp";
import client2 from "../image/ping4sms-client2.webp";
import client3 from "../image/ping4sms-client3.webp";
import client4 from "../image/ping4sms-client4.webp";
import client5 from "../image/ping4sms-client5.webp";
import client6 from "../image/ping4sms-client6.webp";
import client7 from "../image/ping4sms-client7.webp";
import client8 from "../image/ping4sms-client8.webp";
import client9 from "../image/ping4sms-client9.webp";
import client10 from "../image/ping4sms-client10.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  motherhood,
  naidum,
  nite,
  client1,
  SaiShishir,
  Groavy,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1800,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Client = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold py-3">Our Trusted Clients</h2>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="px-4">
            <div className="d-flex justify-content-center align-items-center rounded">
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="img-fluid"
                style={{ maxHeight: "100px", objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Client;
