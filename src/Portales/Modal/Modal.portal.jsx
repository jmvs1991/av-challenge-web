import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import "./Modal.portal.scss";

const ModalPortal = ({
  mostrar = false,
  mostrarFooter = true,
  mostrarHeader = true,
  handleCerrar,
  children,
  footer = null,
  header = null,
  classModal = "",
  tamano = "",
}) => {
  if (!mostrar) {
    return null;
  }
  return ReactDOM.createPortal(
    <Modal
      show={mostrar}
      onHide={handleCerrar}
      dialogClassName={classModal}
      size={tamano}
    >
      {mostrarHeader === true ? (
        <Modal.Header closeButton>{header}</Modal.Header>
      ) : null}
      <Modal.Body>{children}</Modal.Body>
      {mostrarFooter === true ? <Modal.Footer>{footer}</Modal.Footer> : null}
    </Modal>,
    document.getElementById("modal")
  );
};

export default ModalPortal;
