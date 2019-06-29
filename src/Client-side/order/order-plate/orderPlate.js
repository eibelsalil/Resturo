import React from "react";
import "./orderPlate.css";
import PreviousOrder from "./prevouisOrder";
import CurrentOrder from "./current-order";
import Bill from "../bill/bill";

const OrderOne = ({ click, order, amount, total}) => {
  return (
    <div>
      <PreviousOrder />
      <CurrentOrder />
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
