import React, { useContext, useState, useRef, useEffect,useMemo } from "react";
import Header from "./head";
import Dishcont from "./dishes/dishCont";
import Total from "./total";
import Appcontext from "../../context/AppContext";
import Model from "./model";
import Axios from "axios";
import LoadingOverlay from "react-loading-overlay";




const Menu = ({match}) => {
  const context = useContext(Appcontext);

  const [model, setModel] = useState(false);
  const [dishes,setDishs] = useState(null)
  const [category,setCategory] = useState(null)
  const [loading,setLoading] = useState(false)

  

   useEffect(()=>{
  if(!context.table){
    setLoading(true)
    Axios.get( `http://localhost:5000/resturo-07/europe-west1/api/hotel/${match.params.hotelid}/gategory`)

  .then((doc)=>{
    setCategory(doc.data.gategory)
  })
  .catch((err)=>{
    console.log(err)
  })
  }
   },[match.params.hotelid])

useEffect(()=>{
  if(!context.table){
    Axios.get(`http://localhost:5000/resturo-07/europe-west1/api/hotel/${match.params.hotelid}/LiveDishes`)
    .then((data)=>{
     setDishs(data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
},[match.params.hotelid])
 
useEffect(()=>{
  if(dishes && category){
   let filtered =  category.map((cat)=>{
        let f = dishes.filter(({gategory}) => gategory === cat)
        return {[cat]:f}
    })

      context.getDish(filtered) 
   setLoading(false)
}
},[category,dishes])


useEffect(()=>{
  return () => {
    context.setTable(match.params.table)
}
},[match.params.table])

console.log(category)

  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModel(false);
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }



  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div>
      <Header />
      <LoadingOverlay
      active={loading ? true : false}
      spinner
      text="Loading your dishes..."
      >
      <div className="main-dishes">
      {context.dish !== [] ? <Dishcont  categoryId={"Bestsellers"} /> : <h1>Don't have any dish</h1> }
      </div>
      </LoadingOverlay>
      <Model
        model={model}
        wraaperRef={wrapperRef}
        click={() => {
          setModel(false);
        }}
      />
      <button
        className="menu-Button"
        onClick={() => {
          setModel(true);
        }}
      >
        menu
      </button>

      {context.total.length === 0 ? null : <Total table={match.params.table} hotelid={match.params.hotelid} />}
    </div>
  );
};

export default Menu;
