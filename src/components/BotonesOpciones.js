import React from "react";

export default class BotonesOpciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="a" className="botones" onClick={this.props.evento}>
            A
          </button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button id="b" className="botones" onClick={this.props.evento}>
            B
          </button>
          <h2>{this.props.opcionB}</h2>
        </div>
      </div>
    );
  }
}
