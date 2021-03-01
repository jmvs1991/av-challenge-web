import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./../../Page/Home/Home.page";

const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default PublicRoute;
