import React, { useContext, useState, useRef, useEffect} from "react";
import Header from "./head";
import Dishcont from "./dishes/dishCont";
import Total from "./total";
import Appcontext from "../../context/AppContext";
import Model from "./model";
import Axios from "axios";
import LoadingOverlay from "react-loading-overlay";




const Menu = ({match,history}) => {
  const context = useContext(Appcontext);

  const [model, setModel] = useState(false);
  const [dishes,setDishs] = useState(null)
  const [category,setCategory] = useState(null)
  const [loading,setLoading] = useState(false)

  
  useEffect(()=>{
    Axios
    .get(`http://localhost:5000/resturo-07/europe-west1/api/hotel/${match.params.hotelid}`)
    .then((doc)=>{
      context.setAdminPage(doc.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[match.params.hotelid])
  console.log(context.AdminPage)
   useEffect(()=>{
  if(!context.table){
    setLoading(true)
    Axios.get( `http://localhost:5000/resturo-07/europe-west1/api/hotel/${match.params.hotelid}/gategory`)

  .then((doc)=>{
    setCategory(doc.data.gategory)
  })
  .catch((err)=>{
    console.log(err)
    setLoading(false)
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
      setLoading(false)
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
      <Header makempty={()=>{
        context.deletAlldishId()
        context.deleteAllDish()
        context.deleteAllOrder()
      }}
      resturantName={context.AdminPage.user ? context.AdminPage.user.resturant : null  }
      />
      <LoadingOverlay
      active={loading ? true : false}
      spinner
      text="Loading your dishes..."
      >
      <div className="main-dishes">
      {context.dish !== [] ? <Dishcont   /> : <h1>Don't have any dish</h1> }
      </div>
      </LoadingOverlay>
      <Model
        model={model}
        wraaperRef={wrapperRef}
        click={() => {
          setModel(false);
        }}
        cat={category}
        dishes={dishes}
      />
     { context.Collapse ? 
      <button
        className="menu-Button"
        onClick={() => {
          setModel(true);
        }}
      >
        menu
      </button>
    :
    null
    }
      {context.total.length === 0 ? null : <Total table={match.params.table} hotelid={match.params.hotelid} history={history} />}
    </div>
  );
};

export default Menu;
