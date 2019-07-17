import React, { useState, useEffect } from "react";
import fire from "../config/config";
import Panel from "./adminpanel/panelTest";
import SigninCont from "./sign-in/signinCont";
import { BrowserRouter } from "react-router-dom";

const MainAdmin = () => {
  const [userState, Setuser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        Setuser(user);
      } else {
        Setuser(null);
      }
    });
  }, []);

  return <div>{userState ?<BrowserRouter><Panel /></BrowserRouter>  : <SigninCont user={userState} />}</div>;
};

export default MainAdmin;
