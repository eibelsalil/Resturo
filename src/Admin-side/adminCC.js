import React, { useState, useEffect, useRef,useContext } from "react";
import LiveCard from "./adminpanel/cards/liveCard";
import CompletedCard from "./adminpanel/cards/liveCard";
import AdminHeader from "./adminpanel/header.js/head";
import Settings from "./adminpanel/cards/adminsettings";
import fire from "../config/config";
import "./adminpanel/panel.css";
import Axios from "axios";
import PlateTable from "./adminpanel/cards/plateTable";
import uuid from "uuid";
import "./adminpanel/cards/card.css";
import Confirm from "../Asset/confirmWhite.png";
import Cancel from "../Asset/cancel.png";
import AppContext from "../context/AppContext";
import Loader from "./adminpanel/adminsettings/Loader";
import CardConfrimation from "./adminpanel/cards/CardConfirmation";


const RenderMainAdmin = () => {
  let user = fire.auth().currentUser.uid;

 const context = useContext(AppContext)

  const [page, setPage] = useState(false);
  const [model, setModel] = useState(false);
  const [Liveorders, setLive] = useState(null);
  const [Completedorders, setComplete] = useState(null);
  const [Loading, setLoad] = useState(false);
  const [finish, setFinish] = useState(false);
  const [id,setId] = useState()
  const Timer = (timer) => {
    return <p className="time-spend">{timer}</p>;
  };

  const CompletedTimer = (timer) =>{
    return(
      <div className="CompletedTimer">
      <p className="completedTitle">completed at</p>
      <p className="time-spend-Completed">{timer}</p>
      </div>
    )
  }

  const logout = () => {
    fire.auth().signOut();
  };

  useEffect(()=>{
    const RefUpdate = fire.database().ref(`/Hotel/${user}/Order`)
      RefUpdate.on("value",(snapshot,prev)=>{
        let newOrder = snapshot.key
        console.log(newOrder)
      })
  },[user])

  useEffect(() => {
    if(context.orderDish.length === 0 && context.dishId.length === 0){
      setLoad(true);
      Axios.get(
        `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/liveOrder`
      )
        .then((doc) => {
          setLive(doc.data);
          context.addDish(doc.data)
        })
        .then(() => {
          Axios.get(
            `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/completeOrder`
          ).then((doc) => {
            setComplete(doc.data);
            context.setDishId(doc.data)
            setLoad(false);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
   
  }, [user]);

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
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const setTofinish = (orderId) => {
    let update = {
      status: false,
      finishAt: new Date()
    };
    setLoad(true);
    Axios.put(
      `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/order/${orderId}`,
      update
    )
      .then(() => {
        Axios.get(
          `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/liveOrder`
        )
          .then((doc) => {
            setLive(doc.data);
            context.updateDish(doc.data)
          })
          .then(() => {
            Axios.get(
              `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/completeOrder`
            ).then((doc) => {
              setComplete(doc.data);
            
              setLoad(false);
            });
          });
      })
      .then(() => {
        setFinish(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
console.log(context.orderDish)
  const renderLiveOrder = () => {
    if (context.orderDish.length > 0  && context.orderDish.join("") !== "you don't have any live orders") {
      return context.orderDish.map((order) => (
        <React.Fragment    key={order.orderId}>

          { finish && id === order.orderId ?
            <div className="full-conf">
            <div className="inner-Conf">
           <CardConfrimation
           finish={()=>{
            setFinish(false);
           }}
           finishTo={()=>{
            setTofinish(order.orderId);
           }}
           Cancel={Cancel}
           Confirm={Confirm}
         />
            <LiveCard
            tableNumber={order.table}
            buttonText={"DONE"}
            classDpends={"liveCardFlip"}
            Statedpend={"table-cont"}
            instruction={order.instruction}
            timer={Timer(order.time)}
            click={() => {
              setFinish(true);
              setId(order.orderId)
            }}
            Live={order.status}
            borderTableDepend={"table-paltes"}
            orderId={order.orderId}
            tabletextDepend={"plate-comments"}
            textOrderDepend={"text-order"}
           pageDepend={"done-button"}
           OrderNumber={"orderNumber"}
          > 
            {Object.keys(order.dishes[0]).map((key) => (
              <PlateTable
                key={uuid()}
                plateName={key}
                palteNumber={order.dishes[0][key][0]}
                borderDepend={"palteNumber"}
              />
            ))}
          </LiveCard>
          </div>
          </div>
          :
          <LiveCard
          tableNumber={order.table}
          buttonText={"DONE"}
          classDpends={"liveCard"}
          Statedpend={"table-cont"}
          instruction={order.instruction}
          timer={Timer(order.time)}
          click={() => {
            setFinish(true);
            setId(order.orderId)
          }}
          Live={order.status}
          borderTableDepend={"table-paltes"}
          orderId={order.orderId}
          tabletextDepend={"plate-comments"}
          textOrderDepend={"text-order"}
         pageDepend={"done-button"}
         OrderNumber={"orderNumber"}
        > 
          {Object.keys(order.dishes[0]).map((key) => (
            <PlateTable
              key={uuid()}
              plateName={key}
              palteNumber={order.dishes[0][key][0]}
              borderDepend={"palteNumber"}
            />
          ))}
        </LiveCard>
        }
        </React.Fragment>
      ));
    } 
    else{
      return <h1>{Liveorders}</h1>
    }
  };
  const renderCompletedorder = () => {
    if (context.dishId.length >0 && context.dishId[0] !== "you don't have any completed orders") {
      return context.dishId[0].map((order) => (
        <CompletedCard
          key={order.orderId}
          tableNumber={order.table}
          classDpends={"completedCard"}
          Statedpend={"table-cont-completed"}
          instruction={order.instruction}
          borderTableDepend={"table-paltesCompleted"}
          timer={CompletedTimer(order.time)}
          orderId={order.orderId}
          tabletextDepend={"plate-comments"}
          textOrderDepend={"text-order"}
          pageDepend={"completedCardbtn"}
          OrderNumber={"orderNumber"}
        >
          {Object.keys(order.dishes[0]).map((key) => (
            <PlateTable
              key={uuid()}
              plateName={key}
              palteNumber={order.dishes[0][key][0]}
              borderDepend={"palteNumber"}
            />
          ))}
      
        </CompletedCard>
      ));
    }else return <h1>{Completedorders}</h1>
  };

  return (
    <div>
      <AdminHeader
        click={() => setPage(true)}
        clickBack={() => setPage(false)}
      />
    
       {
        Loading ?
        <div className="load">
        <Loader />
         </div>
         :
        <div>
          {!page ? (
          <div className="live-cardsCont">
             {renderLiveOrder() }
          </div>
        ) : (
          <div className="live-cardsCont">
          { renderCompletedorder()}
          </div>
        )}
        <button
          className="edit-menu"
          onClick={() => {
            setModel(true);
          }}
        >
          Admin
        </button>
        <Settings
          model={model}
          wraaperRef={wrapperRef}
          click={() => {
            setModel(false);
          }}
          logout={() => {
            logout();
          }}
        />
        </div>
        }
    </div>
  );
};

export default RenderMainAdmin;
