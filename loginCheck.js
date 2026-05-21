window.onload = function ()
{
    const isLogged = sessionStorage.getItem("isLogged");

    // If user is NOT logged
    if (isLogged !== "true")
    {
        window.location.href = "LogIn.html";
    }
};

function LogOut()
{
    sessionStorage.removeItem("isLogged");
    sessionStorage.removeItem("user");

    window.location.href = "Login.html";
}