import React, { useState } from "react";
import Input from "./input-form";
import fire from "../../config/config";
import ErrorSingin from "./singInError";
import { Link } from "react-router-dom";



const SigninCont = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
 


  const login = (e) => {
    e.preventDefault();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((u) => {})
    .catch((err) => {
      setErr(true);
      setTimeout(()=>{
        setErr(false)
      },4000)
    });
  };

  return (
    <div>
      <Link to="/">back to menu</Link>
      <h1 className="title">Sign in</h1>
      <div className="bg" />
      <div className="cont" />
      <form>
   {err ? <ErrorSingin email={email} password={password} /> : null}  
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
          <div className="remember">
            <p style={{ marginBottom: "0", marginTop: "0%" }}>Remember me</p>
            <input type="checkbox" style={{ marginTop: "5px" , marginRight: "5px"}} />
          </div>
       

        <button
          className={err ? "login-button-err" : "login-button"}
          onClick={(e) => {
           login(e)
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SigninCont;
