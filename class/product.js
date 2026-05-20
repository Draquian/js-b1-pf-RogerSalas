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
        container.innerHTML += `
            <div>
                <h3>
                    ${producto._nombre}
                </h3>
                <img
                    src="${producto._enlace}"
                    width="150"
                >
            </div>
        `;
    });
}
