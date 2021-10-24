// const element = document.createElement("h1");
// element.innerText = "Hello, world";
// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello, world!</h1>;
const container = document.getElementById("app");

ReactDOM.render(element, container);
