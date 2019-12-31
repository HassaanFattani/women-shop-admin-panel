import React from "react";
import Login from "../Components/Login";
import AddProduct from "../Components/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Product/Add" component={AddProduct} />
      </Switch>
    </Router>
  );
}

export default Routes;
