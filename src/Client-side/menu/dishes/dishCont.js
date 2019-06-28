import React from "react";
import Dish from "./dish";
import "./dishes.css"
import fried from "../../../Asset/fried.png";
import tomato from "../../../Asset/Tomato.png"

const Dishcont = ({category,categoryId}) => {
  return (
    <div className='dishCont' id={categoryId}>
      <p className="category">{category}</p>
      <Dish img={fried} />
      <Dish img={tomato}  />
    </div>
  );
};

export default Dishcont;
