import React from "react";
import "../../../Client-side/menu/Menu.css";
const Settings = ({wraaperRef, model, click, logout}) => {
  return (
    <div className={model ? "model" : "modelfalse"}>
      <div className="model-content" ref={wraaperRef}>
        <button onClick={logout}>logout</button>
        <div />
        <div>
          <p>Hotel name</p>
          <p>name</p>
        </div>
        <div>
          <p>Hotel email</p>
          <p>email</p>
        </div>
        <div>
          <p>Hotel Location</p>
          <p>Location</p>
        </div>
        <div>
          <p>Resturant name</p>
          <p>resturant</p>
        </div>
        <div>
          <p>tables numbers</p>
          <p>number</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
