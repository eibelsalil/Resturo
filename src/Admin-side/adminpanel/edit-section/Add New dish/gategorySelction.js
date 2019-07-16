import React, { useState, useEffect } from "react";
import Axios from "axios";
import uuid from "uuid";
import LoadingOverlay from "react-loading-overlay";
import firebase from "firebase"

const GategorySelection = ({ setDiscription, setGategory }) => {
  const [gategory, addGategory] = useState(false);
  const [event, setEvent] = useState("");
  const [gate, Getgetfory] = useState(null);
  const [optionState, setOption] = useState("");
  const [loading,setLoading] = useState(false)

let user = firebase.auth().currentUser.uid
  useEffect(() => {
    setLoading(true)
    Axios.get(
      `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/${user}/gategory`
    )
      .then((doc) => {
        Getgetfory(doc.data.gategory);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);


  useEffect(() => {
   if(gate !== null){
      setOption(gate[0]);
   }
  }, [gate]);

  const setValues = (event) => {
    setOption(event.target.value);
  };
  const addGategorydb = () => {
    setLoading(true)
    Axios.put(
      `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/gategory`,
      event
    )
      .then(() => {
        Axios.get(
          `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/gategory`
        )
          .then((doc) => {
            Getgetfory(doc.data.gategory);
            setLoading(false)
          })
      })
      .catch((err) => {
        console.log(err + "err");
      });
  };
console.log(gate)
  return (
    <div className="GagtegorSel-cont">
      <p className="GategorySel-title">Item gategory</p>
      {!gategory ? (
        <LoadingOverlay
          active={loading ? true : false}
          spinner
          text="Loading your content..."
        >
          <div className="gete">
            <select
              className="GategorySel-options"
              name="gategory"
              onChange={(e) => {
                setGategory(e);
                setValues(e);
              }}
              value={optionState}
            >
            { gate !== null ? (
              gate.map((gategory) => (
                <option key={uuid()} value={gategory}>
                  {gategory}
                </option>
              ))
            ) : (
             <option>add gategory</option>
            )}
            </select>

            <button onClick={() => addGategory(true)}>+</button>
          </div>
        </LoadingOverlay>
      ) : (
        
        <div className="addgete">
          <input
            placeholder="add more gategory"
            name="gategory"
            type="text"
            onChange={(event) => {
              let name = event.target.name;
              let value = event.target.value;
              setEvent({ [name]: value });
            }}
          />
          <button
            onClick={() => {
              addGategorydb();
              setTimeout(() => {
                addGategory(false);
              }, 1500);
            }}
          >
            add Getegory
          </button>
        </div>
      )}
      <p className="itemDesciption">Item description</p>
      <textarea
        className="GategorySel-textarea"
        name="description"
        onChange={(e) => {
          setDiscription(e);
        }}
      />
    </div>
  );
};

export default GategorySelection;
