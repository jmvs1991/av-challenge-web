import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import HeaderComponent from "./../Components/Header/Header.component";
import FooterComponent from "./../Components/Footer/Footer.component";
import ModalMensajeComponent from "./../Components/ModalMensaje/ModalMensaje.component";
import LoaderPortal from "./../../Portales/Loader/Loader.portal";
import * as UsuarioActions from "./../../Core/Actions/Usuario.actions";
import "./Layout.page.scss";

const Layout = ({
  children,
  consumirUsuarioLogin,
  consumirCerrarSession,
  UsuarioReducer,
}) => {
  const [modal, setModal] = useState({
    Mostrar: false,
    Mensaje: "",
  });

  useEffect(() => {
    setModal({
      Mostrar: false,
      Mensaje: "",
    });
  }, []);

  useEffect(() => {
    const { Cargando, Resultado, Mensaje } = UsuarioReducer;
    setModal({
      Mostrar: false,
      Mensaje: "",
    });

    if (
      Cargando === false &&
      Resultado !== "S" &&
      Resultado !== "" &&
      Mensaje !== ""
    ) {
      setModal({
        Mostrar: true,
        Mensaje: Mensaje,
      });
    }
  }, [UsuarioReducer.Cargando]);

  const handleCLickLogin = async (usuario, clave) => {
    await consumirUsuarioLogin(usuario, clave);
  };

  const handleCerrarSession = async () => {
    await consumirCerrarSession();
  };

  const handleMostrarModal = () => {
    setModal({
      Mostrar: !modal.Mostrar,
      Mensaje: "",
    });
  };

  return (
    <>
      <LoaderPortal />
      <ModalMensajeComponent
        mostrar={modal.Mostrar}
        handleCerrar={handleMostrarModal}
      >
        <h5 className="font-italic">{modal.Mensaje}</h5>
      </ModalMensajeComponent>
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
