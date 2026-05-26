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

    agregarProducto(nombreProducto, cantidad) {
        this._productos.push([nombreProducto, cantidad]);
    }
}

function test()
{
    alert("THIS IS A TEST");
}

function obtenerListas() {
    return JSON.parse(localStorage.getItem("listas")) || [];
}

function guardarListas(List) {
    localStorage.setItem(
        "listas",
        JSON.stringify(List)
    );
}

function agregarLista(List) {
    const listas = obtenerListas();

    listas.push(List);

    guardarListas(listas);
}

function mostrarLista()
{
    const lista = getCurrentList();

    sessionStorage.setItem("listaProductos",JSON.stringify(lista));

    window.location.href ="../Pages/ShowList.html";
}
