import React,{useContext,useState,useEffect,useRef} from "react";
import OrderHead from "./head";
import "./order.css";
import Bill from "./bill/bill";
import AppContext from "../../context/AppContext"
import OrderState from "./orderState/orderState";
import OrderModel from "./orderState/order_.model";

const Order = () => {
    const context = useContext(AppContext);
    const [amount,setAmount] = useState(0)
    const [model, setModel] = useState(false);
  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModel(false);
        console.log("clicked")
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

    useEffect(()=>{
        setAmount(3.2 + add(context.total))
    },[context.total])
  
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
  return (
    <div className="order">
      <OrderHead />
      <div className="full-bg" />
      <Bill total={add(context.total)} amount={amount} tax={3.2}/>
      <OrderState click={()=> {setModel(true)}}/>
      <OrderModel refwrapper={wrapperRef} model={model} />
    </div>
  );
};

export default Order;
