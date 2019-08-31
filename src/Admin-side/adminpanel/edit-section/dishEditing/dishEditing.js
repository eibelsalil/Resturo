import React, { useEffect, useState, useContext } from "react";
import "../edit.css";
import DishItem from "./dishItem";
import Axios from "axios";
import firebase from "firebase";
import uuid from "uuid";
import AppContext from "../../../../context/AppContext";
import Loader from "../../adminsettings/Loader";

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
        `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/gategory`
      )
        .then((doc) => {
          setGategory(doc.data.gategory);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
  }, [user]);
  useEffect(() => {
    if (category !== []) {
        Axios.get(
          `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/dishes/all`
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
          <div className="itemName2" key={uuid()}>
          <div className="Gatogery" >
          <p>{Object.keys(item)}</p>
        </div>
          {Object.values(item).map((t)=>(
            t.map((d) => (
              <DishItem
                name={d.dishName}
                key={d.dishId}
                click={() => {
                  context.setAdminPage(d.dishId)
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

 <div className="EDITDDISH">
   {
     !loading ?
     renderDishes()
     :
     <Loader  />
   }

     </div>

  );
};

export default DishEditing;
