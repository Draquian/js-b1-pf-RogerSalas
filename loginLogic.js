function LogIn() 
{
    // Username input
    const username =
        document.getElementById("nameInput").value;

    // Password input
    const password =
        document.getElementById("passwordInput").value;

    // Get users
    const users = obtenerUsuarios();

    // Find user
    const userFound = users.find(user => user.usuario === username);

    // User check
    if (!userFound) 
    {
        alert("El usuario no existe");
        return;
    }

    // Password check
    if (userFound.contrasena !== password) 
    {
        alert("Contraseña incorrecta");
        return;
    }
    
    sessionStorage.setItem("isLogged", "true");

    window.location.href = "ProductsPage.html";
}

function LogOut()
{
    sessionStorage.removeItem("isLogged");

    window.location.href = "Login.html";
}

function SignIn() 
{
    window.location.href = "SignInPage.html";
}

const selectPoblacion = document.getElementById("poblacion");

poblaciones.forEach(item => {

    const option = document.createElement("option");

    option.value = item.poblacion;

    option.textContent = item.poblacion;

    selectPoblacion.appendChild(option);
});

selectPoblacion.addEventListener(
    "change",
    function () {

        const poblacionSeleccionada =
            poblaciones.find(
                item =>
                item.poblacion === this.value
            );

        document.getElementById(
            "codigoPostal"
        ).value =
            poblacionSeleccionada.codigoPostal;
    }
);

function codigoPostalExiste(codigoPostal) {

    return poblaciones.some(
        item =>
        item.codigoPostal === codigoPostal
    );
}

function guardarUsuario() 
{
    const newName = document.getElementById("nombre").value;

    if(newName == "")
    {
        alert("Name can't be empty");
        return;
    }

    const newLastName = document.getElementById("apellidos").value;

    if(newLastName == "")
    {
        alert("Last name can't be empty");
        return;
    }

    const newAddress = document.getElementById("direccion").value;
 
    if(newAddress == "")
    {
        alert("Address can't be empty");
        return;
    }

    const newTown = document.getElementById("poblacion").value;

    const newZipCode = document.getElementById("codigoPostal").value;

    if (!codigoPostalExiste(newZipCode)) 
    {
        alert("No existe una población con ese código postal");
        return;
    }

    const newPhone = document.getElementById("telefono").value;

    // Validar teléfono
    const telefonoValido = /^[0-9]{9}$/.test(newPhone);

    if (!telefonoValido) 
    {
        alert("El teléfono no es válido");
        return;
    }
    
    const newMail = document.getElementById("correoElectronico").value;

    // Validar correo electrónico
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newMail);

    if (!correoValido) 
    {
        alert("El correo electrónico no es válido");
        return;
    }

    const newUsername = document.getElementById("usuario").value;

    if(newUsername == "")
    {
        alert("Username can't be empty");
        return;
    }

    const newPassword = document.getElementById("contrasena").value;

    // VALIDAR CONTRASEÑA
    const longitudValida = newPassword.length >= 8;

    const tieneLetra = /[A-Za-z]/.test(newPassword);

    const tieneNumero = /[0-9]/.test(newPassword);

    const especiales = newPassword.match(/[^A-Za-z0-9]/g) || [];

    const tieneDosEspeciales = especiales.length >= 2;

    if (!longitudValida || !tieneLetra || !tieneNumero || !tieneDosEspeciales)
    {
        alert("La contraseña debe tener mínimo 8 caracteres, letras, números y al menos dos caracteres especiales");
        return;
    }

    const newUser = new User(newName, newLastName, newAddress, newTown, newZipCode, newPhone, newMail, newUsername, newPassword);

    agregarUsuario(newUser);

    window.location.href = "LogIn.html";
}