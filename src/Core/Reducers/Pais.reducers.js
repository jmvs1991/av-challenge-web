import { ConsumirObtenerPaises, Cargando, Error } from "./../Type/Pais.type";

const INITIAL_STATE = {
  Paises: [],
  Resultado: 0,
  Mensaje: "",
  Cargando: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConsumirObtenerPaises:
      return {
        ...state,
        Paises: action.payload || [],
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
