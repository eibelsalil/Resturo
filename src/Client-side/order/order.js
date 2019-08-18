import React, { useContext, useState, useEffect, useRef } from "react";
import OrderHead from "./head";
import "./order.css";
import AppContext from "../../context/AppContext";
import OrderTwo from "./requestBill/orderTwo";
import OrderOne from "./order-plate/orderPlate";
import backArrow from "../../Asset/back-arrow.png";
import instruction from "../../Asset/instruction.png";
import Axios from "axios";

const Order = ({ match ,history}) => {
  const context = useContext(AppContext);
  const [amount, setAmount] = useState(0);
  const [model, setModel] = useState(false);
  const [order, setOrder] = useState(false);
  const [event, setEvent] = useState(null);
  const [info,setInfo] = useState(null)
  const [counter,setCounter] = useState(0)
  const [Rating,setRating] = useState(null)
  const [Loading,setLoading] = useState(false)
  const [disabled,setDisabled] = useState(false)

  function useOutsideAlerter(ref) {



    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModel(false);
        setCounter(counter + 1)
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
   setInfo({instruction: event,table: match.params.table})
 },[order])
 console.log(context.orderDish)
  useEffect(()=>{
    if(context.RatingDish){
      let filter = context.RatingDish.filter(({count})=>{
        return count > 0
      })
      setRating(filter)
    }
  },[context.RatingDish])

 useEffect(()=>{
   if(Rating){
     setLoading(true)
      Rating.map((rat)=>(
        Axios.put(`https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${match.params.hotelid}/dishesRating/${rat.id}`, {"rating": rat.count})
        .then((doc)=>{
          console.log(doc.data)
          setLoading(false)
        })
        .catch((err)=>{
          console.log(err)
        })
       ))
   }
 },[Rating])



   useEffect(()=>{
     if(model){
      setLoading(true)
       context.orderDish.map((dish)=>(
        Axios.put(`https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${match.params.hotelid}/dishes/dishTime/${dish.id}`)
        .then((doc)=>{
          console.log(doc.data)
        })
        .catch((err)=>{
          console.log(err)
        })
       ))
     }
   },[model])


  const addBillTwo = () => {
    if (context.orderInfo) {
   
      Axios.post(
        `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${match.params.hotelid}/order`,
        { ...info, ...{ dishes: [context.orderInfo] },...{total: add(context.total)} }
      )
        .then((doc) => {
          console.log(doc.data);
          setLoading(false)
          setTimeout(()=>{
            setModel(false)
            setCounter(counter + 1)
          },[1000])  
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="order">
      <OrderHead
        back={backArrow}
        order={order}
        click={() => {
          setOrder(false);
        }}
        hotelid={match.params.hotelid}
        table={match.params.table}
        history={history}
      />

      <div className="full-bg" />
      {!order ? (
        <OrderOne
          click={() => {
            setOrder(true);
          }}
          order={order}
          total={add(context.total)}
          instruction={instruction}
          setEvent={(e) => {
            setEvent(e.target.value);
          }}
        />
      ) : (
        <OrderTwo
          total={add(context.total)}
          amount={amount}
          click={() => {
            setModel(true);
            setTimeout(() => {
              addBillTwo();
            }, 1500);
            setTimeout(()=>{
              context.DeletTotal();
            },2000)
          
          }}
          Loading={Loading}
          wrapperRef={wrapperRef}
          model={model}
          order={order}
          hotelid={match.params.hotelid}
          table={match.params.table}
          counter={counter}
          orderdishes={context.orderDish}
          disable={disabled}
          ClickRating={()=>{
            setCounter(0)
            setDisabled(true)
          }}
        />
      )}
    </div>
  );
};

export default Order;
