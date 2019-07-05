import React from "react";
import Table from "./table";
import PlateTable from "./plateTable";

const CompletedCard = ({
  tableNumber,
  timer,
  num,
  click,
  borderDepend,
  classDpends,
  buttonText,
  pageDepend,
  Statedpend,
  borderTabledpend
}) => {
  return (
    <div className={classDpends}>
      <Table
        tableNumber={tableNumber}
        timer={timer}
        click={click}
        pageDepend={pageDepend}
        buttonText={buttonText}
        Statedpend={Statedpend}
      />
      <div className={borderTabledpend}>
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

export default CompletedCard;
