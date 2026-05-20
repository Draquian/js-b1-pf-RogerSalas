class User {

    constructor(
        nombre,
        apellidos,
        direccion,
        poblacion,
        codigoPostal,
        telefono,
        correoElectronico,
        usuario,
        contrasena
    ) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._direccion = direccion;
        this._poblacion = poblacion;
        this._codigoPostal = codigoPostal;
        this._telefono = telefono;
        this._correoElectronico = correoElectronico;
        this._usuario = usuario;
        this._contrasena = contrasena;
    }

    // SETTERS

    setNombre(nombre) {
        this._nombre = nombre;
    }

    setApellidos(apellidos) {
        this._apellidos = apellidos;
    }

    setDireccion(direccion) {
        this._direccion = direccion;
    }

    setPoblacion(poblacion) {
        this._poblacion = poblacion;
    }

    setCodigoPostal(codigoPostal) {
        this._codigoPostal = codigoPostal;
    }

    setTelefono(telefono) {
        this._telefono = telefono;
    }

    setCorreoElectronico(correoElectronico) {
        this._correoElectronico = correoElectronico;
    }

    setUsuario(usuario) {
        this._usuario = usuario;
    }

    setContrasena(contrasena) {
        this.contrasena = contrasena;
    }

    // GETTERS

    getNombre() {
        return this._nombre;
    }

    getApellidos() {
        return this._apellidos;
    }

    getDireccion() {
        return this._direccion;
    }

    getPoblacion() {
        return this._poblacion;
    }

    getCodigoPostal() {
        return this._codigoPostal;
    }

    getTelefono() {
        return this._telefono;
    }

    getCorreoElectronico() {
        return this._correoElectronico;
    }

    getUsuario() {
        return this._usuario;
    }

    getContrasena() {
        return this._contrasena;
    }
}

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function guardarUsuarios(usuarios) {
    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );
}

function agregarUsuario(usuario) {
    const usuarios = obtenerUsuarios();

    usuarios.push(usuario);

    guardarUsuarios(usuarios);
}
