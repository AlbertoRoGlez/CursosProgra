const _private = new WeakMap(); //WeakMap nos va a ayudar a encapsular nuestras propiedades

class Book {
  constructor(title, author, price) {
    // Metemos todas las propiedades dentro de una constante para poderlas encapsular más sencillo
    const properties = {
      _title: title,
      _author: author,
      _price: price,
    };

    _private.set(this, { properties }); //Set nos permite colocar nuestras propiedades como privadas para encapsular
  }

  //Obtiene el título de un libro, por eso nos lo puede mostrar en la consola, se usa una vez ya encapsulado el código
  get title() {
    return _private.get(this).properties["_title"];
  }
  //Setea/modifica el titulo de un libro, si no quisieramos que nadie lo pueda modificar solo eliminamos este código
  set title(newTitle) {
    return (_private.get(this).properties["_title"] = newTitle);
  }

  get author() {
    return _private.get(this).properties["_author"];
  }

  set author(newAuthor) {
    return (_private.get(this).properties["_author"] = newAuthor);
  }
  get price() {
    return _private.get(this).properties["_price"];
  }

  set price(newPrice) {
    return (_private.get(this).properties["_price"] = newPrice);
  }

  //Método que nos permite obtener toda la información de un libro basado en las propiedades de titulo, autor, y precio
  getAllData() {
    console.log(
      `Título: ${this.title} Autor: ${this.author} precio: ${this.price}`
    );
  }
}

//Con la herencia (extends Book), Comic obtendrá todos los atributos de Book, ya solo tendremos que codear lo que haga falta
class Comic extends Book {
  constructor(title, author, price, illustrators) {
    //super hace referencia a la calse superior, a la clase padre, para utilizar las mismas propiedades de Book
    super(title, author, price);
    //Illustrators es única de Comic en este caso, por lo que no la pasamos al super
    this.illustrators = illustrators;
  }
  //Método para agregar más ilustradores
  addIllustrator(newIllustrator = []) {
    this.illustrators.push(newIllustrator);
  }

  getAllData() {
    super.getAllData();
    console.log(`Ilustradores: ${this.illustrators}`);
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(amount, price) {
    this.products.push(...Array(amount).fill(price));
    //Al Array() se le indica la cantidad de espacios que va a usar (amount)
    //y con .fill() le decimos con qué los va a rellenar, en este caso el precio,
    // los ... sirven para crear una copia del Array y concatenarle el resto, de modo
    // no nos genera más Array al añadir diferentes productos.
  }

  //Método para mostrar estos productos
  showProducts() {
    console.log(this.products);
  }

  calcTotal() {
    return (
      this.products
        .map((price) => price)
        //map va a ejecutar una función sobre cada uno de nuestros productos
        //map recibe el precio en un array function de la forma en que la escribimos
        .reduce((ac, price) => ac + price, 0)
      //a reduce le pasamos un acumulador (ac) porque así funciona esta función,
      //y después le vamos a pasar el precio
      //ac lo vamos a iniciar en cero y con cada iteración le vamos a sumar el price,
      // el segundo argumento (0) es el valor inicial del acumualdor
    );
  }

  printTicket() {
    console.log(`Total a pagar ${this.calcTotal()}`);
  }
}

const book1 = new Book("1984", "G.O", 350); //Creamos un nuevo libro.
const book2 = new Book("Frankenstein", "M.S", 200); //Creamos un nuevo libro.

book1.title = "mil novecientos ochenta y cuatro"; //Titulo modificado gracias a la ayuda del set title(newTitle)

const comic1 = new Comic("Killer Joke", "A.M", 150, ["B.B"]); //Creamos un nuevo comic.

console.log(book1.title); //No ponemos el guion bajo en title porque la estamos obteniendo desde el get title()
console.log(comic1); //Estamos usando otra vez el get title() creado en Book, solo que esta vez es una propiedad padre

comic1.addIllustrator("J.H"); //Uso del método para agregar ilustradores
console.log(comic1.illustrators);

const cart = new ShoppingCart(); //Creamos un nuevo shoppingCart.

cart.addProduct(2, comic1.price); //primer producto en el shoppingCart
cart.addProduct(3, book1.price); //segundo producto en el shoppingCart

cart.showProducts();
cart.printTicket();

book1.getAllData(); //Metodo creado en la clase padre
comic1.getAllData(); //Comic puede usar el metodo creado en la clase padre porque
//al darle herencia nos permite usar todos los métodos de la clase padre,
//aunque lo terminamos añadiendo a cómic para agregar el ilustrador.
