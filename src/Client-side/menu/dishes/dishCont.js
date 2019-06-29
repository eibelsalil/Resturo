import React from "react";
import Dish from "./dish";
import "./dishes.css"
import fried from "../../../Asset/fried.png";
import tomato from "../../../Asset/Tomato.png";
import Veg from "../../../Asset/veg.jpg";
import Nonveg from "../../../Asset/non-veg.png"

const Dishcont = ({category,categoryId}) => {
  return (
    <div className='dishCont' id={categoryId}>
      <p className="category">{category}</p>
      <Dish img={fried} veg={Veg} />
      <Dish img={tomato} veg={Nonveg}  />
    </div>
  );
};

export default Dishcont;
