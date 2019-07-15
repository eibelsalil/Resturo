import React, { useState, useRef, useEffect, useContext } from "react";
//import fire from "../../config/config";
import AdminHeader from "./header.js/head";
import "./panel.css";
import "./cards/card.css";
import LiveCard from "./cards/liveCard";
import CompletedCard from "./cards/completedCard";
import Footer from "./fotter/footer";
import Printer from "../../Asset/footer/printer.png";
import PrinterOn from "../../Asset/footer/printer on.png";
import edit from "../../Asset/footer/edit.png";
import editOn from "../../Asset/footer/edit on.png";
import List from "../../Asset/footer/list.png";
import listOff from "../../Asset/footer/listOff.png";
import Edit from "./edit-section/edit";
import Model from "../../Client-side/menu/model";
import AppContext from "../../context/AppContext";
import Billing from "./edit-section/dishEditing/billing/billing";


const Panel = ({user}) => {
  /*
  const logout = () => {
    fire.auth().signOut();
  };
  */
  const [page, setPage] = useState(false);
  const [section, setSection] = useState("list");
  const [model, setModel] = useState(false);

  const context = useContext(AppContext);


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

  const RenderComonents = (section) => {

 const Timer = (timer) =>{
   return(
    <p className="time-spend">{timer}</p>
   )

 }



    switch (section) {
      case "edit":
        return (
          <div>
            <Edit />
            {context.AdminPage !== "edit" ? (
              <button
                className="edit-menu"
                onClick={() => {
                  setModel(true);
                }}
              >
                menu
              </button>
            ) : null}
            <Model
              model={model}
              wraaperRef={wrapperRef}
              click={() => {
                setModel(false);
              }}
            />
            {RenderFooter()}
          </div>
        );
      case "print":
        return <Billing />;

      default:

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
          </div>
        );
    }
  };

  const RenderFooter = (section) => {
    switch (section) {
      case "edit":
        return (
          <Footer
            img={Printer}
            alt={"print"}
            edit={editOn}
            editAlt="edit"
            list={listOff}
            listAlt="list"
            listCkick={() => {
              setSection("list");
            }}
            editClick={() => {
              setSection("edit");
            }}
            printClick={() => {
              setSection("print");
            }}
          />
        );
      case "print":
        return (
          <Footer
            img={PrinterOn}
            alt={"print"}
            edit={edit}
            editAlt="edit"
            list={listOff}
            listAlt="list"
            listCkick={() => {
              setSection("list");
            }}
            editClick={() => {
              setSection("edit");
            }}
            printClick={() => {
              setSection("print");
            }}
          />
        );
      default:
        return (
          <Footer
            img={Printer}
            alt={"print"}
            edit={edit}
            editAlt="edit"
            list={List}
            listAlt="list"
            listCkick={() => {
              setSection("list");
            }}
            editClick={() => {
              setSection("edit");
            }}
            printClick={() => {
              setSection("print");
            }}
          />
        );
    }
  };

  return (
    <div className="Admin-panel">
      {RenderComonents(section)}
      <div className="full-bgAdmin" />
      {RenderFooter(section)}
    </div>
  );
};

export default Panel;
