class List {

    constructor(usuario, fecha, productos = []) 
    {
        this._usuario = usuario;
        this._fecha = fecha;
        this._productos = productos;
    }

    setUsuario(usuario) 
    {
        this._usuario = usuario;
    }

    setFecha(fecha) 
    {
        this._fecha = fecha;
    }

    setProductos(productos)
    {
        this._productos = productos;
    }

    getUsuario() 
    {
        return this._usuario;
    }

    getFecha() 
    {
        return this._fecha;
    }

    getProductos() 
    {
        return this._productos;
    }

    agregarProducto(nombreProducto, cantidad) 
    {

        this._productos.push([nombreProducto, cantidad]);
    }
}

function obtenerListas()
{
    return JSON.parse(localStorage.getItem("listas")) || [];
}

function guardarListas(listas)
{
    localStorage.setItem("listas", JSON.stringify(listas));
}

function agregarLista(lista)
{
    const listas = obtenerListas();

    listas.push(lista);

    listas.sort((a, b) => new Date(b._fecha) - new Date(a._fecha));

    guardarListas(listas);
}

function mostrarLista()
{
    sessionStorage.setItem("modoLista", "actual");

    sessionStorage.setItem("listaActual",JSON.stringify(listaDeProductos));

    window.location.href = "../Pages/ShowList.html";
}

function mostrarTodasLasListas()
{
    sessionStorage.setItem("modoLista", "todas");

    window.location.href = "../Pages/ShowList.html";
}