import React, { Component } from "react";
import { Grid, PageHeader } from "react-bootstrap";
import BuscarPelicula from "./BuscarPelicula";
import PeliculasEncontradas from "./PeliculasEncontradas";

export class Pelicula extends Component {
  state = {
    peliculas: []
  };

  peliculaPorBuscar = async e => {
    const peliculaPorBuscar = e.target.elements.peliculaPorBuscar.value;
    e.preventDefault();
    const api_fetch = await fetch(
      `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${peliculaPorBuscar}&media=movie&country=MX`
    );

    const peliculas = await api_fetch.json();
    this.setState({ peliculas: peliculas.results });
    console.log(this.state.peliculas);
  };

  render() {
    return (
      <Grid>
        <PageHeader>Lista de Peliculas</PageHeader>
        <BuscarPelicula peliculaPorBuscar={this.peliculaPorBuscar} />
        <PeliculasEncontradas peliculas={this.state.peliculas} />
      </Grid>
    );
  }
}

export default Pelicula;
