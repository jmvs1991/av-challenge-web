import { __Url } from "../environment";
import {
  ConsumirUsuarioLogin,
  ConsumirCerrarSession,
  Cargando,
  Error,
} from "../Type/Usuario.type";
import { dispatchController } from "./index.actions";
import procedimientos from "./../procedimientos";

const { GuardarYEncriptar, ObtenerYDesencriptar } = procedimientos.prototype;
const llaveUsuario = "clienteStorage";

export const consumirUsuarioLogin = (usuario, clave) => async (dispatch) => {
  try {
    dispatch({
      type: Cargando,
    });

    const Usuario = {
      usuario: usuario,
      clave: clave,
    };

    const peticion = {
      method: "POST",
      body: JSON.stringify(Usuario),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const respuesta = await fetch(`${__Url}/Usuario/Login`, peticion);
    const bodyJson = await respuesta.json();
    dispatchController(ConsumirUsuarioLogin, Error, dispatch, bodyJson);

    let { resultado = "N", datos = [] } = bodyJson;

    if (resultado === "S") {
      let dato = datos[0];
      dato = {
        ...dato,
        clave: clave,
      };
      GuardarYEncriptar(llaveUsuario, dato);
    }
  } catch (error) {
    dispatch({
      type: Error,
      Mensaje: error.message,
    });
  }
};

export const consumirAutoLogin = () => async (dispatch) => {
  try {
    dispatch({
      type: Cargando,
    });

    const usuarioStorage = ObtenerYDesencriptar(llaveUsuario);

    if (usuarioStorage) {
      const { usuario, clave } = usuarioStorage;

      const Usuario = {
        usuario: usuario,
        clave: clave,
      };

      const peticion = {
        method: "POST",
        body: JSON.stringify(Usuario),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const respuesta = await fetch(`${__Url}/Usuario/Login`, peticion);
      const bodyJson = await respuesta.json();

      dispatchController(ConsumirUsuarioLogin, Error, dispatch, bodyJson);
    } else {
      dispatch({
        type: ConsumirUsuarioLogin,
        payload: {},
        Resultado: "S",
        Mensaje: "",
      });
    }
  } catch (error) {
    dispatch({
      type: Error,
      Mensaje: error.message,
    });
  }
};

export const consumirCerrarSession = () => async (dispatch) => {
  try {
    dispatch({
      type: Cargando,
    });

    localStorage.clear();

    dispatch({
      type: ConsumirCerrarSession,
    });
  } catch (error) {
    dispatch({
      type: Error,
      Mensaje: error.message,
    });
  }
};
