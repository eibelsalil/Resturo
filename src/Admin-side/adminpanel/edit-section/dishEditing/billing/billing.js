import React, { useEffect, useState, useCallback } from "react";
import BillingHeadr from "./billingHeadr";
import LiveCard from "../../../cards/liveCard";
import "./bill.css";
import CompletedCard from "../../../cards/completedCard";
import OldBills from "./oldbill";
import Firebase from "firebase";
import Axios from "axios";
import uuid from "uuid";
import {add} from "../../../../../Client-side/order/orderHelper"
import RenderSelectedBill from "./billTobePrint";
import PlateTableCC from "../../../cards/plateTableCompleted";
import Loader from "../../../adminsettings/Loader";


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
  function Total(bill){
    let total = []
    Object.keys(bill[0]).map((key)=>{
      total.push(bill[0][key][2])
    })
    return add(total)
  }
  function Tax(total){
    let tax = (total * (7 / 100))
    return tax
  }
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
    if (bill && bill !== "you don't have any completed orders") {
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
    if (billwait && bill !== "you don't have any completed orders") {
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
          OrderNumber={"orderNumber"}
          click={() => {
            ToBilling(bill.orderId);
          }}
        >
          {bill.dishes ? (
            Object.keys(bill.dishes[0]).map((key) => (
              <PlateTableCC
                key={uuid()}
                plateName={key}
                palteNumber={bill.dishes[0][key][0]}
                price={bill.dishes[0][key][1]}
                total={bill.dishes[0][key][2]}
                borderDepend={"palteNumber"}
                plateTableDepend={"table-paltes"}
                instruction={bill.instruction}
              />
            ))
          ) : (
            <p>don't have any dish</p>
          )}
          <div className="billTotal">
          <div className="billTotalCont">
            <div className="sub-total">
              <p className="SUB_TO">SUB TOTAL</p>
              <p className="TOT">{Total(bill.dishes)}</p>
            </div>
            <div className="GST-Bill">
              <div className="SUB-GST">
                <p className="gst">GST</p>
                <p className="perscentage">(7.00%)</p>
              </div>
              <p className="totalTax-bill">{parseFloat(Tax(Total(bill.dishes))).toFixed(3) }</p>
            </div>
          </div>
          <div className="Amout-withTaxes">
          <p className="amount-Title">Amount Incl of all Taxes</p>
          <p className="amount-number">{Total(bill.dishes) + Tax(Total(bill.dishes)) }</p>
          </div>
          </div>
        </LiveCard>
      ));
    }
    else return <h1>You don't have any bills</h1>
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
          OrderNumber={"orderNumber"}
          clickRef={()=>{
            setSelectid(bill.orderId)
          }}
        >
          {Object.keys(bill.dishes[0]).map((key) => (
            <PlateTableCC
              key={uuid()}
              plateName={key}
              palteNumber={bill.dishes[0][key][0]}
              price={bill.dishes[0][key][1]}
              total={bill.dishes[0][key][2]}
              borderDepend={"palteNumber"}
              plateTableDepend={"table-paltes"}
            />
          ))}
          <div className="billTotal">
          <div className="billTotalCont">
            <div className="sub-total">
              <p className="SUB_TO">SUB TOTAL</p>
              <p className="TOT">{Total(bill.dishes)}</p>
            </div>
            <div className="GST-Bill">
              <div className="SUB-GST">
                <p className="gst">GST</p>
                <p className="perscentage">(7.00%)</p>
              </div>
              <p className="totalTax-bill">{parseFloat(Tax(Total(bill.dishes))).toFixed(3) }</p>
            </div>
          </div>
          <div className="Amout-withTaxes">
          <p className="amount-Title">Amount Incl of all Taxes</p>
          <p className="amount-number">{Total(bill.dishes) + Tax(Total(bill.dishes)) }</p>
          </div>
          </div>
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
      
        { Loading ?

          <div className="loadBill">
          <Loader />
          </div>
          :
          <div className="card-cont">
        <div className="first-cameBill">
          {  renderLiveBill()}
          </div>
          
          {!selectedBill ?<div className="forPrint"> {renderCompletedBil()}</div>: <div className="for-print2"> <RenderSelectedBill selectedBill={selectedBill} CompletedTimer={CompletedTimer} Back={()=>{
            setTimeout(()=>{
              setSelectedbill(null)
            },2500)
          }} />
        </div>}
  
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
        </div>}
  
    </div>
  );
};

export default Billing;


