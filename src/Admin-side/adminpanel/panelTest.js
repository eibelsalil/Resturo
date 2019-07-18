import React, { useState, useRef, useEffect } from "react";
import "./panel.css";
import "./cards/card.css";
import Footer from "./fotter/footer";
import Printer from "../../Asset/footer/printer.png";
import PrinterOn from "../../Asset/footer/printer on.png";
import edit from "../../Asset/footer/edit.png";
import editOn from "../../Asset/footer/edit on.png";
import List from "../../Asset/footer/list.png";
import listOff from "../../Asset/footer/listOff.png";
import Edit from "./edit-section/edit";
import Model from "../../Client-side/menu/model";
import Billing from "./edit-section/dishEditing/billing/billing";
import { Switch, Route } from "react-router-dom";
import EditDish from "./edit-section/edit dish/editDish";
import RenderMainAdmin from "../adminCC";

const Panel = ({ user }) => {
  const [section, setSection] = useState("list");
  const [model, setModel] = useState(false);

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

  const renderEdit = () => {
    return (
      <div>
        <Edit />
        <button
          className="edit-menu"
          onClick={() => {
            setModel(true);
          }}
        >
          menu
        </button>
        <Model
          model={model}
          wraaperRef={wrapperRef}
          click={() => {
            setModel(false);
          }}
        />
      </div>
    );
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
      <Switch>
        <Route exact path="/adminPanel" component={RenderMainAdmin} />
        <Route exact path="/adminPanel/edit" component={renderEdit} />
        <Route exact path="/adminPanel/billing" component={Billing} />
        <Route exact path="/adminPanel/editDish" component={EditDish} />
      </Switch>
      <div className="full-bgAdmin" />
      {RenderFooter(section)}
    </div>
  );
};

export default Panel;
