import React from "react";
import Slider from "react-slick";
import airtable from "../../image/brand/airtable.png";
import airwallex from "../../image/brand/airwallex.png";
import attentive from "../../image/brand/attentive.png";
import capterra from "../../image/brand/capterra.png";
import chatbot from "../../image/brand/chatbot.png";
import evernote from "../../image/brand/evernote.png";
import google from "../../image/brand/google.png";
import hellosign from "../../image/brand/hellosign.png";
import hostadvice from "../../image/brand/hostadvice.png";
import indieplex from "../../image/brand/indieplex.png";
import nextech from "../../image/brand/nextech.png";
import techbox from "../../image/brand/techbox.png";
import treehouse from "../../image/brand/treehouse.png";
import trustpilot from "../../image/brand/trustipilot.png";
import wattse from "../../image/brand/wattse.png";
import wpbeginner from "../../image/brand/wpbeginner.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const reviewImages = [
    { src: airtable, alt: "Airtable" },
    { src: airwallex, alt: "Airwallex" },
    { src: attentive, alt: "Attentive" },
    { src: capterra, alt: "Capterra" },
    { src: chatbot, alt: "Chatbot" },
    { src: evernote, alt: "Evernote" },
    { src: google, alt: "Google" },
    { src: hellosign, alt: "Hellosign" },
    { src: hostadvice, alt: "Hostadvice" },
    { src: indieplex, alt: "Indieplex" },
    { src: nextech, alt: "Nextech" },
    { src: techbox, alt: "Techbox" },
    { src: treehouse, alt: "Treehouse" },
    { src: trustpilot, alt: "Trustpilot" },
    { src: wattse, alt: "Wattse" },
    { src: wpbeginner, alt: "WP Beginner" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5, // Number of visible slides
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000, // Speed of autoplay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="py-5 aos">
      <div className="container " data-aos='zoom-in'>
        <h2 className="text-center mb-5 head1 " >Trusted By These Brands</h2>
        <Slider {...sliderSettings}>
          {reviewImages.map((image, index) => (
            <div key={index} className="px-2" > 
              <div
                className="text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid"
                  style={{ maxHeight: "50px", objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
