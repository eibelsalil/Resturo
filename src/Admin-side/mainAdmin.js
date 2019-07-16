import React, { useState, useEffect } from "react";
import fire from "../config/config";
import Panel from "./adminpanel/panelTest";
import SigninCont from "./sign-in/signinCont";

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

  return <div>{userState ? <Panel /> : <SigninCont user={userState} />}</div>;
};

export default MainAdmin;
