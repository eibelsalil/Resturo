import React from "react";
import CompletedCard from "../../../cards/completedCard";

const OldBills = ({
  Statedpend,
  tableNumber,
  timer,
  num,
  borderDepend,
  classDpends,
  pageDepend,
  tabletextDepend
}) => {
  return (
    <CompletedCard
      tableNumber={tableNumber}
      timer={timer}
      num={num}
      pageDepend={pageDepend}
      classDpends={classDpends}
      borderDepend={borderDepend}
      Statedpend={Statedpend}
      tabletextDepend={tabletextDepend}
      borderTabledpend={"table-paltesCompletedOld"}
    />
  );
};


export default OldBills