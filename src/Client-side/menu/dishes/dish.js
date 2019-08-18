import React,{useState,useContext,useEffect} from "react";
import { dishes } from "../disharraytest";
import AppContext from "../../../context/AppContext";
import Rating from "@material-ui/lab/Rating";
import Collapse from "@material-ui/core/Collapse"


const Dish = ({ img, veg ,name,price,hover,Inc,Dec,setTheId,DishRating,DishTime,discription}) => {

  const context = useContext(AppContext)
  const [count, incCount] = useState(0);
  const [expand,setExpand] = useState(false)

    useEffect(()=>{
      count > 0 ?
      context.IncRating(count)
      : context.IncRating()
    },[count])

 useEffect(()=>{
  context.setCollapse(expand)
 },[expand])
  return (
    <div className="full-dish">
    <div className="dish">
    <div className="first-part">
      <img src={img} alt="fried"  className="dishImg" 
      onClick={()=>{
        setExpand(!expand)
 
      }}
      />
      <img src={veg} alt="veg"  className="veg-sym" />
      <div className="rating-timing">
      <Rating readOnly value={DishRating}  className="RRating" size="small"/>
      <li><span>{DishTime}</span></li>
      </div>
      </div>
      <div  className="typeAndName">
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
  <Collapse in={expand} timeout="auto" className="collapse" >
  <p>{discription}</p>
  </Collapse>
  </div>
  );
};

export default Dish;
