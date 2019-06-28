import React from "react";
import "./Menu.css";
import { Link } from "react-scroll";

const Model = ({ wraaperRef, model, click }) => {
  return (
    <div className={model ? "model" : "modelfalse"}>
      <div className="model-content" ref={wraaperRef}>
        <div className="coontent-line">
          <p className="content">
            <Link to="Bestsellers" onClick={click} smooth={true}>
              Bestsellers
            </Link>{" "}
          </p>
          <p className="content-N">7</p>
        </div>
        <div className="coontent-line">
          <p className="content">
            <Link to="Starter" onClick={click} smooth={true}>
              Starter
            </Link>
          </p>
          <p className="content-N">3</p>
        </div>
        <div className="coontent-line">
          <p className="content">
            <Link to="Dessert" onClick={click} smooth={true}>
              Dessert
            </Link>
          </p>
          <p className="content-N">7</p>
        </div>
        <div className="coontent-line">
          <p className="content">
            <Link onClick={click} smooth={true} to="Lunch">
              Lunch
            </Link>
          </p>
          <p className="content-N">13</p>
        </div>
        <div className="coontent-line">
          <p className="content">
         <Link to="Chicken" onClick={click} smooth={true}>Chicken</Link>
          </p>
          <p className="content-N">13</p>
        </div>
      </div>
    </div>
  );
};

export default Model;
