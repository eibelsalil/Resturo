import React from "react";
import "./input.css";

const Input = ({ changeEmail, changePassword }) => {
  return (
    <div className="Input">
      <input
        type="email"
        name="email"
        placeholder="username"
        onChange={changeEmail}
        
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={changePassword}
       
      />
    </div>
  );
};

export default Input;
