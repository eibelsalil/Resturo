import React, { useContext, useState, useEffect, useRef } from "react";
import OrderHead from "./head";
import "./order.css";
import AppContext from "../../context/AppContext";
import OrderTwo from "./requestBill/orderTwo"
import OrderOne from "./order-plate/orderPlate";
import backArrow from "../../Asset/back-arrow.png"
import instruction from "../../Asset/instruction.png"
import _ from "lodash"

const Order = ({orderInfo}) => {
  const context = useContext(AppContext);
  const [amount, setAmount] = useState(0);
  const [model, setModel] = useState(false);
  const [order,setOrder] = useState(false)
  const [event,setEvent] = useState(null)
  const [finalOrder,setFinalOrder] = useState({})
  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModel(false);
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
  useEffect(()=>{
    
    let arr = context.orderDish
  let arrTwo = arr[arr.length - 1]
  let OBJ = {}
  if(arrTwo){
    arrTwo.map((o)=>(
      OBJ = {...OBJ,[Object.key(o.name)]: o.count}
     ))
  }
 
  },[context.orderDish])
  const addInstruction = () =>{
    context.setOrderInfo({"instruction":event,"table":context.table})
 } 

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  console.log(finalOrder)
  return (
    <div className="order">
      <OrderHead back={backArrow} order={order} click={()=>{setOrder(false)}}  />
    
      <div className="full-bg" />
      { !order ? 
      <OrderOne click={()=>{
        setOrder(true)
         addInstruction()
      }} order={order} total={add(context.total)}
      amount={amount}  instruction={instruction}
        setEvent={(e)=>{
           setEvent(e.target.value)
        }}
      />
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
