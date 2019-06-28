import React from "react";
import "./bill.css"


const Bill = ({ total, amount ,tax}) => {
   
  return (
    <div className="bills">
      <div className='items'>
        <p className="item-total" >Item Total</p>
        <p className="total-price">${total}</p>
      </div>
      <div className="taxes">
        <p className="tax">Taxes</p>
        <p className="tax-num">${tax}</p>
      </div>
      <div className="amount"> 
        <p className="grand">Grand Total</p>
        <p className="result">${amount}</p>
      </div>
    </div>
  );
};

export default Bill;
