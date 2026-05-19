class List {

    constructor(usuario, fecha, productos = []) {
        this.usuario = usuario;
        this.fecha = fecha;
        this.productos = productos;
    }

    // SETTERS

    setUsuario(usuario) {
        this.usuario = usuario;
    }

    setFecha(fecha) {
        this.fecha = fecha;
    }

    setProductos(productos) {
        this.productos = productos;
    }

    // GETTERS

    getUsuario() {
        return this.usuario;
    }

    getFecha() {
        return this.fecha;
    }

    getProductos() {
        return this.productos;
    }

    // Método opcional para añadir productos

    agregarProducto(nombreProducto, cantidad) {
        this.productos.push([nombreProducto, cantidad]);
    }
}

