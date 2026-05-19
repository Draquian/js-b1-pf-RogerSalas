window.onload = function ()
{
    const isLogged =
        sessionStorage.getItem("isLogged");

    // If user is NOT logged
    if (isLogged !== "true")
    {
        window.location.href = "LogIn.html";
    }
};