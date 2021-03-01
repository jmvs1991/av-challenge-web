import { __Url } from "../environment";
import {
  ConsumirObtenerPronosticoByFecha,
  Cargando,
  Error,
} from "../Type/Pronostico.type";
import { dispatchController } from "./index.actions";

export const consumirObtenerPronosticoByFecha = (
  idCiudad,
  fechaI,
  fechaF
) => async (dispatch, getState) => {
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
      `${__Url}/Pronostico/GetByIdCiudadAndFecha/${idCiudad}/${fechaI}/${fechaF}`,
      peticion
    );
    const bodyJson = await respuesta.json();
    dispatchController(
      ConsumirObtenerPronosticoByFecha,
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
