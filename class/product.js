class Product {

    constructor(nombre, tipo, enlace) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.enlace = enlace;
    }

    // SETTERS
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    setEnlace(enlace) {
        this.enlace = enlace;
    }

    // GETTERS
    getNombre() {
        return this.nombre;
    }

    getTipo() {
        return this.tipo;
    }

    getEnlace() {
        return this.enlace;
    }
}

function mostrarProductos(button)
{
    // Obtener ALT de la imagen del botón
    const tipo = button.querySelector("img").alt;

    // Filtrar productos por tipo
    const productosFiltrados = productos.filter(producto => producto.tipo === tipo);

    alert(productosFiltrados[0].nombre);

    // Contenedor
    /*const container = document.getElementById("productosContainer");

    // Limpiar contenido anterior
    container.innerHTML = "";

    // Mostrar productos
    productosFiltrados.forEach(producto =>
    {
        container.innerHTML += `
            <div>
                <h3>
                    ${producto.nombre}
                </h3>
                <img
                    src="${producto.enlace}"
                    width="150"
                >
            </div>
        `;
    });*/
}