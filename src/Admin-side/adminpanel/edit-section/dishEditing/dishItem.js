import React,{useState,useEffect} from "react";
import ToggleButton from "react-toggle-button";
import veg from "../../../../Asset/veg.jpg";
import { Link } from "react-router-dom";
import Axios from "axios"
import Loader from "react-loader-spinner"



const DishItem = ({ click, name, dishId,user,LiveDish }) => {
  const [toggle, setToggle] = useState(LiveDish)
  const [loading,setLoading] = useState(false)
  const [live,setLive] = useState(false)

    const updateLive = () =>{
      setLoading(true)
      Axios.put(
        `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/dishes/dish/${
          dishId
        }`,{"Live": toggle}
      )
      .then(()=>{
        setLoading(false)
      })
    }

useEffect(()=>{
  if(live){
    updateLive()
  }
},[live])

  

  
  return (
   <React.Fragment>
      <div className="editDishContent">
      <div className="dish-info">
        <img src={veg} alt="veg" className="veg-img" />
        <p className="nameTitle">{name}</p>
      </div>
      <div className="toggleButton">
      {  !loading ?
        <ToggleButton
          value={toggle}
          inactiveLabel={""}
          activeLabel={""}
          onToggle={()=>{
            setToggle(!toggle)
            setLive(true)
          }}
          colors={{
            activeThumb: {
              base: "#3BDF81"
            },
            active: {
              base: "#CECECE",
              hover: "#CECECE"
            }
          }}
          trackStyle={{
            height: "10px"
          }}
          thumbStyle={{
            height: "20px"
          }}
        />
       : 
       <Loader 
       type="Oval"
       color="#707070"
       height="30"	
       width="30"
       />
      }
      </div>
      <Link to="/adminPanel/editDish">
        <p onClick={click} className="editLink">
          Edit
        </p>
      </Link>
    </div>
 
    </React.Fragment>
  );
};

export default DishItem;
