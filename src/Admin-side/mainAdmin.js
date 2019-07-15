import React, { useState, useEffect,useContext } from "react";
import fire from "../config/config";
import Panel from "./adminpanel/panelTest";
import SigninCont from "./sign-in/signinCont";
import Appcontext from "../context/AppContext"


const MainAdmin = () => {
  const [userState, Setuser] = useState(null);

  const context = useContext(Appcontext)


  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        Setuser(user);
      
      } else {
        Setuser(null);
      }
    })
  });
 


  return <div>{context.user ? <Panel /> : <SigninCont user={userState}  />}</div>;
};

export default MainAdmin;
