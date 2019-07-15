import React, { useState, useEffect } from "react";
import Axios from "axios";
import uuid from "uuid";
import LoadingOverlay from "react-loading-overlay";

const GategorySelection = ({ setDiscription, setGategory }) => {
  const [gategory, addGategory] = useState(false);
  const [event, setEvent] = useState("");
  const [gate, Getgetfory] = useState(null);
  const [optionState, setOption] = useState("");


  useEffect(() => {
    Axios.get(
      `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/W719nLXXgxSNptLZohmFHfZOGHt1/gategory`
    )
      .then((doc) => {
        Getgetfory(doc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    if (gate) {
      setOption(gate.gategory[0]);
    } 
  }, [gate]);

  const setValues = (event) => {
    setOption(event.target.value);
  };
  const addGategorydb = () => {
    Axios.put(
      `https://europe-west1-resturo-07.cloudfunctions.net/api/hotel/W719nLXXgxSNptLZohmFHfZOGHt1/gategory`,
      event
    )
      .then(() => {
        console.log("gategory add it succfully");
      })
      .catch((err) => {
        console.log(err + "err");
      });
  };

  return (
    <div className="GagtegorSel-cont">
      <p className="GategorySel-title">Item gategory</p>
      {!gategory ? (
        <LoadingOverlay
          active={!gate ? true : false}
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
              {gate ? (
                gate.gategory.map((gategory) => (
                  <option key={uuid()} value={gategory}>
                    {gategory}
                  </option>
                ))
              ) : (
                <option>Loading gategory</option>
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
