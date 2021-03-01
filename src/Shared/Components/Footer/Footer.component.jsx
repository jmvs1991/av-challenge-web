import React from "react";
import { Navbar } from "react-bootstrap";
import "./Footer.component.scss";

const FooterComponent = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="d-flex justify-content-between">
      <Navbar.Text>Copyright 2020 all right register | America Virtual</Navbar.Text>
      <Navbar.Text>AMERICA VIRTUAL</Navbar.Text>
    </Navbar>
  );
};

export default FooterComponent;
