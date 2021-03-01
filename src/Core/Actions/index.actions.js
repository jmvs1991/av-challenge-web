export const dispatchController = (type, typeError, dispatch, bodyJson) => {
  const { resultado = "N", mensaje = "", datos = [] } = bodyJson;

  switch (resultado.toUpperCase()) {
    case "E":
      dispatch({
        type: typeError,
        Mensaje: mensaje,
      });
      break;

    default:
      dispatch({
        type: type,
        payload: datos,
        Resultado: resultado,
        Mensaje: mensaje,
      });
      break;
  }
};
