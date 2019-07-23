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
  instruction,
  Live,
  orderId,
  tabletextDepend,

  clickRef
}) => {

  return (
    <div className={classDpends}>
 
    <Table
    tableNumber={tableNumber}
    timer={timer}
    click={click}
    buttonText={buttonText}
    Statedpend={Statedpend}
    pageDepend={pageDepend}
    Live={Live}
  clickRef={clickRef}
  />

      <div className={borderTabledpend}>
        {children}
        <div className="text-order">
        <textarea className={tabletextDepend} disabled value={instruction}/>
        <p className="orderNumber">Order No: {orderId}</p>
        </div>
      </div>
     
    </div>
  );
};

export default CompletedCard;
