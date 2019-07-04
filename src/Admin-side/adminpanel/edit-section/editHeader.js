import React from "react";
import "../header.js/head";


const EditHeader = ({nav,navoff,NAVon}) => {

  return (
    <div>
      <div className="admin-header">
        <p
          className={nav ? "lave-off" : "live"}
          onClick={navoff}
        >
          MENU
        </p>
        <p
          className={nav ? "Completed-On" : "Completed"}
          onClick={NAVon}
        >
         Add NEW
        </p>
      </div>
      <div className={nav ? "header-line-COMPLETED" : "header-line"} />
    </div>
  );
};

export default EditHeader;