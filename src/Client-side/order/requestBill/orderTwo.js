import React,{useEffect,useState,useContext} from "react";
import Bill from "../bill/bill";
import OrderState from "../orderState/orderState";
import OrderModel from "../orderState/order_.model";
import Appcontext from "../../../context/AppContext"

const OrderTwo = ({ amount, click, total, wrapperRef, model,order,table,hotelid }) => {
  
  const context = useContext(Appcontext)
  const [orderDish,setOrder] = useState(context.orderDish)

  useEffect(()=>{
    setOrder(context.orderDish)
  },[context.orderDish])
  
  return (
    <div className="order-Two">
      <Bill total={total} amount={amount} tax={3.2}  order={order} />
      <OrderState click={click} Orders={orderDish} hotelid={hotelid} table={table} />
      <OrderModel refwrapper={wrapperRef} model={model} />
    </div>
  );
};

export default OrderTwo;
