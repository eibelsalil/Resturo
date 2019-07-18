import React,{useState,useEffect,useRef} from 'react'
import LiveCard from "./adminpanel/cards/liveCard";
import CompletedCard from "./adminpanel/cards/liveCard";
import AdminHeader from "./adminpanel/header.js/head";
import Settings from "./adminpanel/cards/adminsettings";
import fire from "../config/config";
import "./adminpanel/panel.css";
import Axios from 'axios';
import PlateTable from './adminpanel/cards/plateTable';
import LoadingOverlay from 'react-loading-overlay';
import uuid from "uuid"

const RenderMainAdmin = () =>{
let user = fire.auth().currentUser.uid
    const [page, setPage] = useState(false);
    const [model, setModel] = useState(false);
    const [Liveorders,setLive] = useState(null)
    const [Loading,setLoad] = useState(false)
    const Timer = (timer) => {
        return <p className="time-spend">{timer}</p>;
      };
    const logout = () => {
        fire.auth().signOut();
      };
    
useEffect(()=>{
  setLoad(true)
 Axios.get(`http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/order`)
 .then((doc)=>{
    setLive(doc.data)
    setLoad(false)
 })
 .catch((err)=>{
   console.error(err)
 })
},[user])
if(Liveorders){
 let arr= []
   
   Liveorders.map((order)=>{
          arr.push(order)

   })
console.log(Liveorders[0].createdTime.toString())
}
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
       
 const renderLiveOrder = () =>{
   if(Liveorders){
    return Liveorders.map((order)=>(
      <LiveCard
      key={order.orderId}
      tableNumber={order.table}
      buttonText={"DONE"}
      classDpends={"liveCard"}
      Statedpend={"table-cont"}
      instruction={order.instruction}
    >
  {  
   Object.keys(order.dishes[0]).map((key)=>(
    <PlateTable
    key={uuid()}
    plateName={key}
    palteNumber={order.dishes[0][key]}
    borderDepend={"palteNumber"}
   />
   ))

  }
 
    </LiveCard>
    ) )
   }
   else{
     return(
       <h3>You still don't have any orders</h3>
     )
   }
 
 }

    return (
      <div>
        <AdminHeader
          click={() => setPage(true)}
          clickBack={() => setPage(false)}
        />
        {!page ? (
          <div className="live-cardsCont">
          <LoadingOverlay 
          active={Loading ? true : false}
          spinner
          text="Loading your orders..."
          >
           { renderLiveOrder()}
           </LoadingOverlay>
          </div>
        ) : (
          <div className="live-cardsCont">
            <CompletedCard
              tableNumber={12}
              timer={Timer(0.27)}
              num={3}
              borderDepend={"palteNumber"}
              classDpends={"completedCard"}
              pageDepend={"done-buttonHidden"}
              Statedpend={"table-cont"}
              borderTabledpend={"table-paltesCompleted"}
            />
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
    );
  }

  export default RenderMainAdmin