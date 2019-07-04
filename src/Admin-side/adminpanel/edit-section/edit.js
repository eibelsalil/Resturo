import React,{useState} from "react";
import DishEditing from "./dishEditing/dishEditing";
import EditHeader from "./editHeader";
import uuid from "uuid";
import "./edit.css";
import Addnew from "./Add New dish/Add new";

const Edit = () => {
  const [nav, navOn] = useState(false);
  return (
    <div className="edit-full">
      <EditHeader
        nav={nav}
        navoff={() => {
          navOn(false);
        }}
        NAVon={()=>{
          navOn(true)
        }}
      />
  {  !nav 
    ?
      <div className="edit-cont">
        {Array.from({ length: 4 }).map(() => (
          <DishEditing gategory="starter" key={uuid()} />
        ))}
      </div>
      :
      <Addnew />
    }
    </div>
  );
};

export default Edit;
