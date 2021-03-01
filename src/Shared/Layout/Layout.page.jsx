import React, { useEffect } from "react";
import { connect } from "react-redux";
import HeaderComponent from "./../Components/Header/Header.component";
import FooterComponent from "./../Components/Footer/Footer.component";
import * as UsuarioActions from "./../../Core/Actions/Usuario.actions";
import "./Layout.page.scss";

const Layout = ({
  children,
  consumirUsuarioLogin,
  consumirCerrarSession,
  UsuarioReducer,
}) => {
  useEffect(() => {
    const { Cargando, Resultado, Mensaje } = UsuarioReducer;

    if (
      Cargando === false &&
      Resultado !== "S" &&
      Resultado !== "" &&
      Mensaje !== ""
    ) {
      console.log(Mensaje);
    }
  }, [UsuarioReducer.Cargando]);

  const handleCLickLogin = async (usuario, clave) => {
    await consumirUsuarioLogin(usuario, clave);
  };

  const handleCerrarSession = async () => {
    await consumirCerrarSession();
  };

  return (
    <>
      <section id="Header">
        <HeaderComponent
          clickLogin={handleCLickLogin}
          clickCerrarSession={handleCerrarSession}
          hayUsuario={UsuarioReducer.hayUsuario}
          usuarioActual={UsuarioReducer.Usuario}
        />
      </section>
      <section id="Contenido">
        <div className="container">
          <div className="row">
            <div className="col-12">{children}</div>
          </div>
        </div>
      </section>
      <section id="Footer">
        <FooterComponent />
      </section>
    </>
  );
};

const mapStateToProps = ({ UsuarioReducer }) => {
  return {
    UsuarioReducer,
  };
};

const mapDispatchToProps = {
  ...UsuarioActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
