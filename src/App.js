import React from "react";
import MainAdmin from "./Admin-side/mainAdmin";
import Menu from "./Client-side/menu/menu";
import { Switch, Route } from "react-router-dom";
import GlobalState from "./context/GlobalState";
import Order from "./Client-side/order/order"

import "./App.css";


function App() {
  return (
    <GlobalState>
      <div className="App">
        <Switch>
          <Route exact path="/adminpanel" component={MainAdmin} />
          <Route exact path="/menu/:hotelid" component={Menu} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </div>
    </GlobalState>
  );
}

export default App;
