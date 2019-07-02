import React, { useState } from "react";
import "./head.css";

const AdminHeader = ({click,clickBack}) => {
  const [nav, navOn] = useState(false);
  return (
    <div>
      <div className="admin-header">
        <p
          className={nav ? "lave-off" : "live"}
          onClick={() => {
            navOn(false);
            clickBack();
          }}
        >
          LIVE
        </p>
        <p
          className={nav ? "Completed-On" : "Completed"}
          onClick={() => {
            navOn(true)
          click()
          }}
        >
          COMPLETED
        </p>
      </div>
      <div className={nav ? "header-line-COMPLETED" : "header-line"} />
    </div>
  );
};

export default AdminHeader;
