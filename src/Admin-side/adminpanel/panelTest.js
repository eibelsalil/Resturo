import React,{useState} from "react";
import fire from "../../config/config";
import AdminHeader from "./header.js/head";
import "./panel.css";
import LiveCard from "./cards/liveCard";
import CompletedCard from "./cards/completedCard";

const Panel = () => {
  const logout = () => {
    fire.auth().signOut();
  };
 const [page,setPage] = useState(false)
console.log(page)

  return (
    <div className="Admin-panel">
      <AdminHeader click={()=>setPage(true)} clickBack={()=>setPage(false)} />
      <div className="full-bgAdmin" />
     { !page ?
        <div className="live-cardsCont">
        <LiveCard tableNumber={12}  timer={0.11} num={3}  />
        <LiveCard tableNumber={7} timer={0.27} num={3}  />
      </div>
      :
      <CompletedCard tableNumber={12}  timer={0.11} num={3}  />
    }
    </div>
  );
};

export default Panel;
