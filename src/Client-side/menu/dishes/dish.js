import React,{useState,useContext,useEffect} from "react";
import { dishes } from "../disharraytest";
import AppContext from "../../../context/AppContext";




const Dish = ({ img, veg ,name,price,hover,Inc,Dec,setTheId,dishId}) => {

  const context = useContext(AppContext)
  const [count, incCount] = useState(0);



    useEffect(()=>{
      count > 0 ?
      context.IncRating(count)
      : context.IncRating()
    },[count])


  return (
    <div className="dish">
      <img src={img} alt="fried" width="109px" height="79px"  />
      <img src={veg} alt="veg"  className="veg-sym" />
      <div style={{ width: "30%" , flexShrink:"0" }}>
        <p className="dishName">{name}</p>
        <p className="inrice">{dishes[0].rice}</p>
        <p className="price">${price}</p>
      </div>
      {count > 0 ? (
        <div className="inc">
          <p
            className="sing-minus"
            onClick={()=>{
              incCount((count) => count - 1);
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
            onClick={()=>{
              Inc()
                incCount((count) => count + 1);
               
            }}
          >
            +
          </p>
        </div>
      ) : (
        <button
          onClick={()=>{
            incCount((count) => count + 1);

            hover()
          }}
          onPointerOver={setTheId}
          className="add"
        >
          add
        </button>
      )}

  </div>
  );
};

export default Dish;
