import React from "react";
import Dish from "./dish";
import "./dishes.css"
import fried from "../../../Asset/fried.png";
import tomato from "../../../Asset/Tomato.png"

const Dishcont = () => {
  return (
    <div className='dishCont'>
      <p className="category">starter</p>
      <Dish img={fried} />
      <Dish img={tomato}  />
    </div>
  );
};

export default Dishcont;
