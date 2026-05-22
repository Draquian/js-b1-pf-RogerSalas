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
        // Crear contenedor
        const wrapper = document.createElement("div");
    
        // Crear input cantidad
        const cantidadInput = document.createElement("input");
        cantidadInput.type = "number";
        cantidadInput.min = "1";
        cantidadInput.value = "1";
        
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
        const cantidad = parseInt(cantidadInput.value);

        addProductToList(producto, cantidad);
    });

    // Agregar elementos
    wrapper.appendChild(cantidadInput);
    wrapper.appendChild(productButton);

    // Agregar al contenedor principal
    container.appendChild(wrapper);
    });
}

let listaDeProductos = [];

function addProductToList(producto)
{
    alert(producto._nombre);

    listaDeProductos.push(producto);
}

function info()
{
    if (listaDeProductos && listaDeProductos.length > 0)
    {
        alert(listaDeProductos.length);
    }
    else
        alert("ERROR");

}

function removeProducto(nombreProducto)
{
    listaDeProductos = listaDeProductos.filter(producto => producto._nombre !== nombreProducto);
}

function saveList()
{
    const user = JSON.parse(sessionStorage.getItem("user"));

    const newList = new List(user._usuario, new Date(), listaDeProductos);

    agregarLista()
}

