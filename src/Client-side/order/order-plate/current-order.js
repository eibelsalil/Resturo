import React from "react";
import OrderContent from "./current-orderContent";
import uuid from "uuid"


const CurrentOrder = ({orderDish,total}) => {
 



  return (
    <div className="currentOrder">
      <p className="current-title">Current Order</p>
      <div className="currentOrders-cont" > 
      {orderDish.map(({name,price})=>(
        <OrderContent dishName={name} dishPrice={price} total={total} key={uuid()} ItemNumber={orderDish.length} />
      ))}
    </div>
    </div>
  );
};

export default CurrentOrder;
