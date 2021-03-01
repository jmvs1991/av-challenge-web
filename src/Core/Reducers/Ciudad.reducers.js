import {
  ConsumirObtenerCiudades,
  ConsumirObtenerCiudadesPorPais,
  Cargando,
  Error,
} from "./../Type/Ciudad.type";

const INITIAL_STATE = {
  Ciudades: [],
  Resultado: 0,
  Mensaje: "",
  Cargando: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConsumirObtenerCiudades:
      return {
        ...state,
        Ciudades: action.payload || [],
        Resultado: action.Resultado,
        Mensaje: action.Mensaje,
        Cargando: false,
      };
    case ConsumirObtenerCiudadesPorPais:
      return {
        ...state,
        Ciudades: action.payload || [],
        Resultado: action.Resultado,
        Mensaje: action.Mensaje,
        Cargando: false,
      };
    case Cargando:
      return {
        ...state,
        Resultado: 0,
        Mensaje: "",
        Cargando: true,
      };
    case Error:
      return {
        ...state,
        Resultado: action.Resultado,
        Mensaje: action.Mensaje,
        Cargando: false,
      };
    default:
      return state;
  }
};
