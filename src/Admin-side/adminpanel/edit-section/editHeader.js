import React, { useState } from "react";
import "../header.js/head";


const EditHeader = () => {
  const [nav, navOn] = useState(false);
  return (
    <div>
      <div className="admin-header">
        <p
          className={nav ? "lave-off" : "live"}
          onClick={() => {
            navOn(false);
          }}
        >
          MENU
        </p>
        <p
          className={nav ? "Completed-On" : "Completed"}
          onClick={() => {
            navOn(true)
          }}
        >
         Add NEW
        </p>
      </div>
      <div className={nav ? "header-line-COMPLETED" : "header-line"} />
    </div>
  );
};

export default EditHeader;