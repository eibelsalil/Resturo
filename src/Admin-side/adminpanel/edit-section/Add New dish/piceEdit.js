import React from "react";

const PriceEdit = () => {
  return (
    <div className="priceEdit-container">
      <p className="price-title-edit">Item Price</p>
      <div className="priceAndtax">
        <div className="priceInput-cont">
          <p className="price-text-edit">Price</p>
    
            <input type="text" className="priceInput" />
    
        </div>
        <div className="priceInput-cont">
          <p className="price-text-edit">Tax</p>
            <input type="text" className="taxInput" />
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
