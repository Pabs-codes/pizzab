import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Margherita Pizza",
      text: "Enjoy our classic Margherita pizza made with fresh tomatoes, mozzarella cheese, and basil leaves, delivering a burst of flavor in every bite.",
    },
    {
      image: ChooseMeals,
      title: "Pepperoni Pizza",
      text: "Indulge in our savory Pepperoni pizza topped with generous slices of pepperoni and melted cheese, providing a delicious blend of spices and textures.",
    },
    {
      image: DeliveryMeals,
      title: "Vegetarian Pizza",
      text: "Savor our Vegetarian pizza crafted with a medley of fresh vegetables, including bell peppers, mushrooms, onions, and olives, offering a delightful and wholesome taste.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
    
        <h1 className="primary-heading">Our savings menus</h1>
    
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>

            <button className="pricebtn"> price btn$ </button>
          </div>

    
        ))}
      </div>
    </div>
  );
}

export default Work;
