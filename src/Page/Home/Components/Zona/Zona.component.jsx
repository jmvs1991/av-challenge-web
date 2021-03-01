import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Zona.component.scss";

const ZonaComponent = ({
  paises = [],
  ciudades = [],
  changePais = () => {},
  changeCiudad = () => {},
  clickBuscar = () => {},
}) => {
  const [paisActual, setPaisActual] = useState({});
  const [ciudadActual, setCiudadActual] = useState({});

  useEffect(() => {
    const pais = paises[0];
    setPaisActual(pais);
  }, [paises]);

  useEffect(() => {
    const ciudad = ciudades[0];
    setCiudadActual(ciudad);
  }, [ciudades]);

  useEffect(() => {
    changePais(paisActual);
  }, [paisActual]);

  useEffect(() => {
    changeCiudad(ciudadActual);
  }, [ciudadActual]);

  const handlePaisChange = (e) => {
    const { value: idPais } = e.target;
    const pais = paises.find((pais) => {
      return Number.parseInt(pais.idPais) === Number.parseInt(idPais);
    });

    setPaisActual(pais);
  };

  const handleCiudadChange = (e) => {
    const { value: idCiudad } = e.target;
    const ciudad = ciudades.find((ciudad) => {
      return Number.parseInt(ciudad.idCiudad) === Number.parseInt(idCiudad);
    });

    setCiudadActual(ciudad);
  };

  const handleClickBuscar = () => {
    clickBuscar();
  };

  return (
    <div className="Zona">
      <h3 className="Zona__Titulo">Seleccioná la zona</h3>
      <Form className="Zona__Formulario">
        <Form.Group controlId="formGroupPais">
          <Form.Label>País</Form.Label>
          <Form.Control as="select" custom onChange={handlePaisChange}>
            {paises.map((pais) => {
              return (
                <option key={`pais-${pais.idPais}`} value={pais.idPais}>
                  {pais.nombre}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formGroupCiudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control as="select" custom onChange={handleCiudadChange}>
            {ciudades.map((ciudad) => {
              return (
                <option
                  key={`ciudad-${ciudad.idCiudad}`}
                  value={ciudad.idCiudad}
                >
                  {ciudad.nombre}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        block
        className="mt-4"
        onClick={handleClickBuscar}
      >
        Buscar
      </Button>
    </div>
  );
};

export default ZonaComponent;
