import React from "react";
import waiter from "../../../Asset/waiter.png";

const OrderModel = ({refwrapper,model}) => {
  return (
    <div className={model ?"order-mode" : "orderModeFalse"} >
      <div className="orderModel-contect" ref={refwrapper} >
        <img height="107px" width="104px" src={waiter} alt="waiter" />
        <p className="ontheWay">
          your bill is on the <br /> way
        </p>
      </div>
    </div>
  );
};

export default OrderModel;
