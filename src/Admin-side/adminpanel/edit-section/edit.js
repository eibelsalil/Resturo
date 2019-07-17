import React, { useState,useContext } from "react";
import DishEditing from "./dishEditing/dishEditing";
import EditHeader from "./editHeader";
import "./edit.css";
import Addnew from "./Add New dish/Add new";
import AppContext from "../../../context/AppContext"


const Edit = () => {
  const [nav, navOn] = useState(false);

  const context = useContext(AppContext)
  
  return (
    <div className="edit-full">
      <EditHeader
        nav={nav}
        navoff={() => {
          navOn(false);
        }}
        NAVon={() => {
          navOn(true);
          context.setAdminPage("list")
        }}
      />
      {!nav ? (
        <div className="edit-cont">
                <DishEditing />
        </div>
      ) : (
        <Addnew  Nav={()=>{
          setTimeout(()=>{
            navOn(false)
          },4000)
          
        }}/>
      )}
    </div>
  );
};

export default Edit;
