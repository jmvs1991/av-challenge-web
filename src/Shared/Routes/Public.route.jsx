import React from "react";
import { Route, Switch } from "react-router-dom";
import BienvenidaPage from "./../../Page/Bienvenida/Bienvenida.page";

const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={BienvenidaPage} />
    </Switch>
  );
};

export default PublicRoute;
