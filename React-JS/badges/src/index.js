import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/badgenew";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/badge";

const container = document.getElementById("app");

// Convertimos el Badge en un elemento y lo introducimos en el render.
// ReactDOM.render(
//   <Badge
//     firstName="Alberto"
//     lastName="Rosales"
//     jobTitle="Software Engineer"
//     twitter="AlbertoRoGlez"
//     avatarUrl="https://static.platzi.com/media/avatars/avatars/AlbertoRosalesGlez_2808dc89-13c3-4067-b9a1-a7f42c8a6968.jpg"
//   />,
//   container
// );
//En Badge del Dom.render colocamos la información de los props que estarán en el badge.js//
//-------------------------------------------------------------------------------------------------------------------------------//
ReactDOM.render(<BadgeNew />, container);
