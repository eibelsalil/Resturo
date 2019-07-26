import React, { useContext } from "react";
import OrderContent from "./current-orderContent";
import AppContext from "../../../context/AppContext";

const CurrentOrder = ({ orderDish }) => {
 
  const context = useContext(AppContext)
  return (
    <div className="currentOrder">
      <p className="current-title">Current Order</p>
      <div className="currentOrders-cont">
        {orderDish
          ? orderDish.map(({ name, price, count, total, id }) => (
              <OrderContent
                dishName={name}
                dishPrice={price}
                total={total}
                key={id}
                ItemNumber={count}
                id={id}
                clickMinus={() => {
                  context.DecCount(id, count);
                  context.Dectotal(id, total);
                  context.deleteDish();
                }}
                clickPlus={() => {
                  context.IncCount(id, count);
                  context.Inctotal(id, count);
                }}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default CurrentOrder;
