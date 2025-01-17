import React, { useContext } from "react";
import darkArrow from "../../Asset/arrows-01.png";
import AppContext from "../../context/AppContext";
import { add } from "../order/orderHelper";

const Total = ({table,hotelid,history}) => {
  const context = useContext(AppContext);

  return (
    <div className="total">
      <div className="price-item">
        <p className="item">{context.total.length} item</p>
        <p className="total-amount">${add(context.total)}</p>
      </div>
      <div className="cart"
      onClick={()=>{
        context.changeTheId('12')
        setTimeout(()=>{
          history.push(`/menu/${hotelid}/${table}/order`)
        },1500)
      }}
      >
        <p className="cart-text">view cart</p>
          <img
            src={darkArrow}
            alt="view cart"
            width="36.23px"
            height="20px"
            style={{ marginRight: "5px", marginTop: "4px" }}
          />
      </div>
    </div>
  );
};

export default Total;
