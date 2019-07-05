import React from "react";
import Table from "./table";
import "./card.css";
import PlateTable from "./plateTable";

const LiveCard = ({
  tableNumber,
  timer,
  num,
  click,
  buttonText,
  classDpends,
  borderDepend,
  Statedpend
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
        <PlateTable
          plateName={"FRIED CHICKEN"}
          palteNumber={num}
          borderDepend={borderDepend}
        />
        <PlateTable
          plateName={"FRIED RICE"}
          palteNumber={num}
          borderDepend={borderDepend}
        />
        <PlateTable
          plateName={"COLD COFFEE"}
          palteNumber={num}
          borderDepend={borderDepend}
        />
        <PlateTable
          plateName={"FRIED CHICKEN"}
          palteNumber={num}
          borderDepend={borderDepend}
        />
        <textarea className="plate-comments" />
      </div>
    </div>
  );
};

export default LiveCard;
