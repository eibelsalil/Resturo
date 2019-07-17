import React from "react";
import "../Add New dish/addNew.css";
import VegOption from "../Add New dish/vegOption";
import UploadImg from "../Add New dish/upload";
import PriceEdit from "../Add New dish/piceEdit";
import GategorySelection from "../Add New dish/gategorySelction";
import Fried from "../../../../Asset/fried.png";
import BillingHeadr from "../dishEditing/billing/billingHeadr";

const EditDish = () => {

  
  return (
    <div className="New-cont">
<BillingHeadr name={"Edit Dish"} />
      <p className="ItemName-title">Item name</p>
      <input type="text" className="intemName-input" value="fried rice" />
      <UploadImg upload={Fried} buttonname={"CHANGE"} />
      <VegOption />
      <PriceEdit itemPrice={60} itemTax={7} />
      <GategorySelection />
      <div className="twoButtons">
        <button className="delete-btn">Delete</button>
        <button className="saveEdit-btn">save changes</button>
      </div>
    </div>
  );
};

export default EditDish;
