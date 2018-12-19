import React, { Component } from "react";
import {
  Grid,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import { MensajeSaludo } from "./MensajeSaludo";
import { FormaSaludo } from "./FormaSaludo";

export class Saludo extends Component {
  state = {
    nombre: this.props.nombre,
    mensaje: this.props.mensaje
  };

  manejarNuevoSaludo = datos => {
    this.setState(datos);
  };

  render() {
    const { nombre, mensaje } = this.state;
    return (
      <Grid>
        <MensajeSaludo nombre={nombre} mensaje={mensaje} />

        <FormaSaludo alObtenerNuevoSaludo={this.manejarNuevoSaludo} />
      </Grid>
    );
  }
}

Saludo.defaultProps = {
  nombre: "React",
  mensaje: "Este es un mensaje en React"
};

export default Saludo;
