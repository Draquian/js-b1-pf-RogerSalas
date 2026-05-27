class Product {

    constructor(nombre, tipo, enlace) 
    {
        this._nombre = nombre;
        this._tipo = tipo;
        this._enlace = enlace;
    }

    setNombre(nombre) 
    {
        this._nombre = nombre;
    }

    setTipo(tipo) 
    {
        this._tipo = tipo;
    }

    setEnlace(enlace) 
    {
        this._enlace = enlace;
    }

    getNombre() 
    {
        return this._nombre;
    }

    getTipo() 
    {
        return this._tipo;
    }

    getEnlace() 
    {
        return this._enlace;
    }
}

function mostrarProductos(button)
{
    const tipo = button.querySelector("img").alt;

    const productosFiltrados = productos.filter(producto => producto._tipo === tipo);

    const container = document.getElementById("productosContainer");

    container.innerHTML = "";

    productosFiltrados.forEach(producto =>
    {
        const productButton = document.createElement("button");

        productButton.innerHTML = `<h3>${producto._nombre}</h3> <img src="${producto._enlace}" width="150">`;

        productButton.addEventListener("click", () =>
        {
            pedirNumero(producto)
        });

        container.appendChild(productButton);
    });
}

function pedirNumero(producto)
{
    let numero = 1;

    do {
        numero = prompt(
            "Introduce un número entero mayor o igual a 1:",
            numero
        );

        if (numero === null)
            return;

        numero = Number(numero);

    } while (!Number.isInteger(numero) || numero < 1);

    addProductToList(producto, numero);
}

// let listaDeProductos = [];
let listaDeProductos = JSON.parse(sessionStorage.getItem("listaActual")) || [];

function addProductToList(producto, numero)
{
    const productoExistente = listaDeProductos.find(item => item.nombre === producto._nombre);

    if (productoExistente)
        productoExistente.cantidad += numero;
    else
        listaDeProductos.push({nombre: producto._nombre, cantidad: numero});

    alert("Producto añadido correctamente");
}

function getCurrentList()
{
    return listaDeProductos;
}

function removeProducto(nombreProducto)
{
    listaDeProductos = listaDeProductos.filter(producto => producto.nombre !== nombreProducto);
}

function saveList()
{
    if (listaDeProductos.length === 0)
    {
        alert("No hay productos para guardar");
        return;
    }

    const user = JSON.parse(sessionStorage.getItem("user"));

    const copiaProductos = [...listaDeProductos];

    const newList = new List(user._usuario, new Date().toISOString(), copiaProductos);

    agregarLista(newList);

    alert("Lista guardada correctamente");
}
