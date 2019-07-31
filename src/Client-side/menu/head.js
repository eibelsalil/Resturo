import React from "react";
import {Link} from "react-router-dom"
import "./Menu.css"
const Header = ({makempty}) => {
  return (
    <div className="header">
      <div className="header-element">
      <div>
      <p className="rest">resturant name</p>
      <p className="plate">add to plate</p>
      </div>
      <Link to="/adminpanel" onClick={makempty}>  <p style={{marginBottom:"0"}}>sing in</p></Link>
      </div>
    </div>
  );
};

export default Header