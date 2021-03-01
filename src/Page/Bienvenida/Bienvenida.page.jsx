import React from "react";
import "./Bienvenida.page.scss";

class BienvenidaPage extends React.Component {
  render() {
    return (
      <div className="Bienvenida">
        <div className="Bienvenida__Titulo">
          <h1>Bienvenido</h1>
          <h2>Ingrese para poder ver el reporte del tiempo</h2>
        </div>
      </div>
    );
  }
}

export default BienvenidaPage;
