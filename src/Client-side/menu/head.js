import React from "react";
import {Link} from "react-router-dom"
import Login from "../../Asset/Login.png"
import "./Menu.css"
const Header = ({makempty,resturantName}) => {
  return (
    <div className="header">
      <div className="header-element">
      <div className="HeadnameAndHotelName">
      <p className="rest">{resturantName}</p>
      <p className="plate">Menu</p>
      </div>
      <Link to="/adminpanel" onClick={makempty} className="loginAdmin"><img src={Login} alt="Login"/>  </Link>
      </div>
    </div>
  );
};

export default Header