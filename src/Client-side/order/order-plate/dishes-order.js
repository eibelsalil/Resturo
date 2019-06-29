import React from "react";

const DishOrder = ({ name, price, itemN, total }) => {
  return (
    <div className="Fried">
      <div className="plate-orderOne">
        <p className="order-plate-dish">{name}</p>
        <p className="order-plate-dish-price">${price}</p>
      </div>
      <div className="button-col">
        <p
          id="minus"
          style={{
            color: "#787977",
            fontWeight: "bold",
            paddingTop: "4px"
          }}
        >
          -
        </p>
        <button className="button-orderOne">{itemN}</button>
        <p
          id="plus"
          style={{
            color: "#787977",
            fontWeight: "bold",
            paddingTop: "8px",
          }}
        >
          +
        </p>
      </div>
      <p className="price-total-order">${total}</p>
    </div>
  );
};

export default DishOrder;
