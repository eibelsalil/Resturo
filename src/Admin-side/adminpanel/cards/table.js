import React from "react";

const Table = ({tableNumber,timer,click,pageDepend}) => {
  return (
    <div className="Table">
      <div className="table-cont">
        <p className="table-text">table</p>
        <p className="table-number">{tableNumber}</p>
        <p className="time-spend">{timer}</p>
      </div>
      <div className={pageDepend} onClick={click}>
        <p>DONE</p>
      </div>
    </div>
  );
};

export default Table;
