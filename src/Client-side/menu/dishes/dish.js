import React, { useState,useContext } from "react";
import { dishes } from "../disharraytest";
import AppContext from "../../../context/AppContext"

const Dish = ({ img }) => {
  const [count, incCount] = useState(0);
  const context = useContext(AppContext)
   
  const setTotal = (price) => {
  return  context.addPrice(price)
  }
  const deleteItem = (price) =>{
    return context.deletPrice(price)
  }

 
  return (
    <div className="dish">
      <img src={img} alt="fried" width="109px" height="79px" />
      <div style={{ width: "30%" , flexShrink:"0" }}>
        <p className="dishName">{dishes[0].name}</p>
        <p className="inrice">{dishes[0].rice}</p>
        <p className="price">${dishes[0].price}</p>
      </div>
      {count > 0 ? (
        <div className="inc">
          <p
            className="sing"
            onClick={() => {
              incCount(count - 1);
               deleteItem(-1)
            }}
          style={{ fontSize: '30px', marginTop: '9px'}}
          >
            -
          </p>
          <button
            className="addplus"
          >
            {count}
          </button>
          <p
            className="sing"
            onClick={() => {
              incCount(count + 1);
              setTotal(dishes[0].price)
              
            }}
            style={{ fontSize: '25px', marginTop: '14px'}}
          >
            +
          </p>
        </div>
      ) : (
        <button
          onClick={() => {
            incCount(count + 1);
            setTotal(dishes[0].price)
          }}
          className="add"
        >
          add
        </button>
      )}
    </div>
  );
};

export default Dish;
