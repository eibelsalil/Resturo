import React, { useState, useEffect, useContext } from "react";
import "./state.css";
import DishState from "./dishState";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import Loader from "../../../Admin-side/adminpanel/adminsettings/Loader";

const OrderState = ({ click, Orders ,hotelid,table,disable,loading}) => {
  const [requestBill, setRequestBill] = useState([]);
  const context = useContext(AppContext);
  let finalsetpOrder = Orders;

  useEffect(() => {
    if (finalsetpOrder) {
      finalsetpOrder.map((o) =>
        setRequestBill((requestBill) => ({
          ...requestBill,
          ...{[o.name]: [o.count,o.price,o.total]}
        }))
      );
    }
  }, [finalsetpOrder]);

  useEffect(() => {
    if (requestBill !== []) {
      context.setOrderInfo(requestBill);
    }
  }, [context, requestBill]);
  return (
    <div className="order-state">
      <div className="kitchen">
        <p style={{ marginLeft: "15px" }}>In Kitchen</p>
      </div>
      <DishState />
    {!loading ?  <div className="option-button">
        <button className="request" onClick={click} disabled={!disable ? false : true}>
          request bill
        </button>
        <Link to={`/menu/${hotelid}/${table}`} style={{ textDecoration: "none" }}>
          <button className="more">order more+</button> 
        </Link>
      </div>
      :
      <Loader />
    }
    </div>
  );
};

export default OrderState;
