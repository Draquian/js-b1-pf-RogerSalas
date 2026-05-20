class List {

    constructor(usuario, fecha, productos = []) {
        this._usuario = usuario;
        this._fecha = fecha;
        this._productos = productos;
    }

    // SETTERS

    setUsuario(usuario) {
        this._usuario = usuario;
    }

    setFecha(fecha) {
        this._fecha = fecha;
    }

    setProductos(productos) {
        this._productos = productos;
    }

    // GETTERS

    getUsuario() {
        return this._usuario;
    }

    getFecha() {
        return this._fecha;
    }

    getProductos() {
        return this._productos;
    }

    // Método opcional para añadir productos

    agregarProducto(nombreProducto, cantidad) {
        this.productos.push([nombreProducto, cantidad]);
    }
}

