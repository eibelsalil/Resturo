import React from "react";
import BillingHeadr from "./billingHeadr";
import LiveCard from "../../../cards/liveCard";
import "./bill.css";
import CompletedCard from "../../../cards/completedCard";
import OldBills from "./oldbill";

const Billing = () => {
  const Timer = (time,timeSign) => {
    return (
      <div className="timer-cont">
        <p className="order-Give">Order Given At</p>
        <div className="displatTime">
        <p className="time">{time}</p>
        <p className="timeSign">{timeSign}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="Billing-full">
      <BillingHeadr name={"billing"} />
      <div className="card-cont">
        <LiveCard
          tableNumber={12}
          timer={Timer("13.27","PM")}
          num={3}
          buttonText={"CLOSE"}
          classDpends={"bill-Cont"}
          borderDepend={"plateNumberBill"}
          Statedpend={"tableBillCont"}
        />
        <CompletedCard
          tableNumber={6}
          timer={Timer("13.45","PM")}
          num={3}
          borderDepend={"plateNumberBill"}
          classDpends={"bill-Cont"}
          pageDepend={"bill-Button"}
          buttonText={"BILL"}
          Statedpend={"tableBillCont"}
          borderTabledpend={"table-paltesCompletedBill"}
        />
    <div className="oldBills">
    <p className="date-deco">YESTERDAY</p>
        <OldBills 
        tableNumber={8}
        timer={Timer("13.45","PM")}
        num={3}
        classDpends={"bill-Cont"}
        pageDepend={"displaynone"}
         Statedpend={"tableBillCont"}
         borderDepend={"plateNumberBill"}
   
        />
        </div>
      </div>
    </div>
  );
};

export default Billing;
