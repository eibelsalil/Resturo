import React from "react";
import "./input.css";

const Input = () => {
  return (
    <div className="Input">
      <input type="text" name="usename" placeholder="username" />
      <input type="password" name="username" placeholder="password" />
    </div>
  );
};

export default Input;
