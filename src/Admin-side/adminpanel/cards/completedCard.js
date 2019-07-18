import React from "react";
import Table from "./table";


const CompletedCard = ({
  tableNumber,
  timer,
  click,
  classDpends,
  buttonText,
  pageDepend,
  Statedpend,
  borderTabledpend,
  children,
  instruction
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
        {children}
        <textarea className="plate-comments"  disabled value={instruction}/>
      </div>
    </div>
  );
};

export default CompletedCard;
