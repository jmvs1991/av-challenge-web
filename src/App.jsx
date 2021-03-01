import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppGuardia from "./Shared/Guards/App.guard";
import PrivateRoute from "./Shared/Routes/Private.route";
import PublicRoute from "./Shared/Routes/Public.route";
import Layout from "./Shared/Layout/Layout.page";
import * as UsuarioActions from "./Core/Actions/Usuario.actions";
import "./App.scss";

const App = ({ consumirAutoLogin }) => {
  useEffect(() => {
    consumirAutoLogin();
  }, []);

  return (
    <AppGuardia>
      {({ hayUsuario }) => (
        <Layout>
          <BrowserRouter>
            { hayUsuario ? <PrivateRoute /> : <PublicRoute />}
          </BrowserRouter>
        </Layout>
      )}
    </AppGuardia>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  ...UsuarioActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
