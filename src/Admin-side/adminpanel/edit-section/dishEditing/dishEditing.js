import React from "react";
import "../edit.css"
import DishItem from "./dishItem";
import uuid from "uuid"

const DishEditing = ({ gategory }) => {

  return (
    <div>
      <div className="itemName">
      <div className="Gatogery">
        <p >{gategory}</p>
        </div>
        {
          Array.from({length: 3}).map(()=>(
            <DishItem key={uuid()} />
          ))
        }
       
      </div>
    </div>
  );
};

export default DishEditing;
