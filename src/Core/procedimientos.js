import * as CryptoJS from "crypto-js";
import { __ClaveEnc } from "./environment";

function procedimientos() {}

procedimientos.prototype.GuardarYEncriptar = (llave, Datos) => {
  const datosEncrypt = CryptoJS.AES.encrypt(
    JSON.stringify(Datos),
    __ClaveEnc
  ).toString();
  localStorage.setItem(llave, datosEncrypt);
};

procedimientos.prototype.ObtenerYDesencriptar = (llave) => {
  const datosStorageEnc = localStorage.getItem(llave);
  const datosStorasEncStr = CryptoJS.AES.decrypt(
    datosStorageEnc,
    __ClaveEnc
  ).toString(CryptoJS.enc.Utf8);

  return JSON.parse(datosStorasEncStr);
};

export default procedimientos;