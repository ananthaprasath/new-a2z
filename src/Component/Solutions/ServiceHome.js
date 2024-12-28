import React from "react";
import Client from "../Product/Clients";
import Reviews from "../Product/BulkSms/Reviews";

const ServiceHome = ({ data }) => {
  return (
   <div>
    <Client/>

     {/* <h2 className="text-center fw-bold py-3 bg2 mb-0">{data.title}</h2> */}
  
        {data.content.map((item, index) => (
            <div className={item.bg} >
            <div className="container py-5 ">
              {/* <h2 className="text-center fw-bold mb-5">{data.title}</h2> */}
          <div
            key={index}
            className={`row g-0 g-md-5 align-items-center mb-5 aos ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <div className="col-md-6 p-md-5 para-color" data-aos='zoom-in-right'>
              <h2 className="fw-bold mb-4">{item.title}</h2>
              {/* <p className="align"> {item.intro}</p> */}
              <ul className="list-unstyled align " >
                {item.description.map((desc, i) => (
                    <li key={i} className="d-flex align-items-start mb-3">
                 <i className="bi bi-check-circle-fill text-primary me-3"></i>
                 <span>
                 {desc}
                 </span>
               </li>  
                ))}
              </ul>
              
              {/* <div className="d-flex align-items-center mt-4">
                <div
                  className="rounded-circle bg1 shadow d-flex justify-content-center align-items-center me-3"
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                >
                  <h4 className="fw-bold text-primary m-0">{item.stat.value}</h4>
                </div>
                <p className="mb-0 text-muted ">{item.stat.text}</p>
              </div> */}
            </div>
     
            {/* Image Section */}
            <div className="col-md-6 text-center " data-aos='zoom-in-left'>
              <img
                src={item.image}
                alt={item.title}
                className="w-75"
               
              />
            
            </div>
          </div>
          </div>
          </div>
        ))}
        <Reviews/>
   </div>
  );
};

export default ServiceHome;
