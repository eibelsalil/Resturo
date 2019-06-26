import React from "react";
import "./input.css";

const Input = ({ email, password, changeEmail, changePassword }) => {
  return (
    <div className="Input">
      <input
        type="email"
        name="usename"
        placeholder="username"
        onChange={changeEmail}
        value={email}
      />
      <input
        type="password"
        name="username"
        placeholder="password"
        onChange={changePassword}
        value={password}
      />
    </div>
  );
};

export default Input;
