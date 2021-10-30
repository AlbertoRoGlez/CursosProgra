var array = ["piedra", "papel", "tijera"];
var resultado = function (user, cpu) {
  user = String(prompt("Escoge piedra, papel, o tijera")).toLowerCase();
  cpu = array[Math.floor(Math.random() * 3)];

  if (user != cpu) {
    if (user === "piedra" && cpu === "tijera") {
      console.log(`Usuario gana, escogió ${user}, Cpu escogió ${cpu}`);
    } else if (user === "tijera" && cpu === "papel") {
      console.log(`Usuario gana, escogió ${user}, Cpu escogió ${cpu}`);
    } else if (user === "papel" && cpu === "piedra") {
      console.log(`Usuario gana, escogió ${user}, Cpu escogió ${cpu}`);
    } else {
      console.log(`Cpu gana con ${cpu}, usuario pierde con ${user}`);
    }
  } else if (user === cpu) {
    console.log(`Empate usuario escogió ${user}, Cpu escogió ${cpu}`);
  } else {
    console.log(`Por favor escoge piedra, papel, o tijera`);
  }
};

resultado();
