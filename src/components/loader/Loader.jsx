import React from "react";
import './loader.css'

const Loader = () => {
  return (
    <div className="preloader">
      <p>You need to turn on your location first</p>
      <p>or you can just search the city by name </p>
      <div class="loader"></div>
    </div>
  );
};

export default Loader;
