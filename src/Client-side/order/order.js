import React, { useContext, useState, useEffect, useRef } from "react";
import OrderHead from "./head";
import "./order.css";
import AppContext from "../../context/AppContext";
import OrderTwo from "./requestBill/orderTwo"
import OrderOne from "./order-plate/orderPlate";

const Order = () => {
  const context = useContext(AppContext);
  const [amount, setAmount] = useState(0);
  const [model, setModel] = useState(false);
  const [order,setOrder] = useState(false)
  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModel(false);
        console.log("clicked");
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }

  const add = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };

  useEffect(() => {
    setAmount(3.2 + add(context.total));
  }, [context.total]);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div className="order">
      <OrderHead />
      <div className="full-bg" />
      { !order ? 
      <OrderOne click={()=>{setOrder(true)}} order={order} total={add(context.total)}
      amount={amount} />
      :
      <OrderTwo
        total={add(context.total)}
        amount={amount}
        click={() => {
          setModel(true);
        }}
        wrapperRef={wrapperRef}
        model={model}
        order={order}
      /> }
    </div>
  );
};

export default Order;
