import React from "react";
import ReactDOM from "react-dom";

const name = "Alberto";
const jsx = (
  <div>
    <h1>Hola, soy Alberto</h1>
    <p>Soy Ing. Software</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, `Hola, soy ${name}`),
  React.createElement("p", {}, "Soy Ing. Software")
);
const container = document.getElementById("app");

ReactDOM.render(jsx, container);
