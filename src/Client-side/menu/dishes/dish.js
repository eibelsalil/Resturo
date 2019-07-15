import React, { useContext, useState, useLayoutEffect } from "react";
import { dishes } from "../disharraytest";
import { currentOrderConfirm, add } from "../../order/orderHelper";
import Appcontext from "../../../context/AppContext";

const Dish = ({ img, veg }) => {

  const [count, incCount] = useState(0);
  const [chosenDish, setChosen] = useState(null);
  const Inc =() =>{
    incCount(count => count + 1)
  }
  const Dec =() =>{
    incCount(count => count - 1)
  }
  const context = useContext(Appcontext);




  useLayoutEffect(()=>{
    setChosen(
      currentOrderConfirm(
        dishes[0].name,
        dishes[0].price,
        count,
        add(context.total)
      )
    );
  },[context.total, count])
  const setTotal = (price) => {
    return context.addPrice(price);
  };
  const deleteItem = (price) => {
    return context.deletPrice(price);
  };


  return (
    <div className="dish">
    <img src={img} alt="fried" width="109px" height="79px"  />
    <img src={veg} alt="veg"  className="veg-sym" />
    <div style={{ width: "30%" , flexShrink:"0" }}>
      <p className="dishName">{dishes[0].name}</p>
      <p className="inrice">{dishes[0].rice}</p>
      <p className="price">${dishes[0].price}</p>
    </div>
    {count > 0 ? (
      <div className="inc">
        <p
          className="sing-minus"
          onClick={() => {
             deleteItem(-1)
             Dec()
          }}
        >
          -
        </p>
        <button
          className="addplus"
        >
          {count}
        </button>
        <p
          className="sing-plus"
          onClick={() => {
            setTotal(dishes[0].price)
           Inc()
          }}
        >
          +
        </p>
      </div>
    ) : (
      <button
        onClick={(evt) => {
          setTotal(dishes[0].price)
          Inc()
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
