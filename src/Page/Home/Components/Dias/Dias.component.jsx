import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePronosticosIconos } from "./../../../../Shared/Hooks/custom.hooks";
import "./Dias.component.scss";

const DiasComponent = ({ pronosticos = [] }) => {
  const [pronosticosIconos, setPronosticos] = usePronosticosIconos([]);

  useEffect(() => {
    setPronosticos(pronosticos);
  }, [pronosticos]);

  return (
    <div className="Dias">
      {pronosticosIconos.map((pronostico) => {
        return (
          <div
            className="Dias__Contenedor"
            key={`pronostico-${pronostico.idPronostico}`}
          >
            <h4 className="text-secondary font-weight-bold">
              {pronostico?.dia || ""}
            </h4>
            <FontAwesomeIcon
              icon={["fas", pronostico.icono || "sun"]}
              size="5x"
              className="text-muted mt-4 mb-4"
            />
            <h5 className="mt-4">{`${pronostico?.temperatura || ""} °C`}</h5>
            <h5>{`${pronostico?.temperatureF || ""} °F`}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default DiasComponent;
