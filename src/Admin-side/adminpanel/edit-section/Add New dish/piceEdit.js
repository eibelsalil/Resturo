import React from "react";

const PriceEdit = ({itemPrice,itemTax,pricevalue,taxvalue}) => {
  return (
    <div className="priceEdit-container">
      <p className="price-title-edit">Item Price</p>
      <div className="priceAndtax">
        <div className="priceInput-cont">
          <p className="price-text-edit">Price</p>
          <input type="text" className="priceInput" name="price" value={itemPrice} onChange={(e)=>pricevalue(e)}/>
        </div>
        <div className="priceInput-cont">
          <p className="price-text-edit">Tax</p>
          <input type="text" className="taxInput" name="tax" value={itemTax} onChange={(e)=>taxvalue(e)} />
        </div>
      </div>
      <div className="final-priceCont">
        <p className="Final-priceText">Final price</p>
        <p className="Final-priceSample">$100.000(sample)</p>
      </div>
    </div>
  );
};

export default PriceEdit;
