import React from "react";
import fire from "../../config/config";

const Panel = () => {
  const logout = () => {
    fire.auth().signOut();
  };

  return (
    <div>
      <h1>you signed in</h1>
      <button
        onClick={() => {
          logout();
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Panel;
