import { useEffect, useState } from "react";
import { connect } from "react-redux";

const AppGuardia = ({ children, UsuarioReducer }) => {
  const [hayUsuario, setHayUsuario] = useState(false);

  useEffect(() => {
    const { hayUsuario } = UsuarioReducer;
    setHayUsuario(hayUsuario);
  }, [UsuarioReducer]);

  return children({ hayUsuario });
};

const mapStateToProps = ({ UsuarioReducer }) => {
  return { UsuarioReducer };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppGuardia);