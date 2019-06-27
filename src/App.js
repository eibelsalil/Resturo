import React from "react";
import MainAdmin from "./Admin-side/mainAdmin";
import Menu from "./Client-side/menu/menu"
import { Switch, Route } from "react-router-dom";
import GlobalState from "./context/GlobalState";
import "./App.css";

function App() {
  
  return (
    <GlobalState>
    <div className="App">
      <Switch>
        <Route exact path="/adminpanel" component={MainAdmin} />
        <Route exact path="/" component={Menu} />
      </Switch>
    </div>
    </GlobalState>
  );
}

export default App;
