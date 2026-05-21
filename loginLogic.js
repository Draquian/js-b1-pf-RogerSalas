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
    const userFound = users.find(user => user._usuario === username);

    // User check
    if (!userFound) 
    {
        alert("El usuario no existe");
        return;
    }

    // Password check
    if (userFound._contrasena !== password) 
    {
        alert("Contraseña incorrecta");
        return;
    }
    
    sessionStorage.setItem("isLogged", "true");
    sessionStorage.setItem("user", JSON.stringify(userFound))

    window.location.href = "ProductsPage.html";
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
    // INPUTS

    const nombreInput = document.getElementById("nombre");

    const apellidosInput = document.getElementById("apellidos");

    const direccionInput = document.getElementById("direccion");

    const poblacionInput = document.getElementById("poblacion");

    const codigoPostalInput = document.getElementById("codigoPostal");

    const telefonoInput = document.getElementById("telefono");

    const correoInput = document.getElementById("correoElectronico");

    const usuarioInput = document.getElementById("usuario");

    const contrasenaInput = document.getElementById("contrasena");

    nombreInput.setCustomValidity("");
    apellidosInput.setCustomValidity("");
    direccionInput.setCustomValidity("");
    codigoPostalInput.setCustomValidity("");
    telefonoInput.setCustomValidity("");
    correoInput.setCustomValidity("");
    usuarioInput.setCustomValidity("");
    contrasenaInput.setCustomValidity("");

    if (nombreInput.value.trim() === "")
    {
        nombreInput.setCustomValidity("Name can't be empty");
        nombreInput.reportValidity();
        return;
    }

    if (apellidosInput.value.trim() === "")
    {
        apellidosInput.setCustomValidity("Last name can't be empty");
        apellidosInput.reportValidity();
        return;
    }

    if (direccionInput.value.trim() === "")
    {
        direccionInput.setCustomValidity("Address can't be empty");
        direccionInput.reportValidity();
        return;
    }

    if (!codigoPostalExiste(codigoPostalInput.value))
    {
        codigoPostalInput.setCustomValidity("No existe una población con ese código postal");
        codigoPostalInput.reportValidity();
        return;
    }

    const telefonoValido =/^[0-9]{9}$/.test(telefonoInput.value);

    if (!telefonoValido)
    {
        telefonoInput.setCustomValidity(
            "El teléfono no es válido"
        );

        telefonoInput.reportValidity();

        return;
    }


    // EMAIL VALIDATION

    const correoValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(correoInput.value);

    if (!correoValido)
    {
        correoInput.setCustomValidity(
            "El correo electrónico no es válido"
        );

        correoInput.reportValidity();

        return;
    }


    // USERNAME VALIDATION

    if (usuarioInput.value.trim() === "")
    {
        usuarioInput.setCustomValidity(
            "Username can't be empty"
        );

        usuarioInput.reportValidity();

        return;
    }


    // CHECK USERNAME EXISTS

    const users =
        JSON.parse(
            localStorage.getItem("usuarios")
        ) || [];

    const usernameExists =
        users.some(
            user =>
            user._usuario.toLowerCase() ===
            usuarioInput.value.toLowerCase()
        );

    if (usernameExists)
    {
        usuarioInput.setCustomValidity(
            "This username is already taken"
        );

        usuarioInput.reportValidity();

        return;
    }


    // PASSWORD VALIDATION

    const password =
        contrasenaInput.value;

    const longitudValida =
        password.length >= 8;

    const tieneLetra =
        /[A-Za-z]/.test(password);

    const tieneNumero =
        /[0-9]/.test(password);

    const especiales =
        password.match(
            /[^A-Za-z0-9]/g
        ) || [];

    const tieneDosEspeciales =
        especiales.length >= 2;

    if (
        !longitudValida ||
        !tieneLetra ||
        !tieneNumero ||
        !tieneDosEspeciales
    )
    {
        contrasenaInput.setCustomValidity(
            "La contraseña debe tener mínimo 8 caracteres, letras, números y al menos dos caracteres especiales"
        );

        contrasenaInput.reportValidity();

        return;
    }


    // CREATE USER

    const newUser = new User(

        nombreInput.value,

        apellidosInput.value,

        direccionInput.value,

        poblacionInput.value,

        codigoPostalInput.value,

        telefonoInput.value,

        correoInput.value,

        usuarioInput.value,

        password
    );

    agregarUsuario(newUser);

    window.location.href = "LogIn.html";
}

function deleteAllUsers()
{
    localStorage.clear();
}
