import React, { useState, useContext } from "react";
import ToggleButton from "react-toggle-button";
import veg from "../../../../Asset/veg.jpg";
import AppContext from "../../../../context/AppContext";

const DishItem = ({ click }) => {
  const [toggle, setToggle] = useState(false);
  const context = useContext(AppContext);
  return (
    <div className="editDishContent">
      <div className="dish-info">
        <img src={veg} alt="veg" className="veg-img" />
        <p className="nameTitle">Fried Rice</p>
      </div>
      <div className="toggleButton">
        <ToggleButton
          value={toggle}
          inactiveLabel={""}
          activeLabel={""}
          onToggle={() => {
            setToggle(!toggle);
          }}
          colors={{
            activeThumb: {
              base: "#3BDF81"
            },
            active: {
              base: "#CECECE",
              hover: "#CECECE"
            }
          }}
          trackStyle={{
            height: "10px"
          }}
          thumbStyle={{
            height: "20px"
          }}
        />
      </div>
      <p className="editLink" onClick={()=>{
        context.setAdminPage("edit")
      }}>Edit</p>
    </div>
  );
};

export default DishItem;
