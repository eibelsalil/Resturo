import React, { useContext } from "react";
import darkArrow from "../../Asset/arrow-01.png";
import AppContext from "../../context/AppContext";

const Total = () => {
  const context = useContext(AppContext);

  const add = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };

  console.log(context.total);

  return (
    <div className="total">
      <div className="price-item">
        <p className="item">1 item</p>
        <p className="total-amount">${add(context.total)}</p>
      </div>
      <div className="cart">
        <p className="cart-text">view cart</p>
        <img
          src={darkArrow}
          alt="view cart"
          width="36.23px"
          height="20.69px"
          style={{ marginRight: "5px" }}
        />
      </div>
    </div>
  );
};

export default Total;
