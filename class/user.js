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
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.poblacion = poblacion;
        this.codigoPostal = codigoPostal;
        this.telefono = telefono;
        this.correoElectronico = correoElectronico;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    // SETTERS

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    setPoblacion(poblacion) {
        this.poblacion = poblacion;
    }

    setCodigoPostal(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    setCorreoElectronico(correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    setUsuario(usuario) {
        this.usuario = usuario;
    }

    setContrasena(contrasena) {
        this.contrasena = contrasena;
    }

    // GETTERS

    getNombre() {
        return this.nombre;
    }

    getApellidos() {
        return this.apellidos;
    }

    getDireccion() {
        return this.direccion;
    }

    getPoblacion() {
        return this.poblacion;
    }

    getCodigoPostal() {
        return this.codigoPostal;
    }

    getTelefono() {
        return this.telefono;
    }

    getCorreoElectronico() {
        return this.correoElectronico;
    }

    getUsuario() {
        return this.usuario;
    }

    getContrasena() {
        return this.contrasena;
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