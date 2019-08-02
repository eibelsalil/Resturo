import React from "react";
import waiter from "../../../Asset/waiter.png";
import Loader from "../../../Admin-side/adminpanel/adminsettings/Loader";

const OrderModel = ({refwrapper,model,Loading}) => {
  return (
    <div className={model ?"order-mode" : "orderModeFalse"} >
      <div className="orderModel-contect" ref={refwrapper} >
        <img height="107px" width="104px" src={waiter} alt="waiter" />
   {  !Loading?   <p className="ontheWay">
          your bill is on the <br /> way
        </p>
        :
       <Loader />
      }
      </div>
    </div>
  );
};

export default OrderModel;
