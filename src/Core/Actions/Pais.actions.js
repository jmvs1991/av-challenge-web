import { __Url } from "../environment";
import { ConsumirObtenerPaises, Cargando, Error } from "../Type/Pais.type";
import { dispatchController } from "./index.actions";

export const consumirObtenerPaises = () => async (dispatch) => {
  try {
    dispatch({
      type: Cargando,
    });

    const peticion = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const respuesta = await fetch(`${__Url}/Pais`, peticion);
    const bodyJson = await respuesta.json();
    dispatchController(ConsumirObtenerPaises, Error, dispatch, bodyJson);
  } catch (error) {
    dispatch({
      type: Error,
      Mensaje: error.message,
    });
  }
};