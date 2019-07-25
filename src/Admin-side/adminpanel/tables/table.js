import React, { useState, useEffect } from "react";
import Qrcode from "react.qrcode.generator";
import "./table.css";
import BillingHeadr from "../edit-section/dishEditing/billing/billingHeadr";
import firebase from "firebase";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Axios from "axios";
import Loader from "react-loader-spinner";

const Table = () => {
  const [input, setInput] = useState();
  const [values, setValues] = useState();
  const [loading, setLoading] = useState(false);
  let user = firebase.auth().currentUser.uid;
  useEffect(() => {
    setLoading(true);
    if (values) {
      Axios.post(
        `http://localhost:5000/resturo-07/europe-west1/api/hotel/${user}/tables`,
        {"tableNumber": values}
      )
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [values, user]);


  const PDFgen = () => {
    let item = document.getElementById("qrcode");
    html2canvas(item, { scale: "1" }).then((canvas) => {
      const imgdata = canvas.toDataURL("img/png");
      const pdf = new jsPDF("landscape", "mm", "a5");
      let width = pdf.internal.pageSize.getWidth();
      let hieght = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgdata, "JPEG", 0, 0, width, hieght);
      pdf.save(`table${values}`);
    });
  };

  return (
    <div>
      <BillingHeadr name={"Table"} />
      <div className="qrCode-Container">
        <div id="qrcode">
          {values ? <Qrcode value={`http://localhost:3000/menu/${user}/${values}`} size={300} /> : null}
        </div>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        {!values ? (
          <button
            className="setValue"
            onClick={() => {
              setValues(input);
            }}
          >
            add table
          </button>
        ) : (
          <button
            className="setValue"
            onClick={() => {
              PDFgen();
              setTimeout(() => {
                setValues(input);
              }, 2500);
            }}
          >
            {loading ? (
              <Loader type="Oval" color="#707070" height="30" width="30" />
            ) : (
              "download PDF"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Table;
