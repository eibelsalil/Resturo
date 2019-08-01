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
  instruction,
  Live,
  borderTableDepend,
  orderId,
  tabletextDepend,
  textOrderDepend,
  pageDepend,
  OrderNumber
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
        Live={Live}
      />
      <div className={borderTableDepend}>
      {children}
      <div className={textOrderDepend}>
      <textarea className={tabletextDepend}  disabled value={instruction}/>
      <p className={OrderNumber}>Order No: {orderId}</p>
      </div>
      </div>
    </div>
  );
};

export default LiveCard;
