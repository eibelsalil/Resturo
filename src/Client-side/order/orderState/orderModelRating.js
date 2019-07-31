import React, { useState, useContext, useEffect } from "react";
import Rating from "react-rating";
import FirstStart from "../../../Asset/starting-star.png";
import LastStart from "../../../Asset/end-start.png";
import Smile from "../../../Asset/smileyRating.png";
import AppContext from "../../../context/AppContext";

const Ratingcont = ({ id, img, name, setId }) => {
  const [rating, setRating] = useState(0);
 const context = useContext(AppContext)
  useEffect(() => {
    context.IncRating(rating);
  }, [rating]);

  return (
    <div key={id} className="dishContRating">
      <div className="dishInfoRating">
        <img src={img} className="dish" alt={name} />
        <p>{name}</p>
      </div>
      <div className="rating-cont" >
        <Rating
          emptySymbol={
            <img src={FirstStart} alt="empty star" className="rating-icons" />
          }
          fullSymbol={
            <img src={LastStart} alt="full star" className="rating-icons" />
          }
          initialRating={rating}
          onClick={(value) => {
            setRating(value);
            setId()
          }}
        />
      </div>
    </div>
  );
};

const OrderRatingModel = ({
  refwrapper,
  model,
  orderdishes,
  counter,
  ClickRating,
}) => {

  const [RatingObj,setRatingObj] = useState([])
  const [IId,setIID] = useState()
  const context = useContext(AppContext);
  useEffect(() => {
    if (context.RatingId === "123") {
      context.setRatingDish(RatingObj)
      setTimeout(()=>{
        ClickRating();
      },1000)
    }
  }, [ClickRating, context.RatingId]);
 useEffect(()=>{
   orderdishes.map(({id})=>(
     setRatingObj(RatingObj=>  [...RatingObj,{id: id ,count: 0}])
   ))
 },[orderdishes])


 useEffect(()=>{
   if(RatingObj.length > 0){
     let index = RatingObj.findIndex(obj=> obj.id===IId)
     RatingObj[index].count = context.RatingCount
   }
 },[context.RatingCount])




  return (
    <div className={!model && counter > 0 ? "order-mode" : "orderModeFalse"}>
      <div className="orderModel-contect-Rating" ref={refwrapper}>
        <img src={Smile} alt="smiley" className="smiley-Rating" />
        {orderdishes.map((dish) => (
          <Ratingcont
            id={dish.id}
            img={dish.img}
            name={dish.name}
            key={dish.id}
            setId={()=>{
              setIID(dish.id)
            }}
          />
        ))}
        <button
          onClick={() => {
            context.setRatingId("123");
          }}
        >
          DONE
        </button>
      </div>
    </div>
  );
};

export default OrderRatingModel;
