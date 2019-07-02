import React from 'react'

const OrderContent = ({dishName,dishPrice,ItemNumber,total}) => {
    return(
        <div className="current">
        <div className="plate-orderOne">
          <p className="current-dish">{dishName}</p>
          <p className="current-dish-price">{dishPrice}</p>
        </div>
        <div className="button-col-current">
          <p
           id="minus-current"
          style={{
               color: "#2BC026", 
               fontWeight:"bold",
            }}>
            -
            </p>
          <button className="button-current">{ItemNumber}</button>
          <p
          id="plus-current"
            style={{
              color: "#2BC026",
              fontWeight:"bold"
            }}
          >
            +
          </p>
        </div>
        <p className="price-total-current">${total}</p>
      </div>
    )
}

export default OrderContent