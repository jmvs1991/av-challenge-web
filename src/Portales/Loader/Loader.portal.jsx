import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./Loader.portal.scss";

const LoaderComponent = ({ UsuarioReducer }) => {
  if (!UsuarioReducer.Cargando) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div className="Loader">
        <div className="Loader__Contenedor">
          <div className="container">
            <div className="row mt-auto ml-auto">
              <div className="col-12">
                <div className="wrapper">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="shadow"></div>
                  <div className="shadow"></div>
                  <div className="shadow"></div>
                  <span>Loading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("loader")
  );
};

const mapStateToProps = ({ UsuarioReducer }) => {
  return {
    UsuarioReducer,
  };
};

export default connect(mapStateToProps, {})(LoaderComponent);
