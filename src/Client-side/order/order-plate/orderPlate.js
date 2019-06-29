import React from "react";
import "./orderPlate.css";
import PreviousOrder from "./prevouisOrder";
import CurrentOrder from "./current-order";
import Bill from "../bill/bill";


const OrderOne = ({ click, order, amount, total,instruction}) => {
  return (
    <div>
      <PreviousOrder />
      <CurrentOrder />
      <div className="instruction-cont">
      <img src={instruction} alt="instruction" className="instruction-logo" />
       <textarea className="instruction-input" placeholder="write cooking instruction" />
       <div className="bg-cookingInstrution" />
       </div>
      <Bill
        click={click}
        order={order}
        amount={amount}
        total={total}
        tax={3.2}
      />
    </div>
  );
};

export default OrderOne;
