import {
  ConsumirObtenerPronosticoByFecha,
  Cargando,
  Error,
} from "./../Type/Pronostico.type";

const INITIAL_STATE = {
  Pronosticos: [],
  Resultado: 0,
  Mensaje: "",
  Cargando: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConsumirObtenerPronosticoByFecha:
      return {
        ...state,
        Pronosticos: action.payload || [],
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
