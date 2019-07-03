import React from "react";
import "./dishes.css";
import fried from "../../../Asset/fried.png";
import Veg from "../../../Asset/fried.png";
import Dish from "./dish";

const Dishcont = ({ category, categoryId, count, incCount, decCount }) => {
  return (
    <div className="dishCont" id={categoryId}>
      <p className="category">{category}</p>
      <Dish
        veg={Veg}
        img={fried}
        count={count}
        incCount={incCount}
        decCount={decCount}
      />
    </div>
  );
};

export default Dishcont;
