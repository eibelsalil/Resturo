import React, { useState, useEffect, useContext } from "react";
import "./state.css";
import DishState from "./dishState";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";

const OrderState = ({ click, Orders ,hotelid,table}) => {
  const [requestBill, setRequestBill] = useState([]);
  const context = useContext(AppContext);
  let finalsetpOrder = Orders;

  useEffect(() => {
    if (finalsetpOrder) {
      finalsetpOrder.map((o) =>
        setRequestBill((requestBill) => ({
          ...requestBill,
          ...{ [o.name]: o.count }
        }))
      );
    }
  }, [finalsetpOrder]);

  useEffect(() => {
    if (requestBill !== []) {
      context.setOrderInfo([requestBill]);
    }
  }, [context, requestBill]);
  return (
    <div className="order-state">
      <div className="kitchen">
        <p style={{ marginLeft: "15px" }}>In Kitchen</p>
      </div>
      <DishState />
      <div className="option-button">
        <button className="request" onClick={click}>
          request bill
        </button>
        <Link to={`/menu/${hotelid}/${table}`} style={{ textDecoration: "none" }}>
          <button className="more">order more+</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderState;
