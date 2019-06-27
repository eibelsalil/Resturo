import React, { useState, useEffect } from "react";
import fire from "../config/config";
import Panel from "./adminpanel/panelTest";
import SigninCont from "./sign-in/signinCont";

const MainAdmin = () => {
  const [user, Setuser] = useState(null);

  const authLister = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        Setuser(user);
      } else {
        Setuser(null);
      }
    });
  };

  useEffect(() => {
    authLister();
  });

  return <div>{user ? <Panel /> : <SigninCont />}</div>;
};

export default MainAdmin;
