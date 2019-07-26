import React, { useContext, useState, useEffect, useRef } from "react";
import OrderHead from "./head";
import "./order.css";
import AppContext from "../../context/AppContext";
import OrderTwo from "./requestBill/orderTwo";
import OrderOne from "./order-plate/orderPlate";
import backArrow from "../../Asset/back-arrow.png";
import instruction from "../../Asset/instruction.png";
import Axios from "axios";

const Order = ({ match }) => {
  const context = useContext(AppContext);
  const [amount, setAmount] = useState(0);
  const [model, setModel] = useState(false);
  const [order, setOrder] = useState(false);
  const [event, setEvent] = useState(null);

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

  const addInstruction = () => {
    context.setOrderInfo({ instruction: event, table: match.params.table });
  };

  const addBillTwo = () => {
    if (context.orderInfo[2]) {
      Axios.post(
        `http://localhost:5000/resturo-07/europe-west1/api/hotel/${match.params.hotelid}/order`,
        { ...context.orderInfo[0], ...{ dishes: context.orderInfo[2] } }
      )
        .then((doc) => {
          console.log(doc.data);
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
      />

      <div className="full-bg" />
      {!order ? (
        <OrderOne
          click={() => {
            setOrder(true);
            addInstruction();
          }}
          order={order}
          total={add(context.total)}
          amount={amount}
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
            context.DeletTotal();
          }}
          wrapperRef={wrapperRef}
          model={model}
          order={order}
          hotelid={match.params.hotelid}
          table={match.params.table}
        />
      )}
    </div>
  );
};

export default Order;
