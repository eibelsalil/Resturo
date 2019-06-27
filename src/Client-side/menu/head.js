import React from "react";
import {Link} from "react-router-dom"
import "./Menu.css"
const Header = () => {
  return (
    <div className="header">
  <Link to="/adminpanel">  <p style={{marginLeft:"80%"}}>sing in</p></Link>
      <div className="head-bg" />
      <p className="rest">resturant name</p>
      <p className="plate">add to plate</p>
    </div>
  );
};

export default Header