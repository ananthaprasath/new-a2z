import React from 'react';
import lazy from './image/logo.png'; // Replace with your image path

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <img src={lazy} alt="Loading..." className="w-25 " />
    </div>
  );
};

export default Loader;
