import React, { useEffect, useState, useContext } from "react";
import "../Add New dish/addNew.css";
import VegOption from "../Add New dish/vegOption";
import UploadImg from "../Add New dish/upload";
import PriceEdit from "../Add New dish/piceEdit";
import GategorySelection from "../Add New dish/gategorySelction";
import BillingHeadr from "../dishEditing/billing/billingHeadr";
import Firebase from "firebase";
import AppContext from "../../../../context/AppContext";
import Axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import useForm from "../../edit-section/Add New dish/Form";

const EditDish = ({ history }) => {
  let user = Firebase.auth().currentUser.uid;
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formValue, setValue] = useState(null);
  const [img, setimg] = useState(null);
  const [linked, setlineker] = useState(null);
  const [nameValue, setnameValue] = useState(null);
  const [PriceValue, setpriceValue] = useState(null);
  const [descriptionValue, setDiscriptionValue] = useState(null);
  const { values, handelChange, handelSubmit } = useForm(getValue);
  const context = useContext(AppContext);
  function getValue() {
    setValue(values);
     if(formValue){
      setLoading(true);
      Axios.put(
        `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/dishes/dish/${
          context.dishId[1]
        }`,
        formValue
      )
      .then(()=>{
        setLoading(false);
        history.push("/adminPanel/edit");
      })
     }

     if (img) {
      setLoading(true);
      Axios.delete(
        `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/dishes/img/${
          context.dishId[1]
        }`
      ).then(() => {
        Axios.put(
          `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/dishes/${
            context.dishId[1]
          }`,
          linked
        ).then(()=>{
          setLoading(false);
          history.push("/adminPanel/edit");
        })
      });
    }
  }
  console.log(context.dishId)
  useEffect(() => {
    setLoading(true);
    Axios.get(
      `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/dishes/dish/${
        context.dishId[1]
      }`
    )
      .then((doc) => {
        setDish(doc.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, context.dishId]);


  return (
    <div className="New-cont">
      <BillingHeadr name={"Edit Dish"} />
      <LoadingOverlay
        active={loading ? true : false}
        spinner
        text="Loading your content..."
      >
        {dish ? (
          <React.Fragment>
            <form onSubmit={handelSubmit}>
              <p className="ItemName-title">Item name</p>
              {nameValue !== null ? (
                <input
                  type="text"
                  className="intemName-input"
                  name="dishName"
                  onChange={handelChange}
                />
              ) : (
                <input
                  type="text"
                  value={dish.dishName}
                  className="intemName-input"
                  name="dishName"
                  onChange={(e) => {
                    setnameValue(e.target.value);
                  }}
                />
              )}
              <UploadImg
                upload={!img ? dish.img : img}
                buttonname={"CHANGE"}
                update={(e) => {
                  setimg(URL.createObjectURL(e.target.files[0]));
                  let image = e.target.files[0];
                  const data = new FormData();
                  data.append("image", image, image.name);
                  setlineker(data);
                }}
                img={dish.img}
              />
              <VegOption value={dish.veg} vegChange={handelChange} />
              {PriceValue !== null ? (
                <PriceEdit pricevalue={handelChange} taxvalue={handelChange} />
              ) : (
                <PriceEdit
                  itemPrice={dish.price}
                  itemTax={17}
                  pricevalue={(e) => {
                    setpriceValue(e.target.value);
                  }}
                />
              )}
              {descriptionValue !== null ? (
                <GategorySelection
                  setGategory={handelChange}
                  setDiscription={handelChange}
                />
              ) : (
                <GategorySelection
                  discrip={dish.description}
                  setGategory={handelChange}
                  setDiscription={(e) => {
                    setDiscriptionValue(e.target.value);
                  }}
                />
              )}
              <div className="twoButtons">
                <button className="delete-btn">Delete</button>
                <button className="saveEdit-btn" type="submit">
                  save changes
                </button>
              </div>
            </form>
          </React.Fragment>
        ) : null}
      </LoadingOverlay>
    </div>
  );
};

export default EditDish;
