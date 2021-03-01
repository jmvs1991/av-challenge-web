import React, { useState, useEffect } from "react";
import ModalPortal from "../../../Portales/Modal/Modal.portal";
import "./ModalMensaje.component.scss";

const ModalMensajeComponent = ({ children, mostrar, handleCerrar }) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    setMostrarModal(mostrar);
  }, [mostrar]);

  return (
    <ModalPortal
      mostrar={mostrarModal}
      handleCerrar={handleCerrar}
      mostrarFooter={false}
      mostrarHeader={false}
    >
      {children}
    </ModalPortal>
  );
};

export default ModalMensajeComponent;
