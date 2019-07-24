import React from "react";
import { dishes } from "../disharraytest";



const Dish = ({ img, veg ,name,price,hover,Inc,Dec,AddClick,count,dishId,id}) => {




  return (
    <div className="dish">
    <img src={img} alt="fried" width="109px" height="79px"  />
    <img src={veg} alt="veg"  className="veg-sym" />
    <div style={{ width: "30%" , flexShrink:"0" }}>
      <p className="dishName">{name}</p>
      <p className="inrice">{dishes[0].rice}</p>
      <p className="price">${price}</p>
    </div>
    {count > 0 && dishId === id? (
      <div className="inc">
        <p
          className="sing-minus"
          onClick={Dec}
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
          onClick={Inc}
        >
          +
        </p>
      </div>
    ) : (
      <button
        onClick={AddClick}
         onMouseOver={hover}
        className="add"
      >
        add
      </button>
    )}
  </div>
  );
};

export default Dish;
