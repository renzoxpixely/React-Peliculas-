import React from "react";
import { Media } from "react-bootstrap";

const PeliculasEncontradas = props => (
  <div>
    {props.peliculas.map(pelicula => (
      <Media key={pelicula.trackId}>
        <Media.Left>
          <img src={pelicula.artworkUrl100} alt="{pelicula.trackName}" />
        </Media.Left>
        <Media.Body>
          <Media.Heading>{pelicula.trackName}</Media.Heading>
          <p>{pelicula.longDescription}</p>
        </Media.Body>
      </Media>
    ))}
  </div>
);

export default PeliculasEncontradas;
