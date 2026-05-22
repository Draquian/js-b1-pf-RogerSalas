class Product {

    constructor(nombre, tipo, enlace) {
        this._nombre = nombre;
        this._tipo = tipo;
        this._enlace = enlace;
    }

    // SETTERS
    setNombre(nombre) {
        this._nombre = nombre;
    }

    setTipo(tipo) {
        this._tipo = tipo;
    }

    setEnlace(enlace) {
        this._enlace = enlace;
    }

    // GETTERS
    getNombre() {
        return this._nombre;
    }

    getTipo() {
        return this._tipo;
    }

    getEnlace() {
        return this._enlace;
    }
}

function mostrarProductos(button)
{
    // Obtener ALT de la imagen del botón
    const tipo = button.querySelector("img").alt;

    // Filtrar productos por tipo
    const productosFiltrados = productos.filter(producto => producto._tipo === tipo);

    // Contenedor
    const container = document.getElementById("productosContainer");

    // Limpiar contenido anterior
    container.innerHTML = "";

    // Mostrar productos
    productosFiltrados.forEach(producto =>
    {
       // Crear botón
        const productButton = document.createElement("button");

        // Contenido del botón
        productButton.innerHTML = `
            <h3>${producto._nombre}</h3>
            <img
                src="${producto._enlace}"
                width="150"
            >
        `;

        // Listener
    productButton.addEventListener("click", () =>
    {
        pedirNumero(producto)
    });

    container.appendChild(productButton);
    });
}

function pedirNumero(producto) {
  let numero = 1;

  do {
    numero = prompt(
      "Introduce un número entero mayor o igual a 1:",
      numero
    );

    // Si cancela
    if (numero === null) {
      return;
    }

    numero = Number(numero);

  } while (!Number.isInteger(numero) || numero < 1);

  addProductToList(producto, numero);
}

let listaDeProductos = [];

function addProductToList(producto, numero)
{
    listaDeProductos.push({
        nombre: producto._nombre,
        cantidad: numero
    });
}

function info()
{
    if (listaDeProductos && listaDeProductos.length > 0)
    {
        alert(listaDeProductos[0].nombre + " - " + listaDeProductos[0].cantidad);
    }
    else
    {
        alert("ERROR");
    }
}

function getCurrentList()
{
    return listaDeProductos;
}

function removeProducto(nombreProducto)
{
    listaDeProductos = listaDeProductos.filter(
        producto => producto.nombre !== nombreProducto
    );
}

function saveList()
{
    const user = JSON.parse(sessionStorage.getItem("user"));

    const newList = new List(
        user._usuario,
        new Date(),
        listaDeProductos
    );

    agregarLista(newList);
}

