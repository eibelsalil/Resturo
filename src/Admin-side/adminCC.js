import React,{useState,useEffect,useRef} from 'react'
import LiveCard from "./adminpanel/cards/liveCard";
import CompletedCard from "./adminpanel/cards/liveCard";
import AdminHeader from "./adminpanel/header.js/head";
import Settings from "./adminpanel/cards/adminsettings";
import fire from "../config/config";
import "./adminpanel/panel.css";


const RenderMainAdmin = () =>{

    const [page, setPage] = useState(false);
    const [model, setModel] = useState(false);
    const Timer = (timer) => {
        return <p className="time-spend">{timer}</p>;
      };
    const logout = () => {
        fire.auth().signOut();
      };
    


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
      
    return (
      <div>
        <AdminHeader
          click={() => setPage(true)}
          clickBack={() => setPage(false)}
        />
        {!page ? (
          <div className="live-cardsCont">
            <LiveCard
              tableNumber={12}
              timer={Timer(0.11)}
              num={3}
              buttonText={"DONE"}
              classDpends={"liveCard"}
              borderDepend={"palteNumber"}
              Statedpend={"table-cont"}
            />
            <LiveCard
              tableNumber={7}
              timer={Timer(0.27)}
              num={3}
              buttonText={"DONE"}
              classDpends={"liveCard"}
              borderDepend={"palteNumber"}
              Statedpend={"table-cont"}
            />
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