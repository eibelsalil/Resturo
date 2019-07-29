import React, { useContext, useState, useEffect,useRef } from "react";
import "./dishes.css";
import Veg from "../../../Asset/veg.jpg";
import Non_veg from "../../../Asset/non-veg.png";
import Dish from "./dish";
import AppContext from "../../../context/AppContext";
import { add } from "../../order/orderHelper";

const Dishcont = ({ categoryId }) => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [img,setImg] = useState()
  const [chosenDish, setChosen] = useState({});
  const [dishTotal, setDishTotal] = useState([]);
  const [dishes,setDishes] = useState()
  const context = useContext(AppContext);
 const idRef = useRef(context.changeId)

 useEffect(()=>{
   idRef.current= context.changeId
 },[context.changeId])
  
  const setOrderDishes = () => {
    if (chosenDish.id !== undefined) {
      context.addDish(chosenDish);    
    }
  };
  useEffect(()=>{
    setChosen((chosenDish) => ({
      ...chosenDish,
      ...({
      name: name,
      count: context.RatingCount,
      price: price,
      total: (parseInt(price) * context.RatingCount),
      id:id,
      img: img
    })
 }))
  },[context.RatingCount])
  useEffect(() => {
    if(context.changeId)
      setDishTotal([]);
  }, [context.changeId,context.RatingCount]);

 useEffect(()=>{
     setOrderDishes()
 },[context.changeId])

 useEffect(()=>{
   return()=>{
     context.IncRating(0)
   }
 },[])
useEffect(()=>{
  if(context.dish){
    context.dish.map((cat)=>(
      cat.map((two)=>(
        Object.values(two).map((three)=>(
          setDishes(three)
        ))
      ))
    ))
  }
},[context.dish])
  const setTotal = (x) => {
    return context.addPrice(x);
  };

  const deleteItem = (x) => {
    return context.deletPrice(x);
  };
 console.log(context.orderDish)
  const renderDishes = () => {

    if (context.dish !== []) {
      return context.dish.map((category) =>
        category.map((dish, i) => (
          <div className="dishCont" id={Object.keys(dish)} key={i}>
            <p className="category">{Object.keys(dish)}</p>

            {Object.values(dish).map((array) =>
              array.map((d) => (
                <Dish
                key={d.dishId}
                veg={d.veg === "veg" ? Veg : Non_veg}
                img={d.img}
                name={d.dishName}
                price={d.price}
                dishId={d.dishId}
                setTheId={()=>{
                  context.changeTheId(d.dishId)               
                }}
                hover={() => {
                  setId(d.dishId)
                    setTotal(parseInt(d.price));
                    setDishTotal((dishTotal) => [
                      ...dishTotal,
                      parseInt(d.price)
                    ]);
                    setName(d.dishName);
                    setPrice(d.price);
                    setImg(d.img)
               
                }}
                Dec={() => {
                  deleteItem(-1);
                  setDishTotal(dishTotal.splice(0,1));
                }}
                Inc={() => {
                  setTotal(parseInt(d.price));
                  setDishTotal((dishTotal) => [
                    ...dishTotal,
                    parseInt(d.price)
                  ]);
         
                }}
              />
              ))
            )}
          </div>
        ))
      );
    }
  };

  return <div>{renderDishes()}</div>;
};

export default Dishcont;
