import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePronosticoIcono } from "./../../../../Shared/Hooks/custom.hooks";
import "./Reporte.component.scss";

const ReporteComponent = ({
  paisActual = {},
  ciudadActual = {},
  pronostico = {},
}) => {
  const [pronosticoIcono, setPronostico] = usePronosticoIcono({});
  useEffect(() => {
    setPronostico(pronostico);
  }, [pronostico]);

  return (
    <div className="Reporte">
      <h3 className="Reporte__Titulo">Reporte</h3>
      <h6 className="Reporte__NombrePais">{paisActual?.nombre || ""}</h6>
      <h5 className="Reporte__NombreCiudad">{ciudadActual?.nombre || ""}</h5>
      <div className="Reporte__Clima">
        <div className="Reporte__Clima--ContenedorDatos">
          <h2>{pronosticoIcono?.dia || ""}</h2>
          <h3>{pronosticoIcono?.clima || ""}</h3>
          <h1>{`${pronosticoIcono?.temperatura || ""} °C`}</h1>
          <h5>{`${pronosticoIcono?.temperatureF || ""} °F`}</h5>
        </div>
        <div className="Reporte__Clima--ContenedorIcono">
          <FontAwesomeIcon
            icon={["fas", pronosticoIcono.icono || "sun"]}
            size="10x"
          />
        </div>
      </div>
      <div className="Reporte__InfoAdic">
        <h6>{`Prob. de precipitaciones: ${
          pronosticoIcono?.precipitacion || 0
        }%`}</h6>
        <h6>{`Humedad: ${pronosticoIcono?.humedad || 0}%`}</h6>
        <h6>{`Viento: a ${pronosticoIcono?.viento || 0} km/h`}</h6>
      </div>
    </div>
  );
};

export default ReporteComponent;
