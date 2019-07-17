import React, { useEffect, useState,useContext } from "react";
import "../edit.css";
import DishItem from "./dishItem";
import Axios from "axios";
import firebase from "firebase";
import LoadingOverlay from "react-loading-overlay";
import uuid from "uuid";
import AppContext from "../../../../context/AppContext"

const DishEditing = ({ gategory }) => {
  let user = firebase.auth().currentUser.uid;
  const [dishes, setDishes] = useState([]);
  const [category, setGategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(AppContext)
  useEffect(() => {
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
  }, [user]);
  useEffect(() => {
    if (category !== []) {
      category.map((cat) =>
        Axios.get(
          `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/dishes/${cat}`
        )
          .then((doc) => {
            setDishes((dishes) => [...dishes, { [cat]: doc.data }]);
          })
          .then(() => {
            setGategory([]);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          })
      );
    }
  }, [user, category]);


  const renderDishes = () => {
    return dishes.map((dish) => (
      <div className="itemName" key={uuid()}>
        <div className="Gatogery">
          <p>{Object.keys(dish)}</p>
        </div>
        {Object.values(dish).map((item) =>
          item.map((d) =>( 
              <DishItem name={d.dishName} key={d.dishId} click={()=>{
                  context.setAdminPage("edit")   
              }} />
          ))
          
        )}
      </div>
    ));
  };

  return (
    <div>
      <LoadingOverlay
        active={loading ? true : false}
        spinner
        text="Loading your content..."
      >
        {renderDishes()}
      </LoadingOverlay>
    </div>
  );
};

export default DishEditing;
