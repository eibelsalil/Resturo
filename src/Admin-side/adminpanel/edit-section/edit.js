import React, { useState,useContext } from "react";
import DishEditing from "./dishEditing/dishEditing";
import EditHeader from "./editHeader";
import uuid from "uuid";
import "./edit.css";
import Addnew from "./Add New dish/Add new";
import AppContext from "../../../context/AppContext"
import EditDish from "./edit dish/editDish";

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
          {
            context.AdminPage === "list" ?(
              Array.from({ length: 4 }).map(() => (
                <DishEditing gategory="starter" key={uuid()} />
              ))
            )
            :
            (
              <EditDish  />
            )
        
        
        }
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
