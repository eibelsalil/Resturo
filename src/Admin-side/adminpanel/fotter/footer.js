import React from "react";



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
      <img src={list} alt={listAlt} onClick={listCkick} />
      <img src={edit} alt={editAlt} onClick={editClick} />
      <img src={img} alt={print} onClick={printClick} />
    </div>
  );
};

export default Footer;
