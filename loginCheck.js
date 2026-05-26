window.onload = function ()
{
    check();
};

function check()
{
    const isLogged = sessionStorage.getItem("isLogged");

    if (isLogged !== "true")
        window.location.href = "LogIn.html";
}

function LogOut()
{
    sessionStorage.removeItem("isLogged");
    sessionStorage.removeItem("user");

    window.location.href = "Login.html";
}