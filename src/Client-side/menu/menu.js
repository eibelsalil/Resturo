import React from "react";
import Header from "./head";
import Dishcont from "./dishes/dishCont";
import Total from "./total";

const Menu = () => {
  return (
    <div>
      <Header />
      <Dishcont />
      <Dishcont />
      <Dishcont />
      <Dishcont />
      <Dishcont />
      <button className="menu-Button">menu</button>
      <Total />
    </div>
  );
};

export default Menu;
