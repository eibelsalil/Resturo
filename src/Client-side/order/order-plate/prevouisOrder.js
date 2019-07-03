import React from "react";
import DishOrder from "./dishes-order";

const PreviousOrder = () => {
  return (
    <div className="OrderOne">
    <div className="previous-orderDishes">
      <p className="title-order">Previous Order</p>
      <DishOrder name={"Fried Rice"} price={60} itemN={2} total={120} />
      <DishOrder name={"Tomato Rice"} price={544.5} itemN={1} total={44.5} />
      </div>
    </div>
  );
};

export default PreviousOrder;
