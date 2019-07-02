import React from "react";
import Table from "./table";
import "./card.css";
import PlateTable from "./plateTable";

const LiveCard = ({tableNumber,timer,num,click}) => {
  return (
    <div className="liveCard">
      <Table tableNumber={tableNumber} timer={timer} click={click} pageDepend={"done-button"} />
      <div className="table-paltes">
      <PlateTable plateName={"FRIED CHICKEN"} palteNumber={num} />
      <PlateTable plateName={"FRIED RICE"} palteNumber={num} />
      <PlateTable plateName={"COLD COFFEE"} palteNumber={num} />
      <PlateTable plateName={"FRIED CHICKEN"} palteNumber={num} />
      <textarea className="plate-comments" />
      </div>
    </div>
  );
};

export default LiveCard;
