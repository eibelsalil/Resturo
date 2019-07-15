import React, { useState, useEffect } from "react";
import "./addNew.css";
import UploadImg from "./upload";
import UploadIcon from "../../../../Asset/upload.png";
import VegOption from "./vegOption";
import PriceEdit from "./piceEdit";
import GategorySelection from "./gategorySelction";
import useForm from "./Form";
import axios from "axios";
import firebase from "firebase";

const Addnew = ({ Nav }) => {
  let user = firebase.auth().currentUser.uid;
  const { values, handelChange, handelSubmit, restvalue } = useForm(getValue);
  const [formValue, setValue] = useState(null);

  function getValue() {
    setValue(values);
  }

  useEffect(() => {
    if (formValue) {
      axios
        .post(
          `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/dishes`,
          formValue
        )
        .then((doc) => {
          alert("dish created succsfully");
        })
        .then(() => {
          restvalue();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
 
  return (
    <div className="New-cont">
      <form onSubmit={handelSubmit}>
        <p className="ItemName-title">Item name</p>
        <input
          type="text"
          className="intemName-input"
          name="dishName"
          onChange={handelChange}
        />
        <UploadImg
          upload={UploadIcon}
          buttonname={"UPLOAD"}
          update={handelChange}
        />
        <VegOption vegChange={handelChange} NonVegChange={handelChange} />
        <PriceEdit pricevalue={handelChange} taxvalue={handelChange} />
        <button type="submit" onClick={Nav}>
          submit
        </button>
        <GategorySelection setDiscription={handelChange} setGategory={handelChange} />
      </form>
    </div>
  );
};

export default Addnew;
