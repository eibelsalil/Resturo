import React,{useContext,useState,useEffect} from "react";
import "./dishes.css";
import Veg from "../../../Asset/veg.jpg";
import Non_veg from "../../../Asset/non-veg.png"
import Dish from "./dish";
import AppContext from "../../../context/AppContext"
import { add } from "../../order/orderHelper";


const Dishcont = ({ categoryId,  }) => {
  const [id,setId] = useState()
  const [count, incCount] = useState(0);
  const [name,setName] = useState()
  const[price,setPrice] = useState()
  const [chosenDish,setChosen] = useState([])
  const [dishTotal,setDishTotal] = useState([])
  const context = useContext(AppContext)
  let total = context.total
   const setchosenDishes = () =>{
    if(total !== 0 && count !== 0){
      setChosen((chosenDish =>([...chosenDish,{"name":name,"count":count,"price":price,"total":add(dishTotal),"id": id}])))
    }

   }
    const setOrderDishes = () =>{
      if(chosenDish){
        context.addDish(chosenDish)
      }
    }
 useEffect(()=>{
   if(id){
     incCount(0)
     setchosenDishes()
     setDishTotal([])
   }
 },[id])


 useEffect(()=>{
   setOrderDishes()
 },[chosenDish])
 
 const Inc =() =>{
  incCount(count => count + 1)
}
const Dec =() =>{
  incCount(count => count - 1)
}
 

const setTotal = (x) => {
  return context.addPrice(x);
};
 
 
const deleteItem = (x) => {
  return context.deletPrice(x);
};

 
  const renderDishes = () =>{
    if(context.dish !== []){
     return context.dish.map((category)=>(
        category.map((dish,i)=>(
          <div className="dishCont" id={categoryId} key={i}>
          <p className="category">{Object.keys(dish)}</p>

      {   
        Object.values(dish).map((array)=>(
         array.map((d)=>(
          <Dish
          key={d.dishId}
          veg={d.veg === "veg" ? Veg : Non_veg}
          img={d.img}
          name={d.dishName}
          price={d.price}
          dishId={d.dishId}
          id={id}
          hover={()=>{
            setId(d.dishId)
          }}
          Dec={()=>{
            deleteItem(-1)
            Dec()
            setDishTotal(dishTotal.splice(dishTotal.length - 1,1))
          }}
          Inc={()=>{
            setTotal(parseInt(d.price))
            Inc()
            setDishTotal(dishTotal =>([...dishTotal,parseInt(d.price)]))
          }}
          AddClick={()=>{
            if(id=== d.dishId){
              setTotal(parseInt(d.price))
              Inc()
              setName(d.dishName)
              setPrice(d.price)
              setDishTotal(dishTotal =>([...dishTotal,parseInt(d.price)]))
            }
           
          }}
          count={count}
        />
         ))
        ))
        }
        </div>
        ))
      ))
    }
  }

  return (
   <div>
   {renderDishes()}
   </div>
  );
};

export default Dishcont;
