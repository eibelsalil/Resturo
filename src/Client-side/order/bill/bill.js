import React from "react";
import "./bill.css"


const Bill = ({ total,tax,click,order}) => {
   
  return (
    <div className={order ?"bills" : "bills-current" }>
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
        <p className="result">${total + tax}</p>
      </div>
   { !order ? <button className="orderPlate" onClick={click}>place order</button> : null}
    </div>
  );
};

export default Bill;
