import {
  ConsumirUsuarioLogin,
  ConsumirCerrarSession,
  Cargando,
  Error,
} from "./../Type/Usuario.type";

const INITIAL_STATE = {
  Usuario: {},
  Resultado: 0,
  Mensaje: "",
  Cargando: false,
  hayUsuario: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConsumirUsuarioLogin:
      return {
        ...state,
        Usuario: action.payload[0] || {},
        Resultado: action.Resultado,
        Mensaje: action.Mensaje,
        Cargando: false,
        hayUsuario: true,
      };
    case ConsumirCerrarSession:
      return {
        ...state,
        Resultado: "",
        Usuario: {},
        hayUsuario: false,
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
