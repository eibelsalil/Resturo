import React from "react";
import "./addNew.css";
import UploadImg from "./upload";
import UploadIcon from "../../../../Asset/upload.png"
import VegOption from "./vegOption";
import PriceEdit from "./piceEdit";
import GategorySelection from "./gategorySelction";

const Addnew = ({name}) => {
  return (
    <div className="New-cont">
      <p className="ItemName-title">Item name</p>
      <input type="text" className="intemName-input" />
      <UploadImg upload={UploadIcon} buttonname={"UPLOAD"} />
      <VegOption />
      <PriceEdit />
      <GategorySelection />
    </div>
  );
};

export default Addnew;
