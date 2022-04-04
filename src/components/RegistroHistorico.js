import React from "react";

export default class RegistroHistorico extends React.Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.opcionAnterior}</h3>
        <ul>
          {this.props.historial.map((opcion, index) => (
            <li key={index}>{opcion}</li>
          ))}
        </ul>
      </div>
    );
  }
}
