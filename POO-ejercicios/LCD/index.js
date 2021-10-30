const _private = new WeakMap();
class NumeroUno {
  constructor(numero) {
    const properties = {
      numero: numero,
    };
    _private.set(this, { properties });
  }
  get numero() {
    return _private.get(this).properties["numero"];
  }

  number1LCD() {
    console.log(" ");
    console.log(" |");
    console.log(" |");
  }
  number1MediumLCD() {
    console.log(" ");
    console.log(" |");
    console.log(" |");
    console.log(" |");
    console.log(" |");
  }
  number1LargeLCD() {
    console.log(" ");
    console.log(" |");
    console.log(" |");
    console.log(" |");
    console.log(" |");
    console.log(" |");
    console.log(" |");
  }
}
class NumeroDos extends NumeroUno {
  constructor(numero) {
    super(numero);
  }

  number2LCD() {
    console.log("_");
    console.log("_|");
    console.log("|_");
  }

  number2MediumLCD() {
    console.log(" __");
    console.log("   |");
    console.log(" __|");
    console.log("|  ");
    console.log("|__");
  }

  number2LargeLCD() {
    console.log(" ___");
    console.log("    |");
    console.log("    |");
    console.log(" ___|");
    console.log("|   ");
    console.log("|   ");
    console.log("|___");
  }
}
class NumeroTres extends NumeroUno {
  constructor(numero) {
    super(numero);
  }

  number3LCD() {
    console.log("_");
    console.log("_|");
    console.log("_|");
  }

  number3MediumLCD() {
    console.log(" __");
    console.log("   |");
    console.log(" __|");
    console.log("   |");
    console.log(" __|");
  }

  number3LargeLCD() {
    console.log(" ___");
    console.log("    |");
    console.log("    |");
    console.log(" ___|");
    console.log("    |");
    console.log("    |");
    console.log(" ___|");
  }
}
class NumeroCuatro extends NumeroUno {
  constructor(numero) {
    super(numero);
  }

  number4LCD() {
    console.log(" ");
    console.log("|_|");
    console.log("  |");
  }
  number4MediumLCD() {
    console.log("   ");
    console.log("|  |");
    console.log("|__|");
    console.log("   |");
    console.log("   |");
  }

  number4LargeLCD() {
    console.log("    ");
    console.log("|   |");
    console.log("|   |");
    console.log("|___|");
    console.log("    |");
    console.log("    |");
    console.log("    |");
  }
}
class NumeroCinco extends NumeroUno {
  constructor(numero) {
    super(numero);
  }

  number5LCD() {
    console.log(" _");
    console.log("|_");
    console.log(" _|");
  }

  number5MediumLCD() {
    console.log(" __");
    console.log("|   ");
    console.log("|__ ");
    console.log("   |");
    console.log(" __|");
  }

  number5LargeLCD() {
    console.log(" ___");
    console.log("|    ");
    console.log("|    ");
    console.log("|___ ");
    console.log("    |");
    console.log("    |");
    console.log(" ___|");
  }
}
class NumeroSeis extends NumeroUno {
  constructor(numero) {
    super(numero);
  }

  number6LCD() {
    console.log(" _");
    console.log("|_");
    console.log("|_|");
  }
  number6MediumLCD() {
    console.log(" __");
    console.log("|   ");
    console.log("|__ ");
    console.log("|  |");
    console.log("|__|");
  }

  number6LargeLCD() {
    console.log(" ___");
    console.log("|    ");
    console.log("|    ");
    console.log("|___ ");
    console.log("|   |");
    console.log("|   |");
    console.log("|___|");
  }
}
class NumeroSiete extends NumeroUno {
  constructor(numero) {
    super(numero);
  }
  number7LCD() {
    console.log("_");
    console.log(" |");
    console.log(" |");
  }
  number7MediumLCD() {
    console.log(" __");
    console.log("   |");
    console.log("   |");
    console.log("   |");
    console.log("   |");
  }

  number7LargeLCD() {
    console.log(" ___");
    console.log("    |");
    console.log("    |");
    console.log("    |");
    console.log("    |");
    console.log("    |");
    console.log("    |");
  }
}
class NumeroOcho extends NumeroUno {
  constructor(numero) {
    super(numero);
  }
  number8LCD() {
    console.log(" _");
    console.log("|_|");
    console.log("|_|");
  }
  number8MediumLCD() {
    console.log(" __");
    console.log("|  |");
    console.log("|__|");
    console.log("|  |");
    console.log("|__|");
  }

  number8LargeLCD() {
    console.log(" ___");
    console.log("|   |");
    console.log("|   |");
    console.log("|___|");
    console.log("|   |");
    console.log("|   |");
    console.log("|___|");
  }
}
class NumeroNueve extends NumeroUno {
  constructor(numero) {
    super(numero);
  }
  number9LCD() {
    console.log(" _");
    console.log("|_|");
    console.log("  |");
  }
  number9MediumLCD() {
    console.log(" __");
    console.log("|  |");
    console.log("|__|");
    console.log("   |");
    console.log("   |");
  }

  number9LargeLCD() {
    console.log(" ___");
    console.log("|   |");
    console.log("|   |");
    console.log("|___|");
    console.log("    |");
    console.log("    |");
    console.log("    |");
  }
}
class NumeroCero extends NumeroUno {
  constructor(numero) {
    super(numero);
  }
  number0LCD() {
    console.log(" _");
    console.log("| |");
    console.log("|_|");
  }
  number0MediumLCD() {
    console.log(" __");
    console.log("|  |");
    console.log("|  |");
    console.log("|  |");
    console.log("|__|");
  }

  number0LargeLCD() {
    console.log(" ___");
    console.log("|   |");
    console.log("|   |");
    console.log("|   |");
    console.log("|   |");
    console.log("|   |");
    console.log("|___|");
  }
}
//================================================================================//
const cuantosNum = Number(prompt("¿Cuántos números deseas ingresar?"));
const array = [];
if (cuantosNum > 0) {
  const font = String(
    prompt(
      `Escribe "Small", "Medium", o "Large" para seleccionar el tamaño de fuente`
    )
  ).toLowerCase();

  if (font === "small" || font === `"small"`) {
    for (let i = 0; i < cuantosNum; i++) {
      let count = Number(prompt(`Ingresa el numero ${i + 1} de ${cuantosNum}`));
      if (count === 1) {
        let num1 = new NumeroUno(1);
        num1.number1LCD();
      } else if (count === 2) {
        let num2 = new NumeroDos(2);
        num2.number2LCD();
      } else if (count === 3) {
        let num3 = new NumeroTres(3);
        num3.number3LCD();
      } else if (count === 4) {
        let num4 = new NumeroCuatro(4);
        num4.number4LCD();
      } else if (count === 5) {
        let num5 = new NumeroCinco(5);
        num5.number5LCD();
      } else if (count === 6) {
        let num6 = new NumeroSeis(6);
        num6.number6LCD();
      } else if (count === 7) {
        let num7 = new NumeroSiete(7);
        num7.number7LCD();
      } else if (count === 8) {
        let num8 = new NumeroOcho(8);
        num8.number8LCD();
      } else if (count === 9) {
        let num9 = new NumeroNueve(9);
        num9.number9LCD();
      } else if (count === 0) {
        let num0 = new NumeroCero(0);
        num0.number0LCD();
      } else {
        console.log("Ingresa un carácter válido");
      }
      array.push(count);
    }
  } else if (font === "medium" || font === `"medium"`) {
    for (let i = 0; i < cuantosNum; i++) {
      let count = Number(prompt(`Ingresa el numero ${i + 1} de ${cuantosNum}`));
      if (count === 1) {
        let num1 = new NumeroUno(1);
        num1.number1MediumLCD();
      } else if (count === 2) {
        let num2 = new NumeroDos(2);
        num2.number2MediumLCD();
      } else if (count === 3) {
        let num3 = new NumeroTres(3);
        num3.number3MediumLCD();
      } else if (count === 4) {
        let num4 = new NumeroCuatro(4);
        num4.number4MediumLCD();
      } else if (count === 5) {
        let num5 = new NumeroCinco(5);
        num5.number5MediumLCD();
      } else if (count === 6) {
        let num6 = new NumeroSeis(6);
        num6.number6MediumLCD();
      } else if (count === 7) {
        let num7 = new NumeroSiete(7);
        num7.number7MediumLCD();
      } else if (count === 8) {
        let num8 = new NumeroOcho(8);
        num8.number8MediumLCD();
      } else if (count === 9) {
        let num9 = new NumeroNueve(9);
        num9.number9MediumLCD();
      } else if (count === 0) {
        let num0 = new NumeroCero(0);
        num0.number0MediumLCD();
      } else {
        console.log("Ingresa un carácter válido");
      }
      array.push(count);
    }
  } else if (font === "large" || font === `"large"`) {
    for (let i = 0; i < cuantosNum; i++) {
      let count = Number(prompt(`Ingresa el numero ${i + 1} de ${cuantosNum}`));
      if (count === 1) {
        let num1 = new NumeroUno(1);
        num1.number1LargeLCD();
      } else if (count === 2) {
        let num2 = new NumeroDos(2);
        num2.number2LargeLCD();
      } else if (count === 3) {
        let num3 = new NumeroTres(3);
        num3.number3LargeLCD();
      } else if (count === 4) {
        let num4 = new NumeroCuatro(4);
        num4.number4LargeLCD();
      } else if (count === 5) {
        let num5 = new NumeroCinco(5);
        num5.number5LargeLCD();
      } else if (count === 6) {
        let num6 = new NumeroSeis(6);
        num6.number6LargeLCD();
      } else if (count === 7) {
        let num7 = new NumeroSiete(7);
        num7.number7LargeLCD();
      } else if (count === 8) {
        let num8 = new NumeroOcho(8);
        num8.number8LargeLCD();
      } else if (count === 9) {
        let num9 = new NumeroNueve(9);
        num9.number9LargeLCD();
      } else if (count === 0) {
        let num0 = new NumeroCero(0);
        num0.number0LargeLCD();
      } else {
        console.log("Ingresa un carácter válido");
      }
      array.push(count);
    }
  } else {
    alert("Por favor, selecciona una fuente disponible");
    console.log("Por favor, selecciona una fuente disponible");
  }
  console.log(array);
} else if (cuantosNum <= 0) {
  alert("Por favor, selecciona un valor mayor y diferente de cero");
  console.log("Por favor, selecciona un valor mayor y diferente de cero");
} else {
  alert("Por favor, selecciona un valor mayor y diferente de cero");
  console.log("Por favor, selecciona un valor mayor y diferente de cero");
}
