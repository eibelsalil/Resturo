import React from "react";

const PlateTable = ({ plateName, palteNumber,borderDepend }) => {
  return (
    <div className="Plate-Table">
      <p className="plateName">{plateName}</p>
      <button className={borderDepend}>
        <p className="palteNumber-para"> {palteNumber}</p>
      </button>
    </div>
  );
};

export default PlateTable;
