import React,{useState,useEffect} from "react";
import "./Menu.css";
import { Link } from "react-scroll";



const Model = ({ wraaperRef, model, click,cat,dishes }) => {
  const [category,setCategory] = useState([])

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
          <div className="coontent-line">
          <p className="content">
            <Link to="Bestsellers" onClick={click} smooth={true}>
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
