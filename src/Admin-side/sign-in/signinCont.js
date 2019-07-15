import React, { useState,useEffect,useContext } from "react";
import Input from "./input-form";
import fire from "../../config/config";
import ErrorSingin from "./singInError";
import { Link } from "react-router-dom";
import useForm  from "../adminpanel/edit-section/Add New dish/Form"
import axios from "axios"
import AppContext from "../../context/AppContext"

const SigninCont = () => {
  const { values, handelChange, handelSubmit, restvalue } = useForm(getValue);

  const [err, setErr] = useState(false);
  const [formValue, setValue] = useState(null);
  const context = useContext(AppContext)
  function getValue(){
  setValue(values)
  }

  useEffect(() => {
    if (formValue) {
      axios
        .post(
          `https://europe-west1-resturo-07.cloudfunctions.net/api/login`,
          formValue
        )
        .then((doc) => {
          context.LoginUser(doc.data)
        })
        .then(() => {
          restvalue();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
console.log(context.user)

  return (
    <div>
      <Link to="/">back to menu</Link>
      <h1 className="title">Sign in</h1>
      <div className="bg" />
      <div className="cont" />
      <form onSubmit={handelSubmit}>
  
        <Input
          changeEmail={handelChange}
          changePassword={handelChange}
        />
          <div className="remember">
            <p style={{ marginBottom: "0", marginTop: "0%" }}>Remember me</p>
            <input type="checkbox" style={{ marginTop: "5px" , marginRight: "5px"}} />
          </div>
       

        <button
          className={err ? "login-button-err" : "login-button"}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SigninCont;
