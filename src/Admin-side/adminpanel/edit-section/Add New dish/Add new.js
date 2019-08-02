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
import LoadingOverlay from "react-loading-overlay";

const Addnew = ({ Nav }) => {
  let user = firebase.auth().currentUser.uid;
  const { values, handelChange, handelSubmit } = useForm(getValue);
  const [formValue, setValue] = useState(null);
  const [spiner, setSpinner] = useState(false);
  const [img, setimg] = useState(null);
  const [linker, setLinker] = useState(null);
  const [LastCreated, setLast] = useState(null);

  function getValue() {
    setValue(values);
  }

  useEffect(() => {
    if (formValue) {
      setSpinner(true);
      axios
        .post(
          `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/dishes`,
          formValue
        )
        .then(() => {
          axios
            .get(
              `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/dishes`
            )
            .then((doc) => {
              setLast(doc.data);
            });
        })

        .catch((err) => {
          console.log(err);
          setSpinner(false);
        });
    }
  }, [formValue, user]);

  useEffect(() => {
    if (LastCreated) {
      axios
        .put(
          `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/dishes/${
            LastCreated[0].dishId
          }`,
          linker
        )
        .then((doc) => {
          setSpinner(false);
           Nav()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [LastCreated, linker, user,Nav]);

  return (
    <div className="New-cont">
      <form onSubmit={handelSubmit} className="forrrm">

          <p className="ItemName-title">Item name</p>
          <input
            type="text"
            className="intemName-input"
            name="dishName"
            onChange={handelChange}
          />
          <UploadImg
            upload={img ? img : UploadIcon}
            update={(e) => {
              setimg(URL.createObjectURL(e.target.files[0]));
              let image = e.target.files[0];
              const data = new FormData();
              data.append("image", image, image.name);
              setLinker(data);
            }}
            img={img}
          />
          <VegOption vegChange={handelChange} NonVegChange={handelChange} />
          <PriceEdit pricevalue={handelChange} taxvalue={handelChange} />
          <GategorySelection
            setDiscription={handelChange}
            setGategory={handelChange}
          />
          <div className="twoButtons">
            <button
              className="delete-btn"
              onClick={() => {
                Nav()
              }}
            >
              Cancel
            </button>
            <button className="saveEdit-btn" type="submit">
              Next
            </button>
          </div>
      </form>
    </div>
  );
};

export default Addnew;
