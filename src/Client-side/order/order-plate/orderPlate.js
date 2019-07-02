import React,{useContext,useState,useEffect} from "react";
import "./orderPlate.css";
import PreviousOrder from "./prevouisOrder";
import CurrentOrder from "./current-order";
import Bill from "../bill/bill";
import AppContext from "../../../context/AppContext";
import _ from "lodash"



const OrderOne = ({ click, order, amount, total,instruction}) => {
  
  
  const context = useContext(AppContext)
  const [orderDish,setOrder] = useState(context.orderDish)

   useEffect(()=>{
     setOrder(_.flatten(context.orderDish))
   },[context.orderDish])

   const add = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };

  return (
    <div>
    <div className="orders-cont">
      <PreviousOrder />
          <CurrentOrder  orderDish={orderDish} total={add(context.total) } />
      <div className="instruction-cont">
      <img src={instruction} alt="instruction" className="instruction-logo" />
       <textarea className="instruction-input" placeholder="write cooking instruction" />
   
       </div>
      <Bill
        click={click}
        order={order}
        amount={amount}
        total={total}
        tax={3.2}
      />
    
    </div>
    <div className="full-bg-1" />
    </div>
  );
};

export default OrderOne;
