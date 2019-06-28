import React from "react";
import "./state.css";
import DishState from "./dishState";
import { Link } from "react-router-dom";

const OrderState = ({click}) => {
  return (
    <div className="order-state">
      <div className="kitchen">
        <p style={{ marginLeft: "15px" }}>In Kitchen</p>
      </div>
      <DishState />
      <div className="option-button">
        <button className="request" onClick={click}>request bill</button>
        <Link to="/" style={{textDecoration:"none"}}>
        <button className="more">
          order more+
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderState;
