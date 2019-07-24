import React from "react";
import OrderContent from "./current-orderContent";
import uuid from "uuid"




const CurrentOrder = ({orderDish}) => {

  let Orders = orderDish[orderDish.length - 1]



  console.log(Orders)


  return (
    <div className="currentOrder">
      <p className="current-title">Current Order</p>
      <div className="currentOrders-cont" > 
      { Orders ? Orders.map(({name,price,count,total})=>(
        <OrderContent dishName={name} dishPrice={price} total={total} key={uuid()} ItemNumber={count} />
      )) :
     null
    }
    </div>
    </div>
  );
};

export default CurrentOrder;
