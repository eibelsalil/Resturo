import React from "react";
import {Link} from "react-router-dom"

const Table = ({
  tableNumber,
  timer,
  click,
  pageDepend,
  buttonText,
  Statedpend,
  Live,
}) => {
  return (
    <div className="Table">
      <div className={Statedpend}>
        <p className="table-text">table</p>
        <p className="table-number">{tableNumber}</p>
        {timer}
      </div>
      {Live ? (
        <div className={pageDepend} onClick={click}>
          <p>{buttonText}</p>
        </div>
      ) : (
        <div className={pageDepend} onClick={click}>
        <p>{buttonText}</p>
      </div>
      )}
    </div>
  );
};

export default Table;
