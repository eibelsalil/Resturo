import React, { useState } from "react";
import Input from "./input-form";
import fire from "../../config/config";

const SigninCont = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="title">Sign in</h1>
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
        <button
          className="login-button"
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

export default SigninCont;
