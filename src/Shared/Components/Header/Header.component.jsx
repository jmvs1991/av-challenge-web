import React, { useState } from "react";
import { Navbar, Nav, Dropdown, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.component.scss";

const HeaderComponent = ({
  hayUsuario = false,
  usuarioActual = {},
  clickLogin = () => {},
  clickCerrarSession = () => {},
}) => {
  const [datosUsuario, setDatosUsuario] = useState({
    usuario: "",
    clave: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setDatosUsuario({
      ...datosUsuario,
      [name]: value,
    });
  };

  const handleClickLogin = () => {
    const { usuario, clave } = datosUsuario;

    if (usuario.trim() === "" || clave.trim() === "") {
      return;
    }

    clickLogin(usuario, clave);
  };

  const handleClickCerrarSession = () => {
    clickCerrarSession();
  };

  const NavegacionConUsuario = () => {
    return (
      <>
        <h5 className="text-white mr-3">{usuarioActual.nombre}</h5>
        <Button
          type="button"
          variant="outline-light"
          size="sm"
          onClick={handleClickCerrarSession}
        >
          <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
        </Button>
      </>
    );
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Navbar.Brand href="#home">America Virtual</Navbar.Brand>
      <Navbar.Toggle aria-controls="headerNavbar" />
      <Navbar.Collapse id="headerNavbar">
        <Nav className="HeaderNavegacion">
          {!hayUsuario ? (
            <div className="HeaderNavegacion__dropdown">
              <Dropdown>
                <Dropdown.Toggle
                  className="HeaderNavegacion__dropdown--Boton"
                  variant="outline-light"
                  id="dropdown-basic"
                >
                  Iniciar Sesión
                  <FontAwesomeIcon icon={["fas", "user"]} className="mr-2" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="HeaderNavegacion__dropdown--Menu">
                  <Form className="p-4">
                    <Form.Group controlId="formUsuario">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingrese usuario"
                        name="usuario"
                        onChange={handleChangeInput}
                      />
                    </Form.Group>
                    <Form.Group controlId="formClave">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Ingrese contraseña"
                        name="clave"
                        onChange={handleChangeInput}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="button"
                      block
                      onClick={handleClickLogin}
                    >
                      Iniciar Sesión
                    </Button>
                  </Form>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <NavegacionConUsuario />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderComponent;
