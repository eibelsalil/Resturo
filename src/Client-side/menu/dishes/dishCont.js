import React, { useContext, useState, useEffect} from "react";
import "./dishes.css";
import Veg from "../../../Asset/veg.jpg";
import Non_veg from "../../../Asset/non-veg.png";
import Dish from "./dish";
import AppContext from "../../../context/AppContext";
import _ from "lodash"


const Dishcont = ({ categoryId }) => {
  const [id, setId] = useState();
  const [dishTotal, setDishTotal] = useState([]);
  const [Obj,setObj] = useState([])
  const [dishes,setDishes] = useState([])
  const context = useContext(AppContext);


  const setOrderDishes = () => {
  let filtred = Obj.filter(({count})=>{
     return count !== undefined
  })
      context.addDish(filtred);    
  };

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
       Object.values(cat).map((two)=>(
         Object.values(two).map((three)=>(
          setDishes(dishes=>(_.flatten([...dishes,three])))
         ))

       ))
    ))
  }
},[context.dish])

useEffect(()=>{
  if(dishes.length > 0){
    dishes.map(({dishName,price,dishId,img,tax})=>(
      setObj(Obj=>[...Obj,({
          name: dishName,
          count: context.RatingCount,
          price: price,
          total: ((parseInt(price) + (parseInt(price) / parseInt(tax))) * context.RatingCount),
          id:dishId,
          img: img,
          tax: tax
      })])
    ))
  }
},[dishes])
 useEffect(()=>{
   if(Obj.length > 0){
   let indx = Obj.findIndex(dish=> dish.id === id)
  Obj[indx].count = context.RatingCount
  Obj[indx].total = Math.round((parseInt(Obj[indx].price) + parseInt(Obj[indx].price) * parseInt(Obj[indx].tax) / 100) * context.RatingCount)
   }
 },[context.RatingCount])
   console.log(Obj)
  const setTotal = (x) => {
    return context.addPrice(x);
  };

  const deleteItem = (x) => {
    return context.deletPrice(x);
  };

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
                DishTime={d.dishTime}
                DishRating={d.MainRating}
                discription={d.description}
                setTheId={()=>{ 
                  setId(d.dishId)            
                }}
                hover={() => {
                    setTotal(Math.round(parseInt(d.price) * (parseInt(d.price) * parseInt(d.tax) / 100)));
                    setDishTotal((dishTotal) => [
                      ...dishTotal,
                      parseInt(d.price)
                    ]);
                }}
                Dec={() => {
                  setId(d.dishId)
                  deleteItem(-1);
                  setDishTotal(dishTotal.splice(0,1));
                }}
                Inc={() => {
                  setId(d.dishId)
                  setTotal(Math.round(parseInt(d.price) * (parseInt(d.price) * parseInt(d.tax) / 100)));
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
