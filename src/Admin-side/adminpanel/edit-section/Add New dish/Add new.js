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
  const [creatState, setCreate] = useState(false);
  const [spiner, setSpinner] = useState(false);
  const [img, setimg] = useState(null);
  const [linker, setLinker] = useState(null);
  const [LastCreated, setLast] = useState(null);

  function getValue() {
    setValue(values);
  }

  if (LastCreated) {
    console.log(LastCreated[0].dishId);
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
        .then((doc) => {
          setSpinner(false);
          setCreate(true);
        })
        .catch((err) => {
          console.log(err);
          setSpinner(false);
        });
    }
  }, [formValue, user]);

  const uploadImg = () => {
    setSpinner(true);
    axios
      .put(
        `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/dishes/${
          LastCreated[0].dishId
        }`,
        linker
      )
      .then(() => {
        setSpinner(false);
        Nav();
      })
      .catch((err) => {
        setSpinner(false);
        console.log(err);
      });
  };

  return (
    <div className="New-cont">
      {!creatState ? (
        <form onSubmit={handelSubmit}>
          <LoadingOverlay
            active={spiner ? true : false}
            spinner
            text="Creating the dish..."
          >
            <p className="ItemName-title">Item name</p>
            <input
              type="text"
              className="intemName-input"
              name="dishName"
              onChange={handelChange}
            />

            <VegOption vegChange={handelChange} NonVegChange={handelChange} />
            <PriceEdit pricevalue={handelChange} taxvalue={handelChange} />
            <button type="submit">submit</button>
            <GategorySelection
              setDiscription={handelChange}
              setGategory={handelChange}
            />
          </LoadingOverlay>
        </form>
      ) : (
        <UploadImg
          upload={img ? img : UploadIcon}
          buttonname={"UPLOAD"}
          update={(e) => {
            setimg(URL.createObjectURL(e.target.files[0]));
            let image = e.target.files[0];
            const data = new FormData();
            data.append("image", image, image.name);
            setLinker(data);
          }}
          img={img}
          click={() => {
            uploadImg();
          }}
          spiner={spiner}
        />
      )}
    </div>
  );
};

export default Addnew;
