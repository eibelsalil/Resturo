import React from "react";
import Table from "./table";
import "./card.css";


const LiveCard = ({
  tableNumber,
  timer,
  click,
  buttonText,
  classDpends,
  Statedpend,
  children,
  instruction
}) => {
  return (
    <div className={classDpends}>
      <Table
        tableNumber={tableNumber}
        timer={timer}
        click={click}
        pageDepend={"done-button"}
        buttonText={buttonText}
        Statedpend={Statedpend}
      />
      <div className="table-paltes">
      {children}
        <textarea className="plate-comments" disabled value={instruction} />
      </div>
    </div>
  );
};

export default LiveCard;
