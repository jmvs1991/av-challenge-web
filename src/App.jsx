import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "./Shared/Layout/Layout.page";
import HomePage from "./Page/Home/Home.page";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import * as UsuarioActions from "./Core/Actions/Usuario.actions";
import "./App.scss";

const App = ({ consumirAutoLogin }) => {
  useEffect(() => {
    consumirAutoLogin();
  }, []);

  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  ...UsuarioActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
