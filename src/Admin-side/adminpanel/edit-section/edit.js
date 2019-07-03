import React from "react";
import DishEditing from "./dishEditing/dishEditing";
import EditHeader from "./editHeader";
import "./edit.css";

const Edit = () => {
  return (
    <div className="edit-full">
      <EditHeader />
    
      <div className="edit-cont">
        {Array.from({ length: 4 }).map(() => (
          <DishEditing gategory="starter" />
        ))}
      </div>
    
    </div>
  );
};

export default Edit;
