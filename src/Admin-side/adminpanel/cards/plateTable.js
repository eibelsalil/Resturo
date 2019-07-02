import React from "react";

const PlateTable = ({ plateName, palteNumber }) => {
  return (
    <div className="Plate-Table">
      <p className="plateName">{plateName}</p>
      <button className="palteNumber">
        <p className="palteNumber-para"> {palteNumber}</p>
      </button>
    </div>
  );
};

export default PlateTable;
