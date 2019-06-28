import React from "react";

const DishState = () => {
  return (
    <div className="dishState">
      <div className="dishState-line">
        <p className="dish-name">Fried Rice</p>
        <button className="dishButton">2</button>
        <p className="dish-state">DELIVERED</p>
      </div>
      <div className="dishState-line">
        <p className="dish-name">Tomate Rice</p>
        <button className="dishButton" style={{marginRight:"25px"}}>1</button>
        <p className="pending">Pending...</p>
      </div>
    </div>
  );
};

export default DishState;
