import React from "react";

const Table = ({tableNumber,timer,click,pageDepend,buttonText,Statedpend}) => {
  return (
    <div className="Table">
      <div className={Statedpend}>
        <p className="table-text">table</p>
        <p className="table-number">{tableNumber}</p>
        {timer}
      </div>
      <div className={pageDepend} onClick={click}>
        <p>{buttonText}</p>
      </div>
    </div>
  );
};

export default Table;
