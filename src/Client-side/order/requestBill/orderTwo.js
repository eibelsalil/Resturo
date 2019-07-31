import React,{useEffect,useState,useContext} from "react";
import Bill from "../bill/bill";
import OrderState from "../orderState/orderState";
import OrderModel from "../orderState/order_.model";
import Appcontext from "../../../context/AppContext"
import OrderRatingModel from "../orderState/orderModelRating";

const OrderTwo = ({ amount, click, total, wrapperRef, model,order,table,hotelid,counter,orderdishes,ClickRating}) => {
  
  const context = useContext(Appcontext)



   
  return (
    <div className="order-Two">
      <Bill total={total} amount={amount} tax={3.2}  order={order} />
      <OrderState click={click} Orders={context.orderDish} hotelid={hotelid} table={table} />
     {model && counter === 0 ?   <OrderModel refwrapper={wrapperRef} model={model} /> : null}
     {!model && counter > 0 ? <OrderRatingModel model={model} refwrapper={wrapperRef} orderdishes={context.orderDish[1]} counter={counter} ClickRating={ClickRating} hotelid={hotelid} /> : null}
     </div>
  );
};

export default OrderTwo;
