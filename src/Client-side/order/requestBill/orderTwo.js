import React from "react";
import Bill from "../bill/bill";
import OrderState from "../orderState/orderState";
import OrderModel from "../orderState/order_.model";

const OrderTwo = ({ amount, click, total, wrapperRef, model,order }) => {
  return (
    <div className="order-Two">
      <Bill total={total} amount={amount} tax={3.2}  order={order} />
      <OrderState click={click} />
      <OrderModel refwrapper={wrapperRef} model={model} />
    </div>
  );
};

export default OrderTwo;
