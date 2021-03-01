import { combineReducers } from "redux";
import UsuarioReducer from "./Usuario.reducers";
import PaisReducer from "./Pais.reducers";
import CiudadReducer from "./Ciudad.reducers";
import PronosticoReducer from "./Pronostico.reducers";

export default combineReducers({
  UsuarioReducer,
  PaisReducer,
  CiudadReducer,
  PronosticoReducer,
});
