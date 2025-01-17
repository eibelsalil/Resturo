import React, { useState } from "react";
import Input from "./input-form";
import fire from "../../config/config";
import ErrorSingin from "./singInError";
import { Link } from "react-router-dom";
import useForm from "../adminpanel/edit-section/Add New dish/Form";
import axios from "axios";


const SigninCont = () => {
  const { values, handelChange, handelSubmit} = useForm(getValue);

  const [err, setErr] = useState(false);
  const [formValue, setValue] = useState(null);

  function getValue() {
    setValue(values);
    console.log(values.email);
    if (formValue) {
      fire
        .auth()
        .signInWithEmailAndPassword(formValue.email, formValue.password)
        .then(
          axios.post(
            `http://localhost:5000/resturo-07/europe-west1/api/login`,
            formValue
          )
        )
        .catch((err) => {
          setErr(true);
          setTimeout(() => {
            setErr(false);
          }, 4000);
        });
    }
  }



  return (
    <div className="singInfull">
    <div className="singInSubFull">
    <p className="welecome">Welcome To Resturo Admin Panel</p>
    <div className="singInCONT">
      <h1 className="title">Sign in</h1>
      <div className="cont" />
      <form onSubmit={handelSubmit}>
      {err ? <ErrorSingin email={values.email} password={values.password} /> : null}  
        <Input changeEmail={handelChange} changePassword={handelChange} />
        <div className="remember">
          <p style={{ marginBottom: "0", marginTop: "0%" }}>Remember me</p>
          <input
            type="checkbox"
            style={{ marginTop: "5px", marginRight: "5px" }}
          />
        </div>

        <button
          className={err ? "login-button-err" : "login-button"}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
    </div>
    <div className="bg" />
    </div>
  );
};

export default SigninCont;
