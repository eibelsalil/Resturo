import React, { useContext } from "react";
import "./orderPlate.css";
import PreviousOrder from "./prevouisOrder";
import CurrentOrder from "./current-order";
import Bill from "../bill/bill";
import AppContext from "../../../context/AppContext";

const OrderOne = ({ click, order,  total, instruction, setEvent }) => {
  const context = useContext(AppContext);

  const add = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };
  return (
    <div>
      <div className="orders-cont">
        <PreviousOrder />
        <CurrentOrder
          orderDish={context.orderDish}
          total={add(context.total)}
        />
        <div className="instruction-cont">
          <img
            src={instruction}
            alt="instruction"
            className="instruction-logo"
          />
          <textarea
            className="instruction-input"
            placeholder="write cooking instruction"
            onChange={(e) => {
              setEvent(e);
            }}
          />
        </div>
        <Bill
          click={click}
          order={order}
          total={total}
          tax={3.2}
        />
      </div>
      <div className="full-bg-1" />
    </div>
  );
};

export default OrderOne;
