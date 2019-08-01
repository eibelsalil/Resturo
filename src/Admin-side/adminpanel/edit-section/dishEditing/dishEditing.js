import React, { useEffect, useState, useContext } from "react";
import "../edit.css";
import DishItem from "./dishItem";
import Axios from "axios";
import firebase from "firebase";
import LoadingOverlay from "react-loading-overlay";
import uuid from "uuid";
import AppContext from "../../../../context/AppContext";

const DishEditing = () => {
  let user = firebase.auth().currentUser.uid;
  const [dishes, setDishes] = useState([]);
  const [category, setGategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const context = useContext(AppContext);
  useEffect(() => {
    if(context.dish.length === 0){
      setLoading(true);
      Axios.get(
        `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/gategory`
      )
        .then((doc) => {
          setGategory(doc.data.gategory);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
  }, [user,context.dish]);
  useEffect(() => {
    if (category !== []) {
        Axios.get(
          `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/dishes/all`
        )
          .then((doc) => {
           let filtred = category.map((cat)=>{
             let f = doc.data.filter(({gategory})=> gategory === cat)
             return {[cat]: f}
           })
            setDishes((dishes) => [...filtred]);
         
          })
          .then(() => {
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          })
    }
  }, [user, category]);

 useEffect(()=>{
   if(dishes.length > 0){
    context.getDish(dishes)
   }
 },[dishes])



  const renderDishes = () => {
    return context.dish.map((dish) => (
        Object.values(dish).map((item) =>
          <div className="itemName" key={uuid()}>
          <div className="Gatogery" >
          <p>{Object.keys(item)}</p>
        </div>
          {Object.values(item).map((t)=>(
            t.map((d) => (
              <DishItem
                name={d.dishName}
                key={d.dishId}
                click={() => {
                  context.setDishId(d.dishId)
                }}
                dishId={d.dishId}
                user={user}
                LiveDish={d.Live}
              />
            ))
          ))}
          </div>
        )

    ));
  };

  return (

      <LoadingOverlay
        active={loading ? true : false}
        spinner
        text="Loading your content..."
      >
     {renderDishes()}
      </LoadingOverlay>

  );
};

export default DishEditing;
