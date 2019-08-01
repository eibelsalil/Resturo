import React from "react";

const PlateTableCC = ({ plateName, palteNumber,borderDepend,total,price }) => {
  return (
    <div className="Plate-Tablecc">
    <div className="firstItemOfOrder">
    <button className={borderDepend}>
    <p className="palteNumber-para"> {palteNumber}</p>
  </button>
      <p className="plateNameCC">{plateName.toUpperCase()}</p>
      </div>
      <p>${price}</p>
      <p>{total}</p>
    </div>
  );
};

export default PlateTableCC;