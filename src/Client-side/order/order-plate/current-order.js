import React from "react";

const CurrentOrder = () => {
  return (
    <div className="currentOrder">
      <p className="current-title">Current Order</p>
      <div className="current">
        <div className="plate-orderOne">
          <p className="current-dish">Fried Rice</p>
          <p className="current-dish-price">$60</p>
        </div>
        <div className="button-col-current">
          <p
           id="minus-current"
          style={{
               color: "#2BC026", 
               fontWeight:"bold",
            }}>
            -
            </p>
          <button className="button-current">1</button>
          <p
          id="plus-current"
            style={{
              color: "#2BC026",
              fontWeight:"bold"
            }}
          >
            +
          </p>
        </div>
        <p className="price-total-current">$120</p>
      </div>
      <div className="current-orderBg" />
    </div>
  );
};

export default CurrentOrder;
