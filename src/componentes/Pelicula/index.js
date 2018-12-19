import React, { Component } from "react";
import { Grid, PageHeader } from "react-bootstrap";
import BuscarPelicula from "./BuscarPelicula";

export class Pelicula extends Component {
  peliculaPorBuscar = e => {
    const peliculaPorBuscar = e.target.elements.peliculaPorBuscar.value;
    e.preventDefault();
    console.log(peliculaPorBuscar);
  };

  render() {
    return (
      <Grid>
        <PageHeader>Lista de Peliculas</PageHeader>
        <BuscarPelicula peliculaPorBuscar={this.peliculaPorBuscar} />
      </Grid>
    );
  }
}

export default Pelicula;
