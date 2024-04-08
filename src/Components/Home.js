import React, { useState, useEffect } from "react";
import CarouselImage1 from "../AssetsN/sparmenues_start_mobil-opti.webp";
import CarouselImage2 from "../AssetsN/start_aktion-1_mobil_pfanny_2024-opti.webp";
import CarouselImage3 from "../AssetsN/sparmenues_start_mobil-opti.webp";
// import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const backgrounds = [CarouselImage1, CarouselImage2, CarouselImage3];
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [backgrounds.length]);

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
    >
      <div className="home-banner-container">
        <div className="delivery-form-container">
          <input
            type="text"
            placeholder="Postcode or town"
            className="red-border"
          />
          <br />
          <button className="delivery-button">
            <span className="bold-red">To Deliver</span>
            <br />
            <span className="convenient-text">Easy and convenient</span>
          </button>
          <p className="or-text">or</p>
          <button className="pickup-button">
            <span className="bold-white">15% PICKUP</span>
            <br />
            <span className="discount-text">Save discount</span>
            <br />
            <span className="branch-text">
              only at participating branches
            </span>
          </button>
        </div>
        <div className="text-container">
          <h2 className="main-header">Enjoy Tasty Meals,!</h2>
          <p className="secondary-text">Dive into our yummy meals, </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
