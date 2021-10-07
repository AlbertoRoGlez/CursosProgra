//- const element = document.createElement("h1"); //Con document.createElement podemos crear elementos.
//- element.innerText = "Hello, Platzi Badges!"; //Aqui en decimos que element tendrá un texto interior.

//- const container = document.getElementById("app");
//Const sirve para crear variables, getElementById nos sirve para encontrar Id's del HTML.

//- container.appendChild(element);
// Aqui estamos hablando a la variable container anteriormente creada y refiriendonos al elemento anteriormente creado.
// Entonces lo que pasa es que en element declaramos que era un titulo con el texto "Hello, Platzi",
// al declarar la variable container obtuvimos el Id en el HTML, el cual es app
// y finalmente le dijimos a container que tenía el element con el texto,
// de modo que es como si hubiesemos escrito texto en el Id "app" del HTML

//---------------- Hasta aqui no estabamos usando React, empecemos ---------------- //

import React from "react"; // React será el análogo al createElement
import ReactDOM from "react-dom"; // ReactDOM será el análogo a appendChild

const jsx = <h1>Hello, Platzi Badges from React!</h1>; //Aqui estamos usando JSX, la alternativa con React sería la siguiente:
const element = React.createElement("h1", {}, "Hola, soy el children."); // createElement tiene tres argumentos, (Tipo de elemento, Atributos, Children que es parecido al innerText)
// Desde el tercer argumento en adelante, se consideran de tipo Children
//----------------------------------------------------------------------------//

const element_atributo = React.createElement(
  "a",
  { href: "https://platzi.com" },
  "Ir a Platzi"
); //Ejemplo ahora con algo que sí tiene un atributo.
//----------------------------------------------------------------------------//

const name = "Alberto Rosales";
const element_variable = React.createElement("h1", {}, `Hola, soy ${name}`); //Ejemplo con una variable.
//----------------------------------------------------------------------------//

const jsx_name = <h1>Hola, soy {name}</h1>; //Ejemplo de arriba con la variable name, pero usando JSX en lugar de React.
// En este caso lo que se coloca entre llaves nos permite introducir variables / expresiones de JavaScript.
// Una expresión es algo que se va a interpretar y evaluar, como una operación matemática.
// Si las expresiones terminan siendo un valor tipo false, como 0, string vacio, un false, null, undefined, etc. No se terminarán viendo.
//----------------------------------------------------------------------------//

const jsx_complex = (
  <div>
    <h1>Hola, soy Alberto</h1>
    <p>Soy Ingeniero de Software</p>
  </div>
);
// Eh aquí un ejemplo más laborioso.

const element_complex = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Alberto"),
  React.createElement("p", {}, "Soy Ingeniero de la web")
);
// El mismo ejemplo anterior, pero en lugar de usar JSX usamos React.createElement, notese que es más complejo.
// Procurar usar JSX siempre que se pueda.
//----------------------------------------------------------------------------//

const container = document.getElementById("app");
ReactDOM.render(element_complex, container); //Render toma dos argumentos, primero el ("qué" queremos renderizar, el segundo es "dónde" lo queremos renderizar).
