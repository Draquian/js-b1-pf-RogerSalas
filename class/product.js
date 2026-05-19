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
