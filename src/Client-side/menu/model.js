import React,{useState,useEffect,useContext} from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import uuid from "uuid"
import AppContext from "../../context/AppContext"

const Model = ({ wraaperRef, model, click,cat,dishes }) => {
  const [category,setCategory] = useState([])
  const context = useContext(AppContext)
  useEffect(()=>{

      if(dishes&&cat){
        let filtered =  cat.map((cat)=>{
          let f = dishes.filter(({gategory}) => gategory === cat)
          return {[cat]:f.length}
      })
      setCategory([...filtered])
    }

  },[cat,dishes])


  
    const renderCat = () =>{
      if(category){
        return category.map((item)=>(
          <div className="coontent-line" key={uuid()}>
          <p className="content">
            <Link to={Object.keys(item).toString()} onClick={click} smooth={true} >
              {Object.keys(item)}
            </Link>{" "}
          </p>
          <p className="content-N">{Object.values(item)}</p>
        </div>
        ))
      }
    }
  return (
    <div className={model ? "model" : "modelfalse"}>
      <div className="model-content" ref={wraaperRef}>
         {renderCat()}
      </div>
    </div>
  );
};

export default Model;
