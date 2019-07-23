import React, { useState, useEffect } from "react";
import "../../../Client-side/menu/Menu.css";
import firebase from "firebase";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import Pen from "../../../Asset/edit-pen.png";
import Confirm from "../../../Asset/confirm.png";
import {Link} from "react-router-dom"
const Settings = ({ wraaperRef, model, click, logout }) => {
  let user = firebase.auth().currentUser.uid;
  const [info, setInfo] = useState(null);
  const [update, setUpdate] = useState("");
  const [event, setEvent] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}`)
      .then((doc) => {
        setInfo(doc.data);
      });
  }, [user]);
  const handelChange = (e) => {
    setEvent({ [e.target.name]: e.target.value });
  };

  const Updateuser = () => {
    setSpinner(true);
    axios
      .put(
        `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}`,
        event
      )
      .then((doc) => {
        axios
        .get(`http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}`)
        .then((doc) => {
          setInfo(doc.data);
        });
      })
      .then(()=>{
        setSpinner(false);
        setUpdate("")
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoadingOverlay active={!info ? true : false} spinner>
      <div className={model ? "model" : "modelfalse"}>
        <div className="model-content-admin" ref={wraaperRef}>
      
          <LoadingOverlay active={spinner ? true : false} spinner>
            {info ? (
              <div className="model-text">
                <div className="hotelName">
                  <p>Hotel name</p>

                  <div className="info-content">
                    {update === "Name" ? (
                      <React.Fragment>
                        <input
                          type="text"
                          name="Hotelname"
                          placeholder={info.user.Hotelname}
                          onChange={(e) => {
                            handelChange(e);
                          }}
                        />
                        <button
                          onClick={() => {
                      
                            Updateuser();
                          }}
                        >
                          <img src={Confirm} alt="confirm" />
                        </button>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <p>
                          {info.user.Hotelname === ""
                            ? "empty"
                            : info.user.Hotelname}
                        </p>
                        <img
                          src={Pen}
                          onClick={() => {
                            setUpdate("Name");
                          }}
                          alt="pen"
                        />
                      </React.Fragment>
                    )}
                  </div>
                </div>
                <div className="hotelemail">
                  <p>Hotel email</p>
                  <div className="info-content">
                    {update === info.user.hotelEmail ? (
                      <React.Fragment>
                        <input
                          type="text"
                          name="hotelEmail"
                          placeholder={info.user.hotelEmail}
                          onChange={(e) => {
                            handelChange(e);
                          }}
                        />
                        <button
                          onClick={() => {
                    
                            Updateuser();
                          }}
                        >
                          <img src={Confirm} alt="confirm" />
                        </button>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <p>
                          {info.user.hotelEmail === ""
                            ? "empty"
                            : info.user.hotelEmail}
                        </p>
                        <img
                          src={Pen}
                          onClick={() => {
                            setUpdate(info.user.hotelEmail);
                          }}
                          alt="pen"
                        />
                      </React.Fragment>
                    )}
                  </div>
                </div>
                <div className="Hotellocation">
                  <p>Hotel Location</p>
                  <div className="info-content">
                    {update === "location" ? (
                      <React.Fragment>
                        <input
                          type="text"
                          name="location"
                          placeholder={info.user.location}
                          onChange={(e) => {
                            handelChange(e);
                          }}
                        />
                        <button
                          onClick={() => {
                        
                            Updateuser();
                          }}
                        >
                          <img src={Confirm} alt="confirm" />
                        </button>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <p>
                          {info.user.location === ""
                            ? "empty"
                            : info.user.location}
                        </p>
                        <img
                          src={Pen}
                          onClick={() => {
                            setUpdate("location");
                          }}
                          alt="pen"
                        />
                      </React.Fragment>
                    )}
                  </div>
                </div>
                <div className="Resturantname">
                  <p>Resturant name</p>
                  <div className="info-content">
                    {update === "resturant" ? (
                      <React.Fragment>
                        <input
                          type="text"
                          name="resturant"
                          placeholder={info.user.resturant}
                          onChange={(e) => {
                            handelChange(e);
                          }}
                        />
                        <button
                          onClick={() => {
                         
                            Updateuser();
                          }}
                        >
                          <img src={Confirm} alt="confirm" />
                        </button>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <p>
                          {info.user.resturant === ""
                            ? "empty"
                            : info.user.resturant}
                        </p>
                        <img
                          src={Pen}
                          onClick={() => {
                            setUpdate("resturant");
                          }}
                          alt="pen"
                        />
                      </React.Fragment>
                    )}
                  </div>
                </div>
                <div className="Resturantnumber">
                  <p>tables numbers</p>
                  <div className="info-content">
                    {update === "tablesnumber" ? (
                      <React.Fragment>
                        <input
                          type="text"
                          name="tablesnumber"
                          placeholder={info.user.tablesnumber}
                          onChange={(e) => {
                            handelChange(e);
                          }}
                        />
                        <button
                          onClick={() => {
                      
                            Updateuser();
                          }}
                        >
                          <img src={Confirm} alt="confirm" />
                        </button>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <p>
                          {info.user.hotelEmail === ""
                            ? "empty"
                            : info.user.tablesnumber}
                        </p>
                        <img
                          src={Pen}
                          onClick={() => {
                            setUpdate("tablesnumber");
                          }}
                          alt="pen"
                        />
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
            <Link to="/adminPanel/table">Add table Qrcode</Link>
          </LoadingOverlay>
          <button className="logout" onClick={logout}>logout</button>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default Settings;
