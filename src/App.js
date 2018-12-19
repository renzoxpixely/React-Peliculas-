import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Saludo } from "./Saludo";

export class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Saludo} />
      </Router>
    );
  }
}

export default App;
