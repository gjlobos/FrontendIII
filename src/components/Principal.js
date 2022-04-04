import React from "react";
import BotonesOpciones from "./BotonesOpciones";
import data from "./data.json";
import Swal from "sweetalert2";
import RegistroHistorico from "./RegistroHistorico";

const ESTADO_INICIAL = {
  contador: 1,
  opcionA: data[0].opciones.a,
  opcionB: data[0].opciones.b,
  historia: data[0].historia,
  registro: [],
  opcionAnterior: "",
};

export default class Principal extends React.Component {
  constructor() {
    super();
    this.state = ESTADO_INICIAL;
  }

  componentDidUpdate(_, prevState) {
    if (!(prevState === null)) {
      this.state.registro.push(this.state.opcionAnterior);
      console.log(this.state.registro);
    }
  }
  componentDidMount() {
    console.log("se ejecutó componentdidmount");
  }

  componentWillUnmount() {
    console.log("se ejecutó componentWillUnmount");
  }

  mostrarModal = () => {
    Swal.fire({
      title: "Terminó tu historia!",
      text: "Apretá OTRA HISTORIA para volver a empezar",
      icon: "success",
      confirmButtonText: "OTRA HISTORIA",
    }).then(() => {
      this.otraHistoria();
    });
  };

  otraHistoria = () => {
    // ESTADO_INICIAL.registro = [];
    this.setState({ ...ESTADO_INICIAL, registro: [] });
    console.log("Se apretó el botón de Otra Historia");
    console.log("- state: " + JSON.stringify(this.state));
    console.log("_estadoinicial: " + JSON.stringify(ESTADO_INICIAL));
  };

  seleccionarOpcion = (boton) => {
    if (this.state.contador >= 5) {
      this.mostrarModal();
    } else {
      const opcion = boton.target.id;
      const identificador = `${this.state.contador + 1}${opcion}`;
      const siguiente = data.find((historia) => historia.id === identificador);
      this.setState({
        contador: this.state.contador + 1,
        opcionA: siguiente.opciones.a,
        opcionB: siguiente.opciones.b,
        historia: siguiente.historia,
        opcionAnterior: opcion,
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia"> {this.state.historia}</h1>
        <div className="opciones">
          <BotonesOpciones
            evento={this.seleccionarOpcion}
            opcionA={this.state.opcionA}
            opcionB={this.state.opcionB}
          />
        </div>
        <RegistroHistorico
          historial={this.state.registro}
          opcionAnterior={this.state.opcionAnterior}
        />
      </div>
    );
  }
}
