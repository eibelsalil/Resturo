import React, { useState } from "react";
import Input from "./input-form";
import fire from "../../config/config";
import ErrorSingin from "./singInError";

const SinginCont = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err,setErr] = useState(false)


  const login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {})
      .catch((err) => {
        setErr(true)
      });
  };

  return (
    <div>
      <h1 className="title">Sing in</h1>
      <div className="bg" />
      <div className="cont" />
      <form>
        <Input
          changeEmail={(e) => {
            setEmail(e.target.value);
          }}
          changePassword={(e) => {
            setPassword(e.target.value);
          }}
          email={email}
          password={password}
        />
      {err ? <ErrorSingin  /> : null} 
        <button
          className={err ? "login-button-err" :"login-button"}
          onClick={(e) => {
            login(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SinginCont;
