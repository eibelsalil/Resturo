import React from "react";
import MainAdmin from "./Admin-side/mainAdmin";
import Menu from "./Client-side/menu/menu";
import { Switch, Route } from "react-router-dom";
import GlobalState from "./context/GlobalState";
import Order from "./Client-side/order/order";
import "./App.css";
import Home from "./Client-side/Home";
import "./Client-side/menu/Menu.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <GlobalState>
          <Route exact path="/" component={Home} />
          <Route exact path="/adminpanel" component={MainAdmin} />
          <Route exact path="/menu/:hotelid/:table" component={Menu} />
          <Route exact path="/menu/:hotelid/:table/order" component={Order} />
        </GlobalState>
      </Switch>
    </div>
  );
}

export default App;
