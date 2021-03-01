import { useState } from "react";
import { __Clima } from "./../../Core/environment";

export const usePronosticoIcono = () => {
  const [pronosticoIcono, setPronosticoIcono] = useState({});

  const setPronostico = (pronostico) => {
    const clima = __Clima.find((clima) => clima.Clima === pronostico.clima);
    pronostico = {
      ...pronostico,
      icono: clima?.Icono || "",
    };
    setPronosticoIcono(pronostico);
  };

  return [pronosticoIcono, setPronostico];
};

export const usePronosticosIconos = () => {
  const [pronosticosIconos, setPronosticosIconos] = useState([]);

  const setPronosticos = (pronosticos) => {
    const pronosticosIconos = pronosticos.map((pronostico) => {
      const clima = __Clima.find((clima) => clima.Clima === pronostico.clima);
      return (pronostico = {
        ...pronostico,
        icono: clima?.Icono || "",
      });
    });

    setPronosticosIconos(pronosticosIconos);
  };

  return [pronosticosIconos, setPronosticos];
};
