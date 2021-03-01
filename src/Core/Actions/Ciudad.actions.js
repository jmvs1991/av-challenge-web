import { __Url } from "../environment";
import {
  ConsumirObtenerCiudades,
  ConsumirObtenerCiudadesPorPais,
  Cargando,
  Error,
} from "../Type/Ciudad.type";
import { dispatchController } from "./index.actions";

export const consumirObtenerCiudades = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: Cargando,
    });

    const { token } = getState().UsuarioReducer.Usuario;

    const peticion = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const respuesta = await fetch(`${__Url}/Ciudad`, peticion);
    const bodyJson = await respuesta.json();
    dispatchController(ConsumirObtenerCiudades, Error, dispatch, bodyJson);
  } catch (error) {
    dispatch({
      type: Error,
      Mensaje: error.message,
    });
  }
};

export const consumirObtenerCiudadesPorPais = (idPais) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: Cargando,
    });

    const { token } = getState().UsuarioReducer.Usuario;

    const peticion = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const respuesta = await fetch(
      `${__Url}/Ciudad/GetByIdPais/${idPais}`,
      peticion
    );
    const bodyJson = await respuesta.json();
    dispatchController(
      ConsumirObtenerCiudadesPorPais,
      Error,
      dispatch,
      bodyJson
    );
  } catch (error) {
    dispatch({
      type: Error,
      Mensaje: error.message,
    });
  }
};
