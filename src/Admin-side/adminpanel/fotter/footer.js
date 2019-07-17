import React from "react";
import {Link} from "react-router-dom"


const Footer = ({
  img,
  print,
  edit,
  editAlt,
  list,
  listAlt,
  listCkick,
  editClick,
  printClick
}) => {
  return (
    <div className="full-fotter">
    <Link to="/adminPanel" ><img src={list} alt={listAlt} onClick={listCkick}  /></Link>
     <Link to="/adminPanel/edit" > <img src={edit} alt={editAlt} onClick={editClick}  /></Link>
    <Link to="/adminPanel/billing"><img src={img} alt={print} onClick={printClick}/></Link>     
    </div>
  );
};

export default Footer;
