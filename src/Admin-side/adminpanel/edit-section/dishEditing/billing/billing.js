import React, { useEffect, useState, useCallback } from "react";
import BillingHeadr from "./billingHeadr";
import LiveCard from "../../../cards/liveCard";
import "./bill.css";
import CompletedCard from "../../../cards/completedCard";
import OldBills from "./oldbill";
import Firebase from "firebase";
import Axios from "axios";
import PlateTable from "../../../cards/plateTable";
import uuid from "uuid";
import LoadingOverlay from "react-loading-overlay";

import RenderSelectedBill from "./billTobePrint";

const Billing = () => {
  let user = Firebase.auth().currentUser.uid;
  let Live = true;

  const [bill, setBill] = useState(null);
  const [billIt, setTobillit] = useState(null);
  const [billwait, setbillwait] = useState(null);
  const [Loading, setLoading] = useState(false);
  //const [todayBills, setTodayBills] = useState(null);
  const [selecId,setSelectid] = useState(null)
  const [selectedBill,setSelectedbill] = useState(null)
  const CompletedTimer = (timer) => {
    return (
      <div className="CompletedTimer">
        <p className="completedTitle">order given at</p>
        <p className="time-spend-Completed">{timer}</p>
      </div>
    );
  };

  const getBills = useCallback(() => {
    setLoading(true);
    Axios.get(
      `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/completeOrder`
    )
      .then((doc) => {
        setBill(doc.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user]);
  const ToBilling = (BillId) => {
    let updated = {
      billing: true
    };
    setLoading(true);
    Axios.put(
      `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/order/${BillId}`,
      updated
    )
      .then(() => {
        getBills();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBills();
  }, [getBills]);
  useEffect(() => {
    if (bill) {
      let item = bill.filter(({ billing }) => {
        return billing === true;
      });
      setTobillit(item);
      let item2 = bill.filter(({ billing }) => {
        return billing === false;
      });
      setbillwait(item2);

      //let today = new Date().getDate();
      /*let yesterday = bill.filter(({ day }) => {
        return day < today;
      });
      */
      //setTodayBills(yesterday);
    }
    
  }, [bill])
  /*
     useEffect(()=>{
       if(billIt){
        billIt.map(()=>(
          refel.current.push(React.createRef())
        ))
       }
   
     },[billIt])
*/
  /*
    if(todayBills){
      let live = billwait
      let done = billIt
    todayBills.map((bill)=>{
      live.splice(bill)
      done.splice(bill)
    })
     console.log(live,done)
    }

*/

  const renderLiveBill = () => {
    if (billwait) {
      return billwait.map((bill) => (
        <LiveCard  
          key={bill.orderId}
          tableNumber={bill.table}
          timer={CompletedTimer(bill.time)}
          buttonText={"CLOSE"}
          classDpends={"bill-Cont"}
          borderDepend={"plateNumberBill"}
          Statedpend={"tableBillCont"}
          Live={Live}
          borderTableDepend={"table-paltes-Billing1"}
          orderId={bill.orderId}
          tabletextDepend={"plate-commentsDis"}
          pageDepend={"done-button"}
          click={() => {
            ToBilling(bill.orderId);
          }}
        >
          {bill.dishes ? (
            Object.keys(bill.dishes[0]).map((key) => (
              <PlateTable
                key={uuid()}
                plateName={key}
                palteNumber={bill.dishes[0][key]}
                borderDepend={"palteNumber"}
                plateTableDepend={"table-paltes"}
                instruction={bill.instruction}
              />
            ))
          ) : (
            <p>don't have any dish</p>
          )}
        </LiveCard>
      ));
    }
  };

 useEffect(()=>{
  if(billIt&& selecId){
    let item = billIt.filter(({orderId})=>(
         orderId === selecId
    ))
    setSelectedbill(item[0])
 }
 },[billIt,selecId])




  
  const renderCompletedBil = () => {
    if (billIt) {
      return billIt.map((bill,i) => (
        <CompletedCard
        id={i}
          key={bill.orderId}
          tableNumber={bill.table}
          timer={CompletedTimer(bill.time)}
          borderDepend={"plateNumberBill"}
          classDpends={"bill-Cont"}
          pageDepend={"bill-Button"}
          buttonText={"BILL"}
          Statedpend={"tableBillCont"}
          borderTabledpend={"table-paltes-Billing2"}
          tabletextDepend={"plate-commentsDis"}
          orderId={bill.orderId}
          orderidd={bill.orderId}
          clickRef={()=>{
            setSelectid(bill.orderId)
          }}
        >
          {Object.keys(bill.dishes[0]).map((key) => (
            <PlateTable
              key={uuid()}
              plateName={key}
              palteNumber={bill.dishes[0][key]}
              borderDepend={"palteNumber"}
              plateTableDepend={"table-paltes"}
            />
          ))}
        </CompletedCard>
      ));
    }
  };
  const Timer = (time, timeSign) => {
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
    <div className="Billing-full" >
      <BillingHeadr name={"billing"} />
      <LoadingOverlay
        active={Loading ? true : false}
        spinner
        text="Loading your orders..."
      >
        <div className="card-cont">
          {  renderLiveBill()}
          {!selectedBill ? renderCompletedBil() : <RenderSelectedBill selectedBill={selectedBill} CompletedTimer={CompletedTimer} Back={()=>{
            setTimeout(()=>{
              setSelectedbill(null)
            },2500)
          }} />}
          <div className="oldBills">
            <p className="date-deco">YESTERDAY</p>
            <OldBills
              tableNumber={8}
              timer={Timer("13.45", "PM")}
              num={3}
              classDpends={"bill-Cont"}
              pageDepend={"displaynone"}
              Statedpend={"tableBillCont"}
              borderDepend={"plateNumberBill"}
              tabletextDepend={"plate-commentsDis"}
            />
          </div>
        </div>
      </LoadingOverlay>
    </div>
  );
};

export default Billing;


