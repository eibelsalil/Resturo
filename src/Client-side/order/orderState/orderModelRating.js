import React,{useState,useContext,useEffect,useCallback} from 'react'
import Rating from "react-rating"
import FirstStart from "../../../Asset/starting-star.png"
import LastStart from "../../../Asset/end-start.png"
import Smile from "../../../Asset/smileyRating.png"
import AppContext from '../../../context/AppContext';



 const Ratingcont = ({id,img,name,next}) =>{
  const [rating,setRating] = useState(0)
  const [RatingObj,setRatingObj] = useState([])
  const [fullObj,setFullRequest] = useState([])
  const [IId,setIID] = useState()
  const context = useContext(AppContext)
 useEffect(()=>{
  context.setRatingId(id)
 },[IId])
  useEffect(()=>{
    context.IncRating(rating)
  },[rating])

  useEffect(()=>{
    if(context.RatingId !== "" || context.RatingId !== undefined){
      setRatingObj(RatingObj =>([{"id":context.RatingId,"count":context.RatingCount}]))
    } 
  },[context.RatingId])
  useEffect(()=>{
    setFullRequest((fullObj => ([...fullObj,...RatingObj])))
},[context.RatingId])
  
 useEffect(()=>{
   context.setRatingDish(fullObj)
 },[fullObj])



  return(
    <div key={id} className="dishContRating">
    <div className="dishInfoRating">
     <img src={img} className="dish" alt={name}/>
     <p>{name}</p>
     </div>
     <div
     className="rating-cont"
     onPointerDown={()=>{
    
      setIID(id)
     }}
     >
     <Rating
     emptySymbol={<img src={FirstStart} alt="empty star" className="rating-icons" />}
      fullSymbol={<img src={LastStart} alt="full star" className="rating-icons" />}
       initialRating={rating}
       onClick={(value)=>{
        setRating(value)  
       }}
     />
     </div>
    </div>
  )
 }

const OrderRatingModel = ({refwrapper,model,orderdishes,counter,ClickRating,hotelid}) =>{
 
    const context = useContext(AppContext)
      useEffect(()=>{
        if(context.RatingId === "123"){
          ClickRating()
        }
      },[context.RatingId])

    return(
        <div className={!model && counter > 0 ?"order-mode" : "orderModeFalse"} >
        <div className="orderModel-contect-Rating" ref={refwrapper} >
        <img src={Smile} alt="smiley" className="smiley-Rating" />
         {orderdishes.map((dish)=>(
        <Ratingcont id={dish.id} img={dish.img} name={dish.name} key={dish.id}  />
         ))}
         <button onClick={()=>{
          context.setRatingId("123")
         }}>DONE</button>
        </div>
      </div>
    )
}

export default OrderRatingModel