import React, { useContext, useState, useRef, useEffect } from "react";
import Header from "./head";
import Dishcont from "./dishes/dishCont";
import Total from "./total";
import Appcontext from "../../context/AppContext";
import Model from "./model";



const Menu = () => {
  const context = useContext(Appcontext);

  const [model, setModel] = useState(false);

  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModel(false);
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }



  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div>
      <Header />
      <div className="main-dishes">
      <Dishcont category={"Bestsellers"} categoryId={"Bestsellers"} />
      <Dishcont category={"Starter"} categoryId={"Starter"} />
      <Dishcont category={"Dessert"} categoryId={"Dessert"} />
      <Dishcont category={"Lunch"}   categoryId={"Lunch"} />
      <Dishcont category={"Chicken"} categoryId={"Chicken"}   />
      </div>
      <Model
        model={model}
        wraaperRef={wrapperRef}
        click={() => {
          setModel(false);
        }}
      />
      <button
        className="menu-Button"
        onClick={() => {
          setModel(true);
        }}
      >
        menu
      </button>

      {context.total.length === 0 ? null : <Total />}
    </div>
  );
};

export default Menu;
