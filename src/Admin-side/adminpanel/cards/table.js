import React from "react";


const Table = ({
  tableNumber,
  timer,
  pageDepend,
  buttonText,
  Statedpend,
  Live,
  click,
  clickRef
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
          <div className={pageDepend} onClick={clickRef}>
          <p>{buttonText}</p>
        </div>
      )}
    </div>
  );
};

export default Table;
