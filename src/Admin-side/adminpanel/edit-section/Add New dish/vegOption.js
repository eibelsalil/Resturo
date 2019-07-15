import React from "react";

const VegOption = ({vegChange,NonVegChange}) => {
  return (
    <div className="veg-option">
      <p className="vegOption-text">Veg/non-veg</p>
      <div className="label-cont">
      <div className="labels-option">
        <input type="radio" className="input-checkbox" name="veg" value="veg" onChange={vegChange}/>
        <p className="option-text" >Veg</p>
      </div>
      <div className="labels-option-nonveg">
        <input type="radio" className="input-checkbox" name="veg" value="Non-veg" onChange={NonVegChange}/>
        <p className="option-text-nonveg" >non-Veg</p>
      </div>
      </div>
    </div>
  );
};

export default VegOption;
