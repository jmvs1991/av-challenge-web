import React from "react";
import { connect } from "react-redux";
import { format, addDays } from "date-fns";
import ZonaComponent from "./Components/Zona/Zona.component";
import ReporteComponent from "./Components/Reporte/Reporte.component";
import DiasComponent from "./Components/Dias/Dias.component";
import * as PaisActions from "./../../Core/Actions/Pais.actions";
import * as CiudadActions from "./../../Core/Actions/Ciudad.actions";
import * as PronosticoActions from "./../../Core/Actions/Pronosticos.actions";
import "./Home.page.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      PaisActual: {},
      CiudadActual: {},
      PronosticoActual: {},
      FechaInicio: 0,
      FechaFin: 0,
    };
  }

  componentDidMount() {
    const FechaInicio = new Date();
    const FechaFin = addDays(FechaInicio, 5);

    this.setState({
      PaisActual: {},
      CiudadActual: {},
      PronosticoActual: {},
      FechaInicio: format(FechaInicio, "yyyyMMdd"),
      FechaFin: format(FechaFin, "yyyyMMdd"),
    });

    this.buscarPaises();
  }

  buscarPaises = async () => {
    const { consumirObtenerPaises } = this.props;
    await consumirObtenerPaises();
  };

  buscarCiudades = async () => {
    const { consumirObtenerCiudadesPorPais } = this.props;
    const { PaisActual } = this.state;

    if (PaisActual) {
      const { idPais } = PaisActual;
      if (idPais) {
        await consumirObtenerCiudadesPorPais(idPais);
      }
    }
  };

  buscarPronostico = async () => {
    const { consumirObtenerPronosticoByFecha } = this.props;
    const { CiudadActual, FechaInicio, FechaFin } = this.state;

    if (CiudadActual) {
      const { idCiudad } = CiudadActual;

      if (idCiudad) {
        await consumirObtenerPronosticoByFecha(idCiudad, FechaInicio, FechaFin);

        const { Pronosticos } = this.props.PronosticoReducer;

        const pronosticoActual = Pronosticos.find((pronostico) => {
          const Fecha = new Date();
          return (
            pronostico.fecha === Number.parseInt(format(Fecha, "yyyyMMdd"))
          );
        });

        this.setState({
          PronosticoActual: pronosticoActual,
        });
      }
    }
  };

  handleChangePais = async (pais) => {
    await this.setState({
      PaisActual: pais,
    });

    this.buscarCiudades();
  };

  handleChangeCiudad = async (ciudad) => {
    await this.setState({
      CiudadActual: ciudad,
    });

    this.buscarPronostico();
  };

  handleClickBuscar = async () => {
    console.log("Click Buscar");
  };

  render() {
    return (
      <>
        <div className="HomeTitulo">
          <div className="HomeTitulo__Contenedor">
            <h1 className="HomeTitulo__Contenedor--Texto">
              SERVICIO DEL CLIMA
            </h1>
          </div>
        </div>
        <div className="HomeTarjetas">
          <div className="HomeTarjetas__Zona">
            <ZonaComponent
              paises={this.props.PaisReducer.Paises || []}
              ciudades={this.props.CiudadReducer.Ciudades || []}
              changePais={this.handleChangePais}
              changeCiudad={this.handleChangeCiudad}
              clickBuscar={this.handleClickBuscar}
            />
          </div>
          <div className="HomeTarjetas__Reporte">
            <ReporteComponent
              paisActual={this.state.PaisActual}
              ciudadActual={this.state.CiudadActual}
              pronostico={this.state.PronosticoActual}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <DiasComponent
              pronosticos={this.props.PronosticoReducer.Pronosticos || []}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ PaisReducer, CiudadReducer, PronosticoReducer }) => {
  return {
    PaisReducer,
    CiudadReducer,
    PronosticoReducer,
  };
};

const mapDispatchToProps = {
  ...PaisActions,
  ...CiudadActions,
  ...PronosticoActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
