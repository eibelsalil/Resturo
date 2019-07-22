import React, { useState } from "react";
import DishEditing from "./dishEditing/dishEditing";
import EditHeader from "./editHeader";
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
        NAVon={() => {
          navOn(true);
        }}
      />
      {!nav ? (
        <div className="edit-cont">
          <DishEditing />
        </div>
      ) : (
        <Addnew
        Nav={() => {
          setTimeout(() => {
            navOn(false);
          }, 4000);
        }}
        />
      )}
    </div>
  );
};

export default Edit;
