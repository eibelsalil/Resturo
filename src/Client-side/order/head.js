import React from "react";
import { Link } from "react-router-dom";

const OrderHead = ({ back, order, click,hotelid,table }) => {
  return (
    <div className="header-order">
      <div className="head-bg-order" />
      <div className="order-headContent">
        {!order ? (
          <Link to={`/menu/${hotelid}/${table}`}>
            <img src={back} alt="back" className="back-arrow" />
          </Link>
        ) : (
          <img src={back} alt="back" className="back-arrow" onClick={click} />
        )}

        <div className="head-order-text">
          <p className="rest-order">resturant name</p>
          <p className="plate-order">my plate</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHead;
